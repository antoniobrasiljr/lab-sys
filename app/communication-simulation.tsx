"use client";

import { useMemo, useState } from "react";

const N = 10;
const labels = Array.from({ length: N }, (_, index) => String(index + 1).padStart(2, "0"));

const outcomes = [
  { key: "not-reached", label: "a oferta não chegou", color: "var(--muted)" },
  { key: "not-recognized", label: "Ego não a reconheceu como oferta", color: "var(--amber)" },
  { key: "no-follow", label: "Ego compreendeu, mas não deu sequência", color: "var(--coral)" },
  { key: "negative", label: "resposta negativa", color: "var(--blue)" },
  { key: "positive", label: "resposta positiva", color: "var(--cyan)" },
] as const;

type OutcomeKey = (typeof outcomes)[number]["key"];
type Attempt = { from: number; to: number; outcome: OutcomeKey };
type Counts = Record<OutcomeKey, number>;

const emptyCounts = (): Counts => ({
  "not-reached": 0,
  "not-recognized": 0,
  "no-follow": 0,
  negative: 0,
  positive: 0,
});

const emptyWeights = () =>
  Array.from({ length: N }, (_, row) =>
    Array.from({ length: N }, (_, column) => (row === column ? 0 : 1)),
  );

function weightedTarget(weights: number[], from: number) {
  const total = weights.reduce((sum, weight) => sum + weight, 0);
  let draw = Math.random() * total;
  for (let index = 0; index < weights.length; index += 1) {
    if (index === from) continue;
    draw -= weights[index];
    if (draw <= 0) return index;
  }
  return (from + 1) % N;
}

function simulateOne(weights: number[][]): Attempt {
  const from = Math.floor(Math.random() * N);
  const to = weightedTarget(weights[from], from);
  const drawReach = Math.random();
  const drawUnderstand = Math.random();
  const drawReturn = Math.random();

  if (drawReach > 0.76) return { from, to, outcome: "not-reached" };
  if (drawUnderstand > 0.68) return { from, to, outcome: "not-recognized" };
  if (drawReturn > 0.58) return { from, to, outcome: "no-follow" };
  return { from, to, outcome: Math.random() < 0.52 ? "positive" : "negative" };
}

export default function CommunicationSimulation() {
  const [counts, setCounts] = useState<Counts>(emptyCounts);
  const [weights, setWeights] = useState<number[][]>(emptyWeights);
  const [last, setLast] = useState<Attempt | null>(null);
  const total = Object.values(counts).reduce((sum, value) => sum + value, 0);

  const run = (amount: number) => {
    const nextWeights = weights.map((row) => [...row]);
    const nextCounts = { ...counts };
    let latest: Attempt | null = null;

    for (let index = 0; index < amount; index += 1) {
      latest = simulateOne(nextWeights);
      nextCounts[latest.outcome] += 1;
      if (latest.outcome === "positive" || latest.outcome === "negative") {
        const reinforcement = latest.outcome === "positive" ? 1.25 : 0.65;
        nextWeights[latest.from][latest.to] += reinforcement;
        nextWeights[latest.to][latest.from] += reinforcement * 0.45;
      }
    }

    setWeights(nextWeights);
    setCounts(nextCounts);
    setLast(latest);
  };

  const reset = () => {
    setCounts(emptyCounts());
    setWeights(emptyWeights());
    setLast(null);
  };

  const stages = useMemo(() => {
    const reached = total - counts["not-reached"];
    const understood = reached - counts["not-recognized"];
    const returned = counts.negative + counts.positive;
    const pct = (value: number) => (total ? Math.round((value / total) * 100) : 0);
    return [
      { label: "alcance", detail: "a oferta chega a Ego", value: pct(reached) },
      { label: "compreensão", detail: "Ego reconhece a oferta", value: pct(understood) },
      { label: "retorno", detail: "Ego dá sequência", value: pct(returned) },
    ];
  }, [counts, total]);

  const maxWeight = Math.max(1, ...weights.flat());
  const outcomeLabel = last ? outcomes.find((item) => item.key === last.outcome)?.label : null;

  return (
    <div className="simulation-console">
      <div className="simulation-controls" aria-label="Controles da simulação">
        <span>{total.toLocaleString("pt-BR")} tentativas</span>
        <div>
          <button type="button" onClick={() => run(1)}>1 comunicação</button>
          <button type="button" onClick={() => run(25)}>+ 25</button>
          <button type="button" onClick={() => run(100)}>+ 100</button>
          <button type="button" className="reset-button" onClick={reset}>recomeçar</button>
        </div>
      </div>

      <div className="participants" aria-label="Dez participantes da simulação">
        {labels.map((label, index) => {
          const active = last && (last.from === index || last.to === index);
          return <span className={active ? "is-active" : ""} key={label}>{label}</span>;
        })}
      </div>

      <div className="simulation-readout" aria-live="polite">
        <div className="stage-grid">
          {stages.map((stage) => (
            <article key={stage.label}>
              <span>{stage.label}</span>
              <strong>{stage.value}%</strong>
              <small>{stage.detail}</small>
              <i style={{ width: `${stage.value}%` }} aria-hidden="true" />
            </article>
          ))}
        </div>
        <div className="last-path">
          <span>último percurso</span>
          {last ? (
            <p><b>{labels[last.from]}</b><i aria-hidden="true">→</i><b>{labels[last.to]}</b><em>{outcomeLabel}</em></p>
          ) : <p className="empty-path">selecione uma comunicação para iniciar</p>}
        </div>
      </div>

      <div className="simulation-detail">
        <div className="outcome-distribution">
          <span className="panel-label">distribuição dos resultados</span>
          {outcomes.map((outcome) => {
            const percentage = total ? (counts[outcome.key] / total) * 100 : 0;
            return (
              <div className="outcome-row" key={outcome.key}>
                <span>{outcome.label}</span><b>{counts[outcome.key]}</b>
                <i><u style={{ width: `${percentage}%`, background: outcome.color }} /></i>
              </div>
            );
          })}
        </div>

        <div className="relation-panel">
          <span className="panel-label">matriz das relações · alter → ego</span>
          <div className="relation-matrix" role="img" aria-label="Matriz de intensidade das relações entre os dez participantes">
            <span />{labels.map((label) => <b key={`col-${label}`}>{label}</b>)}
            {weights.map((row, rowIndex) => (
              <div className="matrix-row" key={`row-${labels[rowIndex]}`}>
                <b>{labels[rowIndex]}</b>
                {row.map((weight, columnIndex) => (
                  <i
                    key={`${rowIndex}-${columnIndex}`}
                    className={rowIndex === columnIndex ? "is-self" : ""}
                    style={{ opacity: rowIndex === columnIndex ? 0.08 : 0.16 + (weight / maxWeight) * 0.84 }}
                    title={`${labels[rowIndex]} → ${labels[columnIndex]}: força ${weight.toFixed(2)}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
