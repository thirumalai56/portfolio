import React from 'react';

const categories = [
  {
    title: 'Frontend Core',
    icon: 'bi-window-split',
    color: '#3b82f6',
    skills: [
      { name: 'React.js',        featured: true },
      { name: 'React Hooks',     featured: true },
      { name: 'JavaScript ES6+', featured: true },
      { name: 'HTML5',           featured: false },
      { name: 'CSS3 / SCSS',     featured: false },
      { name: 'Bootstrap',       featured: false },
      { name: 'AngularJS',       featured: false },
      { name: 'Angular',         featured: false },
      { name: 'SCSS Modules',    featured: false },
    ],
  },
  {
    title: 'State Management',
    icon: 'bi-database-gear',
    color: '#7c3aed',
    skills: [
      { name: 'Redux Toolkit',  featured: true },
      { name: 'Redux Thunk',    featured: true },
      { name: 'useContext',     featured: false },
      { name: 'useReducer',     featured: false },
      { name: 'Reselect',       featured: false },
    ],
  },
  {
    title: 'Testing & Quality',
    icon: 'bi-check2-circle',
    color: '#059669',
    skills: [
      { name: 'Jest',      featured: true },
      { name: 'Enzyme',    featured: true },
      { name: 'ESLint',    featured: false },
      { name: 'Prettier',  featured: false },
    ],
  },
  {
    title: 'Cloud & Auth',
    icon: 'bi-cloud-arrow-up',
    color: '#0ea5e9',
    skills: [
      { name: 'Microsoft Azure',    featured: true },
      { name: 'Azure AD / MSAL',    featured: true },
      { name: 'AWS (familiar)',      featured: false },
      { name: 'Azure App Service',  featured: false },
    ],
  },
  {
    title: 'APIs & Backend',
    icon: 'bi-plug',
    color: '#e11d48',
    skills: [
      { name: 'RESTful APIs',    featured: true },
      { name: 'Axios',           featured: false },
      { name: 'Node.js',         featured: false },
      { name: 'Express.js',      featured: false },
      { name: 'SOAP / SoapUI',   featured: false },
      { name: 'MySQL',           featured: false },
    ],
  },
  {
    title: 'Dev Tools & CI/CD',
    icon: 'bi-tools',
    color: '#d97706',
    skills: [
      { name: 'Git / GitHub',       featured: true },
      { name: 'Jenkins',            featured: false },
      { name: 'JIRA',               featured: false },
      { name: 'VS Code',            featured: false },
      { name: 'Redux DevTools',     featured: false },
      { name: 'React Dev Tools',    featured: false },
    ],
  },
  {
    title: 'Design System & AI',
    icon: 'bi-palette',
    color: '#9333ea',
    skills: [
      { name: 'Carbon Design System', featured: true },
      { name: 'IBM BOB',              featured: true },
      { name: 'GitHub Copilot',       featured: false },
      { name: 'ChatGPT',              featured: false },
      { name: 'Claude',               featured: false },
    ],
  },
  {
    title: 'Methodologies',
    icon: 'bi-kanban',
    color: '#0891b2',
    skills: [
      { name: 'Agile / Scrum', featured: true },
      { name: 'SAFe',          featured: true },
      { name: 'Code Review',   featured: false },
      { name: 'Mentoring',     featured: false },
      { name: 'SDLC',          featured: false },
    ],
  },
];

const Skills = () => (
  <section
    id="skills"
    className="skills-section"
    style={{ paddingTop: '5rem', paddingBottom: '5rem' }}
  >
    <div className="container">
      <div className="text-center mb-5">
        <div className="section-label">Technical Arsenal</div>
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="section-divider" />
      </div>

      <div className="row g-4">
        {categories.map(cat => (
          <div className="col-sm-6 col-lg-3" key={cat.title}>
            <div className="skill-category-card">
              <div className="d-flex align-items-center gap-2 mb-3">
                <div
                  style={{
                    width: 32, height: 32, borderRadius: 8,
                    background: `${cat.color}18`,
                    border: `1px solid ${cat.color}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: cat.color, fontSize: '1rem', flexShrink: 0,
                  }}
                >
                  <i className={`bi ${cat.icon}`} />
                </div>
                <div className="skill-category-title mb-0" style={{ color: cat.color }}>
                  {cat.title}
                </div>
              </div>
              <div>
                {cat.skills.map(s => (
                  <span
                    key={s.name}
                    className={`skill-pill ${s.featured ? 'featured' : ''}`}
                    style={
                      s.featured
                        ? { background: `linear-gradient(135deg, ${cat.color}, ${cat.color}cc)` }
                        : { borderColor: `${cat.color}30`, color: cat.color }
                    }
                  >
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
