export default function MobileDrawer({ isOpen, onClose }) {
  if (!isOpen) return null;

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About Me', href: '#about' },
    { label: 'Skills Matrix', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'rgba(3, 6, 17, 0.85)',
        backdropFilter: 'blur(20px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '24px',
      }}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '24px',
          right: '24px',
          background: 'rgba(255,255,255,0.08)',
          border: '1px solid rgba(255,255,255,0.15)',
          color: '#fff',
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          fontSize: '1.6rem',
          cursor: 'pointer',
        }}
        aria-label="Close menu"
      >
        &times;
      </button>

      <div style={{ textAlign: 'center', marginBottom: '16px' }}>
        <div
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 12px',
            fontSize: '1.1rem',
            fontWeight: '900',
            color: '#fff',
          }}
        >
          RC
        </div>
        <h3 style={{ color: '#fff', fontSize: '1.4rem' }}>Raj Chauhan</h3>
        <p style={{ color: 'var(--accent-cyan)', fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}>
          &lt;SoftwareDeveloper /&gt;
        </p>
      </div>

      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          onClick={onClose}
          style={{
            fontSize: '1.3rem',
            fontWeight: '700',
            color: '#f8fafc',
            transition: 'color 0.2s ease',
          }}
        >
          {item.label}
        </a>
      ))}

      <a
        href="#contact"
        onClick={onClose}
        className="btn btn-primary"
        style={{ marginTop: '12px' }}
      >
        Get in Touch ⚡
      </a>
    </div>
  );
}
