import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EcommerceLeadForm from "@/components/EcommerceLeadForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BarChart3, Zap, Shield, ShoppingBag, Globe, Code, RefreshCw, Target } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

const differentials = [
  {
    icon: BarChart3,
    title: "Conversión basada en datos",
    text: "No diseñamos interfaces por estética; las creamos para eliminar la fricción en la compra. Cada elemento de tu tienda tiene el objetivo de guiar al usuario hacia el pago de forma fluida. Analizamos el comportamiento del consumidor para asegurar que el diseño trabaje a favor de tu tasa de conversión y no en contra de ella.",
  },
  {
    icon: Zap,
    title: "Velocidad que retiene clientes",
    text: "En el comercio electrónico, la lentitud es la principal causa de abandono. Nuestro equipo técnico utiliza arquitecturas de alto rendimiento para asegurar que tu catálogo cargue en milisegundos, incluso en dispositivos móviles con conexiones inestables. Una tienda rápida no solo mejora la experiencia del usuario, sino que es favorecida por los buscadores y reduce tus costos de adquisición de clientes.",
  },
  {
    icon: Shield,
    title: "Soberanía y Control de Datos",
    text: "En Nasua defendemos que tu base de datos de clientes es el activo más valioso de tu empresa. A diferencia de las plataformas cerradas que cobran comisiones por venta o limitan tu acceso a la información, nosotros construimos sobre infraestructuras donde tú tienes el control total. Eres dueño de tu tecnología, de tus datos y de la relación directa con tus compradores.",
  },
];

const platforms = [
  {
    icon: ShoppingBag,
    title: "Shopify",
    subtitle: "Escalabilidad y Agilidad",
    text: "La opción predilecta para marcas que buscan una infraestructura robusta, segura y lista para operar en mercados internacionales. Es ideal cuando la prioridad es la rapidez de ejecución, la estabilidad del servidor y un ecosistema de aplicaciones que facilita la gestión diaria sin complicaciones técnicas.",
  },
  {
    icon: Globe,
    title: "WordPress + WooCommerce",
    subtitle: "Control y Flexibilidad",
    text: "Recomendada para negocios que buscan un SEO de productos muy profundo y el control total de sus costos operativos a largo plazo, sin depender de suscripciones mensuales o comisiones por transacción.",
  },
  {
    icon: Code,
    title: "Desarrollo Custom",
    subtitle: "Vibe Coding",
    text: "Para proyectos con necesidades únicas o integraciones complejas con sistemas de inventario y ERPs. Esta metodología permite crear experiencias de usuario que las plataformas tradicionales no pueden alcanzar.",
  },
];

const operations = [
  {
    icon: RefreshCw,
    title: "Automatización y Retención",
    text: "Implementamos sistemas de recuperación de carritos abandonados y flujos de correo automatizados para fomentar la recompra. El objetivo del equipo es que tu tienda trabaje sola, atendiendo a los clientes y cerrando ventas de forma constante mientras tú te enfocas en la dirección de la empresa.",
  },
  {
    icon: Target,
    title: "Medición y Tracking de Precisión",
    text: "Instalamos toda la infraestructura de seguimiento necesaria: APIs de conversión, píxeles de seguimiento y paneles de métricas en tiempo real. Esto permite que sepas exactamente cuánto te cuesta captar un cliente y cuál es el retorno real de cada campaña de pauta que el equipo ejecuta para tu marca.",
  },
];

