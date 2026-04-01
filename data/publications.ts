export interface Publication {
  img: string;
  alt: string;
  platform: string;
  title: string;
  desc: string;
  readLabel: string;
  href: string;
}

const publications: Publication[] = [
  {
    img: 'https://images.unsplash.com/photo-1555066931-4365d14431b9?w=600&h=300&fit=crop&q=80',
    alt: 'Article cover',
    platform: 'Article · Medium',
    title: 'The Hidden Cost of Over-Engineering',
    desc: "Why simplicity wins in software architecture and how I stopped building for scale I'll never need — a reflection on three years of expensive mistakes.",
    readLabel: 'Read Article',
    href: '#',
  },
  {
    img: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=600&h=300&fit=crop&q=80',
    alt: 'Tutorial cover',
    platform: 'Tutorial · Medium',
    title: 'Building Real-Time Apps with WebSockets',
    desc: 'A step-by-step guide to production-ready real-time features using Socket.io — covering scaling, auth, reconnection logic, and message queuing.',
    readLabel: 'Read Tutorial',
    href: '#',
  },
  {
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=300&fit=crop&q=80',
    alt: 'Post cover',
    platform: 'Deep Dive · Medium',
    title: 'Why I Switched from REST to gRPC (and Back)',
    desc: 'An honest account of adopting GraphQL in a production codebase — the wins, the hidden pitfalls, and why we ultimately chose a hybrid approach.',
    readLabel: 'Read Post',
    href: '#',
  },
  {
    img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=300&fit=crop&q=80',
    alt: 'Opinion cover',
    platform: 'Opinion · Medium',
    title: "AI Won't Replace Developers — Bad Ones Will",
    desc: 'On using AI tools as a force multiplier rather than a crutch — and what skills actually matter in the age of Copilot and Claude.',
    readLabel: 'Read Opinion',
    href: '#',
  },
  {
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=300&fit=crop&q=80',
    alt: 'Guide cover',
    platform: 'Guide · Medium',
    title: 'PostgreSQL Performance: 10 Patterns That Changed Everything',
    desc: 'From query optimisation to connection pooling — the indexing patterns and configuration changes that cut our database query time by 80%.',
    readLabel: 'Read Guide',
    href: '#',
  },
  {
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=300&fit=crop&q=80',
    alt: 'Case Study cover',
    platform: 'Case Study · Medium',
    title: 'How I Built and Shipped a SaaS in 30 Days',
    desc: 'A transparent breakdown of my indie hacker challenge — tech choices, marketing, first paying customers, and the lessons every solo builder needs to know.',
    readLabel: 'Read Case Study',
    href: '#',
  },
];

export default publications;
