import {
  Paintbrush,
  FileText,
  CreditCard,
  Layers,
  BarChart3,
} from "lucide-react";


export default function ProblemSelection() {
  return (
    <section className="bg-[#FDF8F4] py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start min-h-screen">

          {/* LEFT: Content (normal document scroll) */}
          <div className="flex flex-col">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
              Be honest{" "}
              <span className="text-black">
                is your store holding your{" "}
                <span className="text-[#FF7A00]">ads</span> back?
              </span>
            </h2>

            <p className="mt-6 text-xl text-neutral-600 leading-relaxed max-w-xl">
              Great ads can’t save a weak store. If people don’t trust your site or don’t get your offer,
              they click, browse, and leave. We fix those leaks so your ad spend actually turns into sales.
            </p>

            <div className="mt-14 flex flex-col gap-6">
              {[
                {
                  title: "Your site looks DIY",
                  desc: "People don’t trust you enough to buy",
                  icon: Paintbrush,
                },
                {
                  title: "Product pages are confusing",
                  desc: "Visitors don’t see why you’re worth the price",
                  icon: FileText,
                },
                {
                  title: "Checkout feels risky",
                  desc: "They drop off right before paying",
                  icon: CreditCard,
                },
                {
                  title: "Too many apps and pop-ups",
                  desc: "Store slows down and hurts your ad performance",
                  icon: Layers,
                },
                {
                  title: "Tracking is messy",
                  desc: "You have no clear view of which ads are making money",
                  icon: BarChart3,
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-full bg-[#FFEAD1] flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-[#FF7A00]" strokeWidth={2.2} />
                  </div>
                  <div>
                    <div className="text-2xl font-semibold text-[#ef4444]">
                      {item.title}
                    </div>
                    <div className="text-lg text-neutral-500">
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <a
                href="#book-call"
                className="inline-flex items-center gap-2 rounded-full bg-[#22C55E] px-8 py-3 text-lg font-medium text-white hover:bg-[#e66d00] transition"
              >
                See what’s blocking your sales
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
          </div>

          {/* RIGHT: Sticky Funnel */}
          <div className="relative hidden lg:flex justify-end">
            <div className="sticky top-24">
              <div className="w-[540px] bg-white rounded-[28px] shadow-2xl overflow-hidden">

                {/* Browser dots */}
                <div className="absolute top-5 right-6 flex gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                </div>

                <div className="pt-10 pb-6 px-8">
                  <h3 className="text-sm font-semibold text-neutral-900">
                    Funnel Efficiency Map
                  </h3>
                </div>

                <div className="flex flex-col items-center px-10 pb-10 gap-4">
                  <div className="w-[340px] bg-[#2563EB] text-white rounded-xl px-5 py-3 text-sm font-semibold flex justify-between shadow">
                    <span>Paid Traffic (Facebook/Google)</span>
                    <span className="text-xs font-normal">CPC $1.20</span>
                  </div>

                  <span className="text-[11px] bg-[#FFE5E5] text-[#DC2626] px-3 rounded-full font-semibold shadow">
                    ⚠ 40% Drop-off (Slow Load)
                  </span>

                  <div className="w-[290px] bg-[#2563EB] text-white rounded-xl px-5 py-3 text-sm font-semibold flex justify-between shadow">
                    <span>Landing Page / Product Page</span>
                    <span className="text-xs font-normal">20% VTR</span>
                  </div>

                  <span className="text-[11px] bg-[#FEF3C7] text-[#F59E42] px-3 rounded-full font-semibold shadow">
                    ⚠ 15% Drop-off (No Trust)
                  </span>

                  <div className="w-[220px] bg-[#60A5FA] text-white rounded-xl px-5 py-3 text-sm font-semibold flex justify-between shadow">
                    <span>Add to Cart</span>
                    <span className="text-xs font-normal">3.5% ATC</span>
                  </div>

                  <div className="w-[160px] rounded-xl bg-gradient-to-r from-[#22C55E] to-[#4ADE80] text-white text-center py-3 font-bold shadow-lg">
                    PURCHASE
                  </div>
                </div>

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
