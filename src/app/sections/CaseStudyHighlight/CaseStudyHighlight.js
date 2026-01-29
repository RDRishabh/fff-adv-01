"use client";

export default function CaseStudyHighlight() {
  return (
    <section className="py-10 sm:py-12 bg-white">
      <div className="mx-auto px-4">
        <div className="mx-auto w-full sm:w-[90vw] lg:w-[70vw] max-w-[1100px]">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            {/* FLEX container */}
            <div className="flex flex-col md:flex-row">
              
              {/* LEFT IMAGE */}
              <div className="relative w-full md:w-[25%] aspect-[8/16] md:aspect-auto">
                <img
                  src="/images/section/slide03.png"
                  alt="Case study preview"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>


              {/* RIGHT CONTENT */}
              <div className="flex-1 bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-6 sm:p-8 md:p-10 text-white">
                <span className="inline-flex items-center rounded-full bg-white px-4 pt-2 pb-1 text-base sm:text-lg text-black font-semibold">
                  Mini Case Study
                </span>

                <h3 className="mt-4 sm:mt-5 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-snug">
                  How we scaled a stuck brand from{" "}
                  <span className="text-[#FF7A00]">0.7</span> to{" "}
                  <span className="text-[#FF7A00]">1.8</span> ROAS in 60 days.
                </h3>

                <div className="mt-5 sm:mt-6">
                  <div className="text-sm sm:text-base uppercase tracking-wide text-[#FF7A00] font-semibold">
                    The Problem
                  </div>
                  <p className="mt-2 text-base sm:text-lg text-neutral-300 leading-relaxed">
                    Store was beautiful but bloated. Load times hit 5s+, and the
                    “Add to Cart” button was hidden below the fold on mobile.
                  </p>
                </div>

                <div className="mt-5 sm:mt-6">
                  <div className="text-sm sm:text-base uppercase tracking-wide text-[#22C55E] font-semibold">
                    The Fix
                  </div>

                  <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-base sm:text-lg text-neutral-200">
                    <span>• Custom Shopify theme build</span>
                    <span>• Sub-2s mobile load time</span>
                    <span>• Segmented cart upsells</span>
                    <span>• Refined product hierarchy</span>
                  </div>
                </div>

                <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row gap-6 sm:gap-10">
                  <div>
                    <div className="text-2xl font-bold">30%</div>
                    <div className="text-sm sm:text-base text-neutral-400">
                      CVR (was 1.1%)
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">$400.00</div>
                    <div className="text-sm sm:text-base text-neutral-400">
                      AOV (was $100.00)
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END FLEX */}
          </div>
        </div>
      </div>
    </section>
  );
}
