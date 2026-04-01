import type { Metadata, Viewport } from 'next';
import { Bebas_Neue, DM_Mono, Syne } from 'next/font/google';
import './globals.css';

/* ─── Google Fonts via next/font (self-hosted, no layout shift) ─── */
const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-disp',
  display: 'swap',
});

const dmMono = DM_Mono({
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const syne = Syne({
  weight: ['400', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

/* ─── Full SEO Metadata ─── */
export const metadata: Metadata = {
  metadataBase: new URL('https://subhamsaha.dev'),

  title: {
    default: 'Subham Saha — Distributed Systems Engineer & Full Stack Developer',
    template: '%s | Subham Saha',
  },
  description:
    'Subham Saha is a Distributed Systems Engineer and Full Stack Developer based in Kolkata, India. Specialising in high-performance web applications, scalable backends, and resilient cloud architecture.',

  keywords: [
    'Subham Saha',
    'Full Stack Developer',
    'Distributed Systems Engineer',
    'React Developer',
    'Node.js Developer',
    'Next.js Developer',
    'Backend Engineer',
    'Kolkata Developer',
    'Portfolio',
    'Freelance Developer',
    'Performance Engineer',
  ],

  authors: [{ name: 'Subham Saha', url: 'https://subhamsaha.dev' }],
  creator: 'Subham Saha',
  publisher: 'Subham Saha',

  /* Canonical */
  alternates: {
    canonical: '/',
  },

  /* Open Graph */
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://subhamsaha.dev',
    siteName: 'Subham Saha — Portfolio',
    title: 'Subham Saha — Distributed Systems Engineer & Full Stack Developer',
    description:
      'Architecting high-performance web applications — from elegant interfaces to scalable & resilient backend systems. Based in Kolkata, working with clients worldwide.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Subham Saha — Portfolio',
      },
    ],
  },

  /* Twitter Card */
  twitter: {
    card: 'summary_large_image',
    site: '@subham59036',
    creator: '@subham59036',
    title: 'Subham Saha — Distributed Systems Engineer & Full Stack Developer',
    description:
      'Architecting high-performance web applications — from elegant interfaces to scalable & resilient backend systems.',
    images: ['/og-image.png'],
  },

  /* Robots */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  /* Icons */
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    other: [{ rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#000000' }],
  },

  manifest: '/site.webmanifest',

  /* Verification (add your tokens when deploying) */
  verification: {
    google: 'YOUR_GOOGLE_SEARCH_CONSOLE_TOKEN',
  },

  category: 'technology',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
};

/* ─── JSON-LD Structured Data ─── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Subham Saha',
  url: 'https://subhamsaha.dev',
  image: 'https://subhamsaha.dev/og-image.png',
  sameAs: [
    'https://github.com/subham59036',
    'https://linkedin.com/in/subham59036',
    'https://x.com/subham59036',
    'https://medium.com/@subham59036',
  ],
  jobTitle: 'Distributed Systems Engineer & Full Stack Developer',
  worksFor: {
    '@type': 'Organization',
    name: 'Ipheginia',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kolkata',
    addressRegion: 'West Bengal',
    addressCountry: 'IN',
  },
  email: 'subhamsaha59036@outlook.com',
  description:
    'Full Stack Developer and Distributed Systems Engineer specialising in high-performance web applications and scalable backend systems.',
  knowsAbout: [
    'React.js',
    'Next.js',
    'Node.js',
    'TypeScript',
    'PostgreSQL',
    'Redis',
    'Docker',
    'AWS',
    'Distributed Systems',
    'WebSockets',
    'gRPC',
    'Kafka',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${dmMono.variable} ${syne.variable}`}
    >
      <head>
        {/* Font Awesome — icons only, loaded async */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
