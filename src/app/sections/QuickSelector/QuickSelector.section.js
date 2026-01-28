"use client";

import { useState } from "react";
import { useBookCall } from "../../../components/ui/BookCallContext";

const options = [
  {
    title: "Launching now",
    description: "Starting fresh with a brand new Shopify store built to convert from day one.",
    image: "/card-launch.png",
  },
  {
    title: "Upgrading a DIY store",
    description: "Transform your existing store into a high-converting sales machine.",
    image: "/card-upgrade.png",
  },
];

export default function QuickSelector() {
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0, active: null });
  const { openPopup } = useBookCall();

  const handleMouseEnter = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setHoverPosition({ x, y, active: index });
  };

  const handleMouseLeave = () => {
    setHoverPosition({ ...hoverPosition, active: null });
  };

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center text-3xl md:text-4xl font-bold text-neutral-900">
          Pick your situation
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {options.map((option, index) => (
            <div
              key={option.title}
              className="group relative rounded-2xl overflow-hidden cursor-pointer h-[400px] md:h-[450px]"
              onMouseEnter={(e) => handleMouseEnter(e, index)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${option.image})` }}
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70" />

              {/* Orange Hover Overlay - expanding from cursor */}
              <div
                className="absolute rounded-full bg-[#ff7a00]/50 transition-transform duration-700 ease-out pointer-events-none"
                style={{
                  width: "250%",
                  height: "250%",
                  left: hoverPosition.active === index ? hoverPosition.x : "50%",
                  top: hoverPosition.active === index ? hoverPosition.y : "50%",
                  transform: hoverPosition.active === index 
                    ? "translate(-50%, -50%) scale(1)" 
                    : "translate(-50%, -50%) scale(0)",
                }}
              />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-8">
                {/* Top Row: Title + Plus Button */}
                <div className="flex items-start justify-between">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {option.title}
                  </h3>
                  
                  {/* Plus Button */}
                  {/* <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                    hoverPosition.active === index 
                      ? "bg-white" 
                      : "bg-white/20 backdrop-blur-sm"
                  }`}>
                    <svg 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      className={`transition-colors duration-500 ${
                        hoverPosition.active === index ? "text-[#ff7a00]" : "text-white"
                      }`}
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </div> */}
                </div>

                {/* Bottom: Description + CTA */}
                <div>
                  <p className="text-white/90 text-base md:text-lg mb-6 max-w-sm">
                    {option.description}
                  </p>
                  
                  <button
                    type="button"
                    onClick={openPopup}
                    className={`inline-block rounded-full px-8 py-4 text-sm font-semibold transition-all duration-500 ${
                      hoverPosition.active === index 
                        ? "bg-white text-[#ff7a00] shadow-xl" 
                        : "bg-[#ff7a00] text-white"
                    }`}
                  >
                    Book a Call
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
