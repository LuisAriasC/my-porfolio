import React from 'react';
import './Footer.scss';
import LinkedInIcon from '../../assets/icons/LinkedIn.svg';
import GitHubIcon from '../../assets/icons/GitHub.svg';
import { DynamicParagraph } from '@my-portfolio/react-components';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      {/* Left Section: Social Media */}
      <div className="footer-left">
        <a href="https://www.linkedin.com/in/luis-carlos-arias-camacho-b99913185" target="_blank" rel="noopener noreferrer">
          <img src={LinkedInIcon} alt="LinkedIn" className="footer-icon" />
        </a>
        <a href="https://github.com/LuisAriasC" target="_blank" rel="noopener noreferrer">
          <img src={GitHubIcon} alt="GitHub" className="footer-icon" />
        </a>
      </div>

      {/* Right Section: Copyright */}
      <div className="footer-right">
        <DynamicParagraph className="footer-text">&copy; 2025 Luis Carlos Arias Camacho</DynamicParagraph>
      </div>
    </footer>
  );
};