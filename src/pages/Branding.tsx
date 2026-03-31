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
  Award,
  Layers,
  CheckCircle,
  Palette,
  FileText,
  Lightbulb,
  Target,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

const pillars = [
  {
    icon: Award,
    title: "Autoridad Visual de Alto Nivel",
    text: "Desarrollamos sistemas visuales que posicionan a tu marca como el líder de su industria. Analizamos tu competencia y tu mercado objetivo para crear una identidad que no solo destaque, sino que comunique profesionalismo y solvencia desde el primer contacto.",
  },
  {
    icon: Layers,
    title: "Coherencia en cada Punto de Contacto",
    text: "Una marca sólida es una marca coherente. El equipo de Nasua entrega un ecosistema visual completo: desde el logotipo y la paleta cromática hasta la tipografía y los elementos gráficos que vivirán en tu web, redes sociales y presentaciones comerciales.",
  },
];

const integrations = [
  {
    icon: Target,
    title: "Optimización para Web",
    text: "Creamos activos gráficos ligeros y vectoriales que no comprometen la velocidad de carga de tu sitio. Tu identidad se verá impecable sin sacrificar los milisegundos de carga que el SEO exige.",
  },
  {
    icon: CheckCircle,
    title: "Soberanía de Marca",
    text: "Al finalizar el proceso, te entregamos los archivos originales en formatos editables. Eres el dueño total de tu identidad, sin letras chiquitas ni dependencias con el equipo de diseño.",
  },
];

const processSteps = [
  {
    icon: Lightbulb,
    title: "Inmersión de Marca",
    text: "Entendemos tus valores y tus metas de negocio.",
  },
  {
    icon: Palette,
    title: "Concepto Estratégico",
    text: "Definimos el tono y la dirección visual que te diferenciará.",
  },
  {
    icon: Layers,
    title: "Desarrollo de Identidad",
    text: "Creamos el sistema visual (Logo, Colores, Tipografía).",
  },
  {
    icon: FileText,
    title: "Manual de Estilo",
    text: "Entregamos las reglas de juego para que tu marca nunca pierda su esencia.",
  },
];

const tools = [
  { name: "Figma", icon: "🎨" },
  { name: "Adobe Illustrator", icon: "✏️" },
  { name: "Adobe Photoshop", icon: "🖼️" },
  { name: "After Effects", icon: "🎬" },
  { name: "Vibe Coding", icon: "⚡" },
  { name: "Soberanía Digital", icon: "🛡️" },
];

