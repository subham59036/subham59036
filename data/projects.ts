export interface Project {
  num: string;
  title: string;
  desc: string;
  tech: string[];
  github: string;
  live?: string;
}

const projects: Project[] = [
  {
    num: '01',
    title: 'E-Commerce Platform',
    desc: 'Full-featured store with real-time inventory, Stripe payments, and a custom admin dashboard. Serving 10k+ users monthly with 99.9% uptime.',
    tech: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis'],
    github: '#',
  },
  {
    num: '02',
    title: 'Job Portal Platform',
    desc: 'Open-source boilerplate for rapid SaaS development — auth, billing, multi-tenancy, and API generation out of the box. 2k+ GitHub stars.',
    tech: ['TypeScript', 'Node.js', 'Prisma', 'Docker'],
    github: '#',
  },
];

export default projects;
