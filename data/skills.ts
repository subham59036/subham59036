export interface Skill {
  label: string;
  percent: number;
}

const skills: Skill[] = [
  { label: 'React.js',              percent: 70 },
  { label: 'Python',                percent: 80 },
  { label: 'JavaScript / TypeScript', percent: 90 },
  { label: 'Node.js',               percent: 90 },
  { label: 'MongoDB',               percent: 70 },
  { label: 'PostgreSQL',            percent: 90 },
  { label: 'Redis',                 percent: 70 },
  { label: 'Docker',                percent: 60 },
  { label: 'AWS',                   percent: 60 },
  { label: 'Nest.js',               percent: 90 },
  { label: 'FastAPI',               percent: 50 },
  { label: 'Kubernetes',            percent: 30 },
  { label: 'Terraform',             percent: 30 },
  { label: 'GitHub Actions',        percent: 50 },
  { label: 'HTML / CSS',            percent: 60 },
  { label: 'WebSockets',            percent: 50 },
  { label: 'Kafka',                 percent: 50 },
  { label: 'gRPC',                  percent: 50 },
  { label: 'Prometheus',            percent: 50 },
  { label: 'Grafana',               percent: 50 },
  { label: 'Next.js',               percent: 30 },
  { label: 'Java',                  percent: 30 },
];

export default skills;
