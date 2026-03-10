import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const TerminosCondiciones = () => {
  return (
    <>
      <Helmet>
        <title>Términos y Condiciones | Nasua</title>
        <meta name="description" content="Términos y condiciones de uso del sitio web de Nasua." />
        <meta property="og:title" content="Términos y Condiciones | Nasua" />
        <meta property="og:description" content="Términos y condiciones de uso del sitio web de Nasua." />
        <meta property="og:image" content="https://nasua.co/Nasua-PaginasWebProfesionalesEnColombia.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://nasua.co/Nasua-PaginasWebProfesionalesEnColombia.jpg" />
      </Helmet>
      <Navbar />
      <main className="pt-24 pb-16 section-padding">
        <div className="container mx-auto max-w-3xl">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">Términos y Condiciones</h1>

          <div className="prose prose-lg text-muted-foreground space-y-6">
            <p>Última actualización: 8 de marzo de 2026</p>

            <h2 className="text-xl font-semibold text-foreground">1. Aceptación de los términos</h2>
            <p>Al acceder y utilizar el sitio web de Nasua, aceptas cumplir con estos términos y condiciones de uso.</p>

            <h2 className="text-xl font-semibold text-foreground">2. Servicios</h2>
            <p>Nasua ofrece servicios de diseño y desarrollo de páginas web profesionales, incluyendo landing pages, sitios corporativos y tiendas en línea (eCommerce).</p>

            <h2 className="text-xl font-semibold text-foreground">3. Propiedad intelectual</h2>
            <p>Todo el contenido del sitio web, incluyendo textos, gráficos, logotipos y diseños, es propiedad de Nasua y está protegido por las leyes de propiedad intelectual de Colombia.</p>

            <h2 className="text-xl font-semibold text-foreground">4. Limitación de responsabilidad</h2>
            <p>Nasua no será responsable por daños directos, indirectos o consecuentes derivados del uso de este sitio web o de nuestros servicios.</p>

            <h2 className="text-xl font-semibold text-foreground">5. Modificaciones</h2>
            <p>Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios serán efectivos desde su publicación en este sitio.</p>

            <h2 className="text-xl font-semibold text-foreground">6. Legislación aplicable</h2>
            <p>Estos términos se rigen por las leyes de la República de Colombia. Cualquier disputa será resuelta ante los tribunales competentes de Colombia.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TerminosCondiciones;
