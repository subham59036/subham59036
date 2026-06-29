import { useState, useEffect } from 'react';
import { MenuIcon, CloseIcon } from './icons';

const links = [
  { label: 'About',        href: '#about' },
  { label: 'Experience',   href: '#experience' },
  { label: 'Projects',     href: '#projects' },
  { label: 'Publications', href: '#publications' },
  { label: 'Skills',       href: '#skills' },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? 'nav-scrolled' : 'nav-transparent'
        }`}
      >
        <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 shrink-0">
            <img
              src="/logo.svg"
              alt="Subham logo"
              width={28}
              height={28}
              style={{ width: 28, height: 28 }}
            />
            <span
              className="text-sm font-semibold tracking-tight text-primary font-heading"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Subham
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-7 list-none m-0 p-0">
            {links.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className="nav-link">{label}</a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="/resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline hidden md:inline-flex text-sm px-4 py-2"
            style={{ borderColor: 'var(--color-accent)', color: 'var(--color-accent)' }}
          >
            Resume
          </a>

          {/* Mobile toggle */}
          <button
            className="md:hidden flex items-center justify-center w-9 h-9 rounded"
            style={{ color: 'var(--color-primary)', background: 'transparent', border: 'none', cursor: 'pointer' }}
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden flex flex-col pt-16"
          style={{ background: 'var(--color-canvas)' }}
        >
          <nav className="flex flex-col gap-1 px-6 pt-6">
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={closeMenu}
                className="py-3 text-base font-medium nav-link"
                style={{ borderBottom: '1px solid var(--color-stroke)' }}
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={closeMenu}
              className="btn-primary mt-6 justify-center"
            >
              Get in Touch
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
