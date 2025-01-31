import { Project } from '../components/ProjectsSection/ProjectsSection';
import AngularLogo from '../assets/icons/Angular.svg';
import DockerLogo from '../assets/icons/Docker.svg';
import GCPLogo from '../assets/icons/GCP.svg';
import GraphQLLogo from '../assets/icons/GraphQL.svg';
import MongoDBLogo from '../assets/icons/MongoDB.svg';
import NestJSLogo from '../assets/icons/Nest.js.svg';
import NextJsLogo from '../assets/icons/Next.js.svg';
import PostgresSQLLogo from '../assets/icons/PostgresSQL.svg';
import ReactLogo from '../assets/icons/React.svg';
import TypeScriptLogo from '../assets/icons/TypeScript.svg';
import JavaLogo from '../assets/icons/Java.svg';
import SpringLogo from '../assets/icons/Spring.svg';
import MySQLLogo from '../assets/icons/MySQL.svg';
import Infra from '../assets/projects/infra.webp'
import DeltaProject from '../assets/projects/DeltaProjects.webp'
import IVoyProject from '../assets/projects/ivoyProjects.webp';
import JobAPpProject from '../assets/projects/JobAppProject.webp';

export const projects: Project[] = [
  {
    title: 'Here are some projects',
    description: 'I have worked on',
    image: <img src={Infra} loading="lazy" alt="Infrastructure" />,
    techStack: []
  },
  {
    title: 'Apolo & Artemis',
    description: 'I designed & builded the API with a Microservice architecture, implemented the back office project (Artemis) & helped with some features for the front office web app (Apolo).',
    image: <img src={DeltaProject} loading="lazy" alt="Apolo & Artemis" />,
    techStack: [
      { name: 'NestJs', component: <img src={NestJSLogo} loading="lazy" alt="NestJS" className='tech-image'/> },
      { name: 'Angular', component: <img src={AngularLogo} loading="lazy" alt="Angular" className='tech-image'/> },
      { name: 'TypeScript', component: <img src={TypeScriptLogo} loading="lazy" alt="TypeScript" className='tech-image'/> },
      { name: 'MongoDB', component: <img src={MongoDBLogo} loading="lazy" alt="MongoDB" className='tech-image'/> },
      { name: 'GraphQL', component: <img src={GraphQLLogo} loading="lazy" alt="GraphQL" className='tech-image'/> },
      { name: 'GCP', component: <img src={GCPLogo} loading="lazy" alt="GCP" className='tech-image'/> },
      { name: 'Docker', component: <img src={DockerLogo} loading="lazy" alt="Docker" className='tech-image'/> },
    ]
  },
  {
    title: 'iVoy WMS & API with Microservice Architecture',
    description: 'I built the backend API & the progressive web app with React for a Warehouse Management System at iVoy and leaded the refactor from a Monolithic API to a Microservice Architecture API with GraphQL.',
    image: <img src={IVoyProject} loading="lazy" alt="iVoy" />,
    techStack: [
      { name: 'NestJs', component: <img src={NestJSLogo} loading="lazy" alt="NestJS" className='tech-image'/> },
      { name: 'React', component: <img src={ReactLogo} loading="lazy" alt="React" className='tech-image'/> },
      { name: 'NextJs', component: <img src={NextJsLogo} loading="lazy" alt="NextJs" className='tech-image'/> },
      { name: 'TypeScript', component: <img src={TypeScriptLogo} loading="lazy" alt="TypeScript" className='tech-image'/> },
      { name: 'PostgresSQL', component: <img src={PostgresSQLLogo} loading="lazy" alt="PostgresSQL" className='tech-image'/> },
      { name: 'GraphQL', component: <img src={GraphQLLogo} loading="lazy" alt="GraphQL" className='tech-image'/> },
      { name: 'Docker', component: <img src={DockerLogo} loading="lazy" alt="Docker" className='tech-image'/> },
    ]
  },
  {
    title: 'JobApp',
    description: 'Implementation of new features in the Backend with SpringBoot (Java) & implementation of the design for the FrontEnd web aplication with Angular.',
    image: <img src={JobAPpProject} loading="lazy" alt="JobApp" />,
    techStack: [
      { name: 'Spring Boot', component: <img src={SpringLogo} loading="lazy" alt="Spring" className='tech-image'/> },
      { name: 'Java', component: <img src={JavaLogo} loading="lazy" alt="Java" className='tech-image'/> },
      { name: 'MySQL', component: <img src={MySQLLogo} loading="lazy" alt="MySQL" className='tech-image'/> },
      { name: 'Angular', component: <img src={AngularLogo} loading="lazy" alt="Angular" className='tech-image'/> },
    ]
  },
];
