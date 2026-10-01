import React from 'react';

const Footer = () => (
  <footer className="footer-custom py-4">
    <div className="container">
      <div className="text-center">
        <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem' }}>
          © {new Date().getFullYear()}{' '}
          <span style={{ color: '#93c5fd', fontWeight: 600 }}>Thirumalai Rajamanickam</span>
          {' '}— Senior System Analyst, IBM India
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
