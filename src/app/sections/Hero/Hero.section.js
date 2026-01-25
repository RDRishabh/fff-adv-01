// Minimalist icons for the widget card
const icons = {
  Speed: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  Trust: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  "Product Page": (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18" />
      <path d="M9 21V9" />
    </svg>
  ),
  Checkout: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="4" width="22" height="16" rx="2" />
      <path d="M1 10h22" />
    </svg>
  ),
  Tracking: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="10" r="3" />
      <path d="M12 2a8 8 0 0 0-8 8c0 5.4 7 11.5 7.3 11.8a1 1 0 0 0 1.4 0C13 21.5 20 15.4 20 10a8 8 0 0 0-8-8z" />
    </svg>
  ),
};

const widgetItems = [
  { name: "Speed", status: "green" },
  { name: "Trust", status: "pending" },
  { name: "Product Page", status: "green" },
  { name: "Checkout", status: "pending" },
  { name: "Tracking", status: "green" },
];

export default function Hero() {
  return (
    <section className="relative pt-40 pb-24 bg-[#FDF8F4] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
          
          {/* LEFT: Copy */}
          <div>

            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-neutral-900 md:text-5xl lg:text-6xl">
              Launch a professionally built Shopify store that converts.
            </h1>

            <p className="mt-6 max-w-xl text-lg text-neutral-500 leading-relaxed">
              Built for D2C founders launching or upgrading before scaling ads.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#book-call"
                className="rounded-full bg-[#ff7a00] px-8 pt-2 pb-2 text-sm font-semibold text-white transition hover:bg-[#e66d00] shadow-md hover:shadow-lg"
              >
                Let's Talk
              </a>

              <a
                href="#free-check"
                className="rounded-full border-2 border-neutral-300 bg-white px-8 pt-2 pb-2 text-sm font-semibold text-neutral-800 transition hover:border-neutral-400 hover:bg-neutral-50"
              >
                Learn More
              </a>
            </div>

            {/* Chips */}
            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full bg-white border border-neutral-200 px-4 py-2 text-neutral-600">
                Shopify-first
              </span>
              <span className="rounded-full bg-white border border-neutral-200 px-4 py-2 text-neutral-600">
                Conversion-focused
              </span>
              <span className="rounded-full bg-white border border-neutral-200 px-4 py-2 text-neutral-600">
                Fast delivery
              </span>
            </div>
          </div>

          {/* RIGHT: Widget Card */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Decorative orange dot */}
            
          </div>

        </div>
      </div>
    </section>
  );
}
