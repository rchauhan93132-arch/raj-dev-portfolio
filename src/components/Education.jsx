import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education">
      <div className="sec-label reveal">// education</div>
      <div className="sec-title reveal">
        My <span>Journey</span>
      </div>
      <div className="timeline">
        {education.map((item, index) => (
          <div className="tl-item reveal" key={item.institution}>
            <div className="tl-year">{item.year}</div>
            <div className="tl-line">
              <div className="tl-dot"></div>
              {index < education.length - 1 && <div className="tl-bar"></div>}
            </div>
            <div className="tl-content">
              <h3>{item.institution}</h3>
              <div className="tl-sub">{item.degree}</div>
              {item.description && (
                <p style={{ color: 'var(--muted)', fontSize: '0.9rem', marginBottom: '10px' }}>
                  {item.description}
                </p>
              )}
              {item.tags.length > 0 && (
                <div className="tl-tags">
                  {item.tags.map((tag) => (
                    <span className="tl-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
