import React from 'react';

const contacts = [
  {
    icon:  'bi-envelope-fill',
    label: 'Email',
    value: 'thirumalai1989@gmail.com',
    href:  'mailto:thirumalai1989@gmail.com',
  },
  {
    icon:  'bi-telephone-fill',
    label: 'Phone',
    value: '+91 99765 86208',
    href:  'tel:+919976586208',
  },
  {
    icon:  'bi-geo-alt-fill',
    label: 'Location',
    value: 'Mysore, India',
    href:  'https://maps.google.com/?q=Mysore,India',
  },
  {
    icon:  'bi-linkedin',
    label: 'LinkedIn',
    value: 'Connect on LinkedIn',
    href:  '#',
  },
];

const Contact = () => (
  <section
    id="contact"
    className="contact-section"
    style={{ paddingTop: '5rem', paddingBottom: '5rem' }}
  >
    <div className="container">
      <div className="text-center mb-5">
        <div className="section-label" style={{ color: '#93c5fd' }}>Get In Touch</div>
        <h2 className="section-title" style={{ color: '#fff' }}>Let's Work Together</h2>
        <div className="section-divider" style={{ background: 'linear-gradient(90deg, #93c5fd, #fbbf24)' }} />
        <p
          className="mx-auto"
          style={{ maxWidth: 560, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, fontSize: '0.97rem' }}
        >
          I'm open to senior front-end, technical lead, and architect opportunities.
          Feel free to reach out — I typically respond within 24 hours.
        </p>
      </div>

      <div className="row g-4 justify-content-center mb-5">
        {contacts.map(c => (
          <div className="col-sm-6 col-lg-3" key={c.label}>
            <a className="contact-card" href={c.href} target="_blank" rel="noreferrer">
              <div className="contact-icon">
                <i className={`bi ${c.icon}`} />
              </div>
              <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 }}>
                {c.label}
              </div>
              <div style={{ fontWeight: 600, color: '#fff', fontSize: '0.88rem' }}>
                {c.value}
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* CTA banner */}
      <div
        className="text-center p-4 p-lg-5 rounded-4"
        style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <h4 style={{ color: '#fff', fontWeight: 700, marginBottom: '0.5rem' }}>
          Ready to build something great?
        </h4>
        <p style={{ color: 'rgba(255,255,255,0.55)', marginBottom: '1.5rem', fontSize: '0.92rem' }}>
          12+ years of enterprise front-end experience, ready to contribute from day one.
        </p>
        <a
          href="mailto:thirumalai1989@gmail.com"
          className="btn-hero-primary"
          style={{ display: 'inline-block', textDecoration: 'none', borderRadius: 8, padding: '12px 32px' }}
        >
          <i className="bi bi-send-fill me-2" />
          Send Me a Message
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
