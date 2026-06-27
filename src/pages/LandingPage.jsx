import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import FeatureSection from "../components/landing/FeatureSection";
import BenefitSection from "../components/landing/BenefitSection";
import StatisticsSection from "../components/landing/StatisticsSection";
import TestimonialSection from "../components/landing/TestimonialSection";
import FAQSection from "../components/landing/FAQSection";
import CTASection from "../components/landing/CTASection";
import Footer from "../components/landing/Footer";

export default function LandingPage() {
  return (
    <div className="bg-white">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <BenefitSection />
      <StatisticsSection />
      <TestimonialSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}