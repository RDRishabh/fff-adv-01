"use client";
import { useBookCall } from "../../../components/ui/BookCallContext";

const comparisonData = [
  {
    feature: "Goal",
    fff: "Built to convert and scale paid ads.",
    typical: "Built to look nice and fill a portfolio.",
  },
  {
    feature: "Product page",
    fff: "Clear story, benefits, proof, and objections handled.",
    typical: "Basic theme sections with filler text.",
  },
  {
    feature: "Apps + integrations",
    fff: "Only what you need to sell and track properly.",
    typical: "Bloated setups that slow everything down.",
  },
  {
    feature: "Speed",
    fff: "Fast loads for better user experience and ad performance.",
    typical: "Speed is an afterthought.",
  },
  {
    feature: "Analytics + tracking",
    fff: "Clean events so you know what’s working.",
    typical: "Incomplete or broken data you can’t trust.",
  },
];

function BookCallButton() {
  const { openPopup } = useBookCall() || {};
  return (
    <button
      type="button"
      onClick={openPopup}
      className="mt-6 inline-flex items-center justify-center w-full rounded-full bg-[#2563EB] px-6 py-3 text-lg font-medium text-white transition hover:bg-neutral-800 shadow-lg"
    >
      Book a Call
    </button>
  );
}

export default function Comparison() {
  return (
    <section className="py-12 bg-[#FDF8F4]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-stretch">

          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center lg:w-[480px] flex-shrink-0">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">
              Why <span className="text-[#FF7A00]">Choose</span> Us?
            </h2>
            <p className="mt-4 text-neutral-600 md:text-xl">
              Most stores are built to look good. We build them to convert and scale.
            </p>

            {/* Desktop CTA stays here */}
            <div className="hidden md:block">
              <BookCallButton />
            </div>
          </div>

          {/* ================= DESKTOP TABLE (UNCHANGED) ================= */}
          <div className="hidden md:block overflow-x-auto w-full flex-1">
            {/* Table Header */}
            <div className="flex min-w-[180px]">
              <div className="p-4 lg:p-5 flex-1 basis-[60px]" />
              <div className="p-4 lg:p-5 flex flex-col items-center justify-center rounded-t-2xl border-r border-t border-l border-neutral-300 bg-[#ff7a00]/10 flex-1 basis-[60px]">
                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-white flex items-center justify-center shadow-xl">
                  <img src="/logo.png" alt="logo" className="h-8" />
                </div>
              </div>
              <div className="p-4 lg:p-5 flex flex-col items-center justify-center flex-1 basis-[60px]">
                <span className="text-neutral-800 font-semibold text-sm lg:text-xl">
                  Other Brands
                </span>
              </div>
            </div>

            {/* Table Body */}
            <div className="bg-white rounded-2xl border border-neutral-300 min-w-[180px]">
              {comparisonData.map((row, index) => (
                <div
                  key={row.feature}
                  className={`flex ${
                    index !== comparisonData.length - 1
                      ? "border-b border-neutral-300"
                      : ""
                  }`}
                >
                  <div className="p-4 flex items-center border-r border-neutral-300 flex-1 basis-[60px]">
                    <span className="font-medium text-neutral-900">
                      {row.feature}
                    </span>
                  </div>

                  <div className="p-4 flex gap-2 border-r border-neutral-300 bg-[#ff7a00]/10 flex-1 basis-[60px]">
                    <span className="w-4 h-4 rounded-full bg-green-500 mt-1 flex items-center justify-center text-white text-xs">
                      ✓
                    </span>
                    <span>{row.fff}</span>
                  </div>

                  <div className="p-4 flex gap-2 flex-1 basis-[60px] text-neutral-500">
                    <span className="w-4 h-4 rounded-full bg-red-500 mt-1 flex items-center justify-center text-white text-xs">
                      ✕
                    </span>
                    <span>{row.typical}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ================= MOBILE CARDS ================= */}
          <div className="md:hidden w-full space-y-4">
            {comparisonData.map((row) => (
              <div
                key={row.feature}
                className="bg-white border border-neutral-300 rounded-2xl p-4"
              >
                <h3 className="font-semibold text-lg mb-3">
                  {row.feature}
                </h3>

                <div className="flex gap-2 mb-3">
                  <span className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">
                    ✓
                  </span>
                  <p>
                    <span className="font-medium text-[#FF7A00]">Us: </span>
                    {row.fff}
                  </p>
                </div>

                <div className="flex gap-2 text-neutral-500">
                  <span className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center text-white text-xs">
                    ✕
                  </span>
                  <p>
                    <span className="font-medium">Others: </span>
                    {row.typical}
                  </p>
                </div>
              </div>
            ))}

            {/* Mobile CTA AT VERY END */}
            <BookCallButton />
          </div>

        </div>
      </div>
    </section>
  );
}
