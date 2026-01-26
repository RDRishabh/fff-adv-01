/* ===============================
   Home Page – One Pager
   =============================== */

import Hero from "./sections/Hero/Hero.section";
import BrandsStrip from "./sections/BrandsStrip/BrandsStrip.section";
import QuickSelector from "./sections/QuickSelector/QuickSelector.section";
import ProblemSelection from "./sections/ProblemSelection/ProblemSelection.section";
import SolutionSnapshot from "./sections/SolutionSnapshot/SolutionSnapshot.section";
import Comparison from "./sections/Comparison/Comparison.section";
import Testimonials from "./sections/Testimonials/Testimonials.section";
import Examples from "./sections/Examples/Examples.section";
import HowItWorks from "./sections/HowItWorks/HowItWorks.section";
import Offer from "./sections/Offer/Offer.section";
import ImageSlideshowSection from "./sections/ImageSlideShowSection/ImageSlideShowSection";
import FAQ from "./sections/FAQ/FAQ.section";
import FinalCTA from "./sections/FinalCTA/FinalCTA.section";

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <Hero />

      {/* BRANDS */}
      <section id="proof">
        <BrandsStrip />
      </section>

      {/* QUICK SELECTOR */}
      {/* <QuickSelector /> */}

      <ImageSlideshowSection/>
      {/* PROBLEMS */}
      <ProblemSelection />

      {/* SOLUTION */}
      <SolutionSnapshot />

      {/* COMPARISON */}
      <Comparison />

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* HOW IT WORKS */}
      <section id="how-it-works">
        <HowItWorks />
      </section>

      {/* OFFER / CALENDLY */}
      <section id="book-call">
        <Offer />
      </section>
    </main>
  );
}
