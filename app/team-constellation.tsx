type Participation = "articulacao" | "associacao" | "formacao";

type Person = {
  name: string;
  text: string;
  lines: string[];
  participation: Participation;
};

const participationLabels: Record<Participation, string> = {
  articulacao: "articulação",
  associacao: "associação",
  formacao: "em formação",
};

const people: Person[] = [
  {
    name: "Anthony Rodrigues",
    text: "Cinema e audiovisual negro brasileiro, formas artísticas, mobilização coletiva, circulação cultural e transformação das imagens.",
    lines: ["SEM", "CIR"],
    participation: "associacao",
  },
  {
    name: "Antonio Brasil Jr.",
    text: "Pensamento social brasileiro e latino-americano, teoria sociológica, história da sociologia, análise de redes e circulação das ciências sociais.",
    lines: ["CIR", "SEM", "DIG"],
    participation: "articulacao",
  },
  {
    name: "Francisco W. Kerche",
    text: "Sociologia digital, algoritmos, plataformas, redes sociais, comunicação política e desigualdades produzidas por sistemas de inteligência artificial.",
    lines: ["DIG", "CIR", "SIM"],
    participation: "associacao",
  },
  {
    name: "Gastón Becerra",
    text: "Sistemas sociais e complexos, epistemologia, big data, inteligência artificial, ciências sociais computacionais e ferramentas abertas de pesquisa.",
    lines: ["DIG", "SIM", "SEM"],
    participation: "associacao",
  },
  {
    name: "Hermann da Silveira Zimmerle",
    text: "Violência, poder local e comunicação política na Baixada Fluminense, além de trabalho, plataformas e precarização.",
    lines: ["CIR", "DIG"],
    participation: "formacao",
  },
  {
    name: "Juan Pedro Blois",
    text: "História da sociologia, sociologia do conhecimento e das profissões e formas de institucionalização das ciências sociais na América Latina.",
    lines: ["CIR", "SEM"],
    participation: "associacao",
  },
  {
    name: "Liliana Ramírez Ruiz",
    text: "Comunicação científica, redes de colaboração e assimetrias de gênero na ciência, com atenção às dinâmicas de reprodução da exclusão científica.",
    lines: ["CIR", "SIM"],
    participation: "associacao",
  },
  {
    name: "Lucas Correia Carvalho",
    text: "Pensamento social brasileiro, teoria sociológica e ciências sociais computacionais, com interesse em redes, semânticas e comunicação científica.",
    lines: ["CIR", "SEM", "DIG"],
    participation: "articulacao",
  },
  {
    name: "Matheus de Carvalho Barros",
    text: "Pensamento social, marxismo latino-americano, circulação intelectual, sociologia das comunicações científicas e humanidades digitais.",
    lines: ["CIR", "SEM", "DIG"],
    participation: "associacao",
  },
  {
    name: "Nathalia Ronchete Borges Cerreia",
    text: "Sociologia política, movimentos sociais, antifascismo, memória e relações entre futebol, comunicação digital e política.",
    lines: ["DIG", "SEM"],
    participation: "formacao",
  },
  {
    name: "Ricardo Augusto Galdino Maciel",
    text: "Presença pública das ciências sociais, circulação na imprensa e relações entre intelectuais, meios de comunicação e debate público.",
    lines: ["CIR", "SEM"],
    participation: "associacao",
  },
  {
    name: "Sergio Pignuoli Ocampo",
    text: "Teoria sociológica comparada, teoria dos sistemas sociais, teoria da comunicação e modelos de interpretação sociológica para objetos emergentes.",
    lines: ["SEM", "SIM"],
    participation: "associacao",
  },
];

function shufflePeople(source: Person[]) {
  const shuffled = [...source];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }

  return shuffled;
}

export default function TeamConstellation() {
  const orderedPeople = shufflePeople(people);
  const shuffleToken = Math.random().toString(36).slice(2);

  return (
    <div className="constellation">
      <div className="constellation-controls">
        <div className="participation-legend" aria-label="Modos de participação">
          {(Object.keys(participationLabels) as Participation[]).map((participation) => (
            <span className={`legend-item legend-item--${participation}`} key={participation}>
              <i aria-hidden="true" />{participationLabels[participation]}
            </span>
          ))}
        </div>
        <form action="#equipe" method="get">
          <input type="hidden" name="constelacao" value={shuffleToken} />
          <button type="submit" className="shuffle-button">
            reorganizar constelação <span aria-hidden="true">↻</span>
          </button>
        </form>
      </div>

      <div className="people-grid people-grid--constellation is-ready">
        {orderedPeople.map((person) => (
          <article className={`person-card person-card--${person.participation}`} key={person.name}>
            <span className="participation-label">{participationLabels[person.participation]}</span>
            <h3>{person.name}</h3>
            <p>{person.text}</p>
            <div className="person-lines" aria-label={`Linhas de pesquisa: ${person.lines.join(", ")}`}>
              {person.lines.map((line) => <span key={line}>{line}</span>)}
            </div>
          </article>
        ))}
      </div>

      <p className="articulation-note">
        <span>articulação institucional</span>
        Antonio Brasil Jr. e Lucas Correia Carvalho exercem uma função compartilhada de cuidado,
        mediação e sustentação das condições coletivas de pesquisa.
      </p>
    </div>
  );
}
