import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ValueSection from "@/components/ValueSection";
import ServicesSection from "@/components/ServicesSection";
import SovereigntySection from "@/components/SovereigntySection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main>
      <Helmet>
        <title>Nasua Marketing | Estrategia SEO, UX/UI y Desarrollo Web</title>
        <meta name="description" content="Transformamos tu modelo de negocio con SEO de alto impacto, diseño UX/UI centrado en conversión y desarrollo web robusto. Haz tu marca sostenible hoy." />
        <meta property="og:title" content="Nasua Marketing | Estrategia SEO, UX/UI y Desarrollo Web" />
        <meta property="og:description" content="Transformamos tu modelo de negocio con SEO de alto impacto, diseño UX/UI centrado en conversión y desarrollo web robusto. Haz tu marca sostenible hoy." />
        <meta property="og:image" content="https://nasua.co/Nasua-PaginasWebProfesionalesEnColombia.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://nasua.co/Nasua-PaginasWebProfesionalesEnColombia.jpg" />
      </Helmet>
      <Navbar />
      <HeroSection />
      <ValueSection />
      <ServicesSection />
      <SovereigntySection />
      <FaqSection />
      <Footer />
    </main>
  );
};

export default Index;
