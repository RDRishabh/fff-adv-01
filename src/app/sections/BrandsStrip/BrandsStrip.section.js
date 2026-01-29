
"use client";
// Brand logos from public/logo folder
"use client";

// Brand logos from public/logo folder
const brands = [
  { name: "Earlynestt", src: "/logo/earlynestt.png", link: "https://earlynestt.com/" },
  { name: "Honey Cloud", src: "/logo/honey_cloud.avif", link: "https://www.honeycloudz.com/" },
  { name: "Jewelry Essentials", src: "/logo/Jewelry_Essentials.avif", link: "https://www.jewelryxessentials.com/" },
  { name: "Khet", src: "/logo/Khet.avif", link: "https://khet.in/" },
  { name: "Kindmatter", src: "/logo/kindmatter.avif", link: "http://kindmatter.in/" },
  { name: "Meraki", src: "/logo/meraki.avif", link: "https://www.merakimedicinal.com/" },
  { name: "Monarque", src: "/logo/monarque_2.png", link: "https://monarque.co.in/" },
  { name: "Nord", src: "/logo/nord.svg", link: "https://nordfragrances.com/" },
  { name: "Nova", src: "/logo/nova_2.png", link: "http://novawatches.in/" },
  { name: "RIP Tie Hair", src: "/logo/RIP_Tie_hair_logo.svg", link: "https://www.riptiehair.com/" },
  { name: "Trucare", src: "/logo/trucare.avif", link: "https://trucare.in/" },
  { name: "Vratam Black", src: "/logo/Vratam_Black.avif", link: "https://vratam.in/" },
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

      <section className="pt-10 pb-12 bg-[#ff7a00] overflow-hidden">
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
              <a
                key={i}
                href={brand.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-6 flex items-center bg-white rounded-2xl px-6 py-3 hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={brand.src}
                  alt={brand.name}
                  className="w-28 h-12 object-contain"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
