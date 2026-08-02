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
      <div className="sec-label reveal">// my_work</div>
      <div className="sec-title reveal">
        Featured <span>Projects</span>
      </div>

      {/* Category Filter Tabs */}
      {projectCategories.length > 1 && (
        <div className="filter-bar reveal">
          {projectCategories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      )}

      <div className="projects-grid reveal active">
        {filteredProjects.map((proj) => (
          <div className="project-card" key={proj.id}>
            <div>
              <div className="project-top">
                <div className="proj-icon">{proj.icon}</div>
                <div className="proj-status">{proj.status}</div>
              </div>
              <h3>{proj.title}</h3>
              <p>{proj.shortDescription}</p>
            </div>

            <div>
              <div className="proj-stack" style={{ marginBottom: '20px' }}>
                {proj.stack.map((tech) => (
                  <span className="stack-chip" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <button
                  className="btn btn-ghost"
                  style={{ flex: 1, justifyContent: 'center' }}
                  onClick={() => onSelectProject && onSelectProject(proj)}
                >
                  View Details 🔍
                </button>
                {proj.apk && (
                  <a
                    href={proj.apk}
                    download="ElectroHub_Electronics_Shop.apk"
                    className="btn btn-primary"
                    style={{ flex: 1, justifyContent: 'center' }}
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
                    style={{ flex: 1, justifyContent: 'center' }}
                  >
                    Live Demo 🔗
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
