export interface Testimonial {
  initials: string;
  name: string;
  role: string;
  text: string;
  stars: boolean[];
  halfStar?: boolean;
}

const testimonials: Testimonial[] = [
  {
    initials: 'AM',
    name: 'Aninda Mehta',
    role: 'Product Lead · ShopFlow Inc.',
    text: 'Subham delivered beyond expectations. The platform is blazing fast, the design is elegant, and our conversion rate improved by 34%. His attention to detail is unmatched.',
    stars: [true, true, true, true, true],
  },
  {
    initials: 'JK',
    name: 'James Kowalski',
    role: 'UI/UX Designer · Launchpad Labs',
    text: "Working with Subham was a breath of fresh air. Clear communication, zero drama, and the code was actually maintainable. That's a rare combination to find.",
    stars: [true, true, true, true, true],
  },
  {
    initials: 'DP',
    name: 'Diana Patel',
    role: 'CEO · NovaSky',
    text: 'He rebuilt our entire dashboard in 3 weeks. The team loves it, stakeholders love it, and our data is finally making sense. Genuinely transformative work.',
    stars: [true, true, true, true, true],
  },
  {
    initials: 'TL',
    name: 'Tanish Lagan',
    role: 'Founder · IterateHQ',
    text: "Our app went from a slow, clunky mess to a sleek product users rave about. Subham's expertise in performance optimisation saved us from a painful complete rebuild.",
    stars: [true, true, true, true, false],
    halfStar: true,
  },
  {
    initials: 'MR',
    name: 'Murari Sengupta',
    role: 'Accountant · Axiom Studio',
    text: 'Five-star across the board. He asked the right questions, challenged assumptions respectfully, and shipped a product that outlived the original specification entirely.',
    stars: [true, true, true, true, true],
  },
  {
    initials: 'BC',
    name: 'Babul Chaturbedi',
    role: 'Consultant · CartPilot',
    text: "I've hired dozens of freelancers. Subham is in the top 2%. He treats your project like his own business — obsessively thorough and genuinely invested in the outcome.",
    stars: [true, true, true, true, false],
    halfStar: true,
  },
];

export default testimonials;
