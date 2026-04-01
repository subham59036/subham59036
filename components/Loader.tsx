'use client';

import { useEffect, useRef, useState } from 'react';

const NAME = 'SUBHAM SAHA';

export default function Loader() {
  const barRef = useRef<HTMLDivElement>(null);
  const numRef = useRef<HTMLDivElement>(null);
  const [letters]  = useState(() =>
    NAME.split('').map((ch, i) => ({ ch: ch === ' ' ? '\u00A0' : ch, delay: i * 0.065 }))
  );
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    let pct = 0;

    const id = setInterval(() => {
      pct += Math.random() * 12 + 4;
      if (pct >= 100) {
        pct = 100;
        clearInterval(id);
        setTimeout(() => {
          setHidden(true);
          document.body.style.overflow = '';
        }, 450);
      }
      if (barRef.current) barRef.current.style.width = pct + '%';
      if (numRef.current) numRef.current.textContent = String(Math.floor(pct)).padStart(3, '0');
    }, 55);

    return () => clearInterval(id);
  }, []);

  return (
    <div className={`loader${hidden ? ' hidden' : ''}`}>
      <div className="loader-logo">Portfolio</div>
      <div className="loader-name-wrap">
        {letters.map(({ ch, delay }, i) => (
          <span key={i} style={{ animationDelay: delay + 's' }}>{ch}</span>
        ))}
      </div>
      <div className="loader-bar-track">
        <div className="loader-bar-fill" ref={barRef} />
      </div>
      <div className="loader-count" ref={numRef}>000</div>
    </div>
  );
}
