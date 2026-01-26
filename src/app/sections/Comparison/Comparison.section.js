const comparisonData = [
  {
    feature: "Goal",
    fff: "Convert and scale",
    typical: "Look good",
  },
  {
    feature: "Product page",
    fff: "Clarity & trust",
    typical: "Basic template",
  },
  {
    feature: "Apps + integrations",
    fff: "Clean stack",
    typical: "Bloated & slow",
  },
  {
    feature: "Speed",
    fff: "Optimized",
    typical: "Often ignored",
  },
  {
    feature: "Payments + shipping",
    fff: "Setup correctly",
    typical: "DIY configuration",
  },
  {
    feature: "Analytics + tracking",
    fff: "Clear data",
    typical: "Broken or missing",
  },
];

export default function Comparison() {
  return (
    <section className="py-24 bg-[#FDF8F4]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Title + CTA */}
          <div className="items-center justify-center text-center ">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-tight">
              Why Choose Us?
            </h2>

            <p className="mt-6 text-neutral-600 leading-relaxed">
              Most stores are built to look good. We build them to convert and scale.
            </p>

            {/* CTA Button */}
            <a
              href="#book-call"
              className="mt-8 inline-flex items-center justify-center w-full sm:w-auto rounded-full bg-[#22C55E] px-8 py-3 text-base font-semibold text-white transition hover:bg-neutral-800"
            >
              Book a Call
            </a>

            {/* Trust note */}
            {/* <div className="mt-6 flex items-center gap-2 text-sm text-neutral-600">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              <span>Limited slots per week</span>
            </div> */}
          </div>

          {/* RIGHT: Comparison Table */}
          <div className="overflow-x-auto">
            {/* Table Header */}
            <div className="grid grid-cols-3 min-w-[480px] md:min-w-0">
              <div className="p-3 md:p-6">
                {/* Empty cell */}
              </div>
              <div className="p-3 md:p-6 flex flex-col items-center justify-center rounded-t-2xl border-r border-t border-l border-neutral-300 bg-[#ff7a00]/10">
                <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-[#FFFFFF] flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-base md:text-xl"><img src="/logo.png" alt="Shopify logo" style={{ height: '1em', width: 'auto', display: 'inline-block', verticalAlign: 'bottom' }} /></span>
                </div>
              </div>
              <div className="p-3 md:p-6 flex flex-col items-center justify-center">
                <span className="text-neutral-800 font-medium text-sm md:text-lg text-center">Other Brands</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-neutral-300 min-w-[480px] md:min-w-0">
              {/* Table Body */}
              {comparisonData.map((row, index) => (
                <div 
                  key={row.feature} 
                  className={`grid grid-cols-3 ${index !== comparisonData.length - 1 ? 'border-b border-neutral-300' : ''}`}
                >
                  {/* Feature Name */}
                  <div className="p-3 md:p-6 flex items-center border-r border-neutral-300">
                    <span className="font-medium text-neutral-900 text-sm md:text-base">{row.feature}</span>
                  </div>

                  {/* FFF Column */}
                  <div className="p-3 md:p-6 flex items-start gap-2 md:gap-3 border-r border-neutral-300 bg-[#ff7a00]/10">
                    <span className="flex-shrink-0 w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#22C55E] flex items-center justify-center mt-0.5">
                      <svg className="w-2.5 h-2.5 md:w-3 md:h-3" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span className="text-neutral-700 text-xs md:text-sm leading-relaxed">{row.fff}</span>
                  </div>

                  {/* Typical Column */}
                  <div className="p-3 md:p-6 flex items-start gap-2 md:gap-3">
                    <span className="flex-shrink-0 w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#ef4444] flex items-center justify-center mt-0.5">
                      <svg className="w-2 h-2 md:w-2.5 md:h-2.5" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </span>
                    <span className="text-neutral-500 text-xs md:text-sm leading-relaxed">{row.typical}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
