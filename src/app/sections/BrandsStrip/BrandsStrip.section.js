
"use client";
// Placeholder brand logos with icons
const brands = [
  {
    name: "startup",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 4h4v4H4V4zm6 0h4v4h-4V4zm6 0h4v4h-4V4zM4 10h4v4H4v-4zm6 0h4v4h-4v-4z" />
      </svg>
    ),
  },
  {
    name: "Logoipsum",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="10" fillOpacity="0.3" />
        <circle cx="12" cy="12" r="6" />
      </svg>
    ),
  },
  {
    name: "Logoipsum",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="10" fillOpacity="0.3" />
        <circle cx="12" cy="12" r="6" />
      </svg>
    ),
  },
  {
    name: "Logoipsum",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="10" fillOpacity="0.3" />
        <circle cx="12" cy="12" r="6" />
      </svg>
    ),
  },
  {
    name: "Logoipsum",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93z" />
      </svg>
    ),
  },
  {
    name: "company",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l4.59-4.58L18 11l-6 6z" />
      </svg>
    ),
  },
  {
    name: "Logoipsum",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
    ),
  },
];

export default function BrandsStrip() {
  return (
    <section className="py-12 bg-[#ff7a00] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 text-center">
        

        {/* Heading */}
        <h2 className="text-3xl font-bold text-[#FDF8F4] md:text-4xl lg:text-5xl leading-tight">
          Brands we’ve worked with
        </h2>
      </div>

      {/* Infinite Scrolling Logos */}
      <div className="mt-12 relative">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#ff7a00] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#ff7a00] to-transparent z-10" />
        
        {/* Scrolling container */}
        <div className="flex animate-marquee">
          {/* First set of logos */}
          <div className="flex shrink-0 items-center gap-16 px-8">
            {brands.map((brand, i) => (
              <div
                key={`first-${i}`}
                className="flex items-center gap-3 text-[#000000]/90 bg-white rounded-2xl px-4 py-2"
              >
                {brand.icon}
                <span className="text-lg font-semibold whitespace-nowrap">{brand.name}</span>
              </div>
            ))}
          </div>
          
          {/* Duplicate set for seamless loop */}
          <div className="flex shrink-0 items-center gap-8 px-8">
            {brands.map((brand, i) => (
              <div
                key={`second-${i}`}
                className="flex items-center gap-3 text-[#000000]/90 bg-white rounded-2xl px-4 py-2"
              >
                {brand.icon}
                <span className="text-lg font-semibold whitespace-nowrap">{brand.name}</span>
              </div>
            ))}
          </div>
          
          {/* Third set for extra smoothness */}
          <div className="flex shrink-0 items-center gap-16 px-8">
            {brands.map((brand, i) => (
              <div
                key={`third-${i}`}
                className="flex items-center gap-3 text-[#000000]/90 bg-white rounded-2xl px-4 py-2"
              >
                {brand.icon}
                <span className="text-lg font-semibold whitespace-nowrap">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
