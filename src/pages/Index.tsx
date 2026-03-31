import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ValueSection from "@/components/ValueSection";
import ServicesSection from "@/components/ServicesSection";
import SovereigntySection from "@/components/SovereigntySection";
import CtaSection from "@/components/CtaSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import content from "@/data/site-content.json";

const Index = () => {
  const { seo } = content.home;

  return (
    <main>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content="https://nasua.marketing/Nasua-PaginasWebProfesionalesEnColombia.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://nasua.marketing/Nasua-PaginasWebProfesionalesEnColombia.jpg" />
      </Helmet>
      <Navbar />
      <HeroSection />
      <ValueSection />
      <ServicesSection />
      <SovereigntySection />
      <CtaSection />
      <FaqSection />
      <Footer />
    </main>
  );
};

export default Index;
export const prerender = true;
