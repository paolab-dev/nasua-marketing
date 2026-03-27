import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Globe,
  Wrench,
  Search,
  Target,
  Megaphone,
  PenTool,
  Cog,
  Palette,
  Zap,
  Eye,
  TrendingUp,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

const groups = [
  {
    emoji: "💻",
    label: "Presencia y Soporte",
    services: [
      {
        icon: Globe,
        title: "Sitios Web de Alto Rendimiento",
        text: "Páginas optimizadas para convertir, con tiempos de carga mínimos y diseño actual. Despliegue en 48h para que tu negocio no pierda ni un día.",
        href: "/infraestructura-digital",
      },
      {
        icon: Wrench,
        title: "Webmaster & Soporte",
        text: "Nos encargamos de que tu sitio esté siempre operativo, seguro y al día. Tú te ocupas del negocio, nosotros de que la tecnología responda.",
        href: "/infraestructura-digital",
      },
    ],
  },
  {
    emoji: "🚀",
    label: "Visibilidad y Resultados",
    services: [
      {
        icon: Search,
        title: "Estrategia SEO & GEO",
        text: "Posicionamos tu marca donde están las respuestas. Optimizamos tu contenido para buscadores como Google y para las nuevas consultas en Inteligencia Artificial como ChatGPT.",
        href: "/seo-geo",
      },
      {
        icon: Target,
        title: "Pauta Digital (Performance)",
        text: "Gestión profesional de inversión en anuncios (Ads). Maximizamos tu presupuesto para atraer clientes potenciales con intención de compra.",
        href: "/pauta-digital",
      },
    ],
  },
  {
    emoji: "📣",
    label: "Autoridad y Mensaje",
    services: [
      {
        icon: Megaphone,
        title: "Estrategia & Contenido Social",
        text: "Creamos contenido que genera confianza y comunica el valor real de tu empresa.",
        href: "/estrategia",
      },
      {
        icon: PenTool,
        title: "Copywriting Estratégico",
        text: "Redacción persuasiva diseñada para guiar al usuario. Textos que aclaran dudas, eliminan barreras y facilitan la venta.",
        href: "/copywriting",
      },
    ],
  },
  {
    emoji: "📈",
    label: "Escala y Marca",
    services: [
      {
        icon: Cog,
        title: "Automatización Operativa",
        text: "Implementamos sistemas para que el seguimiento de tus clientes sea automático y eficiente, evitando que se pierdan oportunidades comerciales.",
        href: "/automatizacion",
      },
      {
        icon: Palette,
        title: "Branding con Propósito",
        text: "Identidades visuales que proyectan solidez. Diseñamos marcas preparadas para competir y destacar en cualquier mercado.",
        href: "/branding",
      },
    ],
  },
];

const differentiators = [
  {
    icon: Zap,
    title: "Agilidad Real",
    text: "Gracias a nuestras herramientas de desarrollo ágil, pasamos de la idea al lanzamiento en tiempos récord.",
  },
  {
    icon: Eye,
    title: "Transparencia Total",
    text: "Cuentas claras y procesos sencillos. Sabes exactamente qué estamos haciendo y por qué.",
  },
  {
    icon: TrendingUp,
    title: "Visión Comercial",
    text: "Cada acción que tomamos tiene un objetivo: que tu empresa sea percibida como líder y aumente su rentabilidad.",
  },
];

