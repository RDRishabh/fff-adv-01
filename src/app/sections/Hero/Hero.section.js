"use client";

import { useEffect, useState } from "react";

/* ----------------------------------
   ICONS (minimal, inline SVGs)
-----------------------------------*/
const icons = {
  Speed: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  Trust: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  "Product Page": (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18" />
      <path d="M9 21V9" />
    </svg>
  ),
  Checkout: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="4" width="22" height="16" rx="2" />
      <path d="M1 10h22" />
    </svg>
  ),
  Tracking: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="10" r="3" />
      <path d="M12 2a8 8 0 0 0-8 8c0 5.4 7 11.5 7.3 11.8a1 1 0 0 0 1.4 0C13 21.5 20 15.4 20 10a8 8 0 0 0-8-8z" />
    </svg>
  ),
};

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


/* ----------------------------------
   HERO SECTION
-----------------------------------*/
export default function Hero() {
  return (
    <section className="relative pt-40 pb-24 bg-[#FDF8F4] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-row wgap-16 items-center">
          {/* LEFT COPY */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-black">
              Launch a <br/>
              Professionally built <span className="inline-block align-middle mx-1">
                <img src="/images/shopify.png" alt="Shopify logo" style={{ height: '1em', width: 'auto', display: 'inline-block', verticalAlign: 'bottom' }} />
              </span>store<br/>
              that converts.
            </h1>

            <p className="mt-6 max-w-xl text-lg text-neutral-400">
              Built for D2C founders launching or upgrading before scaling ads.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#book-call"
                className="rounded-full bg-[#ff7a00] px-8 py-3 text-lg font-medium text-white hover:bg-[#e66d00] transition flex items-center justify-center gap-2"
                style={{ minWidth: '340px' }}
              >
                Book a FREE consultation today
                <span className="ml-2">
                  <svg width="22" height="22" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                </span>
              </a>
            </div>

            <div className="mt-8 flex flex-col gap-2 mx-auto sm:flex-row sm:gap-4">
              {[
                "Shopify-First",
                "Conversion Focused",
                "Fast Delievery"
              ].map((text) => (
                <span
                  key={text}
                  className="flex items-center bg-[#C6F6D5] rounded-md px-3 py-2 text-green-700 font-semibold text-base shadow-sm"
                  style={{ fontWeight: 500 }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="mr-2" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="10" fill="#22C55E"/>
                    <path d="M6 10.5L9 13.5L14 8.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {text}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT ANIMATION (CONSTRAINED) */}
          <div className="relative flex justify-center lg:justify-end overflow-hidden">
            
          </div>
        </div>
      </div>
    </section>
  );
}
