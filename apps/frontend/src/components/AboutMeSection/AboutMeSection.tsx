import React from 'react';
import './AboutMeSection.scss';
import Luis from '../../assets/about/luis.webp';
import { DynamicParagraph } from '@my-portfolio/react-components';

const AboutMeSection: React.FC = () => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/MyCV.pdf';
    link.download = 'LuisAriasCV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section id='about' className="about-me-section">
      {/* Left Side: Image */}
      <div className="about-me-left">
        <DynamicParagraph className='about-me-title'>About Me</DynamicParagraph>
        <img
          src={Luis} 
          alt="Luis Carlos Arias Camacho"
          className="about-me-image"
        />
      </div>

      {/* Right Side: Text */}
      <div className="about-me-right">

        <DynamicParagraph className="about-me-description">
          I am a software engineer with over six years of experience solving complex challenges and creating seamless digital solutions. I take pride in delivering innovative experiences that consistently exceed client expectations across diverse industries.
        </DynamicParagraph>
        <DynamicParagraph className="about-me-description">
          Every line of code I write is crafted with precision to ensure scalability, performance, and maintainability. My focus is on building high-quality solutions that are efficient, functional, and built to last.
        </DynamicParagraph>
        <DynamicParagraph className="about-me-description">
          Beyond work, I’m an avid mountain biker who loves exploring nature's trails. I’m also passionate about music, curating playlists, and performing as a DJ. Traveling the world inspires my creativity and provides fresh perspectives that enhance both my personal and professional growth.
        </DynamicParagraph>
        <div className="about-me-buttons">
          <button className="btn resume-btn" onClick={handleDownload}>Download Resume</button>
          <button className="btn contact-btn" onClick={() => window.location.href = '#contact'}>Contact Me</button>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;