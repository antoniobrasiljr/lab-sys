import TeamConstellation from "./team-constellation";
import CommunicationSimulation from "./communication-simulation";

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
    title: "Arquivos e repertórios",
    text: "Documentos, obras, trajetórias intelectuais, formas artísticas e acervos digitais nos quais se inscrevem memórias e autodescrições da sociedade.",
  },
  {
    code: "CIR",
    title: "Publicações e circuitos",
    text: "Periódicos, livros, citações, cânones, imprensa e públicos especializados ou não especializados pelos quais o conhecimento circula.",
  },
  {
    code: "PLT",
    title: "Plataformas e interfaces",
    text: "Redes digitais, enciclopédias online, mecanismos de recomendação, infraestruturas e ordenamentos algorítmicos da visibilidade.",
  },
  {
    code: "MOD",
    title: "Modelos e ambientes experimentais",
    text: "Redes artificiais, simulações, protótipos computacionais e outros ambientes em que estruturas e comunicações podem ser experimentadas.",
  },
];

const methods = [
  {
    operation: "reconstruir",
    text: "semânticas, distinções, trajetórias e processos históricos",
  },
  {
    operation: "rastrear",
    text: "circulações, citações, controvérsias e assimetrias",
  },
  {
    operation: "modelar",
    text: "relações, redes, infraestruturas e formas de diferenciação",
  },
  {
    operation: "experimentar",
    text: "variações, emergências e comunicações em ambientes computacionais",
  },
];

const institutionalEnvironments = [
  { label: "UFRJ", href: "https://ufrj.br/" },
  { label: "UFF", href: "https://www.uff.br/" },
  { label: "PPGSA/UFRJ", href: "https://ppgsa.ifcs.ufrj.br/" },
  { label: "PPGS/UFF", href: "https://ppgs.uff.br/" },
  { label: "FAPERJ", href: "https://www.faperj.br/" },
  { label: "CNPq", href: "https://www.gov.br/cnpq/pt-br" },
  { label: "CAPES", href: "https://www.gov.br/capes/pt-br" },
];

