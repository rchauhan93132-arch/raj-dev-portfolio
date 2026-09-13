import { useState, useEffect, useRef } from 'react';
import profileImg from '../assets/hero.png';

export default function Hero() {
  const [typewriterText, setTypewriterText] = useState('');
  const [stats, setStats] = useState({ languages: 0, projects: 0, year: 0 });
  const heroCardRef = useRef(null);
  const countedRef = useRef(false);

  // Typewriter effect
  useEffect(() => {
    const roles = [
      'Software Developer',
      'Flutter Developer',
      'React.js Developer',
      'B.Voc IT Student @ Noble University',
      'Mobile App Developer',
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timer;

    const typeEffect = () => {
      const currentRole = roles[roleIndex];
      if (isDeleting) {
        setTypewriterText(currentRole.substring(0, charIndex - 1));
        charIndex--;
      } else {
        setTypewriterText(currentRole.substring(0, charIndex + 1));
        charIndex++;
      }

      let speed = isDeleting ? 35 : 75;

      if (!isDeleting && charIndex === currentRole.length) {
        speed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 350;
      }

      timer = setTimeout(typeEffect, speed);
    };

    typeEffect();
    return () => clearTimeout(timer);
  }, []);

  // Stats count-up on load
  useEffect(() => {
    if (countedRef.current) return;
    countedRef.current = true;

    const animateCount = (target, key, duration = 1200) => {
      let current = 0;
      const stepTime = 30;
      const totalSteps = duration / stepTime;
      const stepValue = target / totalSteps;

      const timer = setInterval(() => {
        current += stepValue;
        if (current >= target) {
          setStats((prev) => ({ ...prev, [key]: target }));
          clearInterval(timer);
        } else {
          setStats((prev) => ({ ...prev, [key]: Math.floor(current) }));
        }
      }, stepTime);
    };

    animateCount(6, 'languages');
    animateCount(4, 'projects');
    animateCount(2025, 'year');
  }, []);

  // 3D Card Interactive Perspective Tilt
  const handleMouseMove = (e) => {
    const card = heroCardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  };

  const handleMouseLeave = () => {
    const card = heroCardRef.current;
    if (!card) return;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
  };

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-grid">
          <div>
            <div className="hero-status-pill">
              <div className="pulse-dot"></div>
              <span>Available for Opportunities · IT Fresher</span>
            </div>

            <h1 className="hero-name">
              Building Scalable Apps, <br />
              <span className="highlight">Crafting Clean Code.</span>
            </h1>

            <div className="hero-typewriter-wrapper">
              <span>&gt;&nbsp;</span>
              <span>{typewriterText}</span>
              <span className="typewriter-cursor"></span>
            </div>

            <p className="hero-bio">
              Hi, I&apos;m <strong>Raj Chauhan</strong> — a passionate software developer pursuing a B.Voc in Information Technology at <strong>Noble University Campus</strong>. Focused on modern web technologies, Flutter mobile engineering, and building high-impact digital experiences.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                <span>Explore Projects</span>
                <span>→</span>
              </a>
              <a href="#contact" className="btn btn-ghost">
                <span>Get in Touch</span>
              </a>

              <div className="social-links-row">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  title="GitHub Profile"
                  aria-label="GitHub Profile"
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  title="LinkedIn Profile"
                  aria-label="LinkedIn Profile"
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.762-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* 3D Interactive Card HUD */}
          <div className="hero-card-perspective">
            <div
              className="hero-3d-card"
              ref={heroCardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="avatar-container">
                <div className="avatar-ring-glow"></div>
                <div className="avatar-inner-box">
                  <img src={profileImg} alt="Raj Chauhan" />
                </div>
              </div>

              <div className="card-name-title">
                <h3>Raj Chauhan</h3>
                <span className="card-role-tag">&lt;SoftwareDeveloper /&gt;</span>
              </div>

              <div className="card-metrics-grid">
                <div className="metric-tile">
                  <div className="metric-num">{stats.languages}+</div>
                  <div className="metric-lbl">Languages</div>
                </div>
                <div className="metric-tile">
                  <div className="metric-num">{stats.projects}+</div>
                  <div className="metric-lbl">Projects</div>
                </div>
                <div className="metric-tile">
                  <div className="metric-num">{stats.year || 2025}</div>
                  <div className="metric-lbl">B.Voc Start</div>
                </div>
                <div className="metric-tile">
                  <div className="metric-num">🇮🇳</div>
                  <div className="metric-lbl">Gujarat, India</div>
                </div>
              </div>

              <div className="card-badge-status">
                <div className="pulse-dot"></div>
                <span>Active & Ready for Hire</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
