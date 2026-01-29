"use client";
import { useBookCall } from "../../../components/ui/BookCallContext";

const steps = [
  {
    number: "01",
    title: " Strategy call & plan",
    description:
      "We review your current store, understand your numbers, and plan the new structure.",
    color: "bg-[#ff7a00]",
    textColor: "text-white",
  },
  {
    number: "02",
    title: "Wireframes & design",
    description:
      "We map out your key pages and how they should look, feel, and flow for conversions.",
    color: "bg-neutral-900",
    textColor: "text-white",
  },
  {
    number: "03",
    title: "Build sprint",
    description:
      "We build on Shopify, set up apps, and connect payments, shipping, and tracking.",
    color: "bg-[#ff7a00]/20",
    textColor: "text-neutral-900",
  },
  {
    number: "04",
    title: "QA, launch & handover",
    description:
      "We test everything, launch the store, and walk you through how to use and update it.",
    color: "bg-[#0047FF]",
    textColor: "text-white",
  },
];

export default function HowItWorks() {
  const { openPopup } = useBookCall();
  return (
    <section className="py-12 bg-[#FDF8F4]">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-[#ff7a00]/10 text-[#ff7a00] text-sm font-semibold mb-4">
            HOW IT WORKS
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900">
            Simple process.<span className="text-[#FF7A00]"> Clear</span> outcome.
          </h2>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          <div className="relative min-h-[420px]">
            {/* Week Labels */}
            <div className="grid grid-cols-4  border-b border-neutral-200 pb-4">
              {["Week 1", "Week 2", "Week 3", "Week 4"].map((week) => (
                <div key={week} className="text-center">
                  <span className="text-lg font-semibold text-neutral-800">
                    {week}
                  </span>
                </div>
              ))}
            </div>
            {/* Open-ended background grid */}
            <div className="absolute top-[72px] left-0 right-0 bottom-0 pointer-events-none">
              {/* Vertical dividers (between weeks) */}
              <div className="absolute inset-0 grid grid-cols-4">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="border-r border-neutral-200/60"
                  />
                ))}
              </div>

              {/* Horizontal dividers (between steps) */}
              <div className="absolute inset-0 grid grid-rows-4">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="border-b border-neutral-200/60"
                  />
                ))}
              </div>
            </div>


            {/* Timeline bars */}
            <div className="relative space-y-6 z-10 mt-8">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className="relative"
                  style={{
                    marginLeft: `${index * 20}%`,
                    width: `${40}%`,
                  }}
                >
                  <div
                    className={`${step.color} rounded-2xl px-6 py-5 shadow-sm hover:shadow-md transition-shadow`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span
                        className={`${step.textColor} font-medium text-[22px]`}
                      >
                        {step.title}
                      </span>
                      <div className="w-6 h-6 rounded-full bg-white/50 border-2 border-white flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-white" />
                      </div>
                    </div>

                    {/* Description now visible on desktop */}
                    <p
                      className={`text-lg leading-relaxed ${
                        step.textColor === "text-white"
                          ? "text-white/90"
                          : "text-neutral-700"
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden">
          <div className="relative">
            <div className="absolute left-[24px] top-6 bottom-6 w-0.5 bg-neutral-300" />

            <div className="space-y-6">
              {steps.map((step) => (
                <div key={step.number} className="relative flex items-start gap-5">
                  <div
                    className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-full ${step.color} flex items-center justify-center shadow-md`}
                  >
                    <span className={`${step.textColor} font-bold text-sm`}>
                      {step.number}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className={`${step.color} rounded-2xl p-5 shadow-sm`}>
                      <h4
                        className={`font-bold text-normal ${step.textColor} mb-2`}
                      >
                        {step.title}
                      </h4>
                      <p
                        className={`text-sm ${
                          step.textColor === "text-white"
                            ? "text-white/90"
                            : "text-neutral-700"
                        } leading-relaxed`}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-6 sm:mt-12 flex justify-center">
          <button
            type="button"
            onClick={openPopup}
            className="sm:w-auto rounded-full bg-[#2563EB ] px-6 sm:px-8 py-3 text-base sm:text-2xl font-medium text-white hover:bg-[#e66d00] transition inline-flex items-center  gap-2"
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
