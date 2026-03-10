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
        <title>Nasua – Páginas Web Profesionales en Colombia</title>
        <meta name="description" content="Páginas web profesionales en Colombia desde 48 horas. Landing pages, sitios corporativos y tiendas virtuales con financiación Wompi. 100% tuyo." />
        <meta property="og:title" content="Nasua – Páginas Web Profesionales en Colombia" />
        <meta property="og:description" content="Páginas web profesionales en Colombia desde 48 horas. Landing pages, sitios corporativos y tiendas virtuales con financiación Wompi." />
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
