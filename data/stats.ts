export interface Stat {
  target: number;
  label: string;
}

const stats: Stat[] = [
  { target: 1,  label: 'Years Experience' },
  { target: 8,  label: 'Projects Done'    },
  { target: 40, label: 'Happy Clients'    },
  { target: 15, label: 'Publications'     },
];

export default stats;
