import HeroSection from "../sections/Hero/Hero.section";
import BrandsStrip from "../sections/BrandsStrip/BrandsStrip.section";
import QuickSelector from "../sections/QuickSelector/QuickSelector.section";
import ProblemSelection from "../sections/ProblemSelection/ProblemSelection.section";
import SolutionSnapshot from "../sections/SolutionSnapshot/SolutionSnapshot.section";
import Comparison from "../sections/Comparison/Comparison.section";
import Testimonials from "../sections/Testimonials/Testimonials.section";
import Examples from "../sections/Examples/Examples.section";
import HowItWorks from "../sections/HowItWorks/HowItWorks.section";
import Offer from "../sections/Offer/Offer.section";
import ImageSlideshowSection from "../sections/ImageSlideShowSection/ImageSlideShowSection";
import FitCheckSection from "../sections/FitCheckSection/FitCheckSection";
import CaseStudyHighlight from "../sections/CaseStudyHighlight/CaseStudyHighlight";

export default function ShopifyVariantPage() {
  return (
    <>
      <HeroSection />

        {/* BRANDS */}
        <section>
        <BrandsStrip />
        </section>

        {/* QUICK SELECTOR */}
        {/* <QuickSelector /> */}

        {/* PROBLEMS */}
        <ProblemSelection />
        <ImageSlideshowSection/>

        {/* SOLUTION */}
        <SolutionSnapshot />

        <FitCheckSection />

        {/* COMPARISON */}
        <Comparison />

        <CaseStudyHighlight />
        {/* TESTIMONIALS */}
        <Testimonials />

        {/* HOW IT WORKS */}
        <section id="how-it-works">
        <HowItWorks />
        </section>


        {/* OFFER / CALENDLY */}
        {/* <section id="book-call">
        <Offer />
        </section> */}
    </>
  );
}