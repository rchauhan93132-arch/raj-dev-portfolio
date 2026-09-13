import { useState, useEffect } from 'react';
import BackgroundCanvas from './components/BackgroundCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import MobileDrawer from './components/MobileDrawer';
import Toast from './components/Toast';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Global Scroll Progress Handler
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3500);
  };

  return (
    <div className="app-container">
      {/* 1. Ultra-Lightweight Hardware-Accelerated Canvas Mesh */}
      <BackgroundCanvas />

      {/* 2. Ambient Cyber Glow Gradients */}
      <div className="ambient-glow-1"></div>
      <div className="ambient-glow-2"></div>

      {/* 3. Top Scroll Progress Indicator */}
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }}></div>

      {/* 4. Floating Capsule Navbar */}
      <Navbar onToggleDrawer={() => setIsDrawerOpen(true)} />

      {/* 5. Mobile Navigation Drawer */}
      <MobileDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />

      {/* 6. Main Portfolio Sections */}
      <main>
        <Hero />
        <About onShowToast={showToast} />
        <Skills />
        <Projects onSelectProject={(proj) => setSelectedProject(proj)} />
        <Education />
        <Contact onShowToast={showToast} />
      </main>

      {/* 7. Footer */}
      <Footer />

      {/* 8. Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* 9. Floating Toast Notification */}
      {toastMessage && <Toast message={toastMessage} />}
    </div>
  );
}
