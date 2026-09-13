import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personal, highlights, languagesSpoken, strengths } = portfolioData;
  const [activeTab, setActiveTab] = useState('bio');

  const tabContents = {
    bio: personal.bio,
    philosophy: personal.philosophy,
    workEthic: personal.workEthic,
  };

  return (
    <section id="about">
      <div className="container">
        <div className="sec-label">// developer_identity</div>
        <div className="sec-title">
          About <span>Raj Chauhan</span>
        </div>

        <div className="about-grid">
          {/* Terminal Tab Container */}
          <div className="terminal-box">
            <div className="terminal-header">
              <div className="terminal-dots">
                <div className="t-dot dot-red"></div>
                <div className="t-dot dot-yellow"></div>
                <div className="t-dot dot-green"></div>
              </div>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                raj_chauhan@developer:~$
              </span>
            </div>

            <div className="terminal-tab-buttons">
              <button
                className={`term-tab-btn ${activeTab === 'bio' ? 'active' : ''}`}
                onClick={() => setActiveTab('bio')}
              >
                01. Biography
              </button>
              <button
                className={`term-tab-btn ${activeTab === 'philosophy' ? 'active' : ''}`}
                onClick={() => setActiveTab('philosophy')}
              >
                02. Tech Philosophy
              </button>
              <button
                className={`term-tab-btn ${activeTab === 'workEthic' ? 'active' : ''}`}
                onClick={() => setActiveTab('workEthic')}
              >
                03. Work Ethic
              </button>
            </div>

            <div className="terminal-content">
              {tabContents[activeTab].map((paragraph, idx) => (
                <p className="terminal-text-block" key={idx}>
                  <span style={{ color: 'var(--accent-cyan)', marginRight: '8px' }}>&gt;</span>
                  {paragraph}
                </p>
              ))}

              <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)' }}>
                  ✔ Status: {personal.status}
                </span>
              </div>
            </div>
          </div>

          {/* Highlights & Strengths Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="contact-card">
              <h4 style={{ fontSize: '1.2rem', marginBottom: '16px', color: '#fff' }}>
                ⚡ Core Strengths & Value
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {highlights.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
                    <div>
                      <strong style={{ color: '#fff', fontSize: '0.95rem' }}>{item.title}</strong>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="contact-card">
              <h4 style={{ fontSize: '1.1rem', marginBottom: '12px', color: '#fff' }}>
                🗣️ Spoken Languages
              </h4>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {languagesSpoken.map((lang, idx) => (
                  <span className="stack-chip" key={idx} style={{ color: 'var(--accent-cyan)' }}>
                    {lang.language} ({lang.proficiency})
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
