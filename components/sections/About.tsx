'use client';

import { useEffect, useRef } from 'react';
import stats from '@/data/stats';

function animateCounter(el: HTMLElement, target: number) {
  let v = 0;
  const step = target / 55;
  const t = setInterval(() => {
    v += step;
    if (v >= target) { v = target; clearInterval(t); }
    el.textContent = Math.floor(v) + '+';
  }, 28);
}

export default function About() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.querySelectorAll<HTMLElement>('.stat-num').forEach((el) => {
            animateCounter(el, parseInt(el.dataset.target ?? '0', 10));
          });
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.5 }
    );
    obs.observe(gridRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about">
      <div className="section-head reveal">
        <div className="section-tag">001 — About Me</div>
        <h2 className="section-title">
          THE PERSON<br />BEHIND THE CODE
        </h2>
      </div>

      <div className="about-grid">
        <div className="about-text-block reveal">
          <h3>Building things that matter — with code, craft, and conviction.</h3>
          <p>
            I&apos;m <strong>Subham Saha</strong>, a full-stack developer and distributed systems engineer with over{' '}
            <strong>1+ years</strong> of shipping digital products. I believe exceptional software
            is born at the intersection of clean design and performant backbone.
          </p>
          <p>
            My journey started with a fascination for how exceptional software handles huge loads with such consistency and still
            serves customers best. Today I work with startups, agencies, and founders
            worldwide — helping them move fast without breaking things.
          </p>
          <p>
            Outside of code, I write about backend development on my blog, contribute to open-source
            projects, and collaborate with fellow developers. I build in public, think out loud, and care
            deeply about fault-tolerance &amp; performance.
          </p>
          <div className="about-actions">
            <a href="/resume.pdf" download className="btn btn-solid">
              <i className="fas fa-download" /> Download Resume
            </a>
            <a href="mailto:subhamsaha59036@outlook.com" className="btn btn-ghost">
              <i className="fas fa-paper-plane" /> Get in Touch
            </a>
          </div>
        </div>

        <div className="stats-grid reveal" ref={gridRef}>
          {stats.map(({ target, label }) => (
            <div className="stat-box" key={label}>
              <div className="stat-num" data-target={target}>0+</div>
              <div className="stat-lbl">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
