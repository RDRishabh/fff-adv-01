"use client";

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
  return (
    <section className="py-24 bg-[#FDF8F4]">
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
          <div className="relative">
            {/* Week Labels */}
            <div className="grid grid-cols-4 mb-8 border-b border-neutral-200 pb-4">
              {["Week 1", "Week 2", "Week 3", "Week 4"].map((week) => (
                <div key={week} className="text-center">
                  <span className="text-lg font-semibold text-neutral-800">
                    {week}
                  </span>
                </div>
              ))}
            </div>

            {/* Vertical grid lines */}
            <div className="absolute top-8 left-0 right-0 bottom-0 grid grid-cols-4 pointer-events-none">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="border-l border-neutral-100 first:border-l-0"
                />
              ))}
            </div>

            {/* Timeline bars */}
            <div className="relative space-y-4">
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
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`${step.textColor} font-bold text-lg`}
                      >
                        {step.title}
                      </span>
                      <div className="w-6 h-6 rounded-full bg-white/50 border-2 border-white flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-white" />
                      </div>
                    </div>

                    {/* Description now visible on desktop */}
                    <p
                      className={`text-sm leading-relaxed ${
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
          <div className="relative pl-4">
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
        <div className="text-center mt-16">
          <p className="text-neutral-600 mb-6">
            We take limited builds per week to keep quality high.
          </p>
          <a
            href="#book-call"
            className="inline-flex items-center justify-center rounded-full bg-[#ff7a00] px-10 py-4 text-base font-semibold text-white transition hover:bg-[#e66e00] shadow-lg hover:shadow-xl"
          >
            Book a Call
          </a>
        </div>
      </div>
    </section>
  );
}
