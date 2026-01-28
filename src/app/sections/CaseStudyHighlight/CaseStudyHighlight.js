"use client";

export default function CaseStudyHighlight() {
  return (
    <section className="py-28 bg-white">
      <div className="mx-auto px-4">
        <div className="mx-auto w-[90vw] lg:w-[70vw] max-w-[1100px]">

          <div className="relative overflow-hidden rounded-[28px] shadow-2xl">
            
            {/* FLEX container – HEIGHT comes from RIGHT */}
            <div className="flex">
              {/* CONTENT ONLY, NO IMAGE */}
              <div className="flex-1 bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-8 md:p-10 text-white rounded-[28px]">

                <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium">
                  Mini Case Study · Bold Threads
                </span>

                <h3 className="mt-5 text-xl md:text-2xl lg:text-3xl font-bold leading-tight">
                  How we scaled a stuck fashion brand from{" "}
                  <span className="text-[#FF7A00]">$12k</span> to{" "}
                  <span className="text-[#FF7A00]">$41k</span> in 90 days.
                </h3>

                <div className="mt-6">
                  <div className="text-lg uppercase tracking-wide text-[#FF7A00] font-semibold">
                    The Problem
                  </div>
                  <p className="mt-2 text-lg text-neutral-300 leading-relaxed">
                    Store was beautiful but bloated. Load times hit 5s+, and the
                    “Add to Cart” button was hidden below the fold on mobile.
                  </p>
                </div>

                <div className="mt-6">
                  <div className="text-lg uppercase tracking-wide text-[#22C55E] font-semibold">
                    The Fix
                  </div>

                  <div className="mt-3 grid grid-cols-1 text-lg sm:grid-cols-2 gap-2 text-neutral-200">
                    <span>• Custom Shopify theme build</span>
                    <span>• Sub-2s mobile load time</span>
                    <span>• Segmented cart upsells</span>
                    <span>• Refined product hierarchy</span>
                  </div>
                </div>

                <div className="mt-8 flex gap-8">
                  <div>
                    <div className="text-2xl font-bold">3.2%</div>
                    <div className="text-lg text-neutral-400">
                      CVR (was 1.1%)
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">$92.00</div>
                    <div className="text-lg text-neutral-400">
                      AOV (was $64.00)
                    </div>
                  </div>
                </div>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 mt-8 text-lg font-semibold text-[#FF7A00] hover:underline"
                >
                  Read the full teardown →
                </a>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
