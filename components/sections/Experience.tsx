'use client';

import { useEffect, useRef } from 'react';
import experience from '@/data/experience';

export default function Experience() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const line = lineRef.current;
    if (!line) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          line.classList.add('line-drawn');
          obs.unobserve(line);
        }
      },
      { threshold: 0.05 }
    );
    obs.observe(line);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="experience">
      <div className="section-head reveal">
        <div className="section-tag">002 — Experience</div>
        <h2 className="section-title">
          WHERE I&apos;VE<br />WORKED
        </h2>
        <p className="section-sub">
          Two roles, one consistent thread — shipping things that work and last.
        </p>
      </div>

      <div className="exp-timeline">
        {/* Animated vertical line */}
        <div className="exp-line" ref={lineRef} />

        {experience.map((job, idx) => (
          <div
            className="exp-item reveal"
            key={job.num}
            style={{ animationDelay: idx * 0.12 + 's' }}
          >
            <div className="exp-dot" />

            <div className="exp-card">
              <div className="exp-card-inner">
                {/* Top row */}
                <div className="exp-top">
                  <div className="exp-num-wrap">
                    <span className="exp-num">{job.num}</span>
                  </div>
                  <div className="exp-meta">
                    <span className="exp-type">{job.type}</span>
                    <span className="exp-duration">
                      <i className="fas fa-calendar-alt" /> {job.duration}
                    </span>
                    <span className="exp-location">
                      <i className="fas fa-map-marker-alt" /> {job.location}
                    </span>
                  </div>
                </div>

                <h3 className="exp-company">{job.company}</h3>
                <div className="exp-role">{job.role}</div>
                <div className="exp-divider" />
                <p className="exp-desc">{job.description}</p>

                <ul className="exp-highlights">
                  {job.highlights.map((h, i) => (
                    <li key={i}>
                      <span className="exp-bullet"><i className="fas fa-arrow-right" /></span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="tech-chips exp-chips">
                  {job.tech.map((t) => (
                    <span className="tech-chip" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