const faqItems = [
  {
    q: "¿Qué plataforma es la mejor para mi tienda en línea?",
    a: "No existe una solución única. El equipo de Nasua selecciona la tecnología basada exclusivamente en tus objetivos. Si tu prioridad es la facilidad de uso y una infraestructura que \"no se rompa\" ante grandes picos de tráfico, Shopify suele ser el camino. Si buscas una personalización total y propiedad absoluta del código, WordPress o un Desarrollo Custom son mejores opciones. El equipo elige la herramienta que maximice tu rentabilidad operativa.",
  },
  {
    q: "¿Tendré que pagar comisiones por cada venta realizada?",
    a: "Depende de la tecnología elegida. En soluciones como WordPress o Desarrollo Custom, el 100% de la venta es tuya. En plataformas como Shopify, existen costos por transacción y suscripción que el equipo te ayudará a proyectar en el Diagnóstico Inicial. Nuestro trabajo es que, elijas lo que elijas, el margen de tu negocio sea siempre saludable y sostenible.",
  },
  {
    q: "¿Realmente seré el dueño de mi tienda si elijo una plataforma como Shopify?",
    a: "La soberanía digital se adapta según la herramienta. En desarrollos propios, eres dueño del código. En plataformas como Shopify, eres dueño de tu base de datos, tu dominio y tu relación con el cliente. El equipo de Nasua se asegura de que, independientemente de la infraestructura, tú mantengas el control estratégico de tu activo y puedas migrar o escalar cuando lo necesites.",
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

const Ecommerce = () => {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <div className="bg-background text-foreground">
      <Helmet>
        <title>E-commerce Escalable | Ecosistemas de Venta de Alto Rendimiento</title>
        <meta name="description" content="Construimos infraestructuras de venta integradas con tu logística. Toma el control de tus datos y escala tu e-commerce sin comisiones por cada venta." />
        <meta property="og:title" content="E-commerce Escalable | Ecosistemas de Venta de Alto Rendimiento" />
        <meta property="og:description" content="Construimos infraestructuras de venta integradas con tu logística. Toma el control de tus datos y escala tu e-commerce sin comisiones por cada venta." />
        <meta property="og:image" content="https://nasua.marketing/EmpezarProyectoNasua.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://nasua.marketing/EmpezarProyectoNasua.jpg" />
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
            E-commerce Escalable:{" "}
            <span className="text-gradient">Construimos ecosistemas de venta de alto rendimiento.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-primary-foreground/80 font-body max-w-3xl mx-auto"
          >
            Deja de depender de algoritmos externos y toma el control de tu facturación. El equipo de Nasua diseña ecosistemas de venta de alto rendimiento, integrados con tu operación y optimizados para maximizar el retorno de tu inversión publicitaria.
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
              Agendar Consultoría de E-commerce
            </button>
          </motion.div>
        </div>
      </section>

      {/* Más allá del carrito */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div {...fadeUp} className="text-center mb-6 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
              Ingeniería de ventas para negocios que buscan{" "}
              <span className="text-gradient">escala</span>.
            </h2>
          </motion.div>
          <motion.p {...fadeUp} className="text-center text-muted-foreground text-lg font-body max-w-3xl mx-auto mb-14 leading-relaxed">
            Tener una tienda online es el primer paso; tener un negocio rentable requiere una estructura técnica sólida que soporte el crecimiento.
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
                <h3 className="font-display font-medium text-xl text-foreground mb-3">
                  {d.title}
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed text-sm">
                  {d.text}
                </p>
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
              Implementamos la infraestructura que tu operación{" "}
              <span className="text-gradient">necesita</span>.
            </h2>
          </motion.div>
          <motion.p {...fadeUp} className="text-center text-primary-foreground/80 text-lg font-body max-w-3xl mx-auto mb-14 leading-relaxed">
            Evitamos las soluciones genéricas. El equipo evalúa tu volumen de ventas, capacidad logística y equipo interno para decidir qué plataforma impulsará mejor tu crecimiento.
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
                <h3 className="font-display font-medium text-xl text-primary-foreground mb-1">
                  {p.title}
                </h3>
                <p className="text-secondary font-semibold text-sm font-body mb-3">
                  {p.subtitle}
                </p>
                <p className="text-primary-foreground/70 font-body leading-relaxed text-sm">
                  {p.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Operación bajo la superficie */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div {...fadeUp} className="text-center mb-6 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
              Integración total con tu ecosistema de{" "}
              <span className="text-gradient">negocio</span>.
            </h2>
          </motion.div>
          <motion.p {...fadeUp} className="text-center text-muted-foreground text-lg font-body max-w-3xl mx-auto mb-14 leading-relaxed">
            Una tienda de Nasua no es una isla; es una pieza conectada con tu logística y tu marketing.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            {operations.map((o, i) => (
              <motion.div
                key={o.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-card rounded-xl p-8 border border-border hover:border-secondary/50 transition-colors text-center"
              >
                <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-5">
                  <o.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-display font-medium text-xl text-foreground mb-3">
                  {o.title}
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed text-sm">
                  {o.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-muted/30">
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
              ¿Listo para transformar tu tienda en un{" "}
              <span className="text-gradient">activo rentable</span>?
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed font-body max-w-2xl mx-auto">
              El equipo de Nasua está listo para auditar tu modelo de negocio y trazar el Roadmap de tu nuevo canal de ventas. Sin promesas vacías, solo tecnología orientada a resultados.
            </p>
            <button
              onClick={() => setFormOpen(true)}
              className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg cursor-pointer"
            >
              Agendar Consultoría de E-commerce
            </button>
          </motion.div>
        </div>
      </section>

      <EcommerceLeadForm open={formOpen} onOpenChange={setFormOpen} />
      <Footer />
    </div>
  );
};

export default Ecommerce;
