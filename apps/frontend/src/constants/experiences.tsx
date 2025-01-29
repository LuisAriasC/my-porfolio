import Delta from '../assets/experience/delta.png';
import iVoy from '../assets/experience/ivoy.png';
import eBitware from '../assets/experience/ebitware.png';
import Colgate from '../assets/experience/cp.png';
import { Experience } from '../components/MyExperienceSection/MyExperienceSection';

export const experiences: Experience[] = [
    {
      title: 'Senior FullStack Software Engineer',
      description: `Developed a secure microservices backend from scratch with GraphQL Federation and RESTful APIs, adhering to
OWASP standards. Built an Angular admin app, optimized GCP Dockerized deployments, and mentored junior
developers, enhancing workflows, productivity, and code quality.`,
      date: '2022 - Present',
      company: 'Delta Protect',
      logo: <img src={Delta} alt="Delta" />, // React component for the logo
    },
    {
      title: 'Staff Software Engineer',
      description: `Designed and implemented a Warehouse Management System using GraphQL microservices with NestJS and PostgreSQL. Developed a React/Redux web application for real-time package tracking and warehouse operations. Led the migration of legacy systems from Java to NestJS with a federated architecture and managed a team of 4, delivering scalable, on-schedule solutions.`,
      date: '2020 - 2022',
      company: 'iVoy',
      logo: <img src={iVoy} alt="iVoy" />, // React component for the logo
    },
    {
      title: 'FullStack Software Engineer',
      description: `Built the backend for an HR management application using SpringBoot and MySQL and delivered RESTful APIs for attendance tracking and inventory management.`,
      date: '2019 - 2020',
      company: 'eBitware',
      logo: <img src={eBitware} alt="eBitware" />, // React component for the logo
    },
    {
      title: 'IT Internship',
      description: 'Collaborated with a team to build scalable solutions for a sales CRM for the sellers in LATAM and automatization of reports with Visual Vasic in Excel connected to SAP.',
      date: '2019 - 2020',
      company: 'Colgate Palmolive',
      logo: <img src={Colgate} alt="Colgate" />, // React component for the logo
    },
  ];