import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/portfolio.js';
import './SectionStyles.css';

const ProjectsOverlay = () => {
  return (
    <section id="projects" className="portfolio-section" aria-label="Projects Portfolio">
      <div className="section-container">
        <div className="section-tag">
          <i className="fa-solid fa-layer-group" style={{ fontSize: '0.75rem' }}></i>
          <span>Featured Engineering</span>
        </div>
        <h2 className="section-title">
          Selected <span className="highlight">Creations</span>
        </h2>
        <p className="section-subtitle">
          Engineered machine learning systems and production full-stack web applications delivering real societal impact and intelligent recommendations.
        </p>

        <div className="projects-container">
          {projects.map((project, idx) => {
            const hasDemo = Boolean(project.demo && project.demo.trim() !== '' && project.demo !== '#');
            const hasGithub = Boolean(project.github && project.github.trim() !== '');

            return (
              <motion.article
                key={project.id}
                className={`project-card-3d ${project.flagship ? 'flagship' : ''}`}
                style={{ '--card-accent': project.accent }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              >
                <div>
                  <div className="project-card-header">
                    <span className="project-number">PROJECT {project.number}</span>
                    <span className="project-badge">{project.badge}</span>
                  </div>

                  <h3 className="project-title">{project.title}</h3>
                  <h4 className="project-subtitle">{project.subtitle}</h4>
                  <p className="project-desc">{project.description}</p>

                  <div className="project-tech-tags" aria-label="Technologies Used">
                    {project.tech.map((t, i) => (
                      <span key={i} className="tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="project-links">
                    {hasDemo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary-3d interactive"
                        aria-label={`Open live demo for ${project.title}`}
                      >
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                        <span>Live Demo</span>
                      </a>
                    )}
                    {hasGithub && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline-3d interactive"
                        aria-label={`View source code for ${project.title} on GitHub`}
                      >
                        <i className="fa-brands fa-github"></i>
                        <span>GitHub Repository</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Consistent Stylized Technical Preview Card */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div
                    className="project-visual-box"
                    style={{
                      background: `radial-gradient(circle at 50% 30%, ${project.accent}20 0%, rgba(14, 17, 26, 0.85) 75%)`,
                      borderColor: `${project.accent}35`,
                    }}
                  >
                    <div
                      className="project-visual-icon"
                      style={{
                        borderColor: `${project.accent}50`,
                        background: `${project.accent}15`,
                        color: project.accent,
                      }}
                    >
                      {project.visualType === 'cinema' && <i className="fa-solid fa-film"></i>}
                      {project.visualType === 'leaf' && <i className="fa-solid fa-leaf"></i>}
                      {project.visualType === 'crop' && <i className="fa-solid fa-wheat-awn"></i>}
                    </div>

                    <div className="project-visual-title">
                      {project.number} · {project.title.split('–')[0].trim()}
                    </div>
                    <div className="project-visual-role">{project.role}</div>

                    {hasDemo ? (
                      <div className="project-visual-live-tag">
                        <span className="live-indicator-dot"></span>
                        <span>Live Production Deployment</span>
                      </div>
                    ) : (
                      <div
                        className="project-visual-live-tag"
                        style={{ color: '#94a3b8', background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)' }}
                      >
                        <i className="fa-solid fa-code" style={{ fontSize: '0.7rem' }}></i>
                        <span>Source Code Available</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsOverlay;

