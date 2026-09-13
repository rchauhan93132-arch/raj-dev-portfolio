import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Projects({ onSelectProject }) {
  const { projectCategories, projects } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects">
      <div className="container">
        <div className="sec-label">// engineered_projects</div>
        <div className="sec-title">
          Featured <span>Work & Creations</span>
        </div>

        {/* Filter Pills */}
        {projectCategories.length > 1 && (
          <div className="skills-filter-container">
            {projectCategories.map((cat) => (
              <button
                key={cat.id}
                className={`filter-pill ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}

        <div className="projects-grid">
          {filteredProjects.map((proj) => (
            <div className="project-card" key={proj.id}>
              <div>
                <div className="project-header-row">
                  <div className="proj-icon-box">{proj.icon}</div>
                  <div className="proj-status-tag">{proj.status}</div>
                </div>

                <h3>{proj.title}</h3>
                <p>{proj.shortDescription}</p>
              </div>

              <div>
                <div className="proj-stack-chips">
                  {proj.stack.map((tech) => (
                    <span className="stack-chip" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-actions-row">
                  <button
                    className="btn btn-ghost"
                    style={{ flex: 1 }}
                    onClick={() => onSelectProject && onSelectProject(proj)}
                  >
                    Details 🔍
                  </button>

                  {proj.apk && (
                    <a
                      href={proj.apk}
                      download="ElectroHub_Electronics_Shop.apk"
                      className="btn btn-primary"
                      style={{ flex: 1 }}
                    >
                      Download APK 📲
                    </a>
                  )}

                  {proj.demo && (
                    <a
                      href={proj.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      style={{ flex: 1 }}
                    >
                      Live Demo 🔗
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
