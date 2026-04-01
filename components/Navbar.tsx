'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const NAV_ITEMS = [
  { href: '#hero',         label: 'Home'       },
  { href: '#about',        label: 'About'      },
  { href: '#experience',   label: 'Experience' },
  { href: '#skills',       label: 'Skills'     },
  { href: '#works',        label: 'Works'      },
  { href: '#testimonials', label: 'Reviews'    },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [active,    setActive]    = useState('#hero');
  const [menuOpen,  setMenuOpen]  = useState(false);
  const sectionsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    sectionsRef.current = [...document.querySelectorAll<HTMLElement>('section[id]')];

    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      let cur = sectionsRef.current[0]?.id ?? 'hero';
      sectionsRef.current.forEach((sec) => {
        if (window.scrollY >= sec.offsetTop - 140) cur = sec.id;
      });
      setActive('#' + cur);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMobile = () => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => {
      const next = !prev;
      document.body.style.overflow = next ? 'hidden' : '';
      return next;
    });
  };

  return (
    <>
      <nav className={scrolled ? 'scrolled' : ''}>
        <a href="#hero" className="nav-logo">
          <Image src="/logo.svg" alt="Subham Saha logo" width={26} height={26} priority />
        </a>

        <ul className="nav-center">
          {NAV_ITEMS.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className={`nav-link${active === href ? ' active' : ''}`}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a href="mailto:subhamsaha59036@outlook.com" className="nav-hire">
          <i className="fas fa-paper-plane" /> Hire Me
        </a>

        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          aria-label="Open menu"
          onClick={toggleMenu}
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile overlay nav */}
      <div className={`mobile-nav${menuOpen ? ' open' : ''}`}>
        {NAV_ITEMS.map(({ href, label }, i) => (
          <span key={href}>
            <span className="mobile-nav-num">{String(i + 1).padStart(2, '0')}</span>
            <a href={href} className="mob-link" onClick={closeMobile}>
              {label}
            </a>
          </span>
        ))}
      </div>
    </>
  );
}
