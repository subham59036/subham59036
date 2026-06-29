export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
  current: boolean;
}

export interface Personal {
  label: string;
  value: number;
  suffix: string;
}

export interface Social {
  name: string;
  handle: string;
  href: string;
}

export interface Project {
  title: string;
  description: string;
  github: string;
  tags: string[];
}

export interface Publication {
  title: string;
  description: string;
  medium: string;
  tags: string[];
  date: string;
  platform: string;
}

export interface Skill {
  name: string;
  percentage: number;
}

export interface Testimonal {
  name: string;
  designation: string;
  comment: string;
}
