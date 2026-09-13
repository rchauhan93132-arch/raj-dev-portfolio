import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skillCategories, skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills =
    activeCategory === 'all'
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills">
      <div className="container">
        <div className="sec-label">// tech_stack & capabilities</div>
        <div className="sec-title">
          Technical <span>Expertise</span>
        </div>

        {/* Category Filter Pills */}
        <div className="skills-filter-container">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-pill ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill) => {
            const isIntermediate = skill.level === 'Intermediate';
            const percentage = isIntermediate ? '75%' : '50%';

            return (
              <div className="skill-card" key={skill.name}>
                <div className="skill-card-top">
                  <div className="skill-icon">{skill.icon}</div>
                  <span
                    className={`skill-badge ${
                      isIntermediate ? 'badge-intermediate' : 'badge-basic'
                    }`}
                  >
                    {skill.level}
                  </span>
                </div>
                <div className="skill-name">{skill.name}</div>
                <div className="skill-progress-bar">
                  <div
                    className="skill-progress-fill"
                    style={{ width: percentage }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
