import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Shield, Zap, Gauge, Smartphone, Bot, ArrowRight } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

const vibeCodingFeatures = [
  {
    icon: Gauge,
    title: "Carga Instantánea",
    text: "Optimizamos cada activo para que tu sitio sea el más rápido de tu industria.",
  },
  {
    icon: Smartphone,
    title: "Adaptabilidad Real",
    text: "Infraestructuras que se ven y funcionan perfecto en cualquier dispositivo.",
  },
  {
    icon: Bot,
    title: "Optimización GEO",
    text: "Preparamos tu arquitectura para que los motores de respuesta de IA (SearchGPT, Perplexity) encuentren y recomienden tu contenido fácilmente.",
  },
];

const modules = [
  {
    label: "Módulo A",
    title: "Landing Pages & Conversión",
    text: "Diseñadas para maximizar el retorno de tu pauta publicitaria. Si estás invirtiendo en Google o Meta, necesitas una infraestructura que transforme clics en facturación.",
    cta: "Ver Landing Pages",
    href: "/landing-page",
  },
  {
    label: "Módulo B",
    title: "Web Empresarial & Autoridad",
    text: "Centros de mando digitales para empresas que buscan proyectar solidez internacional y centralizar su autoridad de marca.",
    cta: "Ver Web Empresarial",
    href: "/sitio-corporativo",
  },
  {
    label: "Módulo C",
    title: "E-commerce & Ecosistemas de Venta",
    text: "Tiendas online de alto rendimiento integradas con tu operación logística, sin comisiones externas y con control total de tus ventas.",
    cta: "Ver E-commerce",
    href: "/ecommerce",
  },
];

