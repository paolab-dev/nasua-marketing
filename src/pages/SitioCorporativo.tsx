import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CorporateLeadForm from "@/components/CorporateLeadForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Shield, Brain, TrendingUp, Globe, Code, ShoppingBag, Zap, Smartphone, Link, ClipboardCheck, Layout, Wrench, Rocket } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

const differentials = [
  {
    icon: Shield,
    title: "Soberanía y Control Total",
    text: "La base de nuestra ética de trabajo es que tú seas el único dueño de tu tecnología. El equipo de Nasua configura tu infraestructura (dominios, hosting, código) a tu nombre desde el primer día. No generamos dependencias técnicas forzadas; construimos activos donde tú tienes las llaves y el control absoluto de tu información y la de tus clientes.",
  },
  {
    icon: Brain,
    title: "Preparación para la Era de la IA (GEO)",
    text: "No solo optimizamos para los buscadores tradicionales. Estructuramos tus datos y contenidos para que las nuevas Inteligencias Artificiales de búsqueda (como ChatGPT o Perplexity) identifiquen y recomienden tu empresa como la respuesta oficial en tu sector. Tu web empresarial debe ser legible tanto para humanos como para los algoritmos del 2026.",
  },
  {
    icon: TrendingUp,
    title: "Escalabilidad Operativa",
    text: "Diseñamos sitios que crecen al ritmo de tu empresa. Si hoy necesitas una web informativa y mañana requieres un portal de clientes, un blog de autoridad o una integración compleja con herramientas internas, la base técnica que nuestro equipo construye está lista para evolucionar sin necesidad de empezar desde cero.",
  },
];

const platforms = [
  {
    icon: Globe,
    title: "WordPress Enterprise",
    text: "La solución estándar para empresas que requieren una gestión de contenidos potente, un SEO profundo y la capacidad de que su equipo interno actualice información sin depender de programadores.",
  },
  {
    icon: Code,
    title: "Vibe Coding (React / Custom)",
    text: "Para corporaciones que exigen una velocidad de carga instantánea, seguridad de alto nivel y una experiencia de usuario que las plataformas tradicionales no pueden ofrecer.",
  },
  {
    icon: ShoppingBag,
    title: "Sistemas Integrados",
    text: "Si tu empresa requiere funciones de comercio electrónico o membresías, evaluamos la integración de Shopify o módulos personalizados que aseguren una operación fluida.",
  },
];

const features = [
  {
    icon: Zap,
    title: "Velocidad de Carga Superior",
    text: "Optimizamos cada recurso para cumplir con los estándares de Google, reduciendo la tasa de rebote y mejorando la retención de usuarios.",
  },
  {
    icon: Smartphone,
    title: "Diseño Mobile-First",
    text: "Aseguramos que la experiencia sea impecable en dispositivos móviles, donde ocurre la mayor parte de la interacción profesional hoy.",
  },
  {
    icon: Link,
    title: "Conexión con tu CRM",
    text: "Vinculamos tu sitio web con tus herramientas de ventas y bases de datos para que cada lead sea gestionado de forma automática y eficiente.",
  },
];

const processSteps = [
  { icon: ClipboardCheck, title: "Diagnóstico de Infraestructura", text: "Analizamos tus necesidades técnicas y tus proyecciones de crecimiento." },
  { icon: Layout, title: "Arquitectura de Información", text: "Definimos la estructura que mejor proyecte tu autoridad y facilite la navegación del usuario." },
  { icon: Wrench, title: "Desarrollo y Testing", text: "Implementamos la tecnología elegida bajo estándares estrictos de seguridad y rendimiento." },
  { icon: Rocket, title: "Entrega y Entrenamiento", text: "Te entregamos las llaves de tu activo y capacitamos a tu equipo para que operen el sitio con total autonomía." },
];

