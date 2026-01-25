"use client";

import { useState } from "react";

const faqData = [
  {
    question: "How fast can you launch?",
    answer: "Most stores launch within 2-4 weeks. We run focused build sprints with clear milestones, so you're never left wondering what's happening. Speed without cutting corners.",
  },
  {
    question: "Can you rebuild my existing Shopify store?",
    answer: "Absolutely. We specialize in store rebuilds — fixing messy themes, cleaning up bloated apps, improving speed, and turning underperforming stores into conversion machines.",
  },
  {
    question: "Can you help if I'm about to start ads?",
    answer: "Yes — and you should talk to us before you spend. We'll make sure your store is ready to convert that paid traffic, with proper tracking, fast load times, and optimized product pages.",
  },
  {
    question: "Do you handle apps, payments, shipping, analytics?",
    answer: "All of it. We set up a clean app stack, configure payments and shipping correctly, and install proper analytics (GA4, Meta Pixel, etc.) so you have clear data from day one.",
  },
  {
    question: "Do you offer SEO + AEO?",
    answer: "Yes. We build with SEO best practices baked in — clean code, fast pages, proper meta tags. We also optimize for AI search engines (AEO) so you show up where your customers are looking.",
  },
  {
    question: "What happens after I book?",
    answer: "You'll get a short discovery call (15-20 min) where we learn about your brand and goals. Then we send a clear proposal, and once approved, we kick off your build sprint with weekly check-ins.",
  },
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="bg-neutral-100 rounded-xl overflow-hidden">
      <button
        onClick={onClick}
        className="w-full p-5 md:p-6 flex items-center justify-between text-left hover:bg-neutral-200/50 transition-colors"
      >
        <span className="font-semibold text-neutral-900 text-base md:text-lg pr-4">
          {question}
        </span>
        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
          <svg
            className={`w-4 h-4 text-neutral-600 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 md:px-6 pb-5 md:pb-6">
          <p className="text-neutral-600 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* LEFT: Header Content */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            {/* Badge */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-neutral-800 font-medium">Frequently Asked Questions</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight mb-6">
              FAQ It Up! Your curiosity meets our expertise
              <span className="block">—let's clear things up!</span>
            </h2>

            {/* Description */}
            <p className="text-neutral-600 leading-relaxed text-lg">
              We've gathered all the important info right here. 
              Explore our FAQs and find the answers you need.
            </p>

            {/* Optional CTA */}
            <div className="mt-8 hidden lg:block">
              <p className="text-neutral-500 text-sm mb-3">Still have questions?</p>
              <a
                href="#book-call"
                className="inline-flex items-center gap-2 text-[#ff7a00] font-semibold hover:underline"
              >
                Book a call with us
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* RIGHT: FAQ Accordion */}
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </div>

        </div>

        {/* Mobile CTA */}
        <div className="mt-12 text-center lg:hidden">
          <p className="text-neutral-500 text-sm mb-3">Still have questions?</p>
          <a
            href="#book-call"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ff7a00] px-8 py-4 text-white font-semibold hover:bg-[#e66e00] transition"
          >
            Book a Call
          </a>
        </div>
      </div>
    </section>
  );
}
