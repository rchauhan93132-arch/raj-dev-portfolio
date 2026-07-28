import { useState, useEffect } from 'react';
import './styles/index.css';
import './styles/App.css';

import BackgroundCanvas from './components/BackgroundCanvas';
import Navbar from './components/Navbar';
import MobileDrawer from './components/MobileDrawer';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';
import Strengths from './components/Strengths';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Toast from './components/Toast';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [toastState, setToastState] = useState({ message: '', visible: false });

  // Scroll Progress and Active Nav Link Listener
  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
      setIsScrolled(winScroll > 50);

      const sections = document.querySelectorAll('section, .hero');
      let current = '';
      sections.forEach((sec) => {
        const top = sec.offsetTop - 120;
        if (winScroll >= top) {
          current = sec.getAttribute('id') || '';
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver for Scroll Reveal Animations
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.15 }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const showToast = (msg) => {
    setToastState({ message: msg, visible: true });
    setTimeout(() => {
      setToastState({ message: '', visible: false });
    }, 3000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('rchauhan93132@gmail.com');
    showToast('Email copied to clipboard! 📋');
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('8320822397');
    showToast('Phone number copied! 📞');
  };

  return (
    <>
      {/* Top Scroll Progress Indicator */}
      <div id="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>

      {/* Interactive Particle Canvas & Cursor Glow */}
      <BackgroundCanvas />

      {/* Mobile Menu Drawer */}
      <MobileDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />

      {/* Glassmorphic Navbar */}
      <Navbar
        activeSection={activeSection}
        isScrolled={isScrolled}
        onMobileToggle={() => setIsDrawerOpen(true)}
      />

      {/* Hero Section */}
      <Hero />

      <div className="hr"></div>

      {/* About Section */}
      <About onCopyEmail={handleCopyEmail} onCopyPhone={handleCopyPhone} />

      <div className="hr"></div>

      {/* Skills Section */}
      <Skills />

      <div className="hr"></div>

      {/* Education Section */}
      <Education />

      <div className="hr"></div>

      {/* Projects Section */}
      <Projects onSelectProject={(proj) => setSelectedProject(proj)} />

      {/* Interactive Project Modal Pop-up */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

      <div className="hr"></div>

      {/* Languages & Strengths */}
      <Strengths />

      <div className="hr"></div>

      {/* Contact Section */}
      <Contact onShowToast={showToast} />

      {/* Toast Notification */}
      <Toast message={toastState.message} isVisible={toastState.visible} />

      {/* Footer */}
      <Footer />
    </>
  );
}
