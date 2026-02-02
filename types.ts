
export enum ProjectCategory {
  WORDPRESS = 'WordPress',
  WEBFLOW = 'Webflow',
  SOFTWARE = 'Software',
  ALL = 'All'
}

export interface Project {
  id: string;
  title: string;
  description: string;
  url?: string;
  liveDemoUrl?: string;
  category: ProjectCategory;
  imageUrl: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'Frontend' | 'Backend' | 'Design' | 'CMS' | 'Marketing';
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