const faqItems = [
  {
    q: "¿Por qué el equipo enfatiza que el sitio es \"Soberano\"?",
    a: "Porque muchos proveedores retienen el control de los accesos técnicos para forzar la permanencia del cliente. En Nasua, todo lo que pagas es propiedad de tu empresa. Si en el futuro decides cambiar de aliado, te llevas tu sitio completo sin trabas. Trabajamos para que elijas quedarte con nuestro equipo por los resultados, no por una obligación técnica.",
  },
  {
    q: "¿Qué sucede si ya tengo un sitio web antiguo?",
    a: "Realizamos una migración inteligente. El equipo rescata tu autoridad de SEO previa, optimiza tus contenidos y los traslada a una infraestructura moderna. El objetivo es renovar tu imagen y rendimiento técnico sin perder el posicionamiento que ya has ganado en el mercado.",
  },
  {
    q: "¿Cómo se garantiza la seguridad de la información?",
    a: "Implementamos protocolos de seguridad estándar, certificados SSL y configuraciones de servidor que protegen tu sitio contra ataques comunes. Un sitio empresarial es un activo crítico; por eso, el equipo se asegura de que la base técnica sea estable y segura para ti y para tus visitantes.",
  },
  {
    q: "¿El equipo se encarga del mantenimiento mensual?",
    a: "Sí. Como tu Socio de Crecimiento, ofrecemos planes de mantenimiento proactivo. Un sitio web empresarial requiere actualizaciones constantes de seguridad y optimización de rendimiento para no quedar obsoleto. El equipo se encarga de que tu motor digital funcione siempre al 100%.",
  },
  {
    q: "¿Cuánto tiempo toma el desarrollo de una web empresarial?",
    a: "Un proyecto robusto suele tomar entre 15 y 30 días, dependiendo de la complejidad de las integraciones requeridas. El equipo trabaja con cronogramas de cumplimiento estricto, asegurando que el lanzamiento ocurra en la fecha pactada en el Roadmap inicial.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const SitioCorporativo = () => {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <div className="bg-background text-foreground">
      <Helmet>
        <title>Web Empresarial | Infraestructura Digital de Autoridad | Nasua</title>
        <meta name="description" content="Tu reputación merece un sitio robusto y rápido. Creamos centros de mando digitales soberanos que respaldan tu crecimiento en mercados internacionales." />
        <meta property="og:title" content="Web Empresarial | Infraestructura Digital de Autoridad | Nasua" />
        <meta property="og:description" content="Tu reputación merece un sitio robusto y rápido. Creamos centros de mando digitales soberanos que respaldan tu crecimiento en mercados internacionales." />
        <meta property="og:image" content="https://nasua.marketing/SitioCorporativoNasua.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://nasua.marketing/SitioCorporativoNasua.jpg" />
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
            Web Empresarial:{" "}
            <span className="text-gradient">Construimos tu centro de mando digital.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-primary-foreground/80 font-body max-w-3xl mx-auto"
          >
            Un sitio empresarial de Nasua no es un folleto digital; es el activo técnico que centraliza tu estrategia de negocio. Nuestro equipo desarrolla soluciones robustas, rápidas y soberanas que transforman tu presencia en línea en una herramienta de ventas y confianza para el mercado internacional.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10"
          >
            <button
              onClick={() => setFormOpen(true)}
              className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg cursor-pointer"
            >
              Agendar Consultoría Empresarial
            </button>
          </motion.div>
        </div>
      </section>

      {/* El fin de las páginas estáticas */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div {...fadeUp} className="text-center mb-6 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
              Ingeniería web para empresas con visión de{" "}
              <span className="text-gradient">futuro</span>.
            </h2>
          </motion.div>
          <motion.p {...fadeUp} className="text-center text-muted-foreground text-lg font-body max-w-3xl mx-auto mb-14 leading-relaxed">
            En el entorno actual, un sitio que solo informa es un activo que pierde dinero. En Nasua, transformamos tu web en un motor operativo.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {differentials.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-card rounded-xl p-8 border border-border hover:border-secondary/50 transition-colors text-center"
              >
                <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-5">
                  <d.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-display font-medium text-xl text-foreground mb-3">{d.title}</h3>
                <p className="text-muted-foreground font-body leading-relaxed text-sm">{d.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tecnología */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div {...fadeUp} className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-primary-foreground">
              La infraestructura adecuada para tu nivel de{" "}
              <span className="text-gradient">operación</span>.
            </h2>
          </motion.div>
          <motion.p {...fadeUp} className="text-center text-primary-foreground/80 text-lg font-body max-w-3xl mx-auto mb-14 leading-relaxed">
            El equipo técnico evalúa tus necesidades de contenido, seguridad y rendimiento para implementar la plataforma más rentable.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {platforms.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-8 border border-primary-foreground/20 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-5">
                  <p.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-display font-medium text-xl text-primary-foreground mb-3">{p.title}</h3>
                <p className="text-primary-foreground/70 font-body leading-relaxed text-sm">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Características */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
              Rendimiento medible y seguridad{" "}
              <span className="text-gradient">técnica</span>.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-card rounded-xl p-8 border border-border hover:border-secondary/50 transition-colors text-center"
              >
                <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-5">
                  <f.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-display font-medium text-xl text-foreground mb-3">{f.title}</h3>
                <p className="text-muted-foreground font-body leading-relaxed text-sm">{f.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
              Rigor y{" "}
              <span className="text-gradient">cumplimiento</span>.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-7 h-7 text-secondary" />
                </div>
                <p className="text-secondary font-bold text-sm mb-1 font-body">Paso {i + 1}</p>
                <h3 className="font-display font-medium text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm font-body leading-relaxed">{step.text}</p>
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
            {faqItems.map((faq, i) => (
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
              ¿Listo para construir tu centro de{" "}
              <span className="text-gradient">mando digital</span>?
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed font-body max-w-2xl mx-auto">
              El equipo de Nasua está listo para auditar tu infraestructura actual y diseñar el sitio empresarial que tu operación necesita. Sin promesas vacías, solo tecnología orientada a resultados.
            </p>
            <button
              onClick={() => setFormOpen(true)}
              className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg cursor-pointer"
            >
              Agendar Consultoría Empresarial
            </button>
          </motion.div>
        </div>
      </section>

      <CorporateLeadForm open={formOpen} onOpenChange={setFormOpen} />
      <Footer />
    </div>
  );
};

export default SitioCorporativo;
