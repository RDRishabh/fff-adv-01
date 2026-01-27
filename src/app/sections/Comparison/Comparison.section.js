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
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-center lg:items-stretch">
          {/* LEFT: Title + CTA */}
          <div className="flex flex-col items-start justify-center text-left lg:pr-2 lg:w-[480px] flex-shrink-0">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 leading-tight">
              Why Choose Us?
            </h2>
            <p className="mt-4 text-neutral-600 leading-relaxed text-xs md:text-sm">
              Most stores are built to look good. We build them to convert and scale.
            </p>
            {/* CTA Button */}
            <a
              href="#book-call"
              className="mt-5 inline-flex items-center justify-center w-full sm:w-auto rounded-full bg-[#22C55E] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-800 shadow-lg"
            >
              Book a Call
            </a>
          </div>
          {/* RIGHT: Comparison Table */}
          <div className="overflow-x-auto w-full flex-1">
            {/* Table Header */}
            <div className="flex min-w-[180px]">
              <div className="p-4 lg:p-5 flex-1 basis-[60px]">
                {/* Empty cell */}
              </div>
              <div className="p-4 lg:p-5 flex flex-col items-center justify-center rounded-t-2xl border-r border-t border-l border-neutral-300 bg-[#ff7a00]/10 flex-1 basis-[60px]">
                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-[#FFFFFF] flex items-center justify-center shadow-xl">
                  <span className="text-white font-bold text-base lg:text-lg"><img src="/logo.png" alt="Shopify logo" style={{ height: '1em', width: 'auto', display: 'inline-block', verticalAlign: 'bottom' }} /></span>
                </div>
              </div>
              <div className="p-4 lg:p-5 flex flex-col items-center justify-center flex-1 basis-[60px]">
                <span className="text-neutral-800 font-semibold text-sm lg:text-base text-center">Other Brands</span>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-neutral-300 min-w-[180px]">
              {/* Table Body */}
              {comparisonData.map((row, index) => (
                <div
                  key={row.feature}
                  className={`flex ${index !== comparisonData.length - 1 ? 'border-b border-neutral-300' : ''}`}
                >
                  {/* Feature Name */}
                  <div className="p-4 lg:p-5 flex items-center border-r border-neutral-300 flex-1 basis-[60px]">
                    <span className="font-semibold text-neutral-900 text-xs lg:text-sm">{row.feature}</span>
                  </div>
                  {/* FFF Column */}
                  <div className="p-4 lg:p-5 flex items-start gap-2 lg:gap-2 border-r border-neutral-300 bg-[#ff7a00]/10 flex-1 basis-[60px]">
                    <span className="flex-shrink-0 w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-[#22C55E] flex items-center justify-center mt-1">
                      <svg className="w-3 h-3 lg:w-3.5 lg:h-3.5" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span className="text-neutral-700 text-xs lg:text-sm leading-relaxed">{row.fff}</span>
                  </div>
                  {/* Typical Column */}
                  <div className="p-4 lg:p-5 flex items-start gap-2 lg:gap-2 flex-1 basis-[60px]">
                    <span className="flex-shrink-0 w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-[#ef4444] flex items-center justify-center mt-1">
                      <svg className="w-2.5 h-2.5 lg:w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </span>
                    <span className="text-neutral-500 text-xs lg:text-sm leading-relaxed">{row.typical}</span>
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
