import { useAppContext } from "../context/AppContext";

function Projects() {
    const { content, language } = useAppContext();

    return (
        <section id="projects" className="projects">
            <h2>{content.projects.title}</h2>

            <div className="projects-list">
                {content.projects.items.map((project, index) => (
                    <article
                        className={`project-card project-card-${index + 1}`}
                        key={project.id}
                    >
                        <h3>{project.title}</h3>

                        <p>{project.description}</p>

                        <div className="project-technologies">
                            {project.technologies.map((technology) => (
                                <span key={technology}>{technology}</span>
                            ))}
                        </div>

                        <div className="project-links">
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {language === "tr" ? "Github'da Gör" : "View on Github"}
                            </a>

                            {project.live ? (
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {language === "tr" ? "Uygulamaya Git →" : "Go to app →"}
                                </a>
                            ) : (
                                <span className="project-no-live">
                  {language === "tr" ? "Demo yakında" : "Demo soon"}
                </span>
                            )}
                        </div>

                        <div className={`project-mockup mockup-${index + 1}`}>
                            <div className="laptop">
                                <div className="laptop-screen">
                                    <div className="mockup-content">
                    <span className="mockup-small">
                      {index === 0 ? "API / BACKEND" : "INVENTORY"}
                    </span>

                                        <strong>{project.title}</strong>

                                        <div className="mockup-lines">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                </div>

                                <div className="laptop-base"></div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Projects;