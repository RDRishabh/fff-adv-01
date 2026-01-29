"use client";

import { useEffect, useRef, useState } from "react";

const slides = [
  "/images/section/slide03.png",
  "/images/section/slide04.png",
  "/images/section/slide05.png",
  "/images/section/slide06.png",
  "/images/section/slide07.png",
  "/images/section/slide08.png",
  "/images/section/slide09.png",
];

const SLIDE_GAP = 16;

function getConfig(width = 1200) {
  if (width < 640) {
    return { width: 200 + SLIDE_GAP, height: 420, speed: 0.4 };
  }

  if (width < 1024) {
    return { width: 220 + SLIDE_GAP, height: 480, speed: 0.55 };
  }

  return { width: 260 + SLIDE_GAP, height: 540, speed: 0.7 };
}

export default function ImageSlideshowSection() {
  const containerRef = useRef(null);
  const rafRef = useRef(null);

  // ✅ SSR-safe defaults
  const [config, setConfig] = useState(() => getConfig());
  const [offset, setOffset] = useState(() => slides.length * getConfig().width);
  const [isMobile, setIsMobile] = useState(false);

  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  const totalWidth = slides.length * config.width;
  const infiniteSlides = [...slides, ...slides, ...slides];

  /* ---------- RESIZE + MOBILE DETECTION ---------- */
  useEffect(() => {
    const update = () => {
      const width = window.innerWidth;
      setConfig(getConfig(width));
      setIsMobile(width < 768);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  /* ---------- AUTO SCROLL ---------- */
  useEffect(() => {
    const animate = () => {
      setOffset((p) => p + config.speed);
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [config.speed]);

  /* ---------- NORMALIZE OFFSET ---------- */
  useEffect(() => {
    if (offset >= totalWidth * 2) setOffset((p) => p - totalWidth);
    if (offset <= 0) setOffset((p) => p + totalWidth);
  }, [offset, totalWidth]);

  /* ---------- CONTROLS ---------- */
  const handlePrev = () => setOffset((p) => p - config.width);
  const handleNext = () => setOffset((p) => p + config.width);

  /* ---------- DESKTOP HOVER ---------- */
  const handleMouseMove = (e) => {
    if (isMobile || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;

    setShowLeft(x < rect.width * 0.18);
    setShowRight(x > rect.width * 0.82);
  };

  return (
    <section
      ref={containerRef}
      id="proof"
      className="relative w-full overflow-hidden py-12 md:pb-20"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        setShowLeft(false);
        setShowRight(false);
      }}
    >
      {/* TITLE */}
      <div className="mx-auto max-w-4xl px-4 text-center mb-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Real <span className="text-blue-600">Results</span> from Our Work
        </h2>
      </div>

      {/* LEFT ARROW */}
      <button
        onClick={handlePrev}
        className={`absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-20
        rounded-full bg-black/40 p-3 text-white backdrop-blur-md transition-opacity
        ${showLeft || isMobile ? "opacity-100" : "opacity-0"}`}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* SLIDES */}
      <div className="w-full">
        <div
          className="flex gap-3 sm:gap-4 will-change-transform"
          style={{
            transform: `translateX(calc(50% - ${offset}px - ${config.width / 2}px))`,
          }}
        >
          {infiniteSlides.map((src, i) => (
            <div
              key={i}
              style={{
                width: config.width,
                minWidth: config.width,
                height: config.height,
              }}
              className="overflow-hidden rounded-2xl sm:rounded-[2.5rem] border border-neutral-200 shadow-xl bg-white"
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
      <button
        onClick={handleNext}
        className={`absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-20
        rounded-full bg-black/40 p-3 text-white backdrop-blur-md transition-opacity
        ${showRight || isMobile ? "opacity-100" : "opacity-0"}`}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </section>
  );
}
