const axes = [
  {
    number: "01",
    title: "sistemas",
    text: "Comunicações, organizações, campos científicos, arquivos, plataformas, redes, algoritmos e dispositivos técnicos como formas plurais de observação.",
    signal: "comunicação / operação",
  },
  {
    number: "02",
    title: "semânticas",
    text: "Conceitos, categorias, controvérsias, indicadores, palavras-chave e autodescrições analisados como condensações históricas de sentido.",
    signal: "distinção / sentido",
  },
  {
    number: "03",
    title: "digitalização",
    text: "Transformações nas condições de registro, circulação, busca, cálculo, comparação, participação, decisão e visibilidade.",
    signal: "infraestrutura / escala",
  },
];

const observationZones = [
  {
    code: "ARQ",
    title: "História e arquivos das ciências sociais",
    text: "Corpora, trajetórias intelectuais, citações, cânones, recepções e arquivos digitais para observar autodescrições do pensamento social.",
  },
  {
    code: "SEM",
    title: "Semânticas e autodescrições",
    text: "Reconstrução de distinções, categorias, diagnósticos e estabilizações semânticas em escalas históricas e contemporâneas.",
  },
  {
    code: "ALG",
    title: "Plataformas e comunicação algorítmica",
    text: "Enciclopédias online, debates digitais, mecanismos de recomendação, inteligência artificial e comunicação artificial.",
  },
  {
    code: "MET",
    title: "Métodos digitais e visualização",
    text: "Bibliometria, redes, coocorrência semântica, simulação, visualização de dados e experimentação computacional.",
  },
];

const methods = [
  "teoria dos sistemas sociais",
  "análise semântica",
  "bibliometria",
  "análise de redes",
  "reconstrução histórica",
  "estudos de plataformas",
  "experimentação computacional",
];

const researchLines = [
  {
    code: "CIR",
    title: "Circuitos de comunicação",
    subtitle: "sociologia das comunicações científicas",
    text: "Investiga os circuitos públicos e especializados nos quais as comunicações científicas são produzidas, selecionadas e rearticuladas. Combina cientometria, história e sociologia para analisar assimetrias de centro e periferia, gênero e prestígio, bem como processos de reconhecimento e canonização.",
    signal: "circulação / autoridade",
  },
  {
    code: "SEM",
    title: "Semânticas",
    subtitle: "sentidos, formas e arquivos",
    text: "Investiga como a sociedade produz, estabiliza e transforma sentidos no pensamento social, nas formas artísticas e nos arquivos, reconstruindo conceitos, distinções e autodescrições em perspectiva histórica.",
    signal: "distinção / memória",
  },
  {
    code: "DIG",
    title: "Digitalização e redes",
    subtitle: "comunicação e infraestruturas digitais",
    text: "Investiga como redes, plataformas e infraestruturas digitais reorganizam a comunicação, a visibilidade e a formação de relações sociais, combinando modelagem de redes e estudos da comunicação digital.",
    signal: "conexão / infraestrutura",
  },
  {
    code: "SIM",
    title: "Sociedades artificiais e simulações",
    subtitle: "experimentação computacional",
    text: "Desenvolve sociedades artificiais e protótipos computacionais para experimentar como comunicações, estruturas e formas de diferenciação social podem emergir, estabilizar-se e transformar-se.",
    signal: "emergência / variação",
  },
];

type Person = {
  code: string;
  name: string;
  text: string;
  lines: string[];
};

const coordination: Person[] = [
  {
    code: "C01",
    name: "Antonio Brasil Jr.",
    text: "Pensamento social brasileiro e latino-americano, teoria sociológica, história da sociologia, análise de redes e circulação das ciências sociais.",
    lines: ["CIR", "SEM", "DIG"],
  },
  {
    code: "C02",
    name: "Lucas Correia Carvalho",
    text: "Pensamento social brasileiro, teoria sociológica e ciências sociais computacionais, com interesse em redes, semânticas e comunicação científica.",
    lines: ["CIR", "SEM", "DIG"],
  },
];

