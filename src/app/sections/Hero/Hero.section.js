"use client";

import { useEffect, useState } from "react";

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

export default function Hero() {
  return (
    <section className="relative bg-[#FDF8F4] overflow-hidden pt-28 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 lg:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* LEFT COPY */}
          <div className="w-full text-center lg:text-left">
            <p className="text-3xl sm:text-4xl lg:text-6xl font-base leading-tight tracking-tight text-black">
              <span className="">Launch</span> a <br />
              <span className="font-medium">Professionally</span> built{" "} <br/>
              <span className="inline-flex align-middle mx-1"> 
                <img
                  src="/images/shopify.png"
                  alt="Shopify logo"
                  className="h-[1em] w-auto"
                />
              </span>
              <span className="font-medium">Shopify store </span> 
              {/* <br className="hidden sm:block" /> */}
              that <span className="font-medium">converts.</span>
            </p>

            <p className="mt-5 sm:mt-6 text-base sm:text-lg text-neutral-400">
              Built for D2C founders launching or upgrading before scaling ads.
            </p>

            {/* CTA */}
            <div className="mt-8 flex justify-center lg:justify-start lg:justify-start">
              <a
                href="#book-call"
                className="w-full sm:w-auto rounded-full bg-[#ff7a00] px-6 sm:px-8 py-3 text-base sm:text-lg font-medium text-white hover:bg-[#e66d00] transition inline-flex items-center justify-center gap-2"
              >
                Book a FREE consultation today
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
              </a>
            </div>

            {/* TRUST PILLS */}
            <div className="mt-6 sm:mt-8 flex flex-row flex-wrap gap-3 sm:gap-4 items-center justify-center lg:justify-start">
              {["Shopify-First", "Fast Delivery", "Conversion Focused"].map((text) => (
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
          <div className="w-full lg:w-[520px] flex justify-center lg:justify-end">
            {/* animation / image slider goes here */}
          </div>

        </div>
      </div>
    </section>
  );
}
