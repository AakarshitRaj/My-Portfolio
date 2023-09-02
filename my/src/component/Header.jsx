import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>
        <div className="portfolio">
        <span class="port">Port</span><span class="folio">folio</span>
</div>

        <div className="menu">
          <div className="home">Home</div>
          <div className="services">Servies</div>
          <div className="resumes">Resume</div>
          <div className="blog">Blog</div>
        
        </div>
        <div className="contact">Contact</div>
    </div>
  )
}

export default Header