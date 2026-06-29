import { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    role: 'Full Stack Developer',
    company: 'IIE Tech CLUB',
    period: '2026 — Present',
    description:
      'Developed, shipped and maintaining modern website of Ideal Institute of Engineering with comfortable UX, clean backend and observable deployments.',
    tags: ['React', 'REST', 'Git', 'Docker'],
    current: true,
  },
  {
    id: 'exp-2',
    role: 'Full Stack Developer',
    company: 'Fiverr',
    period: '2025 — Present',
    description:
      'Developing, shipping and deploying multiple performant, elegant, resilient and clean full cycle products for clients meeting their all requirements.',
    tags: ['React', 'Spring', 'AWS', 'Redis', 'PostgreSQL'],
    current: false,
  },
];
