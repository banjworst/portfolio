function Projects() {
    const projects = [
        {
            id:1,
            title: "Portfolio Website",
            description: "Personal portfolio built with React and automated CI/CD pipeline using Github Actions",
            tech: ["React", "Vite", "GitHub Actions"],
            github: "https://github.com/banjworst/portfolio",
            live: "Coming soon"
        },
        {
            id:2, 
            title: "HUBCONNECT",
            description: "Club management webapp built with user and admin roles",
            tech: ["Node.js", "MySQL", "HTML/CSS"],
            github: "https://github.com/banjworst/HUBCONNECT",
            live: null
        }
    ]

    return (
        <section id="projects">
            <h2>Projects</h2>
            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="tech-stack">
                            {project.tech.map((tech, index) => (
                                <span key={index} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                        <div className="project-links">
                            {project.github && (
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                    Github
                                </a>
                            )}
                            {project.live && project.live !== "Coming soon" && (
                                <a href={project.live} target="_blank" rel="noopener noreferrer">
                                    Live Demo
                                </a>
                            )}
                            {project.live === "Coming soon" && (
                                <span>Live Demo: Coming Soon</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects