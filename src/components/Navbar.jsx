import { useState, useEffect } from 'react';

export default function Navbar({ onToggleDrawer }) {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <a href="#hero" className="nav-brand">
          <div className="nav-logo-badge">RC</div>
          <span>Raj Chauhan</span>
        </a>

        <ul className="nav-links">
          <li>
            <a href="#about" className={`nav-item ${activeSection === 'about' ? 'active' : ''}`}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" className={`nav-item ${activeSection === 'skills' ? 'active' : ''}`}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className={`nav-item ${activeSection === 'projects' ? 'active' : ''}`}>
              Projects
            </a>
          </li>
          <li>
            <a href="#education" className={`nav-item ${activeSection === 'education' ? 'active' : ''}`}>
              Education
            </a>
          </li>
          <li>
            <a href="#contact" className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`}>
              Contact
            </a>
          </li>
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <a href="#contact" className="nav-cta">
            <span>Get in Touch</span>
            <span>⚡</span>
          </a>
          <button
            className="nav-toggle-btn"
            onClick={onToggleDrawer}
            aria-label="Toggle mobile navigation menu"
          >
            ☰
          </button>
        </div>
      </nav>
    </div>
  );
}
