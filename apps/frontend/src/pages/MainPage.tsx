import React, { Suspense, lazy, useEffect } from 'react';
import { DynamicLayout } from '@my-portfolio/react-components';
import { HeroSection } from '../components/HeroSection/HeroSection';
import { Footer } from '../components/Footer/Footer';
import { experiences } from '../constants/experiences';
import { projects } from '../constants/projects';
import { skills } from '../constants/skills';
import { TopBar } from '../components/TopBar/TopBar';

const AboutMeSection = lazy(() => import('../components/AboutMeSection/AboutMeSection'));
const AdvancedSectionDivider = lazy(() => import('../components/AdvancedSectionDivider/AdvancedSectionDivider'));
const MyExperienceSection = lazy(() => import('../components/MyExperienceSection/MyExperienceSection'));
const ProjectsSection = lazy(() => import('../components/ProjectsSection/ProjectsSection'));
const SkillsSection = lazy(() => import('../components/SkillsSection/SkillsSection'));
const ContactMeSection = lazy(() => import('../components/ContactMeSection/ContactMeSection'));


export const MainPage: React.FC = () => {

  useEffect(() => {
    const handlePageShow = (event: { persisted: unknown; }) => {
      if (event.persisted) {
        console.log("Page restored from bfcache");
        // Restore state or rehydrate from localStorage/sessionStorage
      }
    };
  
    window.addEventListener("pageshow", handlePageShow);
  
    return () => {
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, []);
  
  return (
    <DynamicLayout direction="column" alignItems="center" justifyContent="space-around" style={{ padding: '0px' }}>
      <TopBar />
      <main>
        <DynamicLayout direction="column" style={{ flex: 1, overflowY: 'auto', padding: '0px' }}>
          <HeroSection />
          {/* Suspense Wrapping Lazy Components */}
          <Suspense fallback={<div>Loading...</div>}>
            <AboutMeSection />
            <AdvancedSectionDivider />
            <MyExperienceSection experiences={experiences} />
            <ProjectsSection projects={projects} />
            <SkillsSection skills={skills} />
            <ContactMeSection />
          </Suspense>
        </DynamicLayout>
      </main>
      <Footer />
    </DynamicLayout>
  );
};