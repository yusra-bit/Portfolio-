
import { Project, ProjectCategory, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Hotel Management System',
    description: 'A comprehensive software solution for managing reservations, staff, and inventory for luxury hotels.',
    url: 'https://github.com/yusra-bit/hotel_managment_system',
    category: ProjectCategory.SOFTWARE,
    imageUrl: ''
  },
  {
    id: '2',
    title: 'Daily Journal',
    description: 'A personalized digital journal application with secure storage and intuitive daily logging features.',
    url: 'https://github.com/yusra-bit/DailyJournal',
    category: ProjectCategory.SOFTWARE,
    imageUrl: ''
  },
  {
    id: '3',
    title: 'Bilad Tech',
    description: 'Cutting-edge technology consultancy landing page focused on digital transformation.',
    liveDemoUrl: 'https://bilad-tech.webflow.io/',
    category: ProjectCategory.WEBFLOW,
    imageUrl: ''
  },
  {
    id: '4',
    title: 'One4Seven Digital Menu',
    description: 'Dine-in digital menu system designed for high-end restaurants to streamline the ordering process.',
    liveDemoUrl: 'https://one4seven-digital-menu.webflow.io/home',
    category: ProjectCategory.WEBFLOW,
    imageUrl: ''
  },
  {
    id: '5',
    title: 'Irada Consulting',
    description: 'Corporate website for a premier management and strategy consulting firm.',
    liveDemoUrl: 'https://iradaconsulting.org/',
    category: ProjectCategory.WORDPRESS,
    imageUrl: ''
  },
  {
    id: '6',
    title: 'Timeout Hargeisa',
    description: 'Dine-in digital menu and venue platform providing an interactive experience for local customers.',
    liveDemoUrl: 'https://timeouthargeisa.com/',
    category: ProjectCategory.WORDPRESS,
    imageUrl: ''
  },
  {
    id: '7',
    title: 'Daad Foundation',
    description: 'Official portal for a non-profit foundation dedicated to social impact and education.',
    liveDemoUrl: 'https://daadfoundation.org/',
    category: ProjectCategory.WORDPRESS,
    imageUrl: ''
  },
  {
    id: '8',
    title: 'One4Seven Restaurant',
    description: 'Dine-in digital menu integrated with a complete restaurant reservation and ordering ecosystem.',
    liveDemoUrl: 'https://www.one4sevenrestaurant.com/',
    category: ProjectCategory.WORDPRESS,
    imageUrl: ''
  },
  {
    id: '9',
    title: 'Yusra Personal Space',
    description: 'Creative portfolio showcasing diverse design and development explorations.',
    liveDemoUrl: 'https://yusraabdi.great-site.net/',
    category: ProjectCategory.WORDPRESS,
    imageUrl: ''
  }
];

export interface SkillWithIcon extends Skill {
  icon: string;
}

export const SKILLS_LIST: SkillWithIcon[] = [
  { name: 'HTML', level: 95, category: 'Frontend', icon: 'fa-brands fa-html5' },
  { name: 'CSS', level: 90, category: 'Frontend', icon: 'fa-brands fa-css3-alt' },
  { name: 'JS', level: 85, category: 'Frontend', icon: 'fa-brands fa-js' },
  { name: 'React', level: 90, category: 'Frontend', icon: 'fa-brands fa-react' },
  { name: 'Node.js', level: 80, category: 'Backend', icon: 'fa-brands fa-node-js' },
  { name: 'SQL', level: 75, category: 'Backend', icon: 'fa-solid fa-database' },
  { name: 'MongoDB', level: 70, category: 'Backend', icon: 'fa-solid fa-leaf' },
  { name: 'WordPress', level: 95, category: 'CMS', icon: 'fa-brands fa-wordpress' },
  { name: 'Webflow', level: 90, category: 'CMS', icon: 'fa-solid fa-w' },
  { name: 'Figma', level: 85, category: 'Design', icon: 'fa-brands fa-figma' },
  { name: 'Canva', level: 95, category: 'Design', icon: 'fa-solid fa-palette' },
  { name: 'SEO', level: 85, category: 'Marketing', icon: 'fa-solid fa-magnifying-glass-chart' },
  { name: 'Meta Ads', level: 80, category: 'Marketing', icon: 'fa-brands fa-facebook' },
  { name: 'Email Marketing', level: 85, category: 'Marketing', icon: 'fa-solid fa-envelope-open-text' },
  { name: 'Social Media Management', level: 90, category: 'Marketing', icon: 'fa-solid fa-share-nodes' }
];
