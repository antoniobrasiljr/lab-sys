"use client";

import { useMemo, useState, type CSSProperties } from "react";

const actors = Array.from({ length: 10 }, (_, index) => String(index + 1).padStart(2, "0"));

type Outcome =
  | "not-reached"
  | "not-understood"
  | "no-follow-up"
  | "negative-response"
  | "positive-response";

type Link = {
  alter: number;
  ego: number;
  weight: number;
  returns: number;
  positive: number;
  negative: number;
};

type SimulationState = {
  iterations: number;
  reached: number;
  understood: number;
  responses: number;
  outcomes: Record<Outcome, number>;
  links: Link[];
  last: { alter: number; ego: number; outcome: Outcome } | null;
};

const outcomeMeta: Record<Outcome, { label: string; short: string }> = {
  "not-reached": { label: "a oferta não chegou", short: "não chegou" },
  "not-understood": { label: "Ego não a reconheceu como oferta", short: "não compreendida" },
  "no-follow-up": { label: "Ego compreendeu, mas não deu sequência", short: "sem sequência" },
  "negative-response": { label: "Ego deu uma resposta negativa", short: "resposta negativa" },
  "positive-response": { label: "Ego deu uma resposta positiva", short: "resposta positiva" },
};

const outcomeOrder: Outcome[] = [
  "not-reached",
  "not-understood",
  "no-follow-up",
  "negative-response",
  "positive-response",
];

function createLinks(): Link[] {
  return actors.flatMap((_, alter) =>
    actors
      .map((__, ego) => ({ alter, ego, weight: 1, returns: 0, positive: 0, negative: 0 }))
      .filter((link) => link.alter !== link.ego),
  );
}

function initialState(): SimulationState {
  return {
    iterations: 0,
    reached: 0,
    understood: 0,
    responses: 0,
    outcomes: {
      "not-reached": 0,
      "not-understood": 0,
      "no-follow-up": 0,
      "negative-response": 0,
      "positive-response": 0,
    },
    links: createLinks(),
    last: null,
  };
}

function weightedLink(links: Link[]) {
  const totalWeight = links.reduce((sum, link) => sum + Math.pow(link.weight, 1.28), 0);
  let cursor = Math.random() * totalWeight;

  for (let index = 0; index < links.length; index += 1) {
    cursor -= Math.pow(links[index].weight, 1.28);
    if (cursor <= 0) return index;
  }

  return links.length - 1;
}

function runIterations(source: SimulationState, amount: number): SimulationState {
  const next: SimulationState = {
    ...source,
    outcomes: { ...source.outcomes },
    links: source.links.map((link) => ({ ...link })),
  };

  for (let iteration = 0; iteration < amount; iteration += 1) {
    const linkIndex = weightedLink(next.links);
    const link = next.links[linkIndex];
    const stabilization = 1 - Math.exp(-link.returns / 3.2);
    const reachProbability = 0.58 + stabilization * 0.28;
    const understandingProbability = 0.52 + stabilization * 0.3;
    const responseProbability = 0.44 + stabilization * 0.34;

    next.iterations += 1;

    let outcome: Outcome;

    if (Math.random() >= reachProbability) {
      outcome = "not-reached";
    } else {
      next.reached += 1;

      if (Math.random() >= understandingProbability) {
        outcome = "not-understood";
      } else {
        next.understood += 1;

        if (Math.random() >= responseProbability) {
          outcome = "no-follow-up";
          link.weight += 0.12;
        } else {
          next.responses += 1;
          link.returns += 1;
          link.weight += 2.6;

          const positiveProbability = Math.max(
            0.35,
            Math.min(0.68, 0.52 + (link.positive - link.negative) * 0.018),
          );
          if (Math.random() < positiveProbability) {
            outcome = "positive-response";
            link.positive += 1;
          } else {
            outcome = "negative-response";
            link.negative += 1;
          }
        }
      }
    }

    next.outcomes[outcome] += 1;
    next.last = { alter: link.alter, ego: link.ego, outcome };
  }

  return next;
}

function percentage(value: number, total: number) {
  return total === 0 ? "—" : `${Math.round((value / total) * 100)}%`;
}

function stageState(outcome: Outcome | undefined, stage: number) {
  if (!outcome) return "pending";
  const failedStage: Record<Outcome, number | null> = {
    "not-reached": 0,
    "not-understood": 1,
    "no-follow-up": 2,
    "negative-response": null,
    "positive-response": null,
  };
  const failure = failedStage[outcome];
  if (failure === null || stage < failure) return "pass";
  if (stage === failure) return "fail";
  return "pending";
}

