'use client';

import { useState, useEffect } from 'react';

const ROLES = [
  'Distributed Systems Engineer',
  'Open Source Builder',
  'Full Stack Developer',
  'Performance Engineer',
];

export default function useTypewriter(startDelay = 1800) {
  const [text, setText] = useState('');

  useEffect(() => {
    let rIdx = 0;
    let cIdx = 0;
    let del  = false;
    let timerId: ReturnType<typeof setTimeout>;

    function tick() {
      const r = ROLES[rIdx];
      setText(del ? r.slice(0, cIdx - 1) : r.slice(0, cIdx + 1));
      del ? cIdx-- : cIdx++;

      let delay = del ? 55 : 90;
      if (!del && cIdx === r.length) { delay = 2200; del = true; }
      if (del  && cIdx === 0)        { del = false; rIdx = (rIdx + 1) % ROLES.length; delay = 300; }

      timerId = setTimeout(tick, delay);
    }

    const startTimer = setTimeout(tick, startDelay);
    return () => {
      clearTimeout(startTimer);
      clearTimeout(timerId);
    };
  }, [startDelay]);

  return text;
}