const faqs = [
  {
    q: "¿Qué tan rápido podemos empezar a ver resultados?",
    a: "Depende del servicio, pero nuestra metodología está diseñada para la agilidad. Un sitio web puede estar al aire en 48 horas, mientras que una estrategia de pauta suele mostrar datos relevantes en las primeras dos semanas. Priorizamos la ejecución rápida para que tu marca empiece a generar impacto lo antes posible.",
  },
  {
    q: "¿Qué pasa si ya tengo algunos canales funcionando (ej. una web o redes sociales)?",
    a: "No tienes que empezar de cero. Realizamos un diagnóstico de lo que ya tienes para integrarlo a nuestra estrategia. Si tu web actual es funcional, nos enfocamos en potenciarla; si tus redes tienen una buena base, entramos a elevar la calidad visual y la efectividad del mensaje.",
  },
  {
    q: "¿Cómo aseguran que el tono y la imagen sean fieles a mi empresa?",
    a: "Antes de crear cualquier pieza, realizamos una sesión de inmersión en tu marca. Definimos juntos tu identidad verbal y visual para que cada anuncio, post o texto web se sienta auténtico y alineado con los valores de tu negocio.",
  },
  {
    q: "¿Necesito conocimientos técnicos para gestionar lo que ustedes construyan?",
    a: "Entregamos soluciones intuitivas y fáciles de usar. Ya sea para actualizar un dato en tu web o revisar un reporte, diseñamos todo para que tú o tu equipo puedan operarlo con total autonomía, sin depender de terceros para cambios simples.",
  },
  {
    q: "¿Ustedes manejan directamente el presupuesto de mis anuncios en Google o Meta?",
    a: "Por transparencia, el presupuesto de inversión publicitaria lo pagas tú directamente a la plataforma. Nasua cobra un fee por la estrategia, la creación de los anuncios y la optimización de las campañas, asegurando que cada peso se use de la forma más eficiente.",
  },
  {
    q: "¿Qué incluye exactamente el servicio de producción de contenido?",
    a: "Nuestra agencia se encuentra en Medellín, donde coordinamos sesiones presenciales de captura. Sin embargo, hacemos todo lo posible por llegar a tu ubicación si es requerido a través de una red de aliados que nos permite tener cobertura donde sea necesario. Nos encargamos de la producción, la edición profesional y de construir la narrativa estratégica de tu marca.",
  },
  {
    q: "¿Puedo contratar un solo servicio o deben ser paquetes cerrados?",
    a: "Nuestro ecosistema es modular. Puedes empezar con una solución específica para resolver una necesidad inmediata y, a medida que veas resultados, integrar otros pilares para escalar tu facturación de forma organizada y lógica.",
  },
  {
    q: "¿Qué sucede si mi sitio web tiene un problema técnico un fin de semana?",
    a: "Para eso contamos con el servicio de Webmaster. Monitoreamos la salud de tu sitio para detectar cualquier inconveniente. Nuestro compromiso es la continuidad de tu presencia digital; si algo falla, actuamos de inmediato para restablecer la normalidad.",
  },
  {
    q: "¿Cómo garantizan que los textos (Copywriting) realmente atraigan clientes?",
    a: "No escribimos solo para que se vea bien, escribimos para convencer. Aplicamos psicología de persuasión y análisis de mercado para entender qué busca tu cliente ideal, derribando sus barreras de compra y facilitando su decisión a través de mensajes claros.",
  },
  {
    q: "¿Tengo que firmar contratos de permanencia a largo plazo?",
    a: "Creemos en los resultados, no en las ataduras. Aunque las estrategias de crecimiento rinden mejor a mediano plazo, ofrecemos flexibilidad. Queremos que trabajes con Nasua porque ves el progreso de tu negocio, no por una obligación contractual.",
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

const Servicios = () => {
  return (
    <div className="bg-background text-foreground">
      <Helmet>
        <title>Soluciones Estratégicas para Escalar tu Facturación | Nasua</title>
        <meta name="description" content="Conoce nuestros servicios diseñados para potenciar tu marca y acelerar tus ventas. Soluciones de marketing digital directo y efectivo con Nasua." />
        <meta property="og:title" content="Soluciones Estratégicas para Escalar tu Facturación | Nasua" />
        <meta property="og:description" content="Conoce nuestros servicios diseñados para potenciar tu marca y acelerar tus ventas. Soluciones de marketing digital directo y efectivo con Nasua." />
        <meta property="og:image" content="https://nasua.marketing/Nasua-PaginasWebProfesionalesEnColombia.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://nasua.marketing/Nasua-PaginasWebProfesionalesEnColombia.jpg" />
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent/30" />
        <div className="relative z-10 container mx-auto px-6 py-32 text-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground font-display"
          >
            Soluciones estratégicas para{" "}
            <span className="text-gradient">escalar tu facturación</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-primary-foreground/80 font-body max-w-3xl mx-auto"
          >
            Diseñamos el camino para que tu empresa crezca con solidez. Nuestros servicios integran tecnología, diseño y pauta para potenciar tu presencia en el mercado.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10"
          >
            <a
              href="/contacto"
              className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg"
            >
              Agendar Consultoría Estratégica
            </a>
          </motion.div>
        </div>
      </section>

      {/* Servicios por grupos */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div {...fadeUp} className="text-center mb-6 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
              Marketing diseñado para{" "}
              <span className="text-gradient">mover la aguja del negocio</span>.
            </h2>
          </motion.div>
          <motion.p
            {...fadeUp}
            className="text-center text-muted-foreground text-lg font-body max-w-3xl mx-auto mb-16 leading-relaxed"
          >
            Entendemos que el marketing no es un fin, sino un medio para vender más y posicionarte mejor. Nuestra metodología se basa en la agilidad y la efectividad: eliminamos los procesos lentos y nos enfocamos en lo que realmente genera impacto visual y comercial para tu marca.
          </motion.p>

          <div className="space-y-16">
            {groups.map((group, gi) => (
              <div key={group.label}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center gap-3 mb-8"
                >
                  <span className="text-2xl">{group.emoji}</span>
                  <h3 className="text-xl font-bold font-display text-foreground">{group.label}</h3>
                  <div className="flex-1 h-px bg-border" />
                </motion.div>
                <div className="grid md:grid-cols-2 gap-6">
                  {group.services.map((s, i) => (
                    <motion.a
                      key={s.title}
                      href={s.href}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + gi * 0.05 }}
                      className="block bg-card rounded-xl p-8 border border-border hover:border-secondary/50 hover:shadow-md transition-all group"
                    >
                      <div className="flex items-start gap-5">
                        <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center shrink-0 group-hover:bg-secondary/30 transition-colors">
                          <s.icon className="w-6 h-6 text-secondary" />
                        </div>
                        <div>
                          <h4 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-secondary transition-colors">
                            {s.title}
                          </h4>
                          <p className="text-muted-foreground font-body leading-relaxed text-sm">
                            {s.text}
                          </p>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciadores */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-primary-foreground">
              Velocidad, claridad y{" "}
              <span className="text-gradient">resultados</span>.
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {differentiators.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-5">
                  <d.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-display font-semibold text-xl text-primary-foreground mb-3">
                  {d.title}
                </h3>
                <p className="text-primary-foreground/70 font-body leading-relaxed text-sm">
                  {d.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-background" id="faq">
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
              ¿Listo para dejar de buscar proveedores y empezar a{" "}
              <span className="text-gradient">crecer con un socio</span>?
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed font-body max-w-2xl mx-auto">
              Hablemos de tus retos y de cómo podemos poner nuestra infraestructura a trabajar para ti. Estamos listos para el diagnóstico inicial.
            </p>
            <a
              href="/contacto"
              className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg"
            >
              Agendar Consultoría
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Servicios;
