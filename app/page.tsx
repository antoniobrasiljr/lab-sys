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

function Mark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={compact ? "wordmark wordmark--compact" : "wordmark"} aria-label="lab ponto sys">
      <span>lab</span><b>.</b><span>sys</span>
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
          <a href="#observacoes">observações</a>
          <a href="#metodo">método</a>
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
            <div className="hero-brand" aria-hidden="true">
              <Mark />
              <span className="hero-signature">sistemas semânticas digitalização</span>
            </div>
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

        <section className="subgroup section-shell">
          <div className="section-index"><span>09</span><span>subgrupos</span></div>
          <div className="subgroup-copy">
            <p className="eyebrow">uma arquitetura aberta</p>
            <h2>Linhas de pesquisa herdam a forma do laboratório.</h2>
            <p>
              O nome do grupo ocupa a parte marcada da distinção; lab.sys permanece como
              referência institucional na parte não marcada.
            </p>
          </div>
          <figure>
            <img src="/brand/assets/data-ps-subgroup.svg" alt="data_PS, pensamento social em dados, subgrupo do lab.sys" />
            <figcaption><span>subgrupo 01</span><span>pensamento social em dados</span></figcaption>
          </figure>
        </section>
      </main>

      <footer>
        <div className="footer-mark"><Mark /><span>sistemas semânticas digitalização</span></div>
        <p>do pensamento social aos algoritmos,<br />das citações aos arquivos,<br />da Wikipedia aos debates digitais.</p>
        <div className="footer-meta"><span>lab.sys © 2026</span><a href="#top">voltar ao topo ↑</a></div>
      </footer>
    </>
  );
}