const associated: Person[] = [
  {
    code: "A01",
    name: "Sergio Pignuoli Ocampo",
    text: "Teoria sociológica comparada, teoria dos sistemas sociais, teoria da comunicação e modelos de interpretação sociológica para objetos emergentes.",
    lines: ["SEM", "SIM"],
  },
  {
    code: "A02",
    name: "Liliana Ramírez Ruiz",
    text: "Comunicação científica, redes de colaboração e assimetrias de gênero na ciência, com atenção às dinâmicas de reprodução da exclusão científica.",
    lines: ["CIR", "SIM"],
  },
  {
    code: "A03",
    name: "Gastón Becerra",
    text: "Sistemas sociais e complexos, epistemologia, big data, inteligência artificial, ciências sociais computacionais e ferramentas abertas de pesquisa.",
    lines: ["DIG", "SIM", "SEM"],
  },
  {
    code: "A04",
    name: "Juan Pedro Blois",
    text: "História da sociologia, sociologia do conhecimento e das profissões e formas de institucionalização das ciências sociais na América Latina.",
    lines: ["CIR", "SEM"],
  },
  {
    code: "A05",
    name: "Ricardo Augusto Galdino Maciel",
    text: "Presença pública das ciências sociais, circulação na imprensa e relações entre intelectuais, meios de comunicação e debate público.",
    lines: ["CIR", "SEM"],
  },
  {
    code: "A06",
    name: "Matheus de Carvalho Barros",
    text: "Pensamento social, marxismo latino-americano, circulação intelectual, sociologia das comunicações científicas e humanidades digitais.",
    lines: ["CIR", "SEM", "DIG"],
  },
  {
    code: "A07",
    name: "Anthony Rodrigues",
    text: "Cinema e audiovisual negro brasileiro, formas artísticas, mobilização coletiva, circulação cultural e transformação das imagens.",
    lines: ["SEM", "CIR"],
  },
  {
    code: "A08",
    name: "Francisco W. Kerche",
    text: "Sociologia digital, algoritmos, plataformas, redes sociais, comunicação política e desigualdades produzidas por sistemas de inteligência artificial.",
    lines: ["DIG", "CIR", "SIM"],
  },
];

const researchersInTraining: Person[] = [
  {
    code: "F01",
    name: "Hermann da Silveira Zimmerle",
    text: "Violência, poder local e comunicação política na Baixada Fluminense, além de trabalho, plataformas e precarização.",
    lines: ["CIR", "DIG"],
  },
  {
    code: "F02",
    name: "Nathalia Ronchete Borges Cerreia",
    text: "Sociologia política, movimentos sociais, antifascismo, memória e relações entre futebol, comunicação digital e política.",
    lines: ["DIG", "SEM"],
  },
];

function PersonCard({ person }: { person: Person }) {
  return (
    <article className="person-card">
      <span className="person-code">{person.code}</span>
      <h3>{person.name}</h3>
      <p>{person.text}</p>
      <div className="person-lines" aria-label={`Linhas de pesquisa: ${person.lines.join(", ")}`}>
        {person.lines.map((line) => <span key={line}>{line}</span>)}
      </div>
    </article>
  );
}

