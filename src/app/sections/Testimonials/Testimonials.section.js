const testimonialsRow1 = [
  {
    text: "Working with FFF was a game-changer for Monarque. The new site is fast, beautiful, and our conversions are up!",
    rating: 5,
    name: "Abhinav Kapoor",
    title: "Founder, Monarque",
    image: "/images/testimonials/abhinavkapoor.jpeg",
  },
  {
    text: "FFF understood our vision for Kind Matter and brought it to life. The process was smooth and the results speak for themselves.",
    rating: 5,
    name: "Nankie Bawa",
    title: "Founder, Kind Matter",
    image: "/images/testimonials/nankiebawa.jpeg",
  },
  {
    text: "Ninecamp's online presence is now world-class. FFF's attention to detail and support was outstanding.",
    rating: 5,
    name: "Hikki & Marieta",
    title: "Founders, Ninecamp",
    image: "/images/testimonials/ninecamp_logo.jpeg",
  },
];

const testimonialsRow2 = [
  {
    text: "Nova Watches has seen a huge boost in customer engagement since our new site launched. Highly recommend FFF!",
    rating: 5,
    name: "-",
    title: "Team, Nova Watches",
    image: "/images/testimonials/novawatches.png",
  },
  {
    text: "FFF made the Trucare site launch seamless. The team is professional, creative, and always available for support.",
    rating: 5,
    name: "-",
    title: "Team, Trucare",
    image: "/images/testimonials/trucare.png",
  },
  {
    text: "Our brand story finally shines online thanks to FFF. The site is easy to manage and our customers love it!",
    rating: 5,
    name: "-",
    title: "Team, Vratam",
    image: "/images/testimonials/vratam.png",
  },
];

const StarIcon = () => (
  <svg className="w-4 h-4 fill-[#22C55E]" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const TestimonialCard = ({ testimonial }) => (
  <div className="flex flex-col items-center bg-white rounded-2xl p-8 shadow-md border border-neutral-100 w-full max-w-xs">
    <img
      src={testimonial.image}
      alt={testimonial.name}
      className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-[#ff7a00]/10 shadow"
      style={{ objectPosition: 'center' }}
    />
    <div className="flex gap-1 mb-2">
      {Array.from({ length: testimonial.rating }).map((_, i) => (
        <StarIcon key={i} />
      ))}
    </div>
    <p className="text-neutral-700 leading-relaxed mb-4 text-base text-center">{testimonial.text}</p>
    <div className="text-[#ff7a00] font-medium text-lg mb-0.5">{testimonial.name}</div>
    <div className="text-neutral-500 text-sm mb-2">{testimonial.title}</div>
  </div>
);

export default function Testimonials() {
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
            See What Founders Say About Us
          </h2>
        </div>
      </div>

      {/* Row 1 */}
      <div className="mb-10 flex flex-wrap justify-center gap-8">
        {testimonialsRow1.map((testimonial, index) => (
          <TestimonialCard key={`row1-${index}`} testimonial={testimonial} />
        ))}
      </div>

      {/* Row 2 */}
      <div className="flex flex-wrap justify-center gap-8">
        {testimonialsRow2.map((testimonial, index) => (
          <TestimonialCard key={`row2-${index}`} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
}
