import { portfolioData } from '../data/portfolioData';

export default function Strengths() {
  const { languagesSpoken, strengths } = portfolioData;

  return (
    <section id="more">
      <div className="split-grid">
        <div className="info-card reveal-left">
          <h3>Spoken Languages</h3>
          <div className="chip-row" style={{ flexDirection: 'column', gap: '10px' }}>
            {languagesSpoken.map((item) => (
              <div
                className="chip"
                key={item.language}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  borderRadius: 'var(--radius-md)',
                  width: '100%',
                }}
              >
                <span>{item.language}</span>
                <span style={{ color: 'var(--cyan)', fontSize: '0.8rem' }}>{item.proficiency}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="info-card reveal-right">
          <h3>Core Strengths</h3>
          <div className="chip-row">
            {strengths.map((str) => (
              <span className="chip" key={str}>
                {str}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
