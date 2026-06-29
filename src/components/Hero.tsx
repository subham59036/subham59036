import { useState, useEffect } from 'react';
import { phrases, personals } from '@/data/personals';
import { ArrowDown, ArrowRight, MapPinIcon } from './icons';

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [visible,     setVisible]     = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setPhraseIndex(i => (i + 1) % phrases.length);
        setVisible(true);
      }, 220);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center hero-dots overflow-hidden"
      style={{ paddingTop: '4rem', alignItems: 'center' }}
    >
      {/* Radial fade edges */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, transparent 40%, var(--color-canvas) 100%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 100% 40% at 50% 100%, var(--color-canvas) 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 w-full py-24">

        {/* Location chip */}
        <div
          className="inline-flex items-center gap-1.5 mb-6 px-3 py-1.5 rounded-full text-xs"
          style={{
            border: '1px solid var(--color-stroke)',
            background: 'var(--color-elevated)',
            color: 'var(--color-dim)',
            fontFamily: 'var(--font-mono)',
          }}
        >
          <MapPinIcon size={12} />
          Kolkata, India
        </div>

        {/* Name */}
        <h1
          className="font-heading font-extrabold leading-none tracking-tight mb-5"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(3.5rem, 10vw, 7rem)',
            color: 'var(--color-primary)',
            letterSpacing: '-0.02em',
          }}
        >
          Subham Saha
        </h1>

        {/* Rotating phrase */}
        <div className="flex items-center gap-2 mb-10" style={{ minHeight: '2rem' }}>
          <span style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-mono)', fontSize: '1.05rem' }}>
            &#62;
          </span>
          <span
            className="font-mono text-base md:text-lg"
            style={{
              fontFamily: 'var(--font-mono)',
              color: 'var(--color-secondary)',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(-5px)',
              transition: 'opacity 0.22s ease, transform 0.22s ease',
              display: 'inline-block',
            }}
          >
            {phrases[phraseIndex]}
          </span>
          <span className="cursor-blink" aria-hidden="true" />
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-3 mb-16">
          <a href="#projects" className="btn-primary">
            View Work <ArrowRight size={13} />
          </a>
          <a href="#contact" className="btn-outline">
            Get in Touch
          </a>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-px w-full"
          style={{ borderTop: '1px solid var(--color-stroke)' }}
        >
          {personals.map(({ label, value, suffix }) => (
            <div
              key={label}
              className="pt-6 pr-6"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexFlow: 'column' }}
            >
              <p
                className="font-heading font-bold leading-none mb-1"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                  color: 'var(--color-primary)',
                  letterSpacing: '-0.02em',
                }}
              >
                {value}
                <span style={{ color: 'var(--color-accent)', fontSize: '0.7em' }}>{suffix}</span>
              </p>
              <p className="text-xs" style={{ color: 'var(--color-dim)', fontFamily: 'var(--font-mono)' }}>
                {label}
              </p>
            </div>
          ))}
        </div>

        {/* Scroll cue */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
          style={{ color: 'var(--color-faint)' }}
        >
          <ArrowDown size={16} />
        </div>
      </div>
    </section>
  );
}
