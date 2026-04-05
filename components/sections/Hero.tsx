'use client';

import Image from 'next/image';
import useTypewriter from '@/hooks/useTypewriter';
import useReveal from '@/hooks/useReveal';

export default function Hero() {
  const typed = useTypewriter(1800);
  useReveal();

  return (
    <section id="hero">
      <div className="hero-watermark">DEV</div>
      <div className="hero-avail-tag">Open to opportunities</div>

      <div className="hero-content">
        <div className="hero-eyebrow">Distributed Systems Engineer &amp; Full Stack Developer</div>

        <h1 className="hero-name">
          <span className="glitch" data-text="SUBHAM">SUBHAM</span>
          <br />
          <span className="glitch" data-text="SAHA">SAHA</span>
        </h1>

        <div className="hero-role">
          <span className="typewriter">{typed}</span>
        </div>

        <p className="hero-desc">
          I architect high-performance web applications — from simple yet elegant interfaces
          to scalable &amp; resilient backend systems. Based in Kolkata, working with clients worldwide.
        </p>

        <div className="hero-cta">
          <a href="#works" className="btn btn-solid">
            <i className="fas fa-folder-open" /> View My Work
          </a>
          <a href="#about" className="btn btn-ghost">
            <i className="fas fa-user" /> About Me
          </a>
        </div>

        <div className="hero-social">
          <span className="hero-social-label">Follow</span>
          <a href="https://github.com/subham59036"      target="_blank" rel="noreferrer" className="soc-link" aria-label="GitHub">
            <i className="fab fa-github" />
          </a>
          <a href="https://linkedin.com/in/subham59036" target="_blank" rel="noreferrer" className="soc-link" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in" />
          </a>
          <a href="https://x.com/subham59036"           target="_blank" rel="noreferrer" className="soc-link" aria-label="X / Twitter">
            <i className="fab fa-x-twitter" />
          </a>
          <a href="https://medium.com/@subham59036"     target="_blank" rel="noreferrer" className="soc-link" aria-label="Medium">
            <i className="fab fa-medium" />
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="photo-frame">
          <div className="photo-inner">
            <Image
              src="/profile.jpeg"
              alt="Subham Saha"
              fill
              sizes="(max-width: 768px) 200px, 360px"
              unoptimized={false}
              priority
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="photo-offset" />
          <div className="photo-badge">
            <span className="badge-num">1+</span>
            <span className="badge-txt">Years of<br />Experience</span>
          </div>
        </div>
      </div>

      <div className="scroll-hint">
        <div className="scroll-line" />
        <span>scroll</span>
      </div>
    </section>
  );
}
