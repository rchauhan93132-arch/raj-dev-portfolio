import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education">
      <div className="container">
        <div className="sec-label">// academic_journey</div>
        <div className="sec-title">
          Education &amp; <span>Credentials</span>
        </div>

        <div className="timeline-container">
          {education.map((item, idx) => (
            <div className="timeline-item" key={idx}>
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-degree">{item.degree}</div>
              <div className="timeline-inst">{item.institution}</div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '10px' }}>
                {item.description}
              </p>

              {item.tags && item.tags.length > 0 && (
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '12px' }}>
                  {item.tags.map((tag, tIdx) => (
                    <span className="stack-chip" key={tIdx} style={{ fontSize: '0.75rem' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
