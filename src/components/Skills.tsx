import { useRef, useEffect, useState } from 'react';
import { skills } from '@/data/skills';

function useInView(threshold = 0.15) {
  const ref  = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, inView] as const;
}

export default function Skills() {
  const [containerRef, inView] = useInView(0.1);

  return (
    <section
      id="skills"
      className="py-24"
      style={{ borderTop: '1px solid var(--color-stroke)' }}
    >
      <div className="max-w-5xl mx-auto px-6">

        <p className="section-label mb-3">Skills</p>
        <h2
          className="font-heading font-bold text-3xl mb-12"
          style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)', letterSpacing: '-0.01em' }}
        >
          Technical Proficiency
        </h2>

        <div
          ref={containerRef}
          className="grid sm:grid-cols-2 gap-x-12 gap-y-7"
        >
          {skills.map(({ name, percentage }) => (
            <div key={name}>
              {/* Label row */}
              <div className="flex items-center justify-between mb-2">
                <span
                  className="text-sm font-medium"
                  style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}
                >
                  {name}
                </span>
                <span
                  className="text-xs tabular-nums"
                  style={{ color: 'var(--color-dim)', fontFamily: 'var(--font-mono)' }}
                >
                  {percentage}%
                </span>
              </div>

              {/* Bar */}
              <div className="skill-track">
                <div
                  className="skill-fill"
                  style={{ width: inView ? `${percentage}%` : '0%' }}
                  role="progressbar"
                  aria-valuenow={percentage}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={name}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
