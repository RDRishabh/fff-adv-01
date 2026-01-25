const testimonialsRow1 = [
  {
    text: "FFF's creative approach and innovative solutions helped us stand out in a crowded market. Our conversion rate improved by 20%, and our average order value increased by 12%.",
    rating: 5,
  },
  {
    text: "The team is knowledgeable, responsive, and dedicated. They went above and beyond to ensure our project's success. Our website's performance and user experience have significantly improved.",
    rating: 5,
  },
  {
    text: "The collaborative process and clear communication made working with FFF a pleasure. They delivered on time and exceeded our expectations.",
    rating: 5,
  },
  {
    text: "Professional, detail-oriented, and results-driven. Our Shopify store now converts better than ever. Highly recommend their services.",
    rating: 5,
  },
];

const testimonialsRow2 = [
  {
    text: "FFF provided excellent support and training to our team, making the transition to our new website effortless. The store looks amazing!",
    rating: 5,
  },
  {
    text: "We appreciated the thorough onboarding process and the team's commitment to understanding our brand's unique needs. Our website now truly reflects our brand's identity.",
    rating: 5,
  },
  {
    text: "Their proactive approach and attention to detail helped us stay ahead of the competition. We've seen incredible results since launch.",
    rating: 5,
  },
  {
    text: "From strategy to execution, FFF delivered a seamless experience. Our customers love the new store and so do we!",
    rating: 5,
  },
];

const StarIcon = () => (
  <svg className="w-4 h-4 fill-[#ff7a00]" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const TestimonialCard = ({ testimonial }) => (
  <div className="flex-shrink-0 w-[350px] md:w-[400px] bg-[#FDF8F4] rounded-2xl p-6 shadow-sm border border-neutral-100">
    {/* Stars */}
    <div className="flex gap-1 mb-4">
      {Array.from({ length: testimonial.rating }).map((_, i) => (
        <StarIcon key={i} />
      ))}
    </div>
    
    {/* Testimonial Text */}
    <p className="text-neutral-700 leading-relaxed mb-6 text-sm">
      {testimonial.text}
    </p>
    
    {/* Verified Badge */}
    <div className="flex items-center gap-2 text-neutral-800">
      <svg className="w-4 h-4 text-[#ff7a00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span className="font-semibold text-sm">Verified Customer</span>
    </div>
  </div>
);

export default function Testimonials() {
  // Triple the testimonials for seamless loop
  const row1Items = [...testimonialsRow1, ...testimonialsRow1, ...testimonialsRow1];
  const row2Items = [...testimonialsRow2, ...testimonialsRow2, ...testimonialsRow2];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 mb-12">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-[#ff7a00] relative">
              <div className="absolute -right-1 -top-1 w-6 h-6 rounded-full bg-[#ff7a00]/40" />
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900">
            Brand & Customer Favorite
          </h2>
        </div>
      </div>

      {/* Row 1 - Left to Right */}
      <div className="mb-6">
        <div className="flex gap-6 animate-marquee">
          {row1Items.map((testimonial, index) => (
            <TestimonialCard key={`row1-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </div>

      {/* Row 2 - Right to Left */}
      <div>
        <div className="flex gap-6 animate-marquee-reverse">
          {row2Items.map((testimonial, index) => (
            <TestimonialCard key={`row2-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
