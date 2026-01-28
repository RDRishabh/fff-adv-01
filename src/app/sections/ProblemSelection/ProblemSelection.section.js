export default function ProblemSelection() {
  return (
    <section className="py-24 bg-[#FDF8F4]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* LEFT: Heading, description, checklist */}
          <div className="flex flex-col">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
              Be honest –{" "}
              <span className="text-black">
                is your store holding your{" "}
                <span className="text-[#FF7A00]">ads</span> back?
              </span>
            </h2>

            <p className="mt-6 text-neutral-600 leading-relaxed max-w-xl">
              You can't fix bad ROAS with more ad spend. If your funnel is leaking,
              you're just pouring water into a bucket full of holes.
            </p>

            <div className="mt-10 flex flex-col gap-5">
              {[
                {
                  title: "Page loads over 3 seconds",
                  desc: "53% of mobile visitors bounce before they even see your offer.",
                  icon: (
                    <path d="M16 16V8H8v8h8z" fill="#FFB155" />
                  ),
                },
                {
                  title: "Clunky mobile navigation",
                  desc: "Users can't find the product they saw in your ad. High friction = low sales.",
                  icon: (
                    <>
                      <rect x="8" y="8" width="8" height="8" rx="2" fill="#FFB155" />
                      <rect x="10" y="10" width="4" height="4" rx="1" fill="#fff" />
                    </>
                  ),
                },
                {
                  title: "Confusing product pages",
                  desc: "Missing trust signals and clear CTAs kill your conversion rate.",
                  icon: (
                    <>
                      <rect x="8" y="8" width="8" height="8" rx="2" fill="#FFB155" />
                      <rect x="10" y="10" width="4" height="4" rx="1" fill="#fff" />
                    </>
                  ),
                },
                {
                  title: "Friction–heavy checkout",
                  desc: "High cart abandonment because the process feels like a chore.",
                  icon: (
                    <path d="M8 16h8v-2H8v2zm0-4h8v-2H8v2zm0-4h8V6H8v2z" fill="#FFB155" />
                  ),
                },
                {
                  title: "No post–purchase flow",
                  desc: "You're leaving money on the table by not maximizing customer LTV.",
                  icon: (
                    <path
                      d="M16 8l-8 8M8 8l8 8"
                      stroke="#FFB155"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  ),
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm"
                >
                  <svg width="28" height="28" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="12" fill="#FFEAD1" />
                    {item.icon}
                  </svg>
                  <div>
                    <div className="font-semibold text-neutral-900">
                      {item.title}
                    </div>
                    <div className="text-neutral-500 text-sm">
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Sticky Funnel */}
          <div className="relative lg:block flex justify-center lg:justify-end h-full">
            <div className="lg:sticky lg:top-24">
              <div className="w-[540px] bg-white rounded-[28px] shadow-2xl overflow-hidden relative">

                {/* Browser dots */}
                <div className="absolute top-5 right-6 flex gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                </div>

                {/* Header */}
                <div className="pt-10 pb-6 px-8">
                  <h3 className="text-sm font-semibold text-neutral-900">
                    Funnel Efficiency Map
                  </h3>
                </div>

                {/* Animation */}
                <style>{`
                  @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.3; }
                  }
                  .blinking {
                    animation: blink 1s infinite;
                  }
                `}</style>

                {/* Funnel */}
                <div className="flex flex-col items-center px-10 pb-10">

                  <div className="w-[340px] bg-[#2563EB] text-white rounded-xl px-5 py-3 text-sm font-semibold flex justify-between shadow">
                    <span>Paid Traffic (Facebook/Google)</span>
                    <span className="text-xs font-normal">CPC $1.20</span>
                  </div>

                  <div className="relative flex flex-col items-center w-full pt-3 h-10">
                    <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#E5E7EB]" />
                    <span className="blinking text-[11px] bg-[#FFE5E5] text-[#DC2626] px-3 rounded-full font-semibold shadow">
                      ⚠ 40% Drop-off (Slow Load)
                    </span>
                  </div>

                  <div className="w-[290px] bg-[#2563EB] text-white rounded-xl px-5 py-3 text-sm font-semibold flex justify-between shadow">
                    <span>Landing Page / Product Page</span>
                    <span className="text-xs font-normal">20% VTR</span>
                  </div>

                  <div className="relative flex flex-col items-center w-full pt-2 h-10">
                    <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#E5E7EB]" />
                    <span className="blinking text-[11px] bg-[#FEF3C7] text-[#F59E42] px-3 py-1 rounded-full font-semibold shadow">
                      ⚠ 15% Drop-off (No Trust)
                    </span>
                  </div>

                  <div className="w-[220px] bg-[#60A5FA] text-white rounded-xl px-5 py-3 text-sm font-semibold flex justify-between shadow">
                    <span>Add to Cart</span>
                    <span className="text-xs font-normal">3.5% ATC</span>
                  </div>

                  <div className="w-px h-8 bg-[#E5E7EB]" />

                  <div className="w-[160px] rounded-xl bg-gradient-to-r from-[#22C55E] to-[#4ADE80] text-white text-center py-3 font-bold shadow-lg">
                    PURCHASE
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-start gap-3 px-6 py-4 border-t bg-[#FAFAFA]">
                  <div className="w-8 h-8 rounded-full bg-[#FEE2E2] flex items-center justify-center">
                    <span className="text-[#DC2626] font-bold">✕</span>
                  </div>
                  <p className="text-sm text-neutral-700 leading-snug">
                    Current conversion efficiency is{" "}
                    <span className="text-[#DC2626] font-bold">1.2%</span>. We target a baseline of{" "}
                    <span className="text-[#22C55E] font-bold">3.5%+</span>.
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
