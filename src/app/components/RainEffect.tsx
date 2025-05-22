'use client';

import { useEffect, useState } from 'react';

interface RainDrop {
  id: number;
  x: number;
  y: number;
  length: number;
  speed: number;
  opacity: number;
}

export default function RainEffect() {
  const [drops, setDrops] = useState<RainDrop[]>([]);

  useEffect(() => {
    const createDrop = (id: number): RainDrop => ({
      id,
      x: Math.random() * 100,
      y: -10,
      length: Math.random() * 20 + 10,
      speed: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.2,
    });

    // Initialize drops
    const initialDrops = Array.from({ length: 50 }, (_, i) => createDrop(i));
    setDrops(initialDrops);

    const interval = setInterval(() => {
      setDrops(currentDrops => 
        currentDrops.map(drop => {
          if (drop.y > 100) {
            return createDrop(drop.id);
          }
          return {
            ...drop,
            y: drop.y + drop.speed,
          };
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {drops.map(drop => (
        <div
          key={drop.id}
          className="absolute w-0.5 bg-gradient-to-b from-gold/0 via-gold to-gold/0"
          style={{
            left: `${drop.x}%`,
            top: `${drop.y}%`,
            height: `${drop.length}px`,
            opacity: drop.opacity,
            transform: 'rotate(15deg)',
          }}
        />
      ))}
    </div>
  );
} 