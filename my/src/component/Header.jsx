import React from 'react';
import './Header.css';

function Header() {
  return (
    <div>
      <div className="portfolio">
        <span className="port">Port</span><span className="folio">folio</span>
      </div>

      <div className="menu">
        <div className="home">Home</div>
        <div className="services">Services</div>
        <div className="resumes">Resume</div>
        <div className="blog">Blog</div>
      </div>
      
      <div className="contact">Contact</div>
    </div>
  );
}

export default Header;
