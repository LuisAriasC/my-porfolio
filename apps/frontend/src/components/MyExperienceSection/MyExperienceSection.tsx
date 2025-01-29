import React, { useEffect, useRef } from 'react';
import './MyExperienceSection.scss';
import { DynamicHeading, DynamicParagraph } from '@my-portfolio/react-components';

export interface Experience {
  title: string;
  description: string;
  date: string;
  company: string;
  logo: React.ReactNode; // React component for the company logo
}

interface MyExperienceSectionProps {
  experiences: Experience[]; // Array of experiences passed as props
}

const MyExperienceSection: React.FC<MyExperienceSectionProps> = ({
  experiences,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const items = section.querySelectorAll('.experience-item');
      const viewportHeight = window.innerHeight;

      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= viewportHeight) {
          item.classList.add('visible');
        } else {
          item.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="experience" className="my-experience-section" ref={sectionRef}>
      <DynamicHeading level={2} className='my-experience-title'>My Experience</DynamicHeading>
      <div className="timeline" />
      {experiences.map((experience, index) => (
        <div
          key={index}
          className={`experience-item right`}
        >
          <div className="experience-content-container">
            {/* Experience Content */}
            <div className="experience-content">
              <DynamicHeading level={2} className='experience-title'>{experience.title}</DynamicHeading>
              <DynamicParagraph className="experience-company">At {experience.company}</DynamicParagraph>
              <DynamicParagraph className="experience-description">{experience.description}</DynamicParagraph>
              <span className="experience-date">{experience.date}</span>
            </div>

            {/* Experience Logo */}
            <div className="experience-logo">{experience.logo}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyExperienceSection;