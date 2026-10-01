import React from 'react';

const cards = [
  {
    icon: 'bi-buildings',
    title: 'Current Role',
    text: 'Senior System Analyst at IBM India Pvt. Ltd. (March 2022 – Present), leading front-end architecture for enterprise document intelligence solutions across Unilever, Amway, and Reckitt.',
  },
  {
    icon: 'bi-layers-half',
    title: 'Domain Expertise',
    text: 'Deep experience across Insurance (Allstate), Consumer Goods (Unilever, Reckitt, Amway), Legal, and Energy (NextEra, Dow) — translating complex business workflows into intuitive UIs.',
  },
  {
    icon: 'bi-people-fill',
    title: 'Leadership',
    text: 'Led cross-functional front-end teams through the full SDLC using Agile & SAFe. Mentored junior developers on React Hooks patterns, component architecture, and code quality best practices.',
  },
  {
    icon: 'bi-robot',
    title: 'AI-Augmented Engineering',
    text: 'Daily user of IBM BOB, GitHub Copilot, ChatGPT, and Claude to accelerate delivery. Integrated ML-powered document extraction outputs into real-time React review interfaces.',
  },
  {
    icon: 'bi-shield-check',
    title: 'Security-First',
    text: 'Implemented Azure AD (MSAL) authentication with RBAC, token refresh, session timeout, and role-based routing for Agent, Team Lead, and Super User personas.',
  },
  {
    icon: 'bi-award',
    title: 'Certified Professional',
    text: 'Holds 4 certifications: Infosys ReactJS Professional, Infosys Agile Professional, IBM JavaScript Front-End Development, and Microsoft Azure Fundamentals (AZ-900).',
  },
];

const About = () => (
  <section id="about" className="about-section py-6" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
    <div className="container">
      <div className="text-center mb-5">
        <div className="section-label">About Me</div>
        <h2 className="section-title">Who I Am</h2>
        <div className="section-divider" />
        <p
          className="mx-auto"
          style={{ maxWidth: 680, color: '#4b5563', lineHeight: 1.8, fontSize: '1rem' }}
        >
          Experienced Technical Lead with 12+ years in web application development,
          architecting and delivering enterprise-grade solutions. Skilled at leading
          cross-functional teams through the full SDLC using Agile and SAFe methodologies,
          translating business requirements into scalable front-end architectures.
        </p>
      </div>

      <div className="row g-4">
        {cards.map(c => (
          <div className="col-md-6 col-lg-4" key={c.title}>
            <div className="about-card">
              <div className="about-icon">
                <i className={`bi ${c.icon}`} />
              </div>
              <h5 style={{ fontWeight: 700, fontSize: '1rem', color: '#0a1628', marginBottom: '0.5rem' }}>
                {c.title}
              </h5>
              <p style={{ fontSize: '0.87rem', color: '#4b5563', lineHeight: 1.7, margin: 0 }}>
                {c.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
