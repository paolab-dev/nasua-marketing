import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ClientOnly } from "@/components/ClientOnly";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Shield,
  BarChart3,
  Users,
  CreditCard,
  Search,
  Video,
  Image,
  MessageCircle,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

const platforms = [
  {
    icon: Search,
    title: "Google Ads",
    badge: "Google Partners",
    text: "Al ser aliados de Google Partners, garantizamos una gestión profesional en Búsqueda, Display, YouTube y Shopping, con acceso a soporte y betas exclusivas.",
  },
  {
    icon: MessageCircle,
    title: "Meta Ads",
    badge: "Instagram, Facebook & WhatsApp",
    text: "Creamos embudos de venta directos que conectan con tu audiencia y cierran el ciclo de compra, integrando WhatsApp como canal de cierre de alta conversión.",
  },
  {
    icon: Video,
    title: "TikTok Ads",
    badge: "Mayor Alcance Actual",
    text: "Aprovechamos el algoritmo de mayor alcance actual para generar demanda masiva y conversiones en formatos de video ágiles.",
  },
  {
    icon: Image,
    title: "Pinterest Ads",
    badge: "Intención Visual de Compra",
    text: "Capturamos la intención de compra visual en nichos de diseño, moda y estilo de vida, donde la inspiración se transforma en transacción.",
  },
];

const sovereignty = [
  {
    icon: Users,
    title: "Cuentas Propias",
    text: "Las campañas se ejecutan en tus cuentas de anuncios.",
  },
  {
    icon: Shield,
    title: "Historial Protegido",
    text: "La data y el aprendizaje de los algoritmos te pertenecen al 100%.",
  },
  {
    icon: CreditCard,
    title: "Pagos Directos",
    text: "Tú pagas a las plataformas; nosotros cobramos por nuestra gestión estratégica y técnica.",
  },
];

