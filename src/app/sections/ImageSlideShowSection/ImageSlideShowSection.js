"use client";

import { useEffect, useRef, useState } from "react";

const slides = [
  "/images/section/slide03.png",
  "/images/section/slide04.png",
  "/images/section/slide05.png",
  "/images/section/slide06.png",
  "/images/section/slide07.png",
];

const SLIDE_WIDTH = 276; // 260 + 16 gap
const SPEED = 0.35;

export default function ImageSlideshowSection() {
  const trackRef = useRef(null);
  const rafRef = useRef(null);
  const containerRef = useRef(null);

  const [offset, setOffset] = useState(
    slides.length * SLIDE_WIDTH // start at middle set
  );
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  const totalWidth = slides.length * SLIDE_WIDTH;

  /* ---------- AUTO SCROLL ---------- */
  useEffect(() => {
    const animate = () => {
      setOffset((prev) => prev + SPEED);
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  /* ---------- NORMALIZE OFFSET ---------- */
  useEffect(() => {
    if (offset >= totalWidth * 2) {
      setOffset((prev) => prev - totalWidth);
    }
    if (offset <= 0) {
      setOffset((prev) => prev + totalWidth);
    }
  }, [offset, totalWidth]);

  /* ---------- MANUAL CONTROLS ---------- */
  const handlePrev = () => {
    setOffset((prev) => prev - SLIDE_WIDTH);
  };

  const handleNext = () => {
    setOffset((prev) => prev + SLIDE_WIDTH);
  };

  // Show arrows only when mouse is near left/right edge
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    setShowLeft(x < rect.width * 0.18);
    setShowRight(x > rect.width * 0.82);
  };

  const handleMouseLeave = () => {
    setShowLeft(false);
    setShowRight(false);
  };

  const infiniteSlides = [...slides, ...slides, ...slides];

  return (
    <section
      className="relative w-full py-24 overflow-hidden"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* LEFT ARROW */}
      {showLeft && (
        <button
          onClick={handlePrev}
          className="absolute left-8 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/40 p-3 text-white backdrop-blur-md hover:bg-black/60"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
      )}

      {/* SLIDES */}
      <div className="w-full">
        <div
          ref={trackRef}
          className="flex gap-4 will-change-transform"
          style={{
            transform: `translateX(calc(50% - ${offset}px - 130px))`,
          }}
        >
          {infiniteSlides.map((src, i) => (
            <div
              key={i}
              className="w-[260px] h-[520px] min-w-[260px] rounded-[2.5rem] bg-transparent overflow-hidden border border-neutral-200 shadow-2xl"
            >
              <img
                src={src}
                alt=""
                draggable={false}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT ARROW */}
      {showRight && (
        <button
          onClick={handleNext}
          className="absolute right-8 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/40 p-3 text-white backdrop-blur-md hover:bg-black/60"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      )}
    </section>
  );
}
