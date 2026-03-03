import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AdnNasua from "./pages/AdnNasua";
import Ecommerce from "./pages/Ecommerce";
import LandingPage from "./pages/LandingPage";
import SitioCorporativo from "./pages/SitioCorporativo";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
