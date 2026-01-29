"use client";

const testimonials = [
  {
    name: "Abhinav Kapoor",
    title: "Founder, Monarque",
    avatar: "/images/testimonials/abhinavkapoor.jpeg",
    rating: 5,
    text: "Working with French Fry Features was a game-changer for Monarque. The new site is fast, beautiful, and our conversions are up!",
    date: "Jan 10, 2026",
    highlight: "Increased 62% CTR in 6 weeks",
  },
  {
    name: "Nankie Bawa",
    title: "Founder, Kind Matter",
    avatar: "/images/testimonials/nankiebawa.jpeg",
    rating: 5,
    text: "French Fry Features understood our vision for Kind Matter and brought it to life. The process was smooth and the results speak for themselves.",
    date: "Dec 18, 2025",
    highlight: "Revenue up 48% post-launch",
  },
  {
    name: "Hikki & Marieta",
    title: "Founders, Ninecamp",
    avatar: "/images/testimonials/ninecamp_logo.jpeg",
    rating: 5,
    text: "Ninecamp's online presence is now world-class. FFF's attention to detail and support was outstanding.",
    date: "Nov 22, 2025",
    highlight: "Bounce rate reduced by 35%",
  },
  {
    name: "Team, Nova Watches",
    title: "Team, Nova Watches",
    avatar: "/images/testimonials/novawatches.png",
    rating: 5,
    text: "Nova Watches has seen a huge boost in customer engagement since our new site launched. Highly recommend French Fry Features!",
    date: "Oct 15, 2025",
    highlight: "Engagement increased 2.1×",
  },
  {
    name: "Team, Trucare",
    title: "Team, Trucare",
    avatar: "/images/testimonials/trucare.png",
    rating: 5,
    text: "French Fry Features made the Trucare site launch seamless. The team is professional, creative, and always available for support.",
    date: "Sep 30, 2025",
    highlight: "3 weeks ahead of schedule",
  },
  {
    name: "Team, Vratam",
    title: "Team, Vratam",
    avatar: "/images/testimonials/vratam.png",
    rating: 5,
    text: "Our brand story finally shines online thanks to French Fry Features. The site is easy to manage and our customers love it!",
    date: "Sep 10, 2025",
    highlight: "Customer retention up 29%",
  },
];

const StarIcon = () => (
  <svg className="w-4 h-4 fill-[#22C55E]" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const TestimonialCard = React.forwardRef(({ testimonial, minHeight }, ref) => (
  <div
    ref={ref}
    className="flex flex-col bg-white rounded-2xl p-6 shadow-lg border-2 border-[#FF7A00] w-full max-w-sm relative text-black"
    style={{ minHeight }}
  >
    {/* Author info */}
    <div className="flex items-center gap-3 mb-3">
      <img
        src={testimonial.avatar}
        alt={testimonial.name}
        className="w-12 h-12 rounded-full object-cover border-2 border-[#333]"
      />
      <div>
        <div className="font-semibold text-base leading-tight">
          {testimonial.name}
        </div>
        <div className="text-xs text-black leading-tight">
          {testimonial.title}
        </div>
      </div>
    </div>

    {/* Stars */}
    <div className="flex gap-1 mb-2">
      {Array.from({ length: testimonial.rating }).map((_, i) => (
        <StarIcon key={i} />
      ))}
    </div>

    {/* Text */}
    <div className="flex-1">
      <p className="text-[#333] leading-relaxed font-medium text-sm lg:text-xl mb-3">
        {testimonial.text}
      </p>
    </div>

    {/* Highlight */}
    {testimonial.highlight && (
      <div className="mt-auto">
        <div className="inline-flex items-center rounded-full bg-[#2563EB]/10 px-4 py-1.5 text-md font-semibold text-[#2563EB]">
          {testimonial.highlight}
        </div>
      </div>
    )}
  </div>
));

import React, { useEffect, useRef, useState } from "react";

const SPEED = 0.35;
const CARD_WIDTH = 340;
const GAP = 32;

export default function Testimonials() {
  const trackRef = useRef(null);
  const positionRef = useRef(0);

  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  const items = [...testimonials, ...testimonials];
  const totalCards = testimonials.length;
  const totalWidth = (CARD_WIDTH + GAP) * totalCards;
  const cardRefs = useRef([]);
  const [cardHeight, setCardHeight] = useState(null);
  // Auto-scroll animation

  useEffect(() => {
    if (!cardRefs.current.length) return;

    const heights = cardRefs.current.map(
      (el) => el?.getBoundingClientRect().height || 0
    );

    setCardHeight(Math.max(...heights));
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationId;

    const animate = () => {
      positionRef.current += SPEED;

      if (positionRef.current >= totalWidth) {
        positionRef.current = 0;
      }

      track.style.transform = `translateX(-${positionRef.current}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [totalWidth]);

  // Arrow movement
  const move = (dir) => {
    positionRef.current += dir * (CARD_WIDTH + GAP);

    if (positionRef.current < 0) {
      positionRef.current = totalWidth - (CARD_WIDTH + GAP);
    } else if (positionRef.current >= totalWidth) {
      positionRef.current = 0;
    }

    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${positionRef.current}px)`;
    }
  };

  // Edge hover detection
  const handleMouseMove = (e) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const edge = 60;

    setShowLeft(x < edge);
    setShowRight(x > bounds.width - edge);
  };

  const handleMouseLeave = () => {
    setShowLeft(false);
    setShowRight(false);
  };

  return (
    <section className="py-12 overflow-hidden bg-[#FDF8F4]">
      <div className="mx-auto max-w-7xl px-4 mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-black">
          Don't just take our <span className="text-[#2563EB]">word</span> for it.
        </h2>
      </div>

      <div
        className="relative flex items-center justify-center"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Left Arrow */}
        <button
          onClick={() => move(-1)}
          className={`absolute left-0 z-10 bg-white border-2 border-black rounded-full w-8 h-8 flex items-center justify-center shadow transition-all duration-300 top-1/2 -translate-y-1/2
            ${showLeft ? 'opacity-100 translate-x-4' : 'opacity-0 pointer-events-none -translate-x-8'}`}
          style={{ }}
        >
          <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 8L12 16L20 24" stroke="#111" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className=" w-full">
          <div
            ref={trackRef}
            className="flex gap-8 will-change-transform" 
            style={{ width: "max-content" }}
          >
            {items.map((testimonial, idx) => (
              <div
                key={idx}
                style={{ width: CARD_WIDTH }}
                className="flex-shrink-0 "
              >
                <TestimonialCard
                  testimonial={testimonial}
                  minHeight={cardHeight}
                  ref={(el) => (cardRefs.current[idx] = el)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => move(1)}
          className={`absolute right-0 z-10 bg-white border-2 border-black rounded-full w-8 h-8 flex items-center justify-center shadow transition-all duration-300 top-1/2 -translate-y-1/2
            ${showRight ? 'opacity-100 -translate-x-4' : 'opacity-0 pointer-events-none translate-x-8'}`}
          style={{  }}
        > 
          <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 8L20 16L12 24" stroke="#111" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  );
}
