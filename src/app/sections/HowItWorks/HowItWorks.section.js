const steps = [
  {
    number: "01",
    title: "Quick Call",
    description: "15–20 min discovery call to understand your goals, products, and vision.",
    color: "bg-[#ff7a00]",
    textColor: "text-white",
  },
  {
    number: "02",
    title: "Build Sprint",
    description: "We design and develop your store with weekly check-ins and revisions.",
    color: "bg-neutral-900",
    textColor: "text-white",
  },
  {
    number: "03",
    title: "Launch + Walkthrough",
    description: "Final handoff with a live walkthrough so you're confident running your store.",
    color: "bg-[#ff7a00]/20",
    textColor: "text-neutral-900",
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
            Simple process. Clear outcome.
          </h2>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          {/* Timeline container with week headers */}
          <div className="relative">
            {/* Week Labels */}
            <div className="grid grid-cols-4 mb-8 border-b border-neutral-200 pb-4">
              {["Week 1", "Week 2", "Week 3", "Week 4"].map((week, i) => (
                <div key={week} className="text-center">
                  <span className="text-lg font-semibold text-neutral-800">{week}</span>
                </div>
              ))}
            </div>

            {/* Vertical grid lines */}
            <div className="absolute top-16 left-0 right-0 bottom-0 grid grid-cols-4 pointer-events-none">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="border-l border-neutral-100 first:border-l-0" />
              ))}
            </div>

            {/* Timeline bars - Gantt style */}
            <div className="relative space-y-6 py-8">
              {steps.map((step, index) => (
                <div 
                  key={step.number} 
                  className="relative flex items-center"
                  style={{ 
                    marginLeft: `${index * 20}%`,
                    width: `${60 - index * 10}%`
                  }}
                >
                  <div 
                    className={`${step.color} rounded-full px-6 py-4 flex items-center justify-between w-full shadow-sm hover:shadow-md transition-shadow`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`${step.textColor} font-bold text-lg`}>
                        {step.title}
                      </span>
                    </div>
                    <div className="w-6 h-6 rounded-full bg-white/50 border-2 border-white flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Timeline - Vertical */}
        <div className="md:hidden">
          <div className="relative pl-4">
            {/* Vertical line - starts from first circle and ends at last */}
            <div className="absolute left-[24px] top-6 bottom-6 w-0.5 bg-neutral-300" />

            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={step.number} className="relative flex items-start gap-5">
                  {/* Step indicator */}
                  <div className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-full ${step.color} flex items-center justify-center shadow-md`}>
                    <span className={`${step.textColor} font-bold text-sm`}>{step.number}</span>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 min-w-0">
                    <div className={`${step.color} rounded-2xl p-5 shadow-sm`}>
                      <h4 className={`font-bold text-normal ${step.textColor} mb-2`}>{step.title}</h4>
                      <p className={`text-sm ${step.textColor} ${step.textColor === 'text-white' ? 'opacity-90' : 'opacity-70'} leading-relaxed`}>{step.description}</p>
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
