'use client';

import { useEffect, useRef } from 'react';

const C = 2 * Math.PI * 43; // circumference ≈ 270.18

interface SkillCardProps {
  label: string;
  percent: number;
}

function SkillCard({ label, percent }: SkillCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const fill = fillRef.current;
    if (!card || !fill) return;

    fill.style.strokeDasharray  = String(C);
    fill.style.strokeDashoffset = String(C);

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          requestAnimationFrame(() => {
            fill.style.strokeDashoffset = String(C - (percent / 100) * C);
          });
          obs.unobserve(card);
        });
      },
      { threshold: 0.35 }
    );
    obs.observe(card);
    return () => obs.disconnect();
  }, [percent]);

  return (
    <div className="skill-card reveal" ref={cardRef}>
      <div className="ring-wrap">
        <svg width="96" height="96" viewBox="0 0 96 96">
          <circle className="ring-bg"   cx="48" cy="48" r="43" />
          <circle className="ring-fill" cx="48" cy="48" r="43" ref={fillRef} />
        </svg>
        <span className="ring-pct-text">{percent}%</span>
      </div>
      <span className="skill-lbl">{label}</span>
      <span className="skill-pct-display">Proficiency</span>
    </div>
  );
}

import skills from '@/data/skills';

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-head reveal">
        <div className="section-tag">003 — Skills</div>
        <h2 className="section-title">
          TECH STACK &amp;<br />EXPERTISE
        </h2>
        <p className="section-sub">
          The tools, frameworks, and disciplines I work with daily — from user interfaces to cloud infrastructure.
        </p>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <SkillCard key={skill.label} label={skill.label} percent={skill.percent} />
        ))}
      </div>
    </section>
  );
}
