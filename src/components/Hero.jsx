import React from 'react';
import profilePic from '../assets/Profile picture.png';

const stats = [
  { number: '12+',  label: 'Years Experience' },
  { number: '5',    label: 'Companies' },
  { number: '3',    label: 'Global Clients' },
  { number: '4',    label: 'Certifications' },
];

const Hero = () => (
  <section id="home" className="hero-section py-5">
    <div className="container">
      <div className="row align-items-center gy-5">

        {/* Left — Text */}
        <div className="col-lg-7 order-2 order-lg-1">
          <div className="hero-badge">
            <i className="bi bi-lightning-charge-fill me-1" />
            Available for Senior / Lead Roles
          </div>

          <h1 className="hero-name">
            Thirumalai<br />
            <span style={{ color: '#fbbf24' }}>Rajamanickam</span>
          </h1>

          <p className="hero-role">
            Senior System Analyst &nbsp;·&nbsp; Technical Lead &nbsp;·&nbsp; Front-End Architect
          </p>

          <p className="hero-tagline">
            12+ years building enterprise-grade React applications across Insurance,
            Consumer Goods, Legal, and Energy domains. Currently at IBM India,
            delivering AI-powered document intelligence solutions for global clients.
          </p>

          {/* Stats row */}
          <div className="d-flex flex-wrap gap-4 mb-4 align-items-center">
            {stats.map((s, i) => (
              <React.Fragment key={s.label}>
                <div className="hero-stat">
                  <div className="hero-stat-number">{s.number}</div>
                  <div className="hero-stat-label">{s.label}</div>
                </div>
                {i < stats.length - 1 && <div className="hero-stat-divider d-none d-sm-block" />}
              </React.Fragment>
            ))}
          </div>

          <div className="d-flex flex-wrap gap-3">
            <a className="btn-hero-primary" href="#contact">
              <i className="bi bi-envelope-fill me-2" />
              Get In Touch
            </a>
            <a className="btn-hero-outline" href="#experience">
              <i className="bi bi-briefcase-fill me-2" />
              View Experience
            </a>
          </div>
        </div>

        {/* Right — Avatar */}
        <div className="col-lg-5 order-1 order-lg-2 text-center">
          <div className="d-flex flex-column align-items-center gap-4">
            <div className="hero-avatar" style={{ padding: 0, overflow: 'hidden' }}>
              <img
                src={profilePic}
                alt="Thirumalai Rajamanickam"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '50%',
                  display: 'block',
                }}
              />
            </div>

            {/* Company logos strip */}
            <div
              className="d-flex flex-wrap justify-content-center gap-2"
              style={{ maxWidth: 320 }}
            >
              {['IBM', 'Infosys', 'React', 'Redux Toolkit', 'Azure AD', 'Carbon DS'].map(t => (
                <span
                  key={t}
                  className="badge rounded-pill"
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.18)',
                    color: 'rgba(255,255,255,0.7)',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    padding: '5px 12px',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Contact quick links */}
            <div className="d-flex gap-3">
              {[
                { icon: 'bi-envelope-fill',    href: 'mailto:thirumalai1989@gmail.com', tip: 'Email' },
                { icon: 'bi-telephone-fill',   href: 'tel:+919976586208',              tip: 'Phone' },
                { icon: 'bi-linkedin',         href: '#',                              tip: 'LinkedIn' },
                { icon: 'bi-github',           href: '#',                              tip: 'GitHub' },
              ].map(({ icon, href, tip }) => (
                <a
                  key={tip}
                  href={href}
                  title={tip}
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    width: 40, height: 40, borderRadius: 10,
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.18)',
                    color: '#93c5fd', fontSize: '1rem',
                    transition: 'all 0.2s', textDecoration: 'none',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(59,130,246,0.3)';
                    e.currentTarget.style.borderColor = '#3b82f6';
                    e.currentTarget.style.color = '#fff';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)';
                    e.currentTarget.style.color = '#93c5fd';
                  }}
                >
                  <i className={`bi ${icon}`} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
