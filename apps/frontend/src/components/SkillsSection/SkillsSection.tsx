import React from 'react';
import './SkillsSection.scss';
import { DynamicParagraph, DynamicLayout } from '@my-portfolio/react-components';

export interface Skill {
  name: string;
  proficiency: number;
  icon: React.ReactNode; // Icon component for the skill
}

export interface SkillsSectionProps {
  skills: Skill[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  return (
    <div id='technologies'>
      <DynamicLayout direction="column" gap={20} className="skills-section">
          <DynamicParagraph className="skills-title">
            My Skills
          </DynamicParagraph>
        <DynamicLayout direction="row" wrap="wrap" gap={20} justifyContent="center" className="skills-list">
          {skills.map((skill, index) => (
            <div key={`skill-${index}`}className={`skill-card`}>
              <div className="skill-card-icon">{skill.icon}</div>
              <DynamicParagraph className='skill-card-title'>{skill.name}</DynamicParagraph>
            </div>
          ))}
        </DynamicLayout>
      </DynamicLayout>
    </div>
  );
};

export default SkillsSection;