const researchLines = [
  {
    code: "CIR",
    title: "Circuitos de comunicação",
    subtitle: "sociologia das comunicações científicas",
    text: "Investiga os circuitos públicos e especializados nos quais as comunicações científicas são produzidas, selecionadas e rearticuladas. Combina cientometria, história e sociologia para analisar assimetrias de centro e periferia, gênero e prestígio, bem como processos de reconhecimento e canonização.",
    signal: "circulação / autoridade",
    publications: [
      {
        title: "O impacto da sociologia: cultura de citações e modelos científicos",
        authors: "Antonio Brasil Jr. · Lucas Carvalho",
        year: "2020",
        href: "https://doi.org/10.20336/rbs.700",
        crosses: "DIG · SEM",
      },
      {
        title: "Parochialism and Its Meanings in the Latin American Social Sciences",
        authors: "Lucas Carvalho · Antonio Brasil Jr.",
        year: "2023",
        href: "https://doi.org/10.1525/gp.2023.88389",
        crosses: "DIG",
      },
      {
        title: "A Feminist Citation Burst?",
        authors: "Alejandra Josiowicz · Antonio Brasil Jr. · Lucas Carvalho",
        year: "2025",
        href: "https://doi.org/10.1590/2238-38752025v15211",
        crosses: "DIG · SEM",
      },
    ],
  },
  {
    code: "SEM",
    title: "Semânticas",
    subtitle: "sentidos, formas e arquivos",
    text: "Investiga como a sociedade produz, estabiliza e transforma sentidos no pensamento social, nas formas artísticas e nos arquivos, reconstruindo conceitos, distinções e autodescrições em perspectiva histórica.",
    signal: "distinção / memória",
    publications: [
      {
        title: "Passagens para a teoria sociológica: Florestan Fernandes e Gino Germani",
        authors: "Antonio Brasil Jr.",
        year: "2013",
        href: "https://biblioteca.clacso.edu.ar/clacso/se/20140311045526/PassagensParaTeoriaSociologica.pdf",
        crosses: "CIR",
      },
      {
        title: "As ideias como forças sociais: sobre uma agenda de pesquisa",
        authors: "Antonio Brasil Jr.",
        year: "2015",
        href: "https://doi.org/10.1590/2238-38752015v5210",
        crosses: "CIR",
      },
      {
        title: "A circulação internacional de Florestan Fernandes",
        authors: "Alejandro Blanco · Antonio Brasil Jr.",
        year: "2018",
        href: "https://doi.org/10.1590/2238-38752017v811",
        crosses: "CIR",
      },
    ],
  },
  {
    code: "DIG",
    title: "Digitalização e redes",
    subtitle: "comunicação e infraestruturas digitais",
    text: "Investiga como redes, plataformas e infraestruturas digitais reorganizam a comunicação, a visibilidade e a formação de relações sociais, combinando modelagem de redes e estudos da comunicação digital.",
    signal: "conexão / infraestrutura",
    publications: [
      {
        title: "Por dentro das Ciências Humanas: um mapeamento semântico da área via base SciELO-Brasil",
        authors: "Antonio Brasil Jr. · Lucas Carvalho",
        year: "2020",
        href: "https://doi.org/10.5944/rhd.vol.5.2020.27627",
        crosses: "SEM · CIR",
      },
      {
        title: "Mapeando a área de pensamento social no Brasil",
        authors: "Lucas Carvalho · Antonio Brasil Jr.",
        year: "2020",
        href: "https://doi.org/10.29397/reciis.v14i3.2121",
        crosses: "SEM · CIR",
      },
      {
        title: "Leituras em competição (à distância)",
        authors: "Antonio Brasil Jr. · Lucas Carvalho · Karim Helayel",
        year: "2021",
        href: "https://doi.org/10.11606/issn.2316-901X.v1i78p240-272",
        crosses: "SEM · CIR",
      },
    ],
  },
  {
    code: "SIM",
    title: "Comunicação artificial e simulações",
    subtitle: "modelos e experimentação computacional",
    text: "Investiga a comunicação artificial e desenvolve simulações e protótipos computacionais para experimentar como comunicações, estruturas e formas de diferenciação podem emergir, estabilizar-se e transformar-se. Sociedades artificiais constituem um subtipo desses ambientes de simulação.",
    signal: "emergência / variação",
    publications: [
      {
        title: "A sociedade contra o acaso: teoria de redes e a pandemia do novo coronavírus",
        authors: "Lucas Carvalho · Antonio Brasil Jr.",
        year: "2021",
        href: "https://doi.org/10.1590/2238-38752021v11esp4",
        crosses: "DIG",
      },
      {
        title: "A teoria dos sistemas sociais e os estudos sobre IA e algoritmos",
        authors: "Emerson Palmieri · Antonio Brasil Jr.",
        year: "2025",
        href: "https://doi.org/10.5354/0719-0527.2025.82295",
        crosses: "DIG · SEM",
      },
    ],
  },
];

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
          <a href="#simulacao">simulação</a>
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
            <div className="section-index"><span>04—07</span><span>corpora e arenas de observação</span></div>
            <h2>Onde<br />observamos.</h2>
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
            <h2>Teoria não é substituída pela técnica.</h2>
          </div>
          <div className="method-body">
            <p>
              Combinamos reconstrução histórica, análise semântica, cientometria, análise de redes
              e experimentação computacional. As técnicas funcionam como operações de observação.
            </p>
            <ol>
              {methods.map((method, index) => (
                <li key={method.operation}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div><strong>{method.operation}</strong><small>{method.text}</small></div>
                </li>
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
                  <div className="line-publications">
                    <span className="publications-label">publicações associadas</span>
                    <ol>
                      {line.publications.map((publication) => (
                        <li key={publication.href}>
                          <a href={publication.href} target="_blank" rel="noreferrer">
                            <span className="publication-year">{publication.year}</span>
                            <span className="publication-main">
                              <strong>{publication.title}</strong>
                              <small>{publication.authors}</small>
                            </span>
                            <span className="publication-crosses" aria-label={`cruzamentos: ${publication.crosses}`}>
                              {publication.crosses}
                            </span>
                            <span className="publication-arrow" aria-hidden="true">↗</span>
                          </a>
                        </li>
                      ))}
                    </ol>
                  </div>
                  <span className="line-signal">{line.signal}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="simulacao" className="simulation section-shell">
          <div className="simulation-intro">
            <div className="section-index"><span>10</span><span>experimento</span></div>
            <div>
              <p className="eyebrow">comunicação artificial e simulações</p>
              <h2>Como o improvável<br />ganha forma.</h2>
            </div>
            <p>
              Alter faz uma oferta a Ego. Ela precisa chegar, ser reconhecida como oferta e receber
              uma resposta. Experimente como retornos contingentes podem estabilizar expectativas
              e fazer emergir estruturas de comunicação.
            </p>
          </div>
          <CommunicationSimulation />
        </section>

        <section id="equipe" className="team section-shell">
          <div className="team-intro">
            <div className="section-index"><span>11</span><span>equipe</span></div>
            <div>
              <p className="eyebrow">heterarquia em prática</p>
              <h2>Pesquisa se faz<br />entre diferenças.</h2>
            </div>
            <div className="team-principle">
              <p>
                A equipe do lab.sys forma uma constelação heterárquica de trajetórias, problemas
                e métodos. A ordem dos nomes se reorganiza a cada visita, sem posições permanentes
                de precedência.
              </p>
              <p>
                As cores indicam diferentes modos de participação — articulação, associação e
                formação —, não níveis de autoridade.
              </p>
            </div>
          </div>
          <TeamConstellation />
        </section>
      </main>

      <footer>
        <div className="footer-ecology">
          <div className="footer-mark"><Mark /></div>
          <div className="institutional-environment">
            <span className="environment-label">ambientes institucionais</span>
            <ul aria-label="Ambientes institucionais do lab.sys">
              {institutionalEnvironments.map((environment) => (
                <li key={environment.label}>
                  <a href={environment.href} target="_blank" rel="noreferrer">
                    <i aria-hidden="true" />
                    {environment.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p>do pensamento social aos algoritmos,<br />das citações aos arquivos,<br />da Wikipedia aos debates digitais.</p>
        <div className="footer-meta"><span>lab.sys © 2026</span><a href="#top">voltar ao topo ↑</a></div>
      </footer>
    </>
  );
}
