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
import { Brain, Layout, Search, Layers } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

const persuasionPillars = [
  {
    icon: Brain,
    title: "Psicología de Ventas Aplicada",
    text: "Entendemos los puntos de dolor, los deseos y las objeciones de tu cliente ideal. No redactamos frases genéricas; construimos narrativas que resuenan con la audiencia, eliminan la fricción y posicionan tu solución como la única opción lógica en el mercado.",
  },
  {
    icon: Layout,
    title: "Arquitectura de Mensaje para Conversión",
    text: "Cada titular, cada párrafo y cada llamado a la acción (CTA) en tu ecosistema digital tiene una función específica. Estructuramos el contenido para guiar la mirada del usuario y llevarlo, paso a paso, por un proceso de decisión que termina en conversión.",
  },
];

const seoFeatures = [
  {
    icon: Search,
    title: "SEO Copywriting",
    text: "Integramos las palabras clave de forma orgánica y fluida. Logramos que tus textos posicionen en Google y sean citados por los LLMs (como ChatGPT), pero sin perder nunca el tono humano y persuasivo.",
  },
  {
    icon: Layers,
    title: "Consistencia de Marca",
    text: "Tu voz debe ser la misma en una Landing Page, en un anuncio de Meta o en un correo comercial. El equipo de Nasua asegura que tu autoridad se mantenga intacta en cada punto de contacto.",
  },
];

