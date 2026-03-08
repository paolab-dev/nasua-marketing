import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const PoliticaPrivacidad = () => {
  return (
    <>
      <Helmet>
        <title>Política de Privacidad | Nasua</title>
        <meta name="description" content="Política de privacidad de Nasua. Conoce cómo protegemos tus datos personales." />
      </Helmet>
      <Navbar />
      <main className="pt-24 pb-16 section-padding">
        <div className="container mx-auto max-w-3xl">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">Política de Privacidad</h1>

          <div className="prose prose-lg text-muted-foreground space-y-6">
            <p>Última actualización: 8 de marzo de 2026</p>

            <h2 className="text-xl font-semibold text-foreground">1. Información que recopilamos</h2>
            <p>Recopilamos información personal que nos proporcionas voluntariamente al contactarnos, como tu nombre, correo electrónico, número de teléfono y detalles de tu proyecto.</p>

            <h2 className="text-xl font-semibold text-foreground">2. Uso de la información</h2>
            <p>Utilizamos tu información para responder a tus consultas, proporcionarte nuestros servicios de diseño y desarrollo web, y mejorar tu experiencia en nuestro sitio.</p>

            <h2 className="text-xl font-semibold text-foreground">3. Protección de datos</h2>
            <p>Implementamos medidas de seguridad técnicas y organizativas para proteger tu información personal contra acceso no autorizado, alteración o destrucción.</p>

            <h2 className="text-xl font-semibold text-foreground">4. Cookies</h2>
            <p>Nuestro sitio puede utilizar cookies para mejorar la experiencia del usuario. Puedes configurar tu navegador para rechazar cookies si lo prefieres.</p>

            <h2 className="text-xl font-semibold text-foreground">5. Terceros</h2>
            <p>No vendemos, intercambiamos ni transferimos tu información personal a terceros sin tu consentimiento, excepto cuando sea necesario para prestar nuestros servicios.</p>

            <h2 className="text-xl font-semibold text-foreground">6. Contacto</h2>
            <p>Si tienes preguntas sobre esta política, puedes contactarnos a través de nuestra <a href="/contacto" className="text-secondary hover:underline">página de contacto</a>.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PoliticaPrivacidad;
