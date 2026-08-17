import type { Metadata } from "next";
import {
  condensedSyllabus,
  courseModules,
  expandedSyllabus,
  references,
  resources,
} from "./course-data";

export const metadata: Metadata = {
  title: "Programas de curso — lab.sys",
  description:
    "Teoria dos sistemas como provocação às ciências sociais: semântica, análise de redes e algoritmos.",
};

function Mark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`brand-lockup ${compact ? "brand-lockup--compact" : ""}`} aria-label="lab.sys">
      <span className="form-box">
        <span className="wordmark"><span>lab</span><b>.</b><span>sys</span></span>
      </span>
      <span className="brand-signature">
        {compact ? "[ s / s / d ]" : "[ sistemas / semânticas / digitalização ]"}
      </span>
    </span>
  );
}

export default function ProgramsPage() {
  return (
    <div className="program-page">
      <header className="site-header course-header">
        <a href="/" className="brand-link" aria-label="lab.sys — página inicial">
          <Mark compact />
        </a>
        <nav aria-label="Navegação do programa">
          <a href="#ementa">ementa</a>
          <a href="#percurso">percurso</a>
          <a href="#calendario">calendário</a>
          <a href="#referencias">referências</a>
          <a href="#recursos">recursos</a>
        </nav>
        <a className="header-back" href="/">← laboratório</a>
      </header>

      <main id="top">
        <section className="course-hero" aria-labelledby="course-title">
          <div className="course-grid" aria-hidden="true" />
          <div className="course-orbit" aria-hidden="true">
            <i /><i /><i /><i />
            <span>semântica</span>
            <span>redes</span>
            <span>algoritmos</span>
          </div>
          <div className="course-kicker">
            <span>programa inaugural</span>
            <span>curso · ago—dez</span>
          </div>
          <div className="course-title-block">
            <p className="course-overline">Teoria dos sistemas como provocação às ciências sociais</p>
            <h1 id="course-title">
              semântica,<br />análise de <em>redes</em><br />e algoritmos.
            </h1>
          </div>
          <div className="course-authors">
            <div>
              <span>coordenação</span>
              <p>Antonio Brasil Jr. <small>PPGS · UFRJ</small></p>
              <p>Lucas Carvalho <small>PPGS · UFF</small></p>
            </div>
            <p>
              Um curso-laboratório para observar como formas de sentido circulam, estabilizam-se,
              perdem plausibilidade e retornam sob novas condições comunicativas.
            </p>
            <a href="#ementa">entrar no programa <span aria-hidden="true">↓</span></a>
          </div>
        </section>

        <section id="ementa" className="course-section course-syllabus">
          <div className="course-section-head">
            <div className="section-index"><span>00</span><span>ementa condensada</span></div>
            <div>
              <p className="eyebrow">quatro movimentos de observação</p>
              <h2>Uma teoria em<br />situação de prova.</h2>
            </div>
          </div>

          <div className="syllabus-movements">
            {condensedSyllabus.map((paragraph, index) => (
              <article key={paragraph}>
                <span>0{index + 1}</span>
                <p>{paragraph}</p>
              </article>
            ))}
          </div>

          <details className="expanded-syllabus">
            <summary>
              <span>abrir ementa expandida</span>
              <span>07 operações · leitura integral</span>
              <b aria-hidden="true">＋</b>
            </summary>
            <div className="expanded-syllabus-body">
              {expandedSyllabus.map((section) => (
                <article key={section.code}>
                  <header>
                    <span>{section.code}</span>
                    <h3>{section.title}</h3>
                  </header>
                  <div>
                    {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                </article>
              ))}
            </div>
          </details>
        </section>

        <section id="percurso" className="course-section course-path">
          <div className="course-section-head course-section-head--light">
            <div className="section-index"><span>01—04</span><span>cartografia do curso</span></div>
            <div>
              <p className="eyebrow">um percurso, quatro diferenciações</p>
              <h2>O programa não avança em linha reta.</h2>
              <p className="section-lead">
                Cada módulo reentra nos anteriores com novos objetos e escalas: da arquitetura da
                comunicação às semânticas com que a sociedade se descreve.
              </p>
            </div>
          </div>

          <div className="module-map">
            {courseModules.map((module, index) => (
              <article className={`module-node module-node--${index + 1}`} key={module.code}>
                <div><span>{module.code}</span><b>{String(index + 1).padStart(2, "0")}</b></div>
                <h3>{module.title}</h3>
                <p>{module.signal}</p>
                <span className="module-count">
                  {module.sessions.length} {module.sessions.length === 1 ? "bloco" : "datas"}
                </span>
              </article>
            ))}
          </div>
        </section>

        <section id="calendario" className="course-section course-calendar">
          <div className="course-section-head">
            <div className="section-index"><span>05</span><span>calendário</span></div>
            <div>
              <p className="eyebrow">conversas do Brasil e da América Latina</p>
              <h2>Uma sequência de<br />irritações produtivas.</h2>
            </div>
          </div>

          <div className="calendar-modules">
            {courseModules.map((module, moduleIndex) => (
              <section className={`calendar-module calendar-module--${moduleIndex + 1}`} key={module.code}>
                <header>
                  <span>{module.code}</span>
                  <h3>{module.title}</h3>
                  <p>{module.signal}</p>
                </header>
                <ol>
                  {module.sessions.map((session, sessionIndex) => (
                    <li className={session.break ? "is-break" : ""} key={`${session.date}-${session.title}`}>
                      <span className="session-index">{String(sessionIndex + 1).padStart(2, "0")}</span>
                      <time>{session.date}</time>
                      <div className="session-main">
                        {session.guest && <p className="session-guest">{session.guest} {session.affiliation && <small>{session.affiliation}</small>}</p>}
                        <h4>{session.title}</h4>
                        {session.note && <p className="session-note">{session.note}</p>}
                        {session.readings && (
                          <details className="session-readings">
                            <summary>{session.readings.length} {session.readings.length === 1 ? "leitura" : "leituras"} <span aria-hidden="true">＋</span></summary>
                            <ul>
                              {session.readings.map((reading) => <li key={reading}>{reading}</li>)}
                            </ul>
                          </details>
                        )}
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
            ))}
          </div>
        </section>

        <section id="referencias" className="course-section course-references">
          <div className="course-section-head course-section-head--light">
            <div className="section-index"><span>06</span><span>referências</span></div>
            <div>
              <p className="eyebrow">memória disponível para reentrada</p>
              <h2>Biblioteca-base.</h2>
            </div>
          </div>
          <ol className="reference-list">
            {references.map((reference, index) => (
              <li key={reference}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{reference}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="recursos" className="course-section course-resources">
          <div className="course-section-head">
            <div className="section-index"><span>07</span><span>recursos audiovisuais</span></div>
            <div>
              <p className="eyebrow">uma sala de aula distribuída</p>
              <h2>Assistir, pausar,<br />reentrar.</h2>
              <p className="section-lead">
                Uma seleção inicial de cursos, canais e arquivos abertos em português e espanhol.
                A curadoria privilegia percursos longos, instituições acadêmicas e interlocuções latino-americanas.
              </p>
            </div>
          </div>

          <div className="resource-grid">
            {resources.map((resource, index) => (
              <a className={`resource-card resource-card--${index + 1}`} href={resource.href} target="_blank" rel="noreferrer" key={resource.code}>
                <div className="resource-meta">
                  <span>{resource.code}</span>
                  <span>{resource.type}</span>
                </div>
                <h3>{resource.title}</h3>
                <p className="resource-source">{resource.source}</p>
                <p className="resource-description">{resource.description}</p>
                <div className="resource-foot">
                  <span>{resource.language}</span>
                  <b aria-hidden="true">↗</b>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="course-footer">
        <div><Mark /></div>
        <p>O primeiro curso é também<br />o primeiro enlace do laboratório.</p>
        <div className="footer-meta">
          <span>lab.sys · programa inaugural</span>
          <a href="#top">voltar ao topo ↑</a>
        </div>
      </footer>
    </div>
  );
}
