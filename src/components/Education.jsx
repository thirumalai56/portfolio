import React from 'react';

const certs = [
  {
    name:   'Infosys Certified ReactJS Professional',
    issuer: 'Infosys',
    icon:   'bi-filetype-jsx',
    bg:     '#0ea5e9',
  },
  {
    name:   'Infosys Certified Agile Professional',
    issuer: 'Infosys',
    icon:   'bi-arrow-repeat',
    bg:     '#0891b2',
  },
  {
    name:   'IBM Certified JavaScript Front End Development',
    issuer: 'IBM',
    icon:   'bi-braces',
    bg:     '#1d4ed8',
  },
  {
    name:   'Microsoft Certified: Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    icon:   'bi-cloud-check-fill',
    bg:     '#0078d4',
  },
];

const Education = () => (
  <section
    id="education"
    className="edu-section"
    style={{ paddingTop: '5rem', paddingBottom: '5rem' }}
  >
    <div className="container">
      <div className="text-center mb-5">
        <div className="section-label">Academic & Professional</div>
        <h2 className="section-title">Education & Certifications</h2>
        <div className="section-divider" />
      </div>

      <div className="row g-4 align-items-start">
        {/* Education */}
        <div className="col-lg-5">
          <div className="edu-card">
            <div
              className="d-flex align-items-center justify-content-center mb-4"
              style={{
                width: 64, height: 64, borderRadius: 16,
                background: 'linear-gradient(135deg, #1d4ed8, #3b82f6)',
                fontSize: '1.8rem', color: '#fff',
              }}
            >
              <i className="bi bi-mortarboard-fill" />
            </div>
            <div
              className="fw-700 mb-1"
              style={{ fontWeight: 800, fontSize: '1.05rem', color: '#0a1628' }}
            >
              Bachelor of Engineering
            </div>
            <div
              className="mb-1"
              style={{ color: '#3b82f6', fontWeight: 600, fontSize: '0.9rem' }}
            >
              Electronics & Communication Engineering
            </div>
            <div style={{ color: '#6b7280', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
              <i className="bi bi-building me-1" />
              EASA College of Engineering & Technology, Coimbatore
            </div>
            <div style={{ color: '#6b7280', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
              <i className="bi bi-bank me-1" />
              Anna University, Tamil Nadu
            </div>
            <div
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                background: '#eff6ff', color: '#1d4ed8',
                fontSize: '0.78rem', fontWeight: 700,
                padding: '4px 12px', borderRadius: 20,
                border: '1px solid #bfdbfe', marginTop: 8,
              }}
            >
              <i className="bi bi-calendar3" />
              Graduated 2013
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="col-lg-7">
          <div className="d-flex flex-column gap-3">
            {certs.map(c => (
              <div className="cert-card" key={c.name}>
                <div
                  className="cert-icon"
                  style={{
                    background: `${c.bg}18`,
                    border: `1px solid ${c.bg}30`,
                    color: c.bg,
                  }}
                >
                  <i className={`bi ${c.icon}`} />
                </div>
                <div className="flex-grow-1">
                  <div style={{ fontWeight: 700, fontSize: '0.92rem', color: '#0a1628' }}>
                    {c.name}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#6b7280', marginTop: 2 }}>
                    <i className="bi bi-patch-check-fill me-1" style={{ color: c.bg }} />
                    Issued by {c.issuer}
                  </div>
                </div>
                <i className="bi bi-check-circle-fill" style={{ color: '#22c55e', fontSize: '1.2rem', flexShrink: 0 }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
