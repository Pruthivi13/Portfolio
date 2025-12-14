import projectsData from '../data/projects.json';
import './Projects.css';

// Import all project images
const projectImages = import.meta.glob('../assets/projects/*.png', { eager: true });

// Helper function to get image URL
const getImageUrl = (imageName) => {
  const imagePath = `../assets/projects/${imageName}`;
  return projectImages[imagePath]?.default || null;
};

const Projects = () => {
  return (
    <section id="projects" className="projects section">
      <div className="projects__container container">
        <h2 className="section-title">Projects</h2>
        <div className="projects__grid">
          {projectsData.map((project) => {
            const imageUrl = getImageUrl(project.image);
            return (
              <article key={project.id} className="project-card card">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-card__image-link"
                >
                  <div className="project-card__image">
                    <div className="project-card__image-header">
                      <span className="project-card__dots">
                        <span></span>
                        <span></span>
                      </span>
                      <span className="project-card__filename">{project.title}</span>
                    </div>
                    <div className="project-card__preview">
                      {imageUrl ? (
                        <img 
                          src={imageUrl} 
                          alt={project.title} 
                          className="project-card__screenshot"
                        />
                      ) : (
                        <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="10" y="10" width="180" height="100" stroke="currentColor" strokeWidth="2" fill="none"/>
                          <line x1="10" y1="30" x2="190" y2="30" stroke="currentColor" strokeWidth="1"/>
                          <rect x="20" y="40" width="60" height="60" stroke="currentColor" strokeWidth="1" fill="none"/>
                          <line x1="90" y1="45" x2="180" y2="45" stroke="currentColor" strokeWidth="1"/>
                          <line x1="90" y1="55" x2="160" y2="55" stroke="currentColor" strokeWidth="1"/>
                          <line x1="90" y1="65" x2="170" y2="65" stroke="currentColor" strokeWidth="1"/>
                          <rect x="90" y="80" width="50" height="15" stroke="currentColor" strokeWidth="1" fill="none"/>
                        </svg>
                      )}
                    </div>
                  </div>
                </a>
                <div className="project-card__content">
                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__description">{project.description}</p>
                  <div className="project-card__tech">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="tag">{tech}</span>
                    ))}
                  </div>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-card__link btn"
                  >
                    View project
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="7" y1="17" x2="17" y2="7"/>
                      <polyline points="7,7 17,7 17,17"/>
                    </svg>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
