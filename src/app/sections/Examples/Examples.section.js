const examples = [
  {
    before: "Low ROAS after ads",
    after: "Product page + checkout clarity",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    before: "DIY store",
    after: "Pro rebuild for trust",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    before: "App mess",
    after: "Clean stack + faster store",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function Examples() {
  return (
    <section className="py-24 bg-[#FDF8F4]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Title + CTA */}
          <div>
            {/* Badge */}
            <span className="inline-block px-4 py-2 rounded-full bg-[#ff7a00]/10 text-[#ff7a00] text-sm font-semibold mb-6">
              REAL RESULTS
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight mb-6">
              What we fix most often
            </h2>

            <p className="text-neutral-600 text-lg leading-relaxed mb-8">
              No lengthy case studies needed. Here's what we solve for most founders — fast.
            </p>

            {/* CTA Button */}
            <a
              href="#book-call"
              className="inline-flex items-center justify-center rounded-full bg-[#ff7a00] px-10 py-4 text-base font-semibold text-white transition hover:bg-[#e66e00] shadow-lg hover:shadow-xl"
            >
              Book a Call
            </a>
          </div>

          {/* RIGHT: Cards Stack */}
          <div className="space-y-4">
            {examples.map((example, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100 hover:shadow-md hover:border-[#ff7a00]/20 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#ff7a00]/10 text-[#ff7a00] flex items-center justify-center">
                    {example.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="flex flex-wrap items-center gap-2 md:gap-3">
                    <span className="font-semibold text-neutral-900">{example.before}</span>
                    <svg className="w-5 h-5 text-[#ff7a00] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    <span className="font-semibold text-[#ff7a00]">{example.after}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
