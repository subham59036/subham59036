'use client';

import { useEffect, useRef } from 'react';

export default function Cursor() {
  const curRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (curRef.current) {
        curRef.current.style.left = mx + 'px';
        curRef.current.style.top  = my + 'px';
      }
    };

    function tickRing() {
      rx += (mx - rx) * 0.13;
      ry += (my - ry) * 0.13;
      if (ringRef.current) {
        ringRef.current.style.left = rx + 'px';
        ringRef.current.style.top  = ry + 'px';
      }
      rafId = requestAnimationFrame(tickRing);
    }
    tickRing();

    document.addEventListener('mousemove', onMove);

    const targets = document.querySelectorAll(
      'a, button, .skill-card, .proj-card, .pub-card, .testi-card, .stat-box'
    );
    const enter = () => {
      curRef.current?.classList.add('grow');
      if (ringRef.current) {
        ringRef.current.style.transform = 'translate(-50%,-50%) scale(1.6)';
        ringRef.current.style.opacity   = '0.5';
      }
    };
    const leave = () => {
      curRef.current?.classList.remove('grow');
      if (ringRef.current) {
        ringRef.current.style.transform = 'translate(-50%,-50%) scale(1)';
        ringRef.current.style.opacity   = '1';
      }
    };
    targets.forEach((el) => {
      el.addEventListener('mouseenter', enter);
      el.addEventListener('mouseleave', leave);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
      targets.forEach((el) => {
        el.removeEventListener('mouseenter', enter);
        el.removeEventListener('mouseleave', leave);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor"      ref={curRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
}
