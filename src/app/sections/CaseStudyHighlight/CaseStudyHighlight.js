"use client";

export default function CaseStudyHighlight() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="mx-auto px-4">
        <div className="mx-auto max-w-[1100px]">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <div className="flex flex-col md:flex-row bg-gradient-to-br from-[#0F172A] to-[#1E293B]">

              {/* LEFT IMAGE */}
              <div className="relative flex justify-center items-center  
                              md:w-[320px] 
                              order-2 md:order-1">
                <img
                  src="/images/section/slide03.png"
                  alt="Case study preview"
                  className="h-[480px] sm:h-[520px] w-auto object-contain"
                />
              </div>


              {/* RIGHT CONTENT */}
              <div className="flex-1  p-6 sm:p-8 md:p-10 text-white">
                <span className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-sm sm:text-base text-black font-semibold">
                  Mini Case Study
                </span>

                <h3 className="mt-4 text-xl sm:text-2xl md:text-3xl font-bold leading-snug max-w-[520px]">
                  How we scaled a stuck brand from{" "}
                  <span className="text-[#FF7A00]">0.7</span> to{" "}
                  <span className="text-[#FF7A00]">1.8</span> ROAS in 60 days.
                </h3>

                {/* PROBLEM */}
                <div className="mt-6">
                  <div className="text-sm uppercase tracking-wide text-[#FF7A00] font-semibold">
                    The Problem
                  </div>
                  <p className="mt-2 text-base sm:text-lg text-neutral-300 leading-relaxed max-w-[520px]">
                    Store was beautiful but bloated. Load times hit 5s+, and the
                    “Add to Cart” button was hidden below the fold on mobile.
                  </p>
                </div>

                {/* FIX */}
                <div className="mt-6">
                  <div className="text-sm uppercase tracking-wide text-[#22C55E] font-semibold">
                    The Fix
                  </div>

                  <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-base sm:text-lg text-neutral-200">
                    <li>• Custom Shopify theme build</li>
                    <li>• Sub-2s mobile load time</li>
                    <li>• Segmented cart upsells</li>
                    <li>• Refined product hierarchy</li>
                  </ul>
                </div>

                {/* METRICS */}
                <div className="mt-8 flex gap-10">
                  <div>
                    <div className="text-3xl font-bold">30%</div>
                    <div className="text-sm text-neutral-400">
                      CVR (was 1.1%)
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">$400</div>
                    <div className="text-sm text-neutral-400">
                      AOV (was $100)
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
