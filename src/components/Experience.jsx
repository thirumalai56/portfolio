import React, { useState } from 'react';

const jobs = [
  {
    company:   'IBM India Private Limited',
    clients:   'Unilever · Amway · Reckitt · NextEra · Dow',
    role:      'Senior System Analyst',
    period:    'March 2022 – Present',
    location:  'Mysore, India',
    current:   true,
    color:     '#1d4ed8',
    bullets: [
      'Architected an enterprise React-based document workflow application using ReactJS, Redux Toolkit, React Router, Axios, Carbon Design System, HTML5, SCSS Modules, and Azure AD (MSAL).',
      'Implemented RBAC for Agent, Team Lead, and Super User roles with dynamic routing, session timeout handling, token refresh, and secure API integration.',
      'Collaborated with ML engineers to surface AI-extracted document insights in a clean, user-friendly review interface.',
      'Built reusable React components with Carbon Design System to accelerate delivery across multiple content-intelligence modules.',
      'Optimized state management using Redux Toolkit — reducing redundant API calls and improving data-extraction workflow performance.',
      'Mentored junior developers on React Hooks patterns and component architecture best practices.',
      'Coordinated with cross-functional teams across Unilever, Amway, and Reckitt to align feature delivery with business timelines.',
      'Used IBM BOB, ChatGPT, Claude, and Microsoft Copilot daily to enhance productivity and code quality.',
    ],
    tech: ['ReactJS', 'Redux Toolkit', 'React Router', 'MSAL', 'Carbon DS', 'SCSS Modules', 'Azure AD', 'Axios', 'ESLint'],
  },
  {
    company:   'Infosys Limited',
    clients:   'Allstate Insurance',
    role:      'Technology Analyst',
    period:    'May 2018 – March 2022',
    location:  'Mangalore, India',
    current:   false,
    color:     '#0891b2',
    bullets: [
      'Contributed to the One Risk web application, supporting insurance underwriters in policy review and decision-making workflows.',
      'Led front-end development, managing teams to deliver customer-focused web apps in an Agile/Scrum environment.',
      'Refactored legacy JavaScript into modern ReactJS architecture, accelerating feature delivery and maintainability.',
      'Improved application quality by writing unit tests with Jest & Enzyme — increasing code coverage and reducing production defects.',
      'Collaborated with business stakeholders and backend teams to define requirements and REST API integrations.',
      'Mentored team members on React, Redux-Thunk, and testing best practices.',
    ],
    tech: ['ReactJS', 'Redux Thunk', 'ES6', 'Bootstrap', 'Jest', 'Enzyme', 'ESLint', 'HTML5', 'CSS3'],
  },
  {
    company:   'Netaxis IT Solutions (P) Ltd',
    clients:   null,
    role:      'Software Engineer',
    period:    'November 2015 – April 2018',
    location:  'Chennai, India',
    current:   false,
    color:     '#7c3aed',
    bullets: [
      'Developed a social content sharing web application enabling users to create, upload, and manage image-based posts with personalised feeds.',
      'Implemented follow/unfollow features and integrated the front-end with Laravel (PHP) backend and MySQL database.',
      'Optimised data retrieval and enhanced application performance through query optimisation and frontend caching strategies.',
    ],
    tech: ['AngularJS', 'HTML5', 'CSS3', 'Laravel', 'MySQL', 'JavaScript'],
  },
  {
    company:   'Intrepid Web Studio',
    clients:   null,
    role:      'Web Developer',
    period:    'May 2015 – August 2015',
    location:  'Chennai, India',
    current:   false,
    color:     '#059669',
    bullets: [
      'Contributed to web application development using Bootstrap and JavaScript, building responsive and user-friendly UI components.',
    ],
    tech: ['Bootstrap', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    company:   'Hubino Technologies Pvt. Ltd',
    clients:   null,
    role:      'Web Developer',
    period:    'October 2013 – September 2014',
    location:  'Chennai, India',
    current:   false,
    color:     '#d97706',
    bullets: [
      'Developed web applications using Spring Boot and JavaScript, building scalable backend services and interactive front-end functionalities.',
    ],
    tech: ['Spring Boot', 'JavaScript', 'HTML5', 'CSS3', 'MySQL'],
  },
];

const Experience = () => {
  const [expanded, setExpanded] = useState({ 0: true });

  const toggle = i =>
    setExpanded(prev => ({ ...prev, [i]: !prev[i] }));

  return (
    <section
      id="experience"
      className="experience-section"
      style={{ paddingTop: '5rem', paddingBottom: '5rem' }}
    >
      <div className="container">
        <div className="text-center mb-5">
          <div className="section-label">Career Journey</div>
          <h2 className="section-title">Work Experience</h2>
          <div className="section-divider" />
        </div>

        <div className="d-flex flex-column gap-4">
          {jobs.map((job, i) => (
            <div className="exp-card" key={i}>
              {/* Header row */}
              <div
                className="d-flex flex-wrap align-items-start justify-content-between gap-3"
                style={{ cursor: 'pointer' }}
                onClick={() => toggle(i)}
              >
                <div className="flex-grow-1">
                  <div className="exp-company-badge" style={{ background: `${job.color}15`, color: job.color, borderColor: `${job.color}30` }}>
                    {job.current && <span className="exp-current-dot" />}
                    {job.company}
                  </div>
                  {job.clients && (
                    <div className="mb-1" style={{ fontSize: '0.78rem', color: '#6b7280' }}>
                      <i className="bi bi-buildings me-1" />Client: {job.clients}
                    </div>
                  )}
                  <div className="exp-title">{job.role}</div>
                  <div className="exp-meta">
                    <i className="bi bi-calendar3 me-1" />{job.period}
                    &nbsp;&nbsp;
                    <i className="bi bi-geo-alt me-1" />{job.location}
                  </div>
                </div>
                <div style={{ color: '#9ca3af', fontSize: '1.2rem', paddingTop: 4 }}>
                  <i className={`bi ${expanded[i] ? 'bi-chevron-up' : 'bi-chevron-down'}`} />
                </div>
              </div>

              {/* Expandable details */}
              {expanded[i] && (
                <div className="mt-3">
                  <ul className="list-unstyled mb-3">
                    {job.bullets.map((b, j) => (
                      <li className="exp-bullet" key={j}>{b}</li>
                    ))}
                  </ul>
                  <div>
                    {job.tech.map(t => (
                      <span className="exp-tech-tag" key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
