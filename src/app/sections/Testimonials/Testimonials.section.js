const testimonials = [
  {
    name: "Abhinav Kapoor",
    title: "Founder, Monarque",
    avatar: "/images/testimonials/abhinavkapoor.jpeg",
    rating: 5,
    text: "Working with FFF was a game-changer for Monarque. The new site is fast, beautiful, and our conversions are up!",
    date: "Jan 10, 2026",
    chart: null,
  },
  {
    name: "Nankie Bawa",
    title: "Founder, Kind Matter",
    avatar: "/images/testimonials/nankiebawa.jpeg",
    rating: 5,
    text: "FFF understood our vision for Kind Matter and brought it to life. The process was smooth and the results speak for themselves.",
    date: "Dec 18, 2025",
    chart: null,
  },
  {
    name: "Hikki & Marieta",
    title: "Founders, Ninecamp",
    avatar: "/images/testimonials/ninecamp_logo.jpeg",
    rating: 5,
    text: "Ninecamp's online presence is now world-class. FFF's attention to detail and support was outstanding.",
    date: "Nov 22, 2025",
    chart: null,
  },
  {
    name: "Team, Nova Watches",
    title: "Team, Nova Watches",
    avatar: "/images/testimonials/novawatches.png",
    rating: 5,
    text: "Nova Watches has seen a huge boost in customer engagement since our new site launched. Highly recommend FFF!",
    date: "Oct 15, 2025",
    chart: null,
  },
  {
    name: "Team, Trucare",
    title: "Team, Trucare",
    avatar: "/images/testimonials/trucare.png",
    rating: 5,
    text: "FFF made the Trucare site launch seamless. The team is professional, creative, and always available for support.",
    date: "Sep 30, 2025",
    chart: null,
  },
  {
    name: "Team, Vratam",
    title: "Team, Vratam",
    avatar: "/images/testimonials/vratam.png",
    rating: 5,
    text: "Our brand story finally shines online thanks to FFF. The site is easy to manage and our customers love it!",
    date: "Sep 10, 2025",
    chart: null,
  },
];

const StarIcon = () => (
  <svg className="w-4 h-4 fill-[#22C55E]" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const TestimonialCard = ({ testimonial }) => (
  <div className="flex flex-col bg-white rounded-2xl p-6 shadow-lg border border-[#e5e7eb] w-full max-w-sm relative text-black">
    {/* Author info */}
    <div className="flex items-center gap-3 mb-3">
      <img
        src={testimonial.avatar}
        alt={testimonial.name}
        className="w-12 h-12 rounded-full object-cover border-2 border-[#333]"
        style={{ objectPosition: 'center' }}
      />
      <div>
        <div className="font-semibold text-base leading-tight">{testimonial.name}</div>
        <div className="text-xs text-black leading-tight">{testimonial.title}</div>
      </div>
    </div>
    {/* Star rating */}
    <div className="flex gap-1 mb-2">
      {Array.from({ length: testimonial.rating }).map((_, i) => (
        <StarIcon key={i} />
      ))}
    </div>
    {/* Testimonial text */}
    <div className="flex-1">
      <p className="text-[#333333] leading-relaxed font-medium text-sm pb-2 mb-3">{testimonial.text}</p>
    </div>
    
    {/* Date */}
    <div className="absolute left-6 bottom-4 text-xs text-black">{testimonial.date}</div>
  </div>
);

export default function Testimonials() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 mb-12">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-2">
            See What Founders Say About Us
          </h2>
          {/* <div className="text-lg text-neutral-400 mb-2">What our clients say about us</div> */}
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
