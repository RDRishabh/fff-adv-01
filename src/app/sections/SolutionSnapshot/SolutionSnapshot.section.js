"use client";

const solutions = [
  {
    title: "Professionally built Shopify pages",
    tools: [
      { src: "/images/tools/shopify.png", alt: "Shopify" },
      { src: "/images/tools/figma.png", alt: "Figma" },
      { src: "/images/tools/photoshop.png", alt: "Photoshop" },
    ],
  },
  {
    title: "Clean apps + key integrations",
    tools: [
      { src: "/images/tools/zapier.png", alt: "Zapier" },
      { src: "/images/tools/razorpay.jpg", alt: "Klaviyo" },
      { src: "/images/tools/stripe.png", alt: "Stripe" },
    ],
  },
  {
    title: "Payments, shipping, analytics setup",
    tools: [
      { src: "/images/tools/stripe.png", alt: "Stripe" },
      { src: "/images/tools/shiprocket.jpg", alt: "Shiprocket" },
      { src: "/images/tools/google_analytics.png", alt: "Google Analytics" },
    ],
  },
];

export default function SolutionSnapshot() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
            What FFF does
          </h2>
          <p className="mt-2 max-w-2xl mx-auto text-neutral-600 text-md md:text-lg leading-relaxed">
            Key solutions we provide to help your store convert and scale.
          </p>
        </div>

        {/* Solution Tiles with animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-[#ff7a00] rounded-3xl p-8 md:p-12 text-white flex flex-col items-center shadow-2xl transform transition duration-500 hover:scale-105 hover:shadow-3xl animate-fadein group relative overflow-hidden"
              style={{ animationDelay: `${index * 180}ms`, animationFillMode: 'both' }}
            >
              {/* Animated background accent */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl z-0 group-hover:scale-110 transition-transform duration-500" />
              {/* Tool Logos with floating animation */}
              <div className="flex flex-row flex-wrap gap-5 justify-center items-center mt-2 mb-8 z-10 relative">
                {solution.tools.map((tool, i) => (
                  <div key={i} className="relative">
                    <img
                      src={tool.src}
                      alt={tool.alt}
                      className="h-14 w-14 bg-white rounded-full p-2 shadow-xl border-2 border-white transition-transform duration-300 group-hover:scale-110 animate-float"
                      style={{ animationDelay: `${i * 120}ms` }}
                    />
                  </div>
                ))}
              </div>
              {/* Title */}
              <p className="text-xl md:text-2xl font-medium text-center mb-2 z-10 relative drop-shadow-md">
                {solution.title}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-8 text-center">
          <a
            href="#book-call"
            className="inline-flex items-center justify-center rounded-full bg-[#ff7a00] px-10 py-4 text-base font-semibold text-white transition hover:bg-[#e66e00] shadow-lg hover:shadow-xl"
          >
            Book a Call
          </a>
        </div>
      </div>
      {/* Animation keyframes for fade-in */}
      <style jsx>{`
        @keyframes fadein {
          0% { opacity: 0; transform: translateY(40px) scale(0.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fadein {
          animation: fadein 0.9s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }
        .animate-float {
          animation: float 2.2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
