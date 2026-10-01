import React, { useState, useEffect } from 'react';
import profilePic from '../assets/Profile picture.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'About',       href: '#about' },
    { label: 'Experience',  href: '#experience' },
    { label: 'Skills',      href: '#skills' },
    { label: 'Education',   href: '#education' },
    { label: 'Contact',     href: '#contact' },
  ];

  return (
    <nav
      className="navbar navbar-expand-lg navbar-custom fixed-top"
      style={{ transition: 'box-shadow 0.3s', boxShadow: scrolled ? '0 2px 24px rgba(0,0,0,0.5)' : undefined }}
    >
      <div className="container">
        <a className="navbar-brand navbar-brand-text d-flex align-items-center gap-2" href="#home">
          <img
            src={profilePic}
            alt="Thirumalai Rajamanickam"
            style={{
              width: 38,
              height: 38,
              borderRadius: '50%',
              objectFit: 'cover',
              border: '2px solid #fbbf24',
              boxShadow: '0 0 0 3px rgba(251,191,36,0.25)',
              flexShrink: 0,
            }}
          />
          Thirumalai R
        </a>
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ color: '#fff' }}
        >
          <i className={`bi ${menuOpen ? 'bi-x-lg' : 'bi-list'}`} style={{ fontSize: '1.4rem' }} />
        </button>
        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto gap-lg-2">
            {links.map(l => (
              <li className="nav-item" key={l.label}>
                <a
                  className="nav-link"
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="nav-item ms-lg-2">
              <a
                className="btn btn-sm btn-hero-primary"
                href="mailto:thirumalai1989@gmail.com"
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