const faqs = [
  {
    q: "¿Cuál es la diferencia entre redactar contenido y hacer Copywriting?",
    a: "La redacción de contenido busca informar o educar; el Copywriting busca una acción específica (comprar, registrarse, agendar). En Nasua, todo nuestro copy está orientado a resultados y a mover la aguja de tu negocio.",
  },
  {
    q: "¿Cómo impacta el copywriting en mi Retorno de Inversión (ROI)?",
    a: "Es el multiplicador más barato. Un cambio en un titular o en un botón puede duplicar tu tasa de conversión sin que tengas que gastar un solo dólar más en publicidad. El copy optimiza lo que ya tienes.",
  },
  {
    q: "¿Por qué no usar simplemente ChatGPT para mis textos?",
    a: "La IA es excelente para estructuras, pero carece de criterio estratégico y empatía real. El equipo de Nasua aporta el toque humano, la ironía, la sutileza y el entendimiento profundo de tu industria que la IA aún no puede replicar con la misma efectividad de cierre.",
  },
  {
    q: '¿Cómo encuentran el "tono de voz" de mi empresa?',
    a: "Realizamos una fase de inmersión en tu marca. Analizamos cómo hablas hoy y cómo quieres ser percibido mañana. Creamos un lenguaje que proyecte la autoridad y solidez que tu negocio internacional exige.",
  },
  {
    q: '¿Qué es el "Micro-copy" y por qué lo mencionan?',
    a: "Son los pequeños textos en botones, formularios y mensajes de error. Aunque parecen insignificantes, son los que eliminan la ansiedad del usuario en el momento crítico de la compra. En Nasua, cuidamos hasta la última palabra.",
  },
  {
    q: "¿Pueden reescribir una web que ya está funcionando?",
    a: "Sí. Realizamos Auditorías de Copy. Identificamos dónde el mensaje es confuso o aburrido y lo transformamos en una narrativa de ventas potente que mejore tus métricas actuales.",
  },
  {
    q: "¿Soy el dueño de los textos que Nasua redacta?",
    a: "Totalmente. Bajo nuestro principio de Soberanía Digital, una vez entregado y pagado el servicio, los derechos de uso y propiedad de cada palabra te pertenecen al 100%.",
  },
  {
    q: "¿Cómo se integra el copy con el diseño UX/UI?",
    a: "Trabajamos en espejo. El diseñador crea el flujo visual and el copywriter crea el flujo mental. Ambos aseguran que no haya \"ruido\" y que la experiencia del usuario sea fluida y persuasiva.",
  },
  {
    q: "¿Hacen copy para anuncios (Ads) también?",
    a: "Sí. Redactamos los textos para tus campañas de Google, Meta, TikTok y Pinterest. Adaptamos el mensaje al formato de cada plataforma para maximizar el CTR (Click Through Rate) y bajar tus costos de pauta.",
  },
  {
    q: "¿En cuánto tiempo recibo los textos de mi proyecto?",
    a: "Depende de la magnitud (una Landing Page vs. una Web Corporativa completa), pero generalmente entregamos propuestas de copy estratégico en un plazo de 5 a 10 días hábiles tras la fase de investigación.",
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

const Copywriting = () => {
  return (
    <div className="bg-background text-foreground">
      <Helmet>
        <title>Copywriting Estratégico | Textos que Convierten Clics en Ventas</title>
        <meta name="description" content="No escribimos palabras, diseñamos argumentos de venta. Descubre el Copywriting Estratégico de Nasua: psicología aplicada para escalar tu facturación." />
        <meta property="og:title" content="Copywriting Estratégico | Textos que Convierten Clics en Ventas" />
        <meta property="og:description" content="No escribimos palabras, diseñamos argumentos de venta. Descubre el Copywriting Estratégico de Nasua: psicología aplicada para escalar tu facturación." />
        <meta property="og:image" content="https://nasua.marketing/CopywritingNasua.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://nasua.marketing/CopywritingNasua.jpg" />
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
              Copywriting Estratégico:{" "}
              <span className="text-gradient">Textos que convierten clics en ventas.</span>
            </motion.h1>
          </ClientOnly>
          <ClientOnly minHeight="40px">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6 text-lg md:text-xl text-primary-foreground/80 font-body max-w-3xl mx-auto"
            >
              Si tu web es la infraestructura, el copy es el vendedor que trabaja 24/7. En Nasua unimos la psicología del consumidor con la estrategia de negocio para redactar mensajes que no solo informan, sino que impulsan al usuario a tomar acción.
            </motion.p>
          </ClientOnly>
          <ClientOnly minHeight="50px">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10"
            >
              <Link
                to="/contacto"
                className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg"
              >
                Solicitar Consultoría de Copy
              </Link>
            </motion.div>
          </ClientOnly>
        </div>
      </section>

      {/* Ingeniería de Persuasión */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <ClientOnly minHeight="40px">
            <motion.div {...fadeUp} className="text-center mb-6 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
                La estética atrae, pero el mensaje es el que{" "}
                <span className="text-gradient">cierra la venta</span>.
              </h2>
            </motion.div>
          </ClientOnly>
          <ClientOnly minHeight="40px">
            <motion.p {...fadeUp} className="text-center text-muted-foreground text-lg font-body max-w-3xl mx-auto mb-14 leading-relaxed">
              Un diseño impecable con un mensaje débil es solo un folleto mudo.
            </motion.p>
          </ClientOnly>

          <div className="grid md:grid-cols-2 gap-8">
            {persuasionPillars.map((p, i) => (
              <ClientOnly key={p.title} minHeight="200px">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-card rounded-xl p-8 border border-border hover:border-secondary/50 transition-colors"
                >
                  <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mb-5">
                    <p.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="font-display font-medium text-xl text-foreground mb-3">{p.title}</h3>
                  <p className="text-muted-foreground font-body leading-relaxed text-sm">{p.text}</p>
                </motion.div>
              </ClientOnly>
            ))}
          </div>
        </div>
      </section>

      {/* SEO + Persuasión */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-6 max-w-5xl">
          <ClientOnly minHeight="40px">
            <motion.div {...fadeUp} className="text-center mb-6">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-primary-foreground">
                Escribir para humanos sin olvidar{" "}
                <span className="text-gradient">a las máquinas</span>.
              </h2>
            </motion.div>
          </ClientOnly>
          <ClientOnly minHeight="40px">
            <motion.p {...fadeUp} className="text-center text-primary-foreground/80 text-lg font-body max-w-3xl mx-auto mb-14 leading-relaxed">
              En 2026, el copy debe ser irresistible para el usuario y legible para la IA.
            </motion.p>
          </ClientOnly>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {seoFeatures.map((item, i) => (
              <ClientOnly key={item.title} minHeight="150px">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-8 border border-primary-foreground/20"
                >
                  <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mb-5">
                    <item.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="font-display font-medium text-xl text-primary-foreground mb-3">{item.title}</h3>
                  <p className="text-primary-foreground/70 font-body leading-relaxed text-sm">{item.text}</p>
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
                ¿Listo para que tu mensaje empiece a{" "}
                <span className="text-gradient">vender de verdad</span>?
              </h2>
              <p className="text-primary-foreground/80 text-lg leading-relaxed font-body max-w-2xl mx-auto">
                Deja de usar frases hechas y empieza a usar argumentos que cierren negocios. El equipo de Nasua está listo para redactar el futuro de tu marca.
              </p>
              <button
                onClick={() => window.scrollTo(0, 0)}
                className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg cursor-pointer"
              >
                Solicitar Consultoría de Copy
              </button>
            </motion.div>
          </ClientOnly>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Copywriting;
export const prerender = true;
