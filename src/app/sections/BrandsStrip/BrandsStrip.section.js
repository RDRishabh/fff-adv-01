
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

// Add custom CSS for responsive marquee speed
// You can move this to a CSS file if preferred
const marqueeStyle = `
  <style>
    @keyframes marquee {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }

    .animate-marquee {
      display: flex;
      width: max-content;
      animation: marquee 24s linear infinite;
    }

    @media (max-width: 639px) {
      .animate-marquee {
        animation-duration: 24s;
      }
    }
  </style>
`;


export default function BrandsStrip() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: marqueeStyle }} />

      <section className="py-12 bg-[#ff7a00] overflow-hidden">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-[#FDF8F4]">
          Brands we’ve worked with
        </h2>

        <div className="relative mt-12 overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#ff7a00] to-transparent z-10" />
          <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#ff7a00] to-transparent z-10" />

          {/* Marquee */}
          <div className="animate-marquee">
            {[...brands, ...brands].map((brand, i) => (
              <div
                key={i}
                className="mx-6 flex items-center bg-white rounded-2xl px-6 py-3"
              >
                <img
                  src={brand.src}
                  alt={brand.name}
                  className="w-28 h-12 object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
