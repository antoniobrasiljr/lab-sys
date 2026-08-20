"use client";

import { useEffect, useState } from "react";

type Coordinator = {
  name: string;
  text: string;
};

const coordinators: Coordinator[] = [
  {
    name: "Antonio Brasil Jr.",
    text: "Pensamento social brasileiro e latino-americano, teoria sociológica, história da sociologia, análise de redes e circulação das ciências sociais.",
  },
  {
    name: "Lucas Correia Carvalho",
    text: "Pensamento social brasileiro, teoria sociológica e ciências sociais computacionais, com interesse em redes, semânticas e comunicação científica.",
  },
];

function alternateOrder(source: Coordinator[]) {
  return Math.random() > 0.5 ? source : [...source].reverse();
}

export default function TeamConstellation() {
  const [orderedPeople, setOrderedPeople] = useState(coordinators);

  useEffect(() => {
    setOrderedPeople(alternateOrder(coordinators));
  }, []);

  return (
    <div className="constellation">
      <div className="constellation-controls">
        <div className="participation-legend" aria-label="Modo de participação">
          <span className="legend-item legend-item--articulacao">
            <i aria-hidden="true" />coordenação compartilhada
          </span>
        </div>
        <span className="constellation-visit-note">ordem alternada a cada visita</span>
      </div>

      <div className="people-grid people-grid--constellation people-grid--coordination is-ready">
        {orderedPeople.map((person) => (
          <article className="person-card person-card--articulacao" key={person.name}>
            <span className="participation-label">coordenação</span>
            <h3>{person.name}</h3>
            <p>{person.text}</p>
          </article>
        ))}
      </div>

      <p className="articulation-note">
        <span>coordenação como função</span>
        A coordenação é exercida como cuidado compartilhado das condições de pesquisa, escuta e
        conexão. Ela sustenta a heterarquia do laboratório sem se converter em centro permanente.
      </p>
    </div>
  );
}
