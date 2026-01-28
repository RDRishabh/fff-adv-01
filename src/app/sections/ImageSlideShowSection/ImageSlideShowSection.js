"use client";

import { useEffect, useRef, useState } from "react";

const slides = [
  "/images/section/slide03.png",
  "/images/section/slide04.png",
  "/images/section/slide05.png",
  "/images/section/slide06.png",
  "/images/section/slide07.png",
];

const BASE_SLIDE_WIDTH = 260;
const SLIDE_GAP = 16;
const SPEED = 0.7;

// Responsive slide width based on window size
function getSlideWidth() {
  if (typeof window !== 'undefined') {
    if (window.innerWidth < 640) return 180 + SLIDE_GAP; // mobile
    if (window.innerWidth < 1024) return 220 + SLIDE_GAP; // tablet
  }
  return BASE_SLIDE_WIDTH + SLIDE_GAP; // desktop
}


export default function ImageSlideshowSection() {
  const trackRef = useRef(null);
  const rafRef = useRef(null);
  const containerRef = useRef(null);

  const [slideWidth, setSlideWidth] = useState(getSlideWidth());
  const [offset, setOffset] = useState(
    slides.length * getSlideWidth() // start at middle set
  );
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  const totalWidth = slides.length * slideWidth;

  /* ---------- HANDLE RESIZE ---------- */
  useEffect(() => {
    function handleResize() {
      setSlideWidth(getSlideWidth());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  /* ---------- AUTO SCROLL ---------- */
  useEffect(() => {
    const animate = () => {
      setOffset((prev) => prev + SPEED);
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafRef.current);
  }, [slideWidth]);

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
    setOffset((prev) => prev - slideWidth);
  };

  const handleNext = () => {
    setOffset((prev) => prev + slideWidth);
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
      className="relative w-full py-16 sm:py-20 md:py-24 overflow-hidden"
      id="proof"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Section Title */}
      <div className="mx-auto max-w-4xl px-4 text-center mb-10">
        <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl leading-tight">
          Real <span className="text-blue-600">Results</span> from Our Work
        </h2>
      </div>

      {/* LEFT ARROW */}
      {showLeft && (
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/40 p-2 sm:p-3 text-white backdrop-blur-md hover:bg-black/60"
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
          className="flex gap-2 sm:gap-4 will-change-transform"
          style={{
            transform: `translateX(calc(50% - ${offset}px - ${(slideWidth / 2)}px))`,
          }}
        >
          {infiniteSlides.map((src, i) => (
            <div
              key={i}
              style={{
                width: slideWidth,
                minWidth: slideWidth,
                height: 540, // Default desktop height
                borderRadius: '2.5rem', // Default desktop radius
              }}
              className="bg-transparent overflow-hidden border border-neutral-200 shadow-2xl transition-all duration-300"
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
          className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/40 p-2 sm:p-3 text-white backdrop-blur-md hover:bg-black/60"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      )}
    </section>
  );
}
