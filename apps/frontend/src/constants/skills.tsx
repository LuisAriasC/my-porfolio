import { Skill } from "../components/SkillsSection/SkillsSection";
import TypeScriptLogo from '../assets/icons/TypeScript.svg';
import NodejsLogo from '../assets/icons/Node.js.svg';
import NestJSLogo from '../assets/icons/Nest.js.svg';
import ReactLogo from '../assets/icons/React.svg';
import GraphQLLogo from '../assets/icons/GraphQL.svg';
import MongoDBLogo from '../assets/icons/MongoDB.svg';
import JavaScriptLogo from '../assets/icons/JavaScript.svg';
import PostgresSQLLogo from '../assets/icons/PostgresSQL.svg';
import HTML5Logo from '../assets/icons/HTML5.svg';
import CSS3Logo from '../assets/icons/CSS3.svg';
import GCPLogo from '../assets/icons/GCP.svg';
import DockerLogo from '../assets/icons/Docker.svg';
import AngularLogo from '../assets/icons/Angular.svg';
import CPPLogo from '../assets/icons/C++.svg';
import NextJsLogo from '../assets/icons/Next.js.svg';
import BashLogo from '../assets/icons/Bash.svg';
import GitLogo from '../assets/icons/Git.svg';
import PythonLogo from '../assets/icons/Python.svg';
import NGINXLogo from '../assets/icons/NGINX.svg';
import RedisLogo from '../assets/icons/Redis.svg';

export const skills: Skill[] = [
  { name: 'TypeScript', proficiency: 100, icon: <img src={TypeScriptLogo} alt="TypeScript" /> },
  { name: 'NodeJs', proficiency: 100, icon: <img src={NodejsLogo} alt="NodeJs" /> },
  { name: 'NestJs', proficiency: 100, icon: <img src={NestJSLogo} alt="NestJS" /> },
  { name: 'React', proficiency: 90, icon: <img src={ReactLogo} alt="React" /> },
  { name: 'GraphQL', proficiency: 100, icon: <img src={GraphQLLogo} alt="GraphQL" /> },
  { name: 'MongoDB', proficiency: 100, icon: <img src={MongoDBLogo} alt="MongoDB" />  },
  { name: 'JavaScript', proficiency: 100, icon: <img src={JavaScriptLogo} alt="JavaScript" /> },
  { name: 'PostgresSQL', proficiency: 90, icon: <img src={PostgresSQLLogo} alt="PostgresSQL" />  },
  { name: 'HTML', proficiency: 90, icon: <img src={HTML5Logo} alt="HTML" /> },
  { name: 'CSS', proficiency: 90, icon: <img src={CSS3Logo} alt="CSS" /> },
  { name: 'GCP', proficiency: 80, icon: <img src={GCPLogo} alt="GCP" /> },
  { name: 'Docker', proficiency: 90, icon: <img src={DockerLogo} alt="Docker" /> },
  { name: 'Angular', proficiency: 90, icon: <img src={AngularLogo} alt="Angular" /> },
  { name: 'C++', proficiency: 85, icon: <img src={CPPLogo} alt="C++" /> },
  { name: 'NextJs', proficiency: 85, icon: <img src={NextJsLogo} alt="NextJs" /> },
  { name: 'CLI scripting', proficiency: 80, icon: <img src={BashLogo} alt="Bash" /> },
  { name: 'Git', proficiency: 100, icon: <img src={GitLogo} alt="Git" /> },
  { name: 'Python', proficiency: 70, icon: <img src={PythonLogo} alt="Python" /> },
  { name: 'NGINX', proficiency: 80, icon: <img src={NGINXLogo} alt="NGINX" /> },
  { name: 'Redis', proficiency: 100, icon: <img src={RedisLogo} alt="Redis" /> }
];