export default function CommunicationSimulation() {
  const [simulation, setSimulation] = useState<SimulationState>(initialState);

  const matrix = useMemo(() => {
    const byPair = new Map(simulation.links.map((link) => [`${link.alter}-${link.ego}`, link]));
    const maxReturns = Math.max(1, ...simulation.links.map((link) => link.returns));
    return { byPair, maxReturns };
  }, [simulation.links]);

  const concentration = useMemo(() => {
    if (simulation.responses < 10) return null;
    const topReturns = [...simulation.links]
      .sort((a, b) => b.returns - a.returns)
      .slice(0, 5)
      .reduce((sum, link) => sum + link.returns, 0);
    return Math.round((topReturns / simulation.responses) * 100);
  }, [simulation.links, simulation.responses]);

  const act = (amount: number) => setSimulation((current) => runIterations(current, amount));

  return (
    <div className="simulation-lab">
      <div className="simulation-controls">
        <div>
          <span className="simulation-counter">{simulation.iterations}</span>
          <span>comunicações tentadas</span>
        </div>
        <div className="simulation-actions" aria-label="Controles da simulação">
          <button type="button" className="simulation-button simulation-button--primary" onClick={() => act(1)}>
            1 comunicação
          </button>
          <button type="button" className="simulation-button" onClick={() => act(25)}>
            + 25
          </button>
          <button type="button" className="simulation-button" onClick={() => act(100)}>
            + 100
          </button>
          <button type="button" className="simulation-reset" onClick={() => setSimulation(initialState())}>
            recomeçar ↺
          </button>
        </div>
      </div>

      <div className="simulation-stages" aria-label="As três improbabilidades da comunicação">
        {[
          ["01", "alcance", "a oferta chega a Ego", simulation.reached, simulation.iterations],
          ["02", "compreensão", "Ego reconhece a oferta", simulation.understood, simulation.reached],
          ["03", "retorno", "Ego dá sequência", simulation.responses, simulation.understood],
        ].map(([number, title, text, value, total], index) => (
          <article className={`simulation-stage is-${stageState(simulation.last?.outcome, index)}`} key={String(title)}>
            <span>{String(number)}</span>
            <div><strong>{String(title)}</strong><small>{String(text)}</small></div>
            <b>{percentage(Number(value), Number(total))}</b>
          </article>
        ))}
      </div>

      <div className="simulation-field">
        <div className="simulation-matrix-wrap">
          <div className="matrix-heading">
            <div>
              <span>estrutura emergente</span>
              <h3>Matriz Alter → Ego</h3>
            </div>
            <p>
              {concentration === null
                ? "ainda não há retornos suficientes para observar concentração"
                : `as 5 relações mais recorrentes concentram ${concentration}% dos retornos`}
            </p>
          </div>

          <div className="communication-matrix" role="img" aria-label="Matriz da intensidade das relações entre dez participantes">
            <span className="matrix-corner">A/E</span>
            {actors.map((actor) => <span className="matrix-column-label" key={`column-${actor}`}>{actor}</span>)}
            {actors.flatMap((actor, alter) => [
              <span className="matrix-row-label" key={`row-${actor}`}>{actor}</span>,
              ...actors.map((_, ego) => {
                if (alter === ego) return <span className="matrix-cell matrix-cell--self" key={`${alter}-${ego}`}>×</span>;
                const link = matrix.byPair.get(`${alter}-${ego}`)!;
                const intensity = link.returns === 0 ? 0 : 0.18 + (link.returns / matrix.maxReturns) * 0.82;
                const tone = link.positive === link.negative
                  ? "var(--amber)"
                  : link.positive > link.negative
                    ? "var(--cyan)"
                    : "var(--coral)";
                const style = { "--matrix-intensity": intensity, "--matrix-tone": tone } as CSSProperties;
                return (
                  <span
                    className="matrix-cell"
                    key={`${alter}-${ego}`}
                    style={style}
                    aria-label={`Alter ${actors[alter]} para Ego ${actors[ego]}: ${link.returns} retornos`}
                  />
                );
              }),
            ])}
          </div>

          <div className="matrix-legend" aria-label="Legenda da matriz">
            <span><i className="is-positive" />predomínio positivo</span>
            <span><i className="is-negative" />predomínio negativo</span>
            <span><i className="is-mixed" />equilíbrio</span>
          </div>
        </div>

        <div className="simulation-results">
          <div className="last-event" aria-live="polite">
            <span>último evento</span>
            {simulation.last ? (
              <>
                <strong>Alter {actors[simulation.last.alter]} → Ego {actors[simulation.last.ego]}</strong>
                <p>{outcomeMeta[simulation.last.outcome].label}.</p>
              </>
            ) : (
              <><strong>Alter → Ego</strong><p>Faça a primeira oferta para iniciar.</p></>
            )}
          </div>

          <div className="outcome-distribution">
            <span>distribuição dos resultados</span>
            <div className="outcome-bar" aria-label="Distribuição percentual dos resultados">
              {outcomeOrder.map((outcome) => (
                <i
                  className={`outcome-segment outcome-segment--${outcome}`}
                  key={outcome}
                  style={{ flexGrow: simulation.outcomes[outcome] }}
                />
              ))}
            </div>
            <ol>
              {outcomeOrder.map((outcome) => (
                <li key={outcome}>
                  <i className={`outcome-key outcome-key--${outcome}`} />
                  <span>{outcomeMeta[outcome].short}</span>
                  <b>{simulation.outcomes[outcome]}</b>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      <p className="simulation-rule">
        <span>regra do experimento</span>
        No início, todas as relações têm a mesma chance de serem escolhidas. Cada resposta devolvida — positiva ou negativa — reforça um canal e aumenta a probabilidade de novas ofertas circularem por ele. A recusa também comunica.
      </p>
    </div>
  );
}
