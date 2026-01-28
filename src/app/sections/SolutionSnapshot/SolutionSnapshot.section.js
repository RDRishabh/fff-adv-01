"use client";


const solutionCards = [
  {
    icon: (
      <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#2563EB]">
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
          <path d="M7 17l5-10 5 10H7z" fill="#fff" />
        </svg>
      </span>
    ),
    tag: 'CVR↑',
    tagColor: 'bg-white text-[#2563EB] border border-[#E5EAF6]',
    title: 'Conversion–Focused UI',
    desc: 'We design for the thumb, not the desktop. Mobile-first experiences that make buying effortless.'
  },
  {
    icon: (
      <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#FF7A00]">
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
          <path d="M12 6v6l4 2" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    ),
    tag: 'Speed↑',
    tagColor: 'bg-white text-[#FF7A00] border border-[#FFEAD1]',
    title: 'Performance Code',
    desc: 'Fast stores sell more. We cut the bloat and optimize for sub–2s load times on mobile.'
  },
  {
    icon: (
      <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#22C55E]">
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
          <path d="M6 18l6-12 6 12H6z" fill="#fff" />
        </svg>
      </span>
    ),
    tag: 'AOV↑',
    tagColor: 'bg-white text-[#22C55E] border border-[#D1FADF]',
    title: 'Average Order Value',
    desc: 'Smart bundles and post–purchase upsells that turn $50 customers into $100 fans.'
  },
  {
    icon: (
      <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#8B5CF6]">
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
          <path d="M12 17v-6m0 0V7m0 4h4m-4 0H8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    ),
    tag: 'CAC↓',
    tagColor: 'bg-white text-[#8B5CF6] border border-[#E9D5FF]',
    title: 'Lower Acquisition Costs',
    desc: 'Higher conversion means lower CPA. Your ad budget goes twice as far with the same traffic.'
  },
];

export default function SolutionSnapshot() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
            What <span className="text-[#2563EB]">FFF</span> does?
          </h2>
          <p className="mt-2 max-w-2xl mx-auto text-neutral-600 text-md md:text-lg leading-relaxed">
            Key solutions we provide to help your store convert and scale.
          </p>
        </div>

        {/* Solution Cards Row, Website Vibe Palette */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 w-full justify-center">
          {solutionCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 md:p-8 flex flex-col shadow-xl border border-[#F3F4F6] min-h-[220px] w-full md:w-[260px] lg:w-[280px]"
              style={{ background: '#faebdc'}}
            >
              {/* Icon and Badge Row */}
              <div className="flex items-center justify-between gap-2">
                {card.icon}
                <span className={`text-xs font-semibold rounded-full px-3 py-1 ${card.tagColor}`}>{card.tag}</span>
              </div>
              {/* Title and Description */}
              <div className="mt-4">
                <div className="text-xl font-semibold text-neutral-900">{card.title}</div>
                <div className="mt-2 text-neutral-600 text-base leading-relaxed">{card.desc}</div>
              </div>
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
      {/* No custom animation needed for new cards */}
    </section>
  );
}
