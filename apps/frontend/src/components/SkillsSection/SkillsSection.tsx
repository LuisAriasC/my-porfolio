import React from 'react';
import './SkillsSection.scss';
import { DynamicHeading, DynamicLayout } from '@my-portfolio/react-components';

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
          <DynamicHeading level={2} className="skills-title">
            My Skills
          </DynamicHeading>
        <DynamicLayout direction="row" wrap="wrap" gap={20} justifyContent="center" className="skills-list">
          {skills.map((skill, index) => (
            <div className={`skill-card`}>
              <div className="skill-card-icon">{skill.icon}</div>
              <DynamicHeading level={3} className='skill-card-title'>{skill.name}</DynamicHeading>
            </div>
          ))}
        </DynamicLayout>
      </DynamicLayout>
    </div>
  );
};

export default SkillsSection;