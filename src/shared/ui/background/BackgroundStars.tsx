'use client';

import { useEffect, useState } from 'react';

interface StaticStar {
  id: number;
  top: string;
  left: string;
  size: string;
  duration: string;
  delay: string;
}

export default function BackgroundStars() {
  const [stars, setStars] = useState<StaticStar[]>([]);

  useEffect(() => {
    const newStars = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`,
      duration: `${Math.random() * 3 + 2}s`,
      delay: `${Math.random() * 3}s`,
    }));
    setStars(newStars);
  }, []);

  return (
    <div className='pointer-events-none fixed inset-0 z-0 overflow-hidden'>
      {stars.map((star) => (
        <div
          key={star.id}
          className='star'
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animation: `twinkling ${star.duration} infinite ease-in-out`,
            animationDelay: star.delay,
          }}
        />
      ))}
    </div>
  );
}
