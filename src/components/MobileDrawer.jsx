export default function MobileDrawer({ isOpen, onClose }) {
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <div className={`mobile-drawer ${isOpen ? 'open' : ''}`}>
      <button className="drawer-close" onClick={onClose}>
        &times;
      </button>
      {navItems.map((item) => (
        <a key={item.label} href={item.href} className="drawer-link" onClick={onClose}>
          {item.label}
        </a>
      ))}
    </div>
  );
}
