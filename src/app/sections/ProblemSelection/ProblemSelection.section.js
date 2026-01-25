const problems = [
  {
    title: "DIY look",
    result: "low trust",
  },
  {
    title: "Unclear product page",
    result: "fewer add-to-carts",
  },
  {
    title: "Checkout doubts",
    result: "drop-offs",
  },
  {
    title: "Too many apps",
    result: "slow store",
  },
  {
    title: "Tracking unclear",
    result: "hard to scale",
  },
];

const floatingTags = [
  { text: "LOST OPPORTUNITIES", color: "bg-[#ff7a00]", rotate: "rotate-[-8deg]", position: "top-8 right-0" },
  { text: "LACK OF EXPERTISE", color: "bg-[#5BBFBA]", rotate: "rotate-[5deg]", position: "top-24 right-[-20px]" },
  { text: "LIMITED SUCCESS", color: "bg-[#5B8DEF]", rotate: "rotate-[3deg]", position: "top-40 right-[-10px]" },
];

export default function ProblemSelection() {
  return (
    <section className="py-24 bg-[#FDF8F4] relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-row gap-12 lg:gap-16 items-center justify-center">
          
          {/* LEFT: Content */}
          <div>
            {/* Badge */}
            <span className="inline-block rounded-md bg-[#ff7a00] px-4 py-1.5 text-xs font-semibold text-white uppercase tracking-wide">
              Facing Challenges
            </span>

            {/* Heading */}
            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-neutral-900 leading-tight">
              Ads don't fix a weak store.
            </h2>

            {/* Description */}
            <p className="mt-6 text-neutral-600 leading-relaxed max-w-lg">
              Identify the barriers that prevent your business from reaching its full potential. Addressing these issues can transform your path to success.
            </p>

            {/* Checklist */}
            <ul className="mt-8 space-y-5">
              {problems.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  {/* Checkmark Icon */}
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#ff7a00] flex items-center justify-center mt-0.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <div>
                    <span className="font-semibold text-neutral-900">{item.title}</span>
                    <span className="text-neutral-500"> → {item.result}</span>
                  </div>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="mt-10">
              <a
                href="#book-call"
                className="inline-block rounded-full border-2 border-[#ff7a00] px-8 py-3 text-sm font-semibold text-[#ff7a00] transition hover:bg-[#ff7a00] hover:text-white"
              >
                Book a Call
              </a>
            </div>
          </div>

          {/* RIGHT: Image with floating tags */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Main Image */}
            <div className="relative">
              <div className="w-full max-w-md lg:max-w-lg rounded-2xl overflow-hidden">
                <img
                  src="/problem-image.png"
                  alt="Professional working"
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>

              {/* Floating Tags */}
              {floatingTags.map((tag, index) => (
                <div
                  key={index}
                  className={`absolute ${tag.position} ${tag.rotate} ${tag.color} px-4 py-2 rounded-full text-white text-xs font-semibold uppercase tracking-wide shadow-lg`}
                >
                  {tag.text}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Decorative orange dot */}
      <div className="absolute bottom-8 right-8 w-3 h-3 rounded-full bg-[#ff7a00]" />
    </section>
  );
}
