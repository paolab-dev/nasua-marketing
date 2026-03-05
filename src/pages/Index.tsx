import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ValueSection from "@/components/ValueSection";
import ServicesSection from "@/components/ServicesSection";
import FinancingSection from "@/components/FinancingSection";
import SovereigntySection from "@/components/SovereigntySection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ValueSection />
      <ServicesSection />
      <SovereigntySection />
      <FinancingSection />
      <FaqSection />
      <Footer />
    </main>
  );
};

export default Index;