const faqs = [
  {
    q: '¿Por qué Nasua habla de "Infraestructura" y no de "Diseño Web"?',
    a: "Porque una web bonita que se cae o es lenta no sirve para el negocio. Nosotros nos enfocamos en la parte técnica y estratégica (la ingeniería) que asegura que el sitio sea una herramienta de venta y no solo un folleto digital.",
  },
  {
    q: '¿Qué es la Soberanía Digital en la práctica?',
    a: "Significa que las cuentas de hosting, los dominios y el código fuente están a tu nombre. El equipo de Nasua tiene acceso para trabajar, pero tú tienes la llave maestra. Si decides cambiar de socio, tu negocio no se detiene.",
  },
  {
    q: "¿Cómo beneficia el Vibe Coding a mi empresa?",
    a: "Reduce el tiempo de salida al mercado (Time-to-Market). Podemos lanzar activos funcionales y estéticamente impecables en una fracción del tiempo del desarrollo tradicional, permitiéndote empezar a captar leads mucho antes.",
  },
  {
    q: "¿Ustedes se encargan del mantenimiento técnico?",
    a: "Sí. Al ser tu Socio de Crecimiento, el equipo monitorea que tu infraestructura esté siempre actualizada, segura y volando en términos de velocidad.",
  },
  {
    q: "¿Mi web estará lista para las búsquedas de Inteligencia Artificial?",
    a: "Totalmente. Estructuramos los datos (Schema Markup) para que las IAs entiendan quién eres y qué haces, asegurando que Nasua te posicione en el nuevo estándar de búsqueda (GEO).",
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

const InfraestructuraDigital = () => {
  return (
    <div className="bg-background text-foreground">
      <Helmet>
        <title>Desarrollo Web Estratégico | La Base de tu Presencia Digital</title>
        <meta name="description" content="Construimos la base sólida de tu presencia digital. Transforma tu web en un activo propio que nadie te puede quitar. Ingeniería y estrategia con Nasua." />
        <meta property="og:title" content="Desarrollo Web Estratégico | La Base de tu Presencia Digital" />
        <meta property="og:description" content="Construimos la base sólida de tu presencia digital. Transforma tu web en un activo propio que nadie te puede quitar. Ingeniería y estrategia con Nasua." />
        <meta property="og:image" content="https://nasua.marketing/InfraestructuraNasua.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://nasua.marketing/InfraestructuraNasua.jpg" />
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary/20" />
        <div className="relative z-10 container mx-auto px-6 py-32 text-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground font-display"
          >
            Desarrollo Web Estratégico:{" "}
            <span className="text-gradient">Construimos la Base de tu Presencia Digital.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-primary-foreground/80 font-body max-w-3xl mx-auto"
          >
            En Nasua, la web no es el destino final, es la infraestructura base de tu crecimiento. Construimos activos digitales bajo estándares de ingeniería de software que garantizan velocidad extrema, soberanía total y una base técnica lista para escalar.
          </motion.p>
        </div>
      </section>

      {/* Activos Soberanos */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div {...fadeUp} className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
              Tu sitio web: El único activo digital que{" "}
              <span className="text-gradient">realmente te pertenece</span>.
            </h2>
          </motion.div>
          <motion.p {...fadeUp} className="text-center text-muted-foreground text-lg font-body max-w-3xl mx-auto mb-6 leading-relaxed">
            Las redes sociales son canales de visibilidad, pero no te pertenecen. Depender exclusivamente de ellas es como construir en terreno alquilado: un cambio de algoritmo o un bloqueo o hackeo de cuenta inesperado pueden apagar tu negocio de un día para otro.
          </motion.p>
          <motion.div
            {...fadeUp}
            className="bg-card rounded-xl p-10 border border-border max-w-3xl mx-auto"
          >
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-1">
                <Shield className="w-7 h-7 text-secondary" />
              </div>
              <p className="text-muted-foreground font-body leading-relaxed text-lg">
                En Nasua, transformamos tu presencia web en un <strong className="text-foreground">activo propio que nadie te puede quitar</strong>. Diseñamos sitios web donde los datos, la tecnología y el éxito de tu marca están bajo tu control total. No creamos dependencias; entregamos herramientas que garantizan que tu empresa sea la única dueña de su destino digital.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vibe Coding */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div {...fadeUp} className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-primary-foreground">
              Rendimiento que las IAs y los usuarios{" "}
              <span className="text-gradient">aman</span>.
            </h2>
          </motion.div>
          <motion.p {...fadeUp} className="text-center text-primary-foreground/80 text-lg font-body max-w-3xl mx-auto mb-4 leading-relaxed">
            En 2026, un segundo de retraso es una venta perdida.
          </motion.p>
          <motion.p {...fadeUp} className="text-center text-primary-foreground/70 text-base font-body max-w-3xl mx-auto mb-14 leading-relaxed">
            Utilizamos <strong className="text-secondary">Vibe Coding</strong> para acelerar el ciclo de desarrollo sin sacrificar la calidad técnica. Esto nos permite:
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {vibeCodingFeatures.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-8 border border-primary-foreground/20 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-5">
                  <f.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-display font-medium text-xl text-primary-foreground mb-3">{f.title}</h3>
                <p className="text-primary-foreground/70 font-body leading-relaxed text-sm">{f.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Módulos de solución */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div {...fadeUp} className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
              Arquitecturas diseñadas para objetivos{" "}
              <span className="text-gradient">específicos</span>.
            </h2>
          </motion.div>
          <motion.p {...fadeUp} className="text-center text-muted-foreground text-lg font-body max-w-3xl mx-auto mb-14 leading-relaxed">
            Elige el motor que tu Roadmap necesita activar hoy:
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {modules.map((mod, i) => (
              <motion.div
                key={mod.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-card rounded-xl p-8 border border-border hover:border-secondary/50 transition-colors flex flex-col"
              >
                <p className="text-secondary font-bold text-xs mb-3 font-body uppercase tracking-wider">{mod.label}</p>
                <h3 className="font-display font-medium text-xl text-foreground mb-3">{mod.title}</h3>
                <p className="text-muted-foreground font-body leading-relaxed text-sm flex-grow mb-6">{mod.text}</p>
                <Link
                  to={mod.href}
                  className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-5 py-3 rounded-lg text-sm transition-all hover:scale-105 justify-center"
                >
                  {mod.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.h2
            {...fadeUp}
            className="text-3xl md:text-4xl font-bold text-foreground font-display text-center mb-12"
          >
            Preguntas <span className="text-gradient">frecuentes</span>
          </motion.h2>
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
          <motion.div {...fadeUp} className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground font-display">
              ¿Listo para construir un sistema que{" "}
              <span className="text-gradient">trabaje para ti</span>?
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed font-body max-w-2xl mx-auto">
              Hablemos de tus metas internacionales y de cómo el método Nasua puede acelerar tu llegada a esos objetivos. Sin rodeos, solo estrategia sólida.
            </p>
            <Link
              to="/contacto"
              className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg"
            >
              Agendar Consultoría Estratégica
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InfraestructuraDigital;
