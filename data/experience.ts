export interface ExperienceItem {
  num: string;
  company: string;
  role: string;
  type: string;
  duration: string;
  location: string;
  description: string;
  highlights: string[];
  tech: string[];
}

const experience: ExperienceItem[] = [
  {
    num: '01',
    company: 'Ipheginia',
    role: 'Full Stack Developer',
    type: 'Part-time',
    duration: 'Jan 2026 — Present',
    location: 'Kalyani, India',
    description:
      'Led architecture and development of the official student management software of my college made for the management and teachers to smoothly execute daily activities and programs from a single application.',
    highlights: [
      'Reduced execution time by 12% and server uptime by 3% average.',
      'Designed and integrated a real-time notification engine processing 5k+ events per day.',
      'Implemented RBAC and SBAC for better multi-vendor experience and reduced security bugs by 70%.',
    ],
    tech: ['React', 'TypeScript', 'Node', 'PostgreSQL', 'REST', 'Redis'],
  },
  {
    num: '02',
    company: 'Fiverr',
    role: 'Full Stack Developer',
    type: 'Part-time',
    duration: 'Dec 2024 — Present',
    location: 'Remote',
    description:
      'Architected and coded several client-facing web applications for clients needing simple design and reliable backbone for solving their problems in the most efficient way with the best possible outcome.',
    highlights: [
      'Delivered 12 production projects on time and under budget across a 12-month engagement.',
      'Reduced average production cost by 11% across all projects.',
      'Integrated third-party payment gateways (Stripe, PayPal) for three e-commerce clients.',
    ],
    tech: ['Next', 'WebSockets', 'Node', 'Docker', 'MongoDB', 'AWS'],
  },
];

export default experience;
