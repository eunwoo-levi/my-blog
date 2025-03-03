// components/backgrounds/FallingStars.tsx
'use client';

import { useEffect, useState } from 'react';

interface FallingStar {
  id: number;
  top: string;
  right: string;
  size: string;
  duration: string;
  delay: string;
  opacity: string;
}

export default function FallingStars() {
  const [stars, setStars] = useState<FallingStar[]>([]);

  const createStar = (id: number): FallingStar => ({
    id,
    top: `${Math.random() * 20}%`, // 상단 20% 영역에서 시작
    right: `${Math.random() * 20}%`, // 오른쪽 20% 영역에서 시작
    size: `${Math.random() * 2 + 1}px`, // 1-3px 크기
    duration: `${Math.random() * 2 + 2}s`, // 2-4초 동안 이동
    delay: `${Math.random() * 3}s`, // 0-3초 딜레이
    opacity: `${Math.random() * 0.5 + 0.5}`, // 50-100% 투명도
  });

  useEffect(() => {
    setStars(Array.from({ length: 3 }, (_, i) => createStar(i)));

    const interval = setInterval(() => {
      setStars((prev) => {
        const newStars = [...prev];
        const randomIndex = Math.floor(Math.random() * newStars.length);
        newStars[randomIndex] = createStar(randomIndex);
        return newStars;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='pointer-events-none fixed inset-0 z-[1] overflow-hidden'>
      {stars.map((star) => (
        <div
          key={star.id}
          className='shooting-star'
          style={{
            top: star.top,
            right: star.right,
            width: star.size,
            opacity: star.opacity,
            animationDuration: star.duration,
            animationDelay: star.delay,
          }}
        />
      ))}
    </div>
  );
}
