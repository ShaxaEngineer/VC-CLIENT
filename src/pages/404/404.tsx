import type React from 'react';
import { useEffect, useState } from 'react';

export const PageNoteFound = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [count, setCount] = useState(4);

  // Handle mouse movement for the parallax effect
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const moveX = (clientX - window.innerWidth / 2) / -50;
    const moveY = (clientY - window.innerHeight / 2) / -50;
    setPosition({ x: moveX, y: moveY });
  };

  // Countdown effect
  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => setCount(count - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [count]);

  return (
    <div
      className="relative flex h-[22rem] flex-col items-center justify-center overflow-hidden text-black dark:text-white"
      onMouseMove={handleMouseMove}
    >
      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute h-2 w-2 rounded-full bg-white opacity-20"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${3 + Math.random() * 7}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}

      {/* Glitch effect container */}
      <div className="relative z-10 mx-auto max-w-md px-4 py-8 text-center">
        {/* 404 with glitch effect */}
        <div className="relative mb-6">
          <h1
            className="glitch-text text-9xl font-black tracking-tighter"
            style={{
              transform: `translate(${position.x * 2}px, ${position.y * 2}px)`,
              textShadow: `
                ${5 + position.x}px ${5 + position.y}px 0 rgba(255,0,0,0.7),
                ${-5 + position.x}px ${-5 + position.y}px 0 rgba(0,255,255,0.7)
              `,
            }}
          >
            404
          </h1>
          <div
            className="absolute top-0 left-0 text-9xl font-black tracking-tighter text-red-500 opacity-70"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)',
              transform: `translate(${position.x * 3 + 5}px, ${position.y * 3}px)`,
              filter: 'blur(1px)',
            }}
          >
            404
          </div>
          <div
            className="absolute top-0 left-0 text-9xl font-black tracking-tighter text-cyan-400 opacity-70"
            style={{
              clipPath: 'polygon(0 45%, 100% 45%, 100% 100%, 0 100%)',
              transform: `translate(${position.x * 3 - 5}px, ${position.y * 3}px)`,
              filter: 'blur(1px)',
            }}
          >
            404
          </div>
        </div>

        {/* Message */}
        <h2
          className="mb-6 text-3xl font-bold"
          style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
        >
          NOT FOUND
        </h2>
      </div>

      {/* CSS for animations */}
      <style>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        .glitch-text {
          position: relative;
          animation: glitch 3s infinite;
        }
        @keyframes glitch {
          0% {
            text-shadow:
              5px 5px 0 rgba(255, 0, 0, 0.7),
              -5px -5px 0 rgba(0, 255, 255, 0.7);
          }
          25% {
            text-shadow:
              -5px 5px 0 rgba(255, 0, 0, 0.7),
              5px -5px 0 rgba(0, 255, 255, 0.7);
          }
          50% {
            text-shadow:
              5px -5px 0 rgba(255, 0, 0, 0.7),
              -5px 5px 0 rgba(0, 255, 255, 0.7);
          }
          75% {
            text-shadow:
              -5px -5px 0 rgba(255, 0, 0, 0.7),
              5px 5px 0 rgba(0, 255, 255, 0.7);
          }
          100% {
            text-shadow:
              5px 5px 0 rgba(255, 0, 0, 0.7),
              -5px -5px 0 rgba(0, 255, 255, 0.7);
          }
        }
      `}</style>
    </div>
  );
};
