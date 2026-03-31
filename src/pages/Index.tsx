import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ValueSection from "@/components/ValueSection";
import ServicesSection from "@/components/ServicesSection";
import SovereigntySection from "@/components/SovereigntySection";
import CtaSection from "@/components/CtaSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main>
      <Helmet>
        <title>Nasua | Socio de Crecimiento Digital para Escalar tu Facturación</title>
        <meta name="description" content="Deja de comprar páginas y construye activos rentables. Nasua es el equipo de expertos que diseña tu sistema de ventas con soberanía digital y resultados." />
        <meta property="og:title" content="Nasua | Socio de Crecimiento Digital para Escalar tu Facturación" />
        <meta property="og:description" content="Deja de comprar páginas y construye activos rentables. Nasua es el equipo de expertos que diseña tu sistema de ventas con soberanía digital y resultados." />
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
