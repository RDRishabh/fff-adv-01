
"use client";
// Brand logos from public/logo folder
const brands = [
  { name: "Earlynestt", src: "/logo/earlynestt.png" },
  { name: "Honey Cloud", src: "/logo/honey_cloud.avif" },
  { name: "Jewelry Essentials", src: "/logo/Jewelry_Essentials.avif" },
  { name: "Khet", src: "/logo/Khet.avif" },
  { name: "Kindmatter", src: "/logo/kindmatter.avif" },
  { name: "Meraki", src: "/logo/meraki.avif" },
  { name: "Monarque", src: "/logo/monarque_2.png" },
  { name: "Nord", src: "/logo/nord.svg" },
  { name: "Nova", src: "/logo/nova_2.png" },
  { name: "RIP Tie Hair", src: "/logo/RIP_Tie_hair_logo.svg" },
  { name: "Trucare", src: "/logo/trucare.avif" },
  { name: "Vratam Black", src: "/logo/Vratam_Black.avif" },
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
                <img
                  src={brand.src}
                  alt={brand.name}
                  className="w-28 h-12 object-contain"
                  style={{ width: '7rem', height: '3rem' }}
                  loading="lazy"
                />
                {/* <span className="text-lg font-semibold whitespace-nowrap">{brand.name}</span> */}
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
                <img
                  src={brand.src}
                  alt={brand.name}
                  className="w-28 h-12 object-contain"
                  style={{ width: '7rem', height: '3rem' }}
                  loading="lazy"
                />
                {/* <span className="text-lg font-semibold whitespace-nowrap">{brand.name}</span> */}
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
                <img
                  src={brand.src}
                  alt={brand.name}
                  className="w-28 h-12 object-contain"
                  style={{ width: '7rem', height: '3rem' }}
                  loading="lazy"
                />
                {/* <span className="text-lg font-semibold whitespace-nowrap">{brand.name}</span> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
