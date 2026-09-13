export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <p style={{ marginBottom: '8px' }}>
          Designed &amp; Engineered by <strong style={{ color: '#fff' }}>Raj Chauhan</strong> · B.Voc IT @ Noble University
        </p>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          Powered by React 19, Vite, Three.js 3D &amp; Modern Cyber CSS · &copy; {currentYear} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
