import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function About({ onShowToast }) {
  const { personal, highlights, languagesSpoken, strengths } = portfolioData;
  const [activeFile, setActiveFile] = useState('AboutMe.dart');
  const [copied, setCopied] = useState(false);

  const rawCode = {
    'AboutMe.dart': `// Raj Chauhan - Software Developer Profile
class Developer {
  final String name = "${personal.name}";
  final String degree = "B.Voc in Information Technology";
  final String university = "${personal.university}";
  final String location = "${personal.location}";
  final String status = "${personal.status}";
}`,
    'Philosophy.py': `# Engineering & Architecture Philosophy
def build_software():
    principles = [
        "Write clean, readable, and maintainable code.",
        "User experience & 60fps performance first.",
        "Continuous mastery of Flutter, Dart & React."
    ]
    return "Scalable Digital Impact"`,
    'Strengths.json': `// Core Professional Attributes
{
  "curiosity": "Full-Stack & Flutter Mobile Engineering",
  "learningSpeed": "Fast & Self-Motivated",
  "problemSolving": "Systematic Logical Debugging",
  "collaboration": "Clear Communication & Team Player"
}`,
  };

  const files = {
    'AboutMe.dart': [
      { num: 1, code: <span className="token-comment">// Raj Chauhan - Software Developer Profile</span> },
      { num: 2, code: <><span><span className="token-keyword">class</span> <span className="token-class">Developer</span> &#123;</span></> },
      { num: 3, code: <>&nbsp;&nbsp;<span className="token-keyword">final</span> String name = <span className="token-string">&quot;{personal.name}&quot;</span>;</> },
      { num: 4, code: <>&nbsp;&nbsp;<span className="token-keyword">final</span> String degree = <span className="token-string">&quot;B.Voc in Information Technology&quot;</span>;</> },
      { num: 5, code: <>&nbsp;&nbsp;<span className="token-keyword">final</span> String university = <span className="token-string">&quot;{personal.university}&quot;</span>;</> },
      { num: 6, code: <>&nbsp;&nbsp;<span className="token-keyword">final</span> String location = <span className="token-string">&quot;{personal.location}&quot;</span>;</> },
      { num: 7, code: <>&nbsp;&nbsp;<span className="token-keyword">final</span> String status = <span className="token-string">&quot;{personal.status}&quot;</span>;</> },
      { num: 8, code: <><span>&#125;</span></> },
    ],
    'Philosophy.py': [
      { num: 1, code: <span className="token-comment"># Engineering & Architecture Philosophy</span> },
      { num: 2, code: <><span><span className="token-keyword">def</span> <span className="token-class">build_software</span>():</span></> },
      { num: 3, code: <>&nbsp;&nbsp;&nbsp;&nbsp;principles = [</> },
      { num: 4, code: <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="token-string">&quot;Write clean, readable, and maintainable code.&quot;</span>,</> },
      { num: 5, code: <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="token-string">&quot;User experience &amp; 60fps performance first.&quot;</span>,</> },
      { num: 6, code: <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="token-string">&quot;Continuous mastery of Flutter, Dart &amp; React.&quot;</span></> },
      { num: 7, code: <>&nbsp;&nbsp;&nbsp;&nbsp;]</> },
      { num: 8, code: <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="token-keyword">return</span> <span className="token-string">&quot;Scalable Digital Impact&quot;</span></> },
    ],
    'Strengths.json': [
      { num: 1, code: <span className="token-comment">// Core Professional Attributes</span> },
      { num: 2, code: <><span>&#123;</span></> },
      { num: 3, code: <>&nbsp;&nbsp;<span className="token-keyword">&quot;curiosity&quot;</span>: <span className="token-string">&quot;Full-Stack &amp; Flutter Mobile Engineering&quot;</span>,</> },
      { num: 4, code: <>&nbsp;&nbsp;<span className="token-keyword">&quot;learningSpeed&quot;</span>: <span className="token-string">&quot;Fast &amp; Self-Motivated&quot;</span>,</> },
      { num: 5, code: <>&nbsp;&nbsp;<span className="token-keyword">&quot;problemSolving&quot;</span>: <span className="token-string">&quot;Systematic Logical Debugging&quot;</span>,</> },
      { num: 6, code: <>&nbsp;&nbsp;<span className="token-keyword">&quot;collaboration&quot;</span>: <span className="token-string">&quot;Clear Communication &amp; Team Player&quot;</span></> },
      { num: 7, code: <><span>&#125;</span></> },
    ],
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(rawCode[activeFile]);
    setCopied(true);
    onShowToast && onShowToast(`Copied ${activeFile} code to clipboard! 📋`);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="about">
      <div className="container">
        <div className="sec-label">// developer_ide</div>
        <div className="sec-title">
          Interactive <span>Code &amp; Bio</span>
        </div>

        <div className="about-grid">
          {/* Interactive IDE Terminal Window */}
          <div className="ide-window">
            <div className="ide-header">
              <div className="ide-dots">
                <div className="ide-dot dot-red"></div>
                <div className="ide-dot dot-yellow"></div>
                <div className="ide-dot dot-green"></div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  VS Code · Raj Chauhan
                </span>
                <button
                  className="copy-btn"
                  onClick={handleCopyCode}
                  style={{ padding: '4px 10px', fontSize: '0.75rem' }}
                >
                  {copied ? 'Copied! ✓' : 'Copy Code 📋'}
                </button>
              </div>
            </div>

            <div className="ide-tabs">
              {Object.keys(files).map((fileName) => (
                <button
                  key={fileName}
                  className={`ide-tab ${activeFile === fileName ? 'active' : ''}`}
                  onClick={() => setActiveFile(fileName)}
                >
                  <span>{fileName.endsWith('.dart') ? '🎯' : fileName.endsWith('.py') ? '🐍' : '📄'}</span>
                  <span>{fileName}</span>
                </button>
              ))}
            </div>

            <div className="ide-code-body">
              {files[activeFile].map((line) => (
                <div className="code-line" key={line.num}>
                  <span className="line-num">{line.num}</span>
                  <div>{line.code}</div>
                </div>
              ))}

              <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.7' }}>
                  {personal.bio.join(' ')}
                </p>
              </div>
            </div>
          </div>

          {/* Core Strengths & Languages */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="contact-card">
              <h4 style={{ fontSize: '1.2rem', marginBottom: '18px', color: '#fff' }}>
                ⚡ Core Value &amp; Strengths
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {highlights.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '1.3rem' }}>{item.icon}</span>
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
                  <span className="stack-chip" key={idx} style={{ color: 'var(--cyan-neon)' }}>
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