function Mark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={compact ? "brand-lockup brand-lockup--compact" : "brand-lockup"} aria-label="lab ponto sys — sistemas, semânticas, digitalização">
      <span className="form-box" aria-hidden="true">
        <span className="wordmark">
          <span>lab</span><b>.</b><span>sys</span>
        </span>
      </span>
      <span className="brand-signature">
        {compact ? "[ s / s / d ]" : "[ sistemas / semânticas / digitalização ]"}
      </span>
    </span>
  );
}

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a href="#top" className="brand-link" aria-label="lab.sys — início">
          <Mark compact />
        </a>
        <nav aria-label="Navegação principal">
          <a href="#principio">princípio</a>
          <a href="#eixos">eixos</a>
          <a href="#linhas">linhas</a>
          <a href="#equipe">equipe</a>
        </nav>
        <span className="header-status"><i /> laboratório em formação</span>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-meta">
            <span>laboratório de pesquisa</span>
            <span>[ s / s / d ]</span>
          </div>
          <div className="hero-content">
            <div className="hero-brand"><Mark /></div>
            <h1 id="hero-title">
              observar <em>observações</em>,<br /> mapear distinções,<br /> reconstruir semânticas.
            </h1>
          </div>
          <div className="hero-footer">
            <p>
              O lab.sys investiga como a sociedade observa a si mesma por meio de sistemas,
              semânticas e infraestruturas digitais.
            </p>
            <a href="#principio" className="scroll-link">
              entrar no campo <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>

        <section id="principio" className="principle section-shell">
          <div className="section-index">
            <span>00</span>
            <span>princípio</span>
          </div>
          <div className="principle-copy">
            <p>
              A sociedade não se deixa observar a partir de um único ponto. Ela se descreve
              por meio de múltiplos sistemas, linguagens, arquivos, plataformas, indicadores,
              controvérsias, algoritmos e formas de conhecimento.
            </p>
            <p>
              Cada instância observa por distinções próprias. Nosso trabalho é observar essas
              observações: identificar suas formas, reconstruir suas seleções, mapear suas
              estabilizações e analisar seus efeitos.
            </p>
          </div>
          <div className="distinction" aria-hidden="true">
            <span>observador</span>
            <span>observação</span>
          </div>
        </section>

        <section id="eixos" className="axes section-shell">
          <div className="section-heading">
            <div className="section-index"><span>01—03</span><span>eixos</span></div>
            <p>Três campos conectados por uma mesma operação: tornar visíveis as formas pelas quais a sociedade produz sentido.</p>
          </div>
          <div className="axis-grid">
            {axes.map((axis) => (
              <article key={axis.number} className="axis-card">
                <div className="card-top"><span>{axis.number}</span><span>↳</span></div>
                <h2>{axis.title}</h2>
                <p>{axis.text}</p>
                <span className="card-signal">{axis.signal}</span>
              </article>
            ))}
          </div>
        </section>

        <section id="observacoes" className="observations section-shell">
          <div className="section-heading section-heading--light">
            <div className="section-index"><span>04—07</span><span>zonas de observação</span></div>
            <h2>Onde a pesquisa<br />ganha forma.</h2>
          </div>
          <div className="observation-list">
            {observationZones.map((zone, index) => (
              <article key={zone.code}>
                <span className="zone-number">0{index + 4}</span>
                <span className="zone-code">{zone.code}</span>
                <div><h3>{zone.title}</h3><p>{zone.text}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section id="metodo" className="method section-shell">
          <div className="section-heading">
            <div className="section-index"><span>08</span><span>método</span></div>
            <h2>Teoria não é substituída por técnica.</h2>
          </div>
          <div className="method-body">
            <p>
              Construímos instrumentos conceituais e metodológicos para observar a sociedade em
              condições de alta complexidade comunicativa.
            </p>
            <ol>
              {methods.map((method, index) => (
                <li key={method}><span>{String(index + 1).padStart(2, "0")}</span>{method}</li>
              ))}
            </ol>
          </div>
        </section>

        <section id="linhas" className="research-lines section-shell">
          <div className="lines-intro">
            <div className="section-index"><span>09</span><span>linhas de pesquisa</span></div>
            <div className="lines-copy">
              <p className="eyebrow">diferenciações internas</p>
              <h2>Quatro linhas.<br />Um ambiente de observação recíproca.</h2>
              <p>
                CIR, SEM, DIG e SIM desenvolvem perguntas e formas próprias de observação,
                ao mesmo tempo que constituem ambiente umas para as outras. Seus objetos,
                métodos e problemas se cruzam e se irritam, fazendo emergir novas descrições.
              </p>
            </div>
          </div>
          <div className="lines-field">
            <div className="lines-cross" aria-hidden="true"><i /><i /><i /><i /></div>
            <div className="lines-grid">
              {researchLines.map((line, index) => (
                <article className={`line-card line-card--${line.code.toLowerCase()}`} key={line.code}>
                  <div className="line-meta"><span>0{index + 1}</span><b>{line.code}</b></div>
                  <div>
                    <h3>{line.title}</h3>
                    <p className="line-subtitle">{line.subtitle}</p>
                  </div>
                  <p className="line-description">{line.text}</p>
                  <span className="line-signal">{line.signal}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="equipe" className="team section-shell">
          <div className="team-intro">
            <div className="section-index"><span>10</span><span>equipe</span></div>
            <div>
              <p className="eyebrow">heterarquia em prática</p>
              <h2>Pesquisa se faz<br />entre diferenças.</h2>
            </div>
            <div className="team-principle">
              <p>
                O lab.sys organiza-se de forma heterárquica. A coordenação compartilhada é uma
                função de articulação, cuidado e sustentação institucional — não uma posição de
                comando sobre a pesquisa.
              </p>
              <p>
                As agendas são construídas coletivamente. Cada integrante preserva autonomia para
                formular problemas, estabelecer colaborações e transitar entre as linhas.
              </p>
            </div>
          </div>

          <div className="team-group">
            <div className="team-group-heading">
              <h3>Coordenação compartilhada</h3>
              <span>função de articulação · 02</span>
            </div>
            <div className="people-grid people-grid--coordination">
              {coordination.map((person) => <PersonCard key={person.code} person={person} />)}
            </div>
          </div>

          <div className="team-group">
            <div className="team-group-heading">
              <h3>Pesquisadores associados</h3>
              <span>colaboração · 08</span>
            </div>
            <div className="people-grid">
              {associated.map((person) => <PersonCard key={person.code} person={person} />)}
            </div>
          </div>

          <div className="team-group">
            <div className="team-group-heading">
              <h3>Pesquisadores em formação</h3>
              <span>percursos de pesquisa · 02</span>
            </div>
            <div className="people-grid people-grid--training">
              {researchersInTraining.map((person) => <PersonCard key={person.code} person={person} />)}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-mark"><Mark /></div>
        <p>do pensamento social aos algoritmos,<br />das citações aos arquivos,<br />da Wikipedia aos debates digitais.</p>
        <div className="footer-meta"><span>lab.sys © 2026</span><a href="#top">voltar ao topo ↑</a></div>
      </footer>
    </>
  );
}
