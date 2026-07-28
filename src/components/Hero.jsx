import { useState, useEffect, useRef } from 'react';
import profileImg from '../assets/hero.png';

export default function Hero() {
  const [typewriterText, setTypewriterText] = useState('');
  const [stats, setStats] = useState({ languages: 0, projects: 0, year: 0 });
  const heroCardRef = useRef(null);
  const countedRef = useRef(false);

  // Typewriter effect
  useEffect(() => {
    const roles = ['Software Developer', 'B.Voc IT Student', 'Flutter Developer', 'React Developer', 'Web Developer'];
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

      let speed = isDeleting ? 40 : 80;

      if (!isDeleting && charIndex === currentRole.length) {
        speed = 2200;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 400;
      }

      timer = setTimeout(typeEffect, speed);
    };

    typeEffect();
    return () => clearTimeout(timer);
  }, []);

  // Intersection observer for stat count-up
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !countedRef.current) {
            countedRef.current = true;
            
            const animateCount = (target, key) => {
              let current = 0;
              const step = Math.max(1, Math.ceil(target / 40));
              const countInterval = setInterval(() => {
                current += step;
                if (current >= target) {
                  setStats((prev) => ({ ...prev, [key]: target }));
                  clearInterval(countInterval);
                } else {
                  setStats((prev) => ({ ...prev, [key]: current }));
                }
              }, 35);
            };

            animateCount(6, 'languages');
            animateCount(2, 'projects');
            animateCount(2025, 'year');
          }
        });
      },
      { threshold: 0.5 }
    );

    if (heroCardRef.current) {
      observer.observe(heroCardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 3D Card Perspective Tilt Effect
  const handleMouseMove = (e) => {
    const card = heroCardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  };

  const handleMouseLeave = () => {
    const card = heroCardRef.current;
    if (!card) return;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
  };

  return (
    <div className="hero">
      <div className="hero-inner">
        <div className="reveal-left active">
          <div className="hero-eyebrow">
            <div className="dot"></div>Available for opportunities
          </div>
          <h1 className="hero-name">
            Raj <span className="accent">Chauhan</span>
          </h1>
          <p className="hero-role">
            B.Voc Student &nbsp;·&nbsp; <span className="typewriter-text">{typewriterText}</span>
          </p>
          <p className="hero-desc">
            Motivated IT fresher pursuing a B.Voc in Information Technology at Noble University.
            Passionate about coding and building real-world projects, and eager to grow as a professional developer.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects →
            </a>
            <a href="#contact" className="btn btn-ghost">
              Contact Me
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
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
              className="social-btn"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.762-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="hero-card-container reveal-right active">
          <div
            className="hero-card"
            id="heroCard"
            ref={heroCardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="avatar-ring">
              <div className="avatar-inner">
                <img
                  src={profileImg}
                  alt="Raj Chauhan"
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    objectFit: 'cover',
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </div>
            <h3>Raj Chauhan</h3>
            <div className="role-tag">Software Developer</div>
            <div className="card-stats">
              <div className="stat-box">
                <div className="num">{stats.languages}+</div>
                <div className="lbl">Languages</div>
              </div>
              <div className="stat-box">
                <div className="num">{stats.projects}+</div>
                <div className="lbl">Projects</div>
              </div>
              <div className="stat-box">
                <div className="num">{stats.year || 0}</div>
                <div className="lbl">B.Voc Start</div>
              </div>
              <div className="stat-box">
                <div className="num">🇮🇳</div>
                <div className="lbl">India</div>
              </div>
            </div>
            <div className="avail-badge">
              <div className="dot"></div>Open to Work
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
