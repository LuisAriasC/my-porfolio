/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react';
import './TopBar.scss';

export const TopBar: React.FC = () => {

  const [darkMode, setDarkMode] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.setAttribute('data-theme', darkMode ? 'light' : 'dark');
  };
  return (
    <header className='topbar'
    >
      {/* Top Bar Menu */}
      <nav className="topbar-menu">
       <button className="icon-button" title="Home" onClick={() => scrollToSection('home')}>
          <span className="icon">🏠</span>
          <span className="icon-label">Home</span>
        </button>
        <button className="icon-button" title="About" onClick={() => scrollToSection('about')}>
          <span className="icon">🙋</span>
          <span className="icon-label">About</span>
        </button>
        <button className="icon-button" title="Experience" onClick={() => scrollToSection('experience')}>
          <span className="icon">💼</span>
          <span className="icon-label">Experience</span>
        </button>
        <button className="icon-button" title="Projects" onClick={() => scrollToSection('projects')}>
          <span className="icon">📁</span>
          <span className="icon-label">Projects</span>
        </button>
        <button className="icon-button" title="Technologies" onClick={() => scrollToSection('technologies')}>
          <span className="icon">⚙️</span>
          <span className="icon-label">Skills</span>
        </button>
        <button className="icon-button" title="Contact" onClick={() => scrollToSection('contact')}>
          <span className="icon">📧</span>
          <span className="icon-label">Contact</span>
        </button>
        <button className="icon-button toggle-theme" onClick={toggleTheme} title="Toggle Theme">
          <span className="icon">{darkMode ? '☀️' : '🌙'}</span>
        </button>
      </nav>
    </header>
  );
};
