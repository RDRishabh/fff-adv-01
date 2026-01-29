"use client";
import { useBookCall } from "../../../components/ui/BookCallContext";
import {
  TrendingUp,
  Zap,
  ShoppingCart,
  DollarSign,
} from "lucide-react";

const solutionCards = [
  {
    icon: <TrendingUp size={26} className="text-[#2563EB]" />,
    tag: (
      <>
        CVR <span className="ml-1 text-xl font-extrabold">↑</span>
      </>
    ),
    tagColor: "bg-white text-[#2563EB] border border-[#E5EAF6]",
    bg: "bg-[#EFF6FF]",
    title: "Conversion-Focused UI",
    desc: "Make your pages clear and trustworthy so more visitors turn into buyers.",
  },
  {
    icon: <Zap size={26} className="text-[#FF7A00]" />,
    tag: (
      <>
        Speed <span className="ml-1 text-xl font-extrabold">↑</span>
      </>
    ),
    tagColor: "bg-white text-[#FF7A00] border border-[#FFEAD1]",
    bg: "bg-[#FFF4EC]",
    title: "Performance Code",
    desc: "Optimize load time and execution so paid traffic converts without friction.",
  },
  {
    icon: <ShoppingCart size={26} className="text-[#22C55E]" />,
    tag: (
      <>
        AOV <span className="ml-1 text-xl font-extrabold">↑</span>
      </>
    ),
    tagColor: "bg-white text-[#22C55E] border border-[#D1FADF]",
    bg: "bg-[#ECFDF3]",
    title: "Average Order Value",
    desc: "Increase AOV with smart bundles, upsells, and better offer positioning.",
  },
  {
    icon: <DollarSign size={26} className="text-[#8B5CF6]" />,
    tag: (
      <>
        CAC <span className="ml-1 text-xl font-extrabold">↓</span>
      </>
    ),
    tagColor: "bg-white text-[#8B5CF6] border border-[#E9D5FF]",
    bg: "bg-[#F5F3FF]",
    title: "Lower Acquisition Costs",
    desc: "Remove bloat and build a lean stack that stays fast as you scale.",
  },
];

export default function SolutionSnapshot() {
  const { openPopup } = useBookCall();
  return (
    <section className="bg-[#FDF8F4] py-12 " id="what-we-do">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="text-left sm:text-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900">
            What <span className="text-[#FF7A00]">we</span> do?
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-neutral-600 text-xl">
            We turn your Shopify store into a clean, fast sales machine for paid traffic.
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {solutionCards.map((card, idx) => (
            <div
              key={idx}
              className={`rounded-2xl px-8 py-4 shadow-lg border border-white/40 ${card.bg}`}
            >
              {/* Icon + Tag */}
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white shadow-sm">
                  {card.icon}
                </span>
                <span
                  className={`text-md font-semibold rounded-full px-4 py-1 ${card.tagColor}`}
                >
                  {card.tag}
                </span>
              </div>

              {/* Content */}
              <div className="mt-6">
                <p className="text-2xl font-semibold text-neutral-900">
                  {card.title}
                </p>
                <p className="mt-1 text-lg text-neutral-700 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-6 sm:mt-8 flex justify-start sm:justify-center">
          <button
            type="button"
            onClick={openPopup}
            className="sm:w-auto rounded-full bg-[#22C55E] px-6 sm:px-8 py-3 text-base sm:text-2xl font-medium text-white hover:bg-[#e66d00] transition inline-flex items-center  gap-2"
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
      </div>
    </section>
  );
}
