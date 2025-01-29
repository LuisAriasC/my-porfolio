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
import Infra from '../assets/projects/infra.png'
import DeltaProject from '../assets/projects/DeltaProjects.png'
import IVoyProject from '../assets/projects/ivoyProjects.png';
import JobAPpProject from '../assets/projects/JobAppProject.png';

export const projects: Project[] = [
  {
    title: 'Here are some projects',
    description: 'I have worked on',
    image: <img src={Infra} alt="Infrastructure" />,
    techStack: []
  },
  {
    title: 'Apolo & Artemis',
    description: 'I designed & builded the API with a Microservice architecture, implemented the back office project (Artemis) & helped with some features for the front office web app (Apolo).',
    image: <img src={DeltaProject} alt="Apolo & Artemis" />,
    techStack: [
      { name: 'NestJs', component: <img src={NestJSLogo} alt="NestJS" className='tech-image'/> },
      { name: 'Angular', component: <img src={AngularLogo} alt="Angular" className='tech-image'/> },
      { name: 'TypeScript', component: <img src={TypeScriptLogo} alt="TypeScript" className='tech-image'/> },
      { name: 'MongoDB', component: <img src={MongoDBLogo} alt="MOngoDB" className='tech-image'/> },
      { name: 'GraphQL', component: <img src={GraphQLLogo} alt="GraphQL" className='tech-image'/> },
      { name: 'GCP', component: <img src={GCPLogo} alt="GCP" className='tech-image'/> },
      { name: 'Docker', component: <img src={DockerLogo} alt="Docker" className='tech-image'/> },
    ]
  },
  {
    title: 'iVoy WMS & API with Microservice Architecture',
    description: 'I built the backend API & the progressive web app with React for a Warehouse Management System at iVoy and leaded the refactor from a Monolithic API to a Microservice Architecture API with GraphQL.',
    image: <img src={IVoyProject} alt="iVoy" />,
    techStack: [
      { name: 'NestJs', component: <img src={NestJSLogo} alt="NestJS" className='tech-image'/> },
      { name: 'React', component: <img src={ReactLogo} alt="React" className='tech-image'/> },
      { name: 'NextJs', component: <img src={NextJsLogo} alt="NextJs" className='tech-image'/> },
      { name: 'TypeScript', component: <img src={TypeScriptLogo} alt="TypeScript" className='tech-image'/> },
      { name: 'PostgresSQL', component: <img src={PostgresSQLLogo} alt="PostgresSQL" className='tech-image'/> },
      { name: 'GraphQL', component: <img src={GraphQLLogo} alt="GraphQL" className='tech-image'/> },
      { name: 'Docker', component: <img src={DockerLogo} alt="Docker" className='tech-image'/> },
    ]
  },
  {
    title: 'JobApp',
    description: 'Implementation of new features in the Backend with SpringBoot (Java) & implementation of the design for the FrontEnd web aplication with Angular.',
    image: <img src={JobAPpProject} alt="JobApp" />,
    techStack: [
      { name: 'Spring Boot', component: <img src={SpringLogo} alt="Spring" className='tech-image'/> },
      { name: 'Java', component: <img src={JavaLogo} alt="Java" className='tech-image'/> },
      { name: 'MySQL', component: <img src={MySQLLogo} alt="MySQL" className='tech-image'/> },
      { name: 'Angular', component: <img src={AngularLogo} alt="Angular" className='tech-image'/> },
    ]
  },
];
