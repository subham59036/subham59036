'use client';

import { useState } from 'react';
import Image from 'next/image';
import projects from '@/data/projects';
import publications from '@/data/publications';

/* ── Project Card ───────────────────────────────────────────────── */
function ProjectCard({
  num, title, desc, tech, github,
}: { num: string; title: string; desc: string; tech: string[]; github: string }) {
  return (
    <div className="proj-card">
      <div className="proj-num">{num}</div>
      <h3 className="proj-title">{title}</h3>
      <p className="proj-desc">{desc}</p>
      <div className="tech-chips">
        {tech.map((t) => <span className="tech-chip" key={t}>{t}</span>)}
      </div>
      <div className="proj-actions">
        <a href={github} className="proj-link">
          <i className="fab fa-github" /> GitHub
        </a>
      </div>
    </div>
  );
}

/* ── Publication Card ───────────────────────────────────────────── */
function PubCard({
  img, alt, platform, title, desc, href,
}: { img: string; alt: string; platform: string; title: string; desc: string; href: string }) {
  return (
    <div className="pub-card">
      <div className="pub-img-wrap" style={{ position: 'relative', height: '180px' }}>
        <Image
          src={img}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          style={{ objectFit: 'cover', filter: 'grayscale(100%) contrast(1.1)' }}
        />
      </div>
      <div className="pub-body">
        <div className="pub-platform">{platform}</div>
        <h3 className="pub-title">{title}</h3>
        <p className="pub-desc">{desc}</p>
        <a href={href} className="pub-read">
          <i className="fas fa-arrow-right" /> Read Blog
        </a>
      </div>
    </div>
  );
}

/* ── Works Section ──────────────────────────────────────────────── */
export default function Works() {
  const [activeTab, setActiveTab] = useState<'projects' | 'publications'>('projects');

  return (
    <section id="works">
      <div className="section-head reveal">
        <div className="section-tag">004 — Works</div>
        <h2 className="section-title">
          SELECTED<br />WORKS
        </h2>
      </div>

      <div className="tab-nav">
        <button
          className={`tab-pill${activeTab === 'projects' ? ' active' : ''}`}
          onClick={() => setActiveTab('projects')}
        >
          <i className="fas fa-code" /> Projects
        </button>
        <button
          className={`tab-pill${activeTab === 'publications' ? ' active' : ''}`}
          onClick={() => setActiveTab('publications')}
        >
          <i className="fas fa-pen-nib" /> Publications
        </button>
      </div>

      <div className={`tab-panel${activeTab === 'projects' ? ' active' : ''}`}>
        <div className="projects-grid">
          {projects.map((p) => <ProjectCard key={p.num} {...p} />)}
        </div>
      </div>

      <div className={`tab-panel${activeTab === 'publications' ? ' active' : ''}`}>
        <div className="pubs-grid">
          {publications.map((pub) => <PubCard key={pub.title} {...pub} />)}
        </div>
      </div>
    </section>
  );
}
