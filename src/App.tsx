import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import AdnNasua from "./pages/AdnNasua";
import Ecommerce from "./pages/Ecommerce";
import LandingPage from "./pages/LandingPage";
import SitioCorporativo from "./pages/SitioCorporativo";
import QuienesSomos from "./pages/QuienesSomos";
import Estrategia from "./pages/Estrategia";
import InfraestructuraDigital from "./pages/InfraestructuraDigital";
import Branding from "./pages/Branding";
import PautaDigital from "./pages/PautaDigital";
import SeoGeo from "./pages/SeoGeo";
import Copywriting from "./pages/Copywriting";
import Automatizacion from "./pages/Automatizacion";
import Servicios from "./pages/Servicios";
import Contacto from "./pages/Contacto";
import PoliticaPrivacidad from "./pages/PoliticaPrivacidad";
import TerminosCondiciones from "./pages/TerminosCondiciones";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Jobs from "./pages/Jobs";
import JobDetail from "./pages/JobDetail";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminLayout from "./components/admin/AdminLayout";
import AdminPosts from "./pages/admin/AdminPosts";
import AdminPostNew from "./pages/admin/AdminPostNew";
import AdminPostEdit from "./pages/admin/AdminPostEdit";
import AdminCategories from "./pages/admin/AdminCategories";
import AdminAuthors from "./pages/admin/AdminAuthors";
import AdminJobs from "./pages/admin/AdminJobs";
import AdminJobNew from "./pages/admin/AdminJobNew";
import AdminJobEdit from "./pages/admin/AdminJobEdit";
import AdminJobCategories from "./pages/admin/AdminJobCategories";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nasua",
  url: "https://nasua.marketing",
  logo: "https://nasua.marketing/nasua-logo.jpg",
  description: "Socios de Crecimiento Digital. Diseñamos sistemas de ventas con soberanía digital para escalar la facturación de tu empresa.",
  sameAs: [],
};

// Layout component to wrap all routes
export const App = () => (
  <HelmetProvider>
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
    </Helmet>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <ScrollToTop />
        <Outlet />
        <WhatsAppButton />
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Index /> },
      { path: "adn-nasua", element: <AdnNasua /> },
      { path: "ecommerce", element: <Ecommerce /> },
      { path: "landing-page", element: <LandingPage /> },
      { path: "sitio-corporativo", element: <SitioCorporativo /> },
      { path: "estrategia", element: <Estrategia /> },
      { path: "estrategia-social-media", element: <Estrategia /> },
      { path: "infraestructura-digital", element: <InfraestructuraDigital /> },
      { path: "desarrollo-web-estrategico", element: <InfraestructuraDigital /> },
      { path: "branding", element: <Branding /> },
      { path: "pauta-digital", element: <PautaDigital /> },
      { path: "seo-geo", element: <SeoGeo /> },
      { path: "copywriting", element: <Copywriting /> },
      { path: "automatizacion", element: <Automatizacion /> },
      { path: "servicios", element: <Servicios /> },
      { path: "quienes-somos", element: <QuienesSomos /> },
      { path: "contacto", element: <Contacto /> },
      { path: "blog", element: <Blog /> },
      { path: "blog/:slug", element: <BlogPost /> },
      { path: "proyectos", element: <Jobs /> },
      { path: "proyectos/:slug", element: <JobDetail /> },
      { path: "login", element: <Login /> },
      {
        path: "admin-NM",
        element: <ProtectedRoute />,
        children: [
          {
            element: <AdminLayout />,
            children: [
              { index: true, element: <AdminPosts /> },
              { path: "posts/nuevo", element: <AdminPostNew /> },
              { path: "posts/editar/:id", element: <AdminPostEdit /> },
              { path: "categorias", element: <AdminCategories /> },
              { path: "autores", element: <AdminAuthors /> },
              { path: "vacantes", element: <AdminJobs /> },
              { path: "vacantes/nueva", element: <AdminJobNew /> },
              { path: "vacantes/editar/:id", element: <AdminJobEdit /> },
              { path: "vacantes/categorias", element: <AdminJobCategories /> },
            ],
          },
        ],
      },
      { path: "politica-privacidad", element: <PoliticaPrivacidad /> },
      { path: "terminos-condiciones", element: <TerminosCondiciones /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];

export default App;
