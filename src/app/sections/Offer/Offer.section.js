"use client";

import { InlineWidget } from "react-calendly";

export default function Offer() {
  return (
    <section className="py-12 bg-[#FFFFFF]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Title + Text */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-[#ff7a00]/10 text-[#ff7a00] text-sm font-semibold mb-6">
              GET STARTED
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight mb-6">
              Start with a free store check.
            </h2>
            <p className="text-neutral-600 text-lg leading-relaxed mb-8">
              We’ll quickly review your store, show you what’s blocking sales, and outline what needs to change so you can scale ads with confidence no pressure, no hard pitch.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-500">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#ff7a00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>15 min call</span>
              </div>
              {/* <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#ff7a00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>No commitment</span>
              </div> */}
            </div>

            {/* Email fallback */}
            <div className="mt-8 pt-8 border-t border-neutral-200">
              <p className="text-neutral-500 text-sm">
                Prefer email? Reach out at{" "}
                <a href="mailto:hello@fff.agency" className="text-[#ff7a00] font-semibold hover:underline">
                  hello@fff.agency
                </a>
              </p>
            </div>
          </div>

          {/* RIGHT: Calendly Embed */}
          <div className="rounded-2xl overflow-hidden bg-white shadow-lg">
            <InlineWidget 
              url="https://calendly.com/rishabhdidwania22/2?back=1&month=2026-01"
              styles={{
                height: '520px',
                minWidth: '280px',
              }}
              pageSettings={{
                backgroundColor: 'ffffff',
                hideEventTypeDetails: true,
                hideLandingPageDetails: true,
                primaryColor: 'ff7a00',
                textColor: '171717',
              }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