const faqs = [
  {
    q: "¿Por qué es importante invertir en branding si ya tengo una infraestructura web?",
    a: "La web es el vehículo técnico, pero el branding es el factor de confianza que cierra la venta. Una infraestructura impecable con una marca débil genera dudas. El branding estratégico justifica tus precios, construye autoridad y asegura que tu empresa sea percibida como la opción premium en su mercado.",
  },
  {
    q: "¿Qué recibo exactamente al contratar el servicio de Branding & Autoridad?",
    a: "Recibes un sistema de identidad completo: Logotipo (versiones principal, secundaria y reducida), paleta de colores con psicología de mercado, tipografías institucionales, elementos gráficos de apoyo y el Manual de Identidad Visual que rige toda tu comunicación futura.",
  },
  {
    q: "¿El equipo de Nasua realiza rediseños de marcas existentes?",
    a: "Sí. Realizamos procesos de Rebranding para empresas que han escalado y cuya imagen actual ya no representa su magnitud técnica o sus metas internacionales. Evolucionamos tu marca para que esté a la altura de tu facturación actual.",
  },
  {
    q: "¿Soy el dueño legal de los archivos originales de mi marca?",
    a: "Absolutamente. Bajo nuestro principio de Soberanía Digital, al finalizar el proyecto te entregamos todos los archivos fuente (AI, SVG, PDF) y derechos de uso. En Nasua no retenemos activos; tú eres el dueño total de tu identidad.",
  },
  {
    q: "¿Cuánto tiempo toma desarrollar una identidad de marca completa?",
    a: "Un proceso de branding estratégico suele tomar entre 2 y 4 semanas. Esto incluye las fases de diagnóstico, concepto creativo, desarrollo de activos y la entrega del manual final, asegurando que cada paso sea validado por tu equipo.",
  },
  {
    q: "¿Cómo impacta el branding directamente en mi Retorno de Inversión (ROI)?",
    a: "Una marca con alta autoridad reduce el Costo de Adquisición de Clientes (CAC). Cuando el usuario confía en lo que ve, la resistencia a la compra disminuye y la tasa de conversión en tus campañas de pauta aumenta drásticamente.",
  },
  {
    q: "¿Mi marca será competitiva en mercados internacionales como EE. UU. o Europa?",
    a: "Sí. Diseñamos bajo estándares internacionales de estética y comunicación. Analizamos los códigos visuales de tu industria en el mercado global para asegurar que tu empresa proyecte solvencia y profesionalismo, sin importar la frontera.",
  },
  {
    q: "¿Qué diferencia el branding de Nasua de una agencia creativa tradicional?",
    a: "Nosotros aplicamos lógica de negocio e ingeniería. Mientras otros se centran solo en lo estético, Nasua diseña activos que son técnicamente eficientes (ligeros para web), estratégicamente coherentes con tu embudo de ventas y enfocados en generar autoridad de mercado.",
  },
  {
    q: "¿Qué pasa si ya tengo un logo pero quiero mejorar mi autoridad visual?",
    a: "Podemos realizar un Brand Refresh. Optimizamos tu identidad actual, actualizamos tipografías y colores, y creamos un sistema visual más robusto sin perder el reconocimiento de marca que ya has construido con tus clientes actuales.",
  },
  {
    q: "¿Cómo se integra el branding con mi estrategia de Pauta y SEO?",
    a: "La coherencia es clave. Un branding sólido mejora el CTR (Click Through Rate) en tus anuncios y resultados de búsqueda. Cuando tu marca es reconocible y profesional, los usuarios tienden a hacer clic con mayor frecuencia, potenciando el rendimiento de todo tu ecosistema digital.",
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

const Branding = () => {
  return (
    <div className="bg-background text-foreground">
      <Helmet>
        <title>Branding &amp; Autoridad | Identidad Visual Estratégica para Negocios</title>
        <meta name="description" content="No diseñamos logos, construimos la autoridad que tu empresa necesita para cerrar contratos internacionales. Identidad visual estratégica con el sello Nasua." />
        <meta property="og:title" content="Branding & Autoridad | Identidad Visual Estratégica para Negocios" />
        <meta property="og:description" content="No diseñamos logos, construimos la autoridad que tu empresa necesita para cerrar contratos internacionales. Identidad visual estratégica con el sello Nasua." />
        <meta property="og:image" content="https://nasua.marketing/BrandingNasua.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://nasua.marketing/BrandingNasua.jpg" />
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
              Branding &amp; Autoridad:{" "}
              <span className="text-gradient">Identidad visual estratégica para negocios.</span>
            </motion.h1>
          </ClientOnly>
          <ClientOnly minHeight="40px">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6 text-lg md:text-xl text-primary-foreground/80 font-body max-w-3xl mx-auto"
            >
              La estética sin estrategia es solo decoración. En Nasua creamos identidades visuales diseñadas para proyectar solidez, generar confianza inmediata y elevar el valor percibido de tu empresa en el mercado global.
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
                Cotizar Proyecto de Branding
              </Link>
            </motion.div>
          </ClientOnly>
        </div>
      </section>

      {/* Más allá del logo */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <ClientOnly minHeight="40px">
            <motion.div {...fadeUp} className="text-center mb-6 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
                Identidad visual pensada para{" "}
                <span className="text-gradient">cerrar negocios</span>.
              </h2>
            </motion.div>
          </ClientOnly>
          <ClientOnly minHeight="40px">
            <motion.p {...fadeUp} className="text-center text-muted-foreground text-lg font-body max-w-3xl mx-auto mb-14 leading-relaxed">
              El mercado internacional no perdona una imagen descuidada. Tu branding es tu carta de presentación ante clientes de alto ticket.
            </motion.p>
          </ClientOnly>

          <div className="grid md:grid-cols-2 gap-8">
            {pillars.map((p, i) => (
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

      {/* Branding integrado */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-6 max-w-5xl">
          <ClientOnly minHeight="40px">
            <motion.div {...fadeUp} className="text-center mb-6">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-primary-foreground">
                Diseño que respeta la ingeniería y el{" "}
                <span className="text-gradient">rendimiento</span>.
              </h2>
            </motion.div>
          </ClientOnly>
          <ClientOnly minHeight="40px">
            <motion.p {...fadeUp} className="text-center text-primary-foreground/80 text-lg font-body max-w-3xl mx-auto mb-14 leading-relaxed">
              A diferencia de agencias creativas tradicionales, el equipo de Nasua diseña marcas que funcionan en el mundo real (y digital).
            </motion.p>
          </ClientOnly>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {integrations.map((item, i) => (
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

      {/* Proceso */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-6 max-w-5xl">
          <ClientOnly minHeight="40px">
            <motion.div {...fadeUp} className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
                El camino estratégico de{" "}
                <span className="text-gradient">Nasua</span>.
              </h2>
            </motion.div>
          </ClientOnly>

          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <ClientOnly key={step.title} minHeight="150px">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <p className="text-secondary font-bold text-sm mb-1 font-body">Fase {i + 1}</p>
                  <h3 className="font-display font-medium text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm font-body leading-relaxed">{step.text}</p>
                </motion.div>
              </ClientOnly>
            ))}
          </div>
        </div>
      </section>

      {/* Herramientas y tecnologías */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <ClientOnly minHeight="150px">
            <motion.div {...fadeUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
                Herramientas de{" "}
                <span className="text-gradient">alto estándar</span>.
              </h2>
              <p className="text-muted-foreground text-lg font-body mt-4 max-w-2xl mx-auto">
                Trabajamos con las mismas herramientas que usan los equipos de diseño de las empresas Fortune 500.
              </p>
            </motion.div>
          </ClientOnly>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, i) => (
              <ClientOnly key={tool.name} minHeight="60px">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-card border border-border rounded-xl px-6 py-4 flex items-center gap-3 hover:border-secondary/50 transition-colors"
                >
                  <span className="text-2xl">{tool.icon}</span>
                  <span className="font-body font-medium text-foreground">{tool.name}</span>
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
                ¿Listo para proyectar la autoridad que tu negocio{" "}
                <span className="text-gradient">merece</span>?
              </h2>
              <p className="text-primary-foreground/80 text-lg leading-relaxed font-body max-w-2xl mx-auto">
                Deja de ser una opción más y conviértete en la referencia de tu industria. El equipo de Nasua está listo para construir tu identidad de alto impacto.
              </p>
              <Link
                to="/contacto"
                className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg"
              >
                Cotizar Proyecto de Branding
              </Link>
            </motion.div>
          </ClientOnly>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Branding;
export const prerender = true;
