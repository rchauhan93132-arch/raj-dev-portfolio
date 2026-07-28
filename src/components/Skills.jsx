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
      <div className="sec-label reveal">// tech_stack</div>
      <div className="sec-title reveal">
        My <span>Skills Matrix</span>
      </div>

      {/* Skill Filter Tabs */}
      <div className="filter-bar reveal">
        {skillCategories.map((cat) => (
          <button
            key={cat.id}
            className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="skills-matrix-grid reveal active">
        {filteredSkills.map((skill) => (
          <div className="skill-tile" key={skill.name}>
            <div className="skill-tile-top">
              <span className="skill-tile-icon">{skill.icon}</span>
              <span className={`skill-level-badge level-${skill.level.toLowerCase()}`}>
                {skill.level}
              </span>
            </div>
            <h4 className="skill-tile-name">{skill.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
