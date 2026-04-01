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
    title: 'Food Delivery Platform',
    desc: 'Real-time BI platform integrating ML predictions with a drag-and-drop interface. Reduced reporting time by 60% for enterprise clients.',
    tech: ['React', 'Python', 'TensorFlow', 'D3.js'],
    github: '#',
  },
  {
    num: '03',
    title: 'Job Portal Platform',
    desc: 'Open-source boilerplate for rapid SaaS development — auth, billing, multi-tenancy, and API generation out of the box. 2k+ GitHub stars.',
    tech: ['TypeScript', 'Node.js', 'Prisma', 'Docker'],
    github: '#',
  },
  {
    num: '04',
    title: 'Real-Time Chat App',
    desc: 'Slack-like platform with end-to-end encryption, file sharing, voice notes, and threaded conversations. Scalable to 100k concurrent users.',
    tech: ['Socket.io', 'React', 'MongoDB', 'AWS'],
    github: '#',
  },
  {
    num: '05',
    title: 'Blogging Platform',
    desc: 'Headless CMS built for creative professionals — drag-and-drop portfolio builder with custom domain support, analytics, and CDN delivery.',
    tech: ['Next.js', 'Sanity', 'Vercel', 'Cloudinary'],
    github: '#',
  },
];

export default projects;
