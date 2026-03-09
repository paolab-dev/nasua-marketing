import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import AdnNasua from "./pages/AdnNasua";
import Ecommerce from "./pages/Ecommerce";
import LandingPage from "./pages/LandingPage";
import SitioCorporativo from "./pages/SitioCorporativo";
import QuienesSomos from "./pages/QuienesSomos";
import Estrategia from "./pages/Estrategia";
import Contacto from "./pages/Contacto";
import PoliticaPrivacidad from "./pages/PoliticaPrivacidad";
import TerminosCondiciones from "./pages/TerminosCondiciones";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import WhatsAppButton from "./components/WhatsAppButton";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/adn-nasua" element={<AdnNasua />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/landing-page" element={<LandingPage />} />
          <Route path="/sitio-corporativo" element={<SitioCorporativo />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
          <Route path="/terminos-condiciones" element={<TerminosCondiciones />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
   </QueryClientProvider>
  </HelmetProvider>
);

export default App;