const faqs = [
  {
    q: "¿Por qué es importante el respaldo de Google Partners?",
    a: "Significa que nuestro trabajo está validado bajo los estándares de excelencia de Google. Tenemos acceso a soporte prioritario y la garantía de que tus campañas están siendo gestionadas bajo las mejores prácticas globales para maximizar el rendimiento de tu inversión.",
  },
  {
    q: "¿Cómo cuidan mi presupuesto en el día a día?",
    a: "Mediante la Optimización Activa. El equipo de Nasua analiza el rendimiento de cada anuncio y palabra clave, pausando lo que no rinde y escalando lo que factura. Nuestros 15 años de experiencia nos permiten identificar patrones de desperdicio que otros pasan por alto.",
  },
  {
    q: "¿Qué plataformas recomiendan para mi negocio?",
    a: "No usamos una receta única. Analizamos dónde está tu audiencia ideal: si es por intención de búsqueda (Google), por deseo visual (Instagram/Pinterest) o por impacto viral (TikTok). Diseñamos un mix de medios que optimice tu presupuesto según tu nicho.",
  },
  {
    q: "¿Pueden llevar tráfico directamente a mi WhatsApp?",
    a: "Sí. Diseñamos campañas de \"Click-to-WhatsApp\" optimizadas en Meta. No solo enviamos gente al chat; preparamos el camino para que el usuario llegue con una intención clara de compra, facilitando el cierre para tu equipo comercial.",
  },
  {
    q: "¿Qué ventajas tiene hacer pauta en TikTok o Pinterest?",
    a: "TikTok ofrece un alcance masivo a un costo por mil (CPM) muy competitivo. Pinterest es ideal para productos con alto componente visual, capturando al usuario en la fase de \"planificación\", donde la intención de compra es muy alta.",
  },
  {
    q: '¿Qué es la "Soberanía de Cuentas" en pauta?',
    a: "En Nasua, tú eres el dueño de tus activos. Todo se configura a nombre de tu empresa. Tú mantienes el acceso de administrador. Si el día de mañana decides cambiar de rumbo, te llevas todo el historial y el aprendizaje del algoritmo contigo.",
  },
  {
    q: "¿En cuánto tiempo se ven resultados reales?",
    a: 'El tráfico es inmediato, pero la fase de "estabilización" y rentabilidad óptima suele alcanzarse entre la semana 2 y 4, una vez que el algoritmo ha recolectado suficiente data para identificar a tu comprador ideal.',
  },
  {
    q: "¿Cómo miden el éxito de una campaña?",
    a: "Nos enfocamos en el ROAS (Retorno del Gasto Publicitario) y el CAC (Costo de Adquisición de Cliente). No nos impresionan las métricas de vanidad (likes); nos impresiona cuánto dinero regresa a tu cuenta por cada dólar invertido.",
  },
  {
    q: "¿El equipo de Nasua diseña los anuncios (creativos)?",
    a: "Sí. Nuestro equipo de Branding y UX diseña los activos visuales para que no solo sean llamativos, sino que cumplan con las especificaciones técnicas de cada plataforma para maximizar la tasa de clics (CTR) y conversión.",
  },
  {
    q: "¿Tengo acceso a los reportes en tiempo real?",
    a: "Sí. Te entregamos un Dashboard en vivo 24/7. La transparencia es total: puedes ver tu gasto y tus resultados de facturación en tiempo real, sin tener que esperar a reportes de fin de mes.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

const PautaDigital = () => {
  return (
    <div className="bg-background text-foreground">
      <Helmet>
        <title>Pauta Digital &amp; Performance | Maximiza tu ROI con el Equipo Nasua</title>
        <meta name="description" content="Optimizamos tu inversión en Google, Meta, TikTok y Pinterest Ads. Google Partners con 15 años de experiencia cuidando tu presupuesto y escalando tu ROI." />
        <meta property="og:title" content="Pauta Digital & Performance | Maximiza tu ROI con el Equipo Nasua" />
        <meta property="og:description" content="Optimizamos tu inversión en Google, Meta, TikTok y Pinterest Ads. Google Partners con 15 años de experiencia cuidando tu presupuesto y escalando tu ROI." />
        <meta property="og:image" content="https://nasua.marketing/PautaDigitalNasua.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://nasua.marketing/PautaDigitalNasua.jpg" />
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary/20" />
        <div className="relative z-10 container mx-auto px-6 py-32 text-center max-w-4xl">
          <ClientOnly minHeight="60px">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground font-display"
            >
              Pauta Digital &amp; Performance:{" "}
              <span className="text-gradient">Maximiza tu ROI con el Equipo Nasua.</span>
            </motion.h1>
          </ClientOnly>
          <ClientOnly minHeight="40px">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6 text-lg md:text-xl text-primary-foreground/80 font-body max-w-3xl mx-auto"
            >
              Deja de gastar en publicidad para empezar a invertir en resultados. En Nasua diseñamos campañas multiplataforma respaldadas por Google Partners y una metodología técnica que prioriza la rentabilidad de tu negocio sobre el volumen de clics.
            </motion.p>
          </ClientOnly>
          <ClientOnly minHeight="50px">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="/contacto"
                className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg"
              >
                Solicitar Auditoría de Pauta
              </Link>
              {/* Google Partners badge */}
              <span className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground font-semibold px-5 py-3 rounded-lg text-sm font-body">
                ⭐ Google Partners Certificados
              </span>
            </motion.div>
          </ClientOnly>
        </div>
      </section>

      {/* El guardián del presupuesto */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <ClientOnly minHeight="40px">
            <motion.div {...fadeUp} className="text-center mb-6">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
                15 años optimizando el capital de{" "}
                <span className="text-gradient">nuestros clientes</span>.
              </h2>
            </motion.div>
          </ClientOnly>
          <ClientOnly minHeight="150px">
            <motion.div
              {...fadeUp}
              className="bg-card rounded-xl p-10 border border-border max-w-3xl mx-auto"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <BarChart3 className="w-7 h-7 text-secondary" />
                </div>
                <div>
                  <p className="text-secondary font-bold text-sm mb-2 font-body uppercase tracking-wider">
                    El Guardián de tu Presupuesto
                  </p>
                  <p className="text-muted-foreground font-body leading-relaxed text-lg">
                    En el mundo del performance, la trayectoria es la diferencia entre quemar dinero y generar activos. Nuestro equipo opera bajo una premisa innegociable:{" "}
                    <strong className="text-foreground">
                      Cuidar el presupuesto del cliente como si fuera propio.
                    </strong>{" "}
                    Con 15 años en el mercado digital, hemos perfeccionado el arte de la optimización diaria. No nos interesa que gastes más, nos interesa que gastes mejor. Analizamos cada puja y cada segmento para asegurar que tu inversión rinda al máximo, eliminando el desperdicio en tráfico que no convierte.
                  </p>
                </div>
              </div>
            </motion.div>
          </ClientOnly>
        </div>
      </section>

      {/* Plataformas */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-6 max-w-5xl">
          <ClientOnly minHeight="40px">
            <motion.div {...fadeUp} className="text-center mb-6">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-primary-foreground">
                Ejecución impecable en los canales que{" "}
                <span className="text-gradient">mueven la aguja</span>.
              </h2>
            </motion.div>
          </ClientOnly>
          <ClientOnly minHeight="40px">
            <motion.p {...fadeUp} className="text-center text-primary-foreground/80 text-lg font-body max-w-3xl mx-auto mb-14 leading-relaxed">
              Contamos con aliados estratégicos que garantizan un estándar de calidad internacional en cada campaña.
            </motion.p>
          </ClientOnly>

          <div className="grid md:grid-cols-2 gap-8">
            {platforms.map((p, i) => (
              <ClientOnly key={p.title} minHeight="150px">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-8 border border-primary-foreground/20"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <p.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-display font-medium text-xl text-primary-foreground">{p.title}</h3>
                      <span className="text-secondary text-xs font-bold font-body uppercase tracking-wider">{p.badge}</span>
                    </div>
                  </div>
                  <p className="text-primary-foreground/70 font-body leading-relaxed text-sm">{p.text}</p>
                </motion.div>
              </ClientOnly>
            ))}
          </div>
        </div>
      </section>

      {/* Soberanía y Transparencia */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <ClientOnly minHeight="40px">
            <motion.div {...fadeUp} className="text-center mb-6">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
                Tu inversión, tus cuentas,{" "}
                <span className="text-gradient">tu propiedad</span>.
              </h2>
            </motion.div>
          </ClientOnly>
          <ClientOnly minHeight="40px">
            <motion.p {...fadeUp} className="text-center text-muted-foreground text-lg font-body max-w-3xl mx-auto mb-14 leading-relaxed">
              Al igual que en el desarrollo, en la pauta aplicamos la Soberanía Digital.
            </motion.p>
          </ClientOnly>

          <div className="grid md:grid-cols-3 gap-8">
            {sovereignty.map((s, i) => (
              <ClientOnly key={s.title} minHeight="150px">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-card rounded-xl p-8 border border-border hover:border-secondary/50 transition-colors text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-5">
                    <s.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="font-display font-medium text-xl text-foreground mb-3">{s.title}</h3>
                  <p className="text-muted-foreground font-body leading-relaxed text-sm">{s.text}</p>
                </motion.div>
              </ClientOnly>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-6 max-w-3xl">
          <ClientOnly minHeight="40px">
            <motion.h2
              {...fadeUp}
              className="text-3xl md:text-4xl font-bold text-foreground font-display text-center mb-12"
            >
              Preguntas <span className="text-gradient">frecuentes</span>
            </motion.h2>
          </ClientOnly>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-body font-bold text-foreground hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Cierre CTA */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <ClientOnly minHeight="200px">
            <motion.div {...fadeUp} className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground font-display">
                Optimización técnica respaldada por{" "}
                <span className="text-gradient">15 años de trayectoria</span>.
              </h2>
              <p className="text-primary-foreground/80 text-lg leading-relaxed font-body max-w-2xl mx-auto">
                No permitas que tu presupuesto se evapore. El equipo de Nasua está listo para realizar una auditoría técnica de tus campañas y trazar un Roadmap de Performance rentable.
              </p>
              <Link
                to="/contacto"
                className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg"
              >
                Solicitar Auditoría de Pauta
              </Link>
            </motion.div>
          </ClientOnly>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PautaDigital;
export const prerender = true;
