import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function About({ onCopyEmail, onCopyPhone }) {
  const { personal, highlights } = portfolioData;
  const [activeTab, setActiveTab] = useState('bio');

  return (
    <section id="about">
      <div className="sec-label reveal">// who_i_am</div>
      <div className="sec-title reveal">
        About <span>Me</span>
      </div>

      {/* Interactive Tabs */}
      <div className="tab-navigation reveal">
        <button
          className={`tab-btn ${activeTab === 'bio' ? 'active' : ''}`}
          onClick={() => setActiveTab('bio')}
        >
          My Background
        </button>
        <button
          className={`tab-btn ${activeTab === 'philosophy' ? 'active' : ''}`}
          onClick={() => setActiveTab('philosophy')}
        >
          Dev Philosophy
        </button>
        <button
          className={`tab-btn ${activeTab === 'workEthic' ? 'active' : ''}`}
          onClick={() => setActiveTab('workEthic')}
        >
          Work Ethic
        </button>
      </div>

      <div className="about-grid">
        <div className="about-text reveal-left active">
          {activeTab === 'bio' && (
            <>
              {personal.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </>
          )}

          {activeTab === 'philosophy' && (
            <>
              {personal.philosophy.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </>
          )}

          {activeTab === 'workEthic' && (
            <>
              {personal.workEthic.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </>
          )}

          <div className="about-details">
            <div className="detail-row">
              <span className="detail-icon">📍</span>
              <span className="detail-label">Location</span>
              <span className="detail-val">{personal.location}</span>
            </div>
            <div
              className="detail-row"
              style={{ cursor: 'pointer' }}
              title="Click to copy email"
              onClick={onCopyEmail}
            >
              <span className="detail-icon">📧</span>
              <span className="detail-label">Email</span>
              <span className="detail-val">{personal.email}</span>
            </div>
            <div
              className="detail-row"
              style={{ cursor: 'pointer' }}
              title="Click to copy phone"
              onClick={onCopyPhone}
            >
              <span className="detail-icon">📱</span>
              <span className="detail-label">Phone</span>
              <span className="detail-val">{personal.phone}</span>
            </div>
            <div className="detail-row">
              <span className="detail-icon">🎓</span>
              <span className="detail-label">Status</span>
              <span className="detail-val">{personal.status}</span>
            </div>
          </div>
        </div>

        <div className="about-highlights reveal-right active">
          {highlights.map((hl) => (
            <div className="hl-card" key={hl.title}>
              <div className="hl-icon">{hl.icon}</div>
              <div>
                <h4>{hl.title}</h4>
                <p>{hl.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
