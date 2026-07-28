export default function Navbar({ activeSection, isScrolled, onMobileToggle }) {
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav id="navbar" className={isScrolled ? 'scrolled' : ''}>
      <a href="#" className="logo">
        RAJ<span>.</span>
      </a>
      <div className="nav-right">
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={activeSection === item.href.replace('#', '') ? 'active-link' : ''}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="mobile-toggle"
          id="mobileToggle"
          aria-label="Open Navigation Menu"
          onClick={onMobileToggle}
        >
          ☰
        </button>
      </div>
    </nav>
  );
}
