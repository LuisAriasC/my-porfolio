import React, { useEffect, useRef } from 'react';
import './ProjectsSection.scss';
import { DynamicHeading, DynamicParagraph } from '@my-portfolio/react-components';

export interface Project {
  title: string; // Project title
  description: string; // Project description
  image: React.ReactNode; // React component or image element for the project
  techStack: { component: React.ReactNode; name: string }[]; // Array of technology stack components with names
}

const ProjectsSection: React.FC<{ projects: Project[] }> = ({ projects }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const titles = section.querySelectorAll('.project-title');
    const descriptions = section.querySelectorAll('.project-description');
    const images = section.querySelectorAll('.project-image');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    titles.forEach((title) => observer.observe(title));
    descriptions.forEach((description) => observer.observe(description));
    images.forEach((image) => observer.observe(image));

    return () => {
      titles.forEach((title) => observer.unobserve(title));
      descriptions.forEach((description) => observer.unobserve(description));
      images.forEach((image) => observer.unobserve(image));
    };
  }, []);

  return (
    <div id='projects' className="projects-section" ref={sectionRef}>
      {projects.map((project, index) => (
        <div key={index} className="project-item">
          {/* Left Section: Text */}
          <div className="project-text">
            <DynamicParagraph className='project-title'>{project.title}</DynamicParagraph>
            <DynamicParagraph className="project-description">{project.description}</DynamicParagraph>
            {
                project.techStack.length > 0 && (
                    <>
                        <DynamicParagraph className="project-description">Tech Stack</DynamicParagraph>
                        <div className="tech-stack">
                          {project.techStack.map((tech, idx) => (
                            <div key={idx} className="tech-item">
                              <div className="tech-component">{tech.component}</div>
                              <span className="tech-name">{tech.name}</span>
                            </div>
                          ))}
                        </div>
                    </>
                )
            }
          </div>

          {/* Right Section: Image */}
          <div className="project-image">{project.image}</div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsSection