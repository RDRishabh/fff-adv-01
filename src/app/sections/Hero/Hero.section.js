"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useBookCall } from "../../../components/ui/BookCallContext";
/* ----------------------------------
   HERO IMAGES (FIXED PATHS)
-----------------------------------*/
const heroImages = [
  "/images/hero/kindmatter.jpeg",
  "/images/hero/monarque.jpeg",
  "/images/hero/Nova.jpeg",
  "/images/hero/Trucare.jpeg",
  "/images/hero/vratam.jpeg",
];

const headlines = [
  "KIND MATTER",
  "MONARQUE",
  "NOVA",
  "TRUCARE",
  "VRATAM",
];
export default function HeroSection() {
  const { openPopup } = useBookCall() || {};
  return (
    <section className="relative bg-[#FDF8F4] overflow-hidden pt-20 sm:pt-28 lg:pt-40 pb-10 sm:pb-20 lg:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
          {/* LEFT COPY */}
          <div className="w-full pt-6 md:pt-0 lg:text-left">
            <p className="text-4xl lg:text-6xl font-base leading-tight tracking-tight text-black">
              <span className="">Launch</span> <span>a  </span>
              {/* <span className="font-medium">Professionally</span> built{" "} <br/> */}
              <span className="inline-flex align-middle mx-1">  
                <img
                  src="/images/shopify.png"
                  alt="Shopify logo"
                  className="h-[1em] w-auto"
                />
              </span>
              <span className="font-medium">Shopify store </span> <br/>  that’s <span className="font-medium">built to sell, </span> 
              {/* <br className="hidden sm:block" /> */}
               <br/>not just  <span className="font-medium">look pretty.</span>
            </p>

            <p className="mt-4 sm:mt-6 text-sm xs:text-base sm:text-[22px] text-neutral-700">
              We set up (or rebuild) your store so you can scale paid ads to 3-4X ROAS <br/> without worrying about leaks in the funnel. 
            </p>

            {/* CTA */}
            <div className="mt-6 sm:mt-8 flex justify-start">
              <button
                type="button"
                onClick={openPopup}
                className="sm:w-auto rounded-full bg-[#2563EB] px-6 sm:px-8 py-3 text-base sm:text-2xl font-medium text-white hover:bg-[#e66d00] transition inline-flex items-center  gap-2"
              >
                Book a free store check
                <svg
                  width="22"
                  height="22"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
            </div>

            {/* TRUST PILLS */}
            <div className="mt-5 sm:mt-8 flex flex-row flex-wrap gap-2 sm:gap-4 items-center justify-start">
              {["Shopify‑first builds", "Fast turnaround", "Conversion‑focused for paid traffic"].map((text) => (
                <span
                  key={text}
                  className="flex items-center bg-[#C6F6D5] rounded-md px-3 py-2 text-green-700 text-sm sm:text-base font-medium shadow-sm"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="mr-2"
                  >
                    <circle cx="10" cy="10" r="10" fill="#22C55E" />
                    <path
                      d="M6 10.5L9 13.5L14 8.5"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {text}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT VISUAL PLACEHOLDER */}
          <div className="w-full flex justify-center lg:w-[520px] lg:justify-end">
            {/* Store Leak Scan Card UI */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative w-full max-w-[370px] sm:w-[370px]"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="bg-white rounded-2xl shadow-xl p-4 xs:p-6 sm:p-7 pt-8"
              >
                <div className="relative w-full bg-white rounded-2xl shadow-xl p-0 xs:p-2 sm:p-7 pt-8">
                  {/* Monthly Rev Card */}
                  <div className="absolute -top-7 right-2 xs:right-5 bg-white rounded-xl shadow-md px-3 xs:px-5 py-2 xs:py-3 flex items-center gap-2 xs:gap-3 border border-neutral-100">
                    <span className="bg-[#E6F7F1] rounded-full p-2">
                      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                        <rect x="4" y="10" width="3" height="7" rx="1" fill="#22C55E" />
                        <rect x="10.5" y="6" width="3" height="11" rx="1" fill="#22C55E" />
                        <rect x="17" y="13" width="3" height="4" rx="1" fill="#22C55E" />
                      </svg>
                    </span>
                    <div>
                      <div className="text-xs text-neutral-400">Monthly Rev</div>
                      <div className="text-base xs:text-lg font-semibold text-black">$11,230</div>
                    </div>
                  </div>
                  {/* Card Content */}
                  <div className="space-y-2">
                    <div className="text-base xs:text-lg font-semibold text-black mb-2">Store Leak Scan</div>
                    {/* Mobile Loading Speed */}
                    <div className="flex items-center justify-between bg-neutral-50 rounded-lg px-3 xs:px-4 py-2 xs:py-3">
                      <div>
                        <div className="text-xs text-neutral-400">Mobile Loading Speed</div>
                        <div className="text-base xs:text-lg font-normal text-black">4.8s</div>
                      </div>
                      <span className="bg-[#FFE5E5] text-[#E53E3E] text-xs font-semibold px-2 xs:px-3 py-1 rounded-full animate-soft-pulse">Critical</span>
                    </div>
                    {/* Cart Abandonment */}
                    <div className="flex items-center justify-between bg-neutral-50 rounded-lg px-3 xs:px-4 py-2 xs:py-3">
                      <div>
                        <div className="text-xs text-neutral-400">Cart Abandonment</div>
                        <div className="text-base xs:text-lg font-normal text-black">89%</div>
                      </div>
                      <span className="bg-[#FFF7E5] text-[#E6A100] text-xs font-semibold px-2 xs:px-3 py-1 rounded-full animate-soft-pulse">High</span>
                    </div>
                    {/* CTA Placement */}
                    <div className="flex items-center justify-between bg-neutral-50 rounded-lg px-3 xs:px-4 py-2 xs:py-3">
                      <div>
                        <div className="text-xs text-neutral-400">CTA Placement</div>
                        <div className="text-base xs:text-lg font-normal text-black">Poor</div>
                      </div>
                      <span className="bg-[#FFF7E5] text-[#E6A100] text-xs font-semibold px-2 xs:px-3 py-1 rounded-full animate-soft-pulse">Warning</span>
                    </div>
                    {/* Potential ROAS Lift */}
                    <div className="mt-2 xs:mt-3 bg-[#F6F9FF] rounded-xl px-3 xs:px-4 py-4 xs:py-5 flex items-center gap-2 xs:gap-3 border border-[#D6E6FF]">
                      <span className="bg-white rounded-full p-2 border border-[#D6E6FF]">
                        <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                          <circle cx="10" cy="10" r="10" fill="#2563EB" />
                          <path d="M10 5v5l3 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <div>
                        <div className="text-xs text-[#2563EB] font-semibold">Potential ROAS Lift</div>
                        <div className="text-xl xs:text-2xl font-bold text-[#2563EB]">+180%</div>
                      </div>
                    </div>
                    <div className="mt-3 xs:mt-4 flex justify-center text-center text-neutral-600">
                      <div>
                        <span className="font-medium text-black">You don't</span> need more{" "}
                        <span className="font-semibold text-black">ad spend.</span>
                        <br />
                        <span className="font-medium text-[#22C55E]">You need fewer leaks</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
            
        </div>
      </div>
    </section>
  );
}
