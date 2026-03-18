import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StrategyLeadForm from "@/components/StrategyLeadForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ClipboardCheck, Map, Target, TrendingUp, RefreshCw, Brain, Shield } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

const planFeatures = [
  {
    icon: ClipboardCheck,
    title: "Diagnóstico de Infraestructura y Conversión",
    text: "Antes de proponer una solución, el equipo realiza una auditoría profunda de tu ecosistema actual. Identificamos dónde se rompe tu proceso de ventas, por qué tu tráfico no convierte y qué cuellos de botella técnicos están frenando tu crecimiento. No basamos nuestras decisiones en suposiciones, sino en la evidencia que arrojan tus métricas y el comportamiento de tu mercado.",
  },
  {
    icon: Map,
    title: "Definición del Roadmap de Crecimiento",
    text: "El resultado de nuestro análisis es un Roadmap estratégico: un paso a paso detallado de las acciones que tu empresa necesita realizar. Este plan define qué tecnología implementar, cómo estructurar tu mensaje de ventas y qué canales de pauta activar. Es una hoja de ruta honesta diseñada para maximizar el retorno de tu inversión (ROI) y reducir el costo de adquisición de tus clientes (CAC).",
  },
];

const pillars = [
  {
    icon: Target,
    title: "Atracción de Calidad",
    text: "Usamos SEO y Pauta Digital para traer al usuario que ya tiene la intención de compra, evitando el desperdicio de presupuesto en audiencias irrelevantes.",
  },
  {
    icon: TrendingUp,
    title: "Conversión de Alto Rendimiento",
    text: "Optimizamos tu infraestructura web para que el camino hacia la compra sea fluido y rápido. Si la tecnología es lenta o el mensaje es confuso, la estrategia falla.",
  },
  {
    icon: RefreshCw,
    title: "Retención y Escala",
    text: "Implementamos sistemas de automatización para que la relación con el cliente no termine en la primera compra, aumentando el valor de vida de cada usuario (LTV) y haciendo tu negocio más rentable.",
  },
];

const faqItems = [
  {
    q: "¿Por qué debería pagar por una estrategia antes de empezar a vender?",
    a: "Porque ejecutar sin estrategia es la forma más rápida de quemar presupuesto. Un plan de vuelo diseñado por el equipo de Nasua te ahorra meses de pruebas y errores técnicos. Invertir en estrategia es asegurar que el desarrollo web y la pauta que realices después tengan cimientos sólidos para generar rentabilidad desde el primer día.",
  },
  {
    q: "¿Qué recibo exactamente al finalizar la fase de estrategia?",
    a: "Recibes un Roadmap de Crecimiento Digital. Es un plan de acción técnica y comercial que incluye: diagnóstico de tu situación actual, definición de tus canales de venta más rentables, estructura de tu embudo de conversión y la selección de la tecnología (Shopify, WordPress o Vibe Coding) que mejor servirá a tus metas de escala.",
  },
  {
    q: "¿Cómo mide el equipo el éxito de la estrategia?",
    a: "Nos basamos en indicadores de negocio reales: Retorno de Inversión Publicitaria (ROAS), Costo de Adquisición de Cliente (CAC) y Tasa de Conversión. No nos interesan las métricas de vanidad. El éxito para el equipo de Nasua se mide en la capacidad de tu infraestructura para generar una renta predecible y escalable mes tras mes.",
  },
  {
    q: "¿La estrategia se adapta a mercados internacionales?",
    a: "Sí. De hecho, es uno de nuestros puntos fuertes. El equipo analiza los retos de competir en Latinoamérica y el mercado hispano de Estados Unidos, ajustando el tono de comunicación, los canales de pauta y la infraestructura técnica para que tu marca sea competitiva en entornos de alta exigencia profesional.",
  },
  {
    q: "¿Cuál es el siguiente paso después de tener la estrategia?",
    a: "Una vez definido el Roadmap, pasamos a la Fase de Activación. El equipo de Nasua se encarga de construir los activos (Web, Landing Pages, Pauta) que el plan requiere. Al ser un proceso modular, puedes elegir ejecutar el plan completo con nosotros o ir activando las piezas de forma progresiva según tu flujo de caja.",
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

const Estrategia = () => {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <div className="bg-background text-foreground">
      <Helmet>
        <title>Estrategia de Crecimiento Digital | Roadmap y Metodología Nasua</title>
        <meta name="description" content="No ejecutes sin un plan. El equipo de Nasua diseña tu Roadmap de crecimiento basado en datos para asegurar rentabilidad y escalabilidad internacional." />
        <meta property="og:title" content="Estrategia de Crecimiento Digital | Roadmap y Metodología Nasua" />
        <meta property="og:description" content="No ejecutes sin un plan. El equipo de Nasua diseña tu Roadmap de crecimiento basado en datos para asegurar rentabilidad y escalabilidad internacional." />
        <meta property="og:image" content="https://nasua.marketing/EstrategiaNasua.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://nasua.marketing/EstrategiaNasua.jpg" />
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
            Estrategia de Crecimiento:{" "}
            <span className="text-gradient">Tu Roadmap hacia la Rentabilidad.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-primary-foreground/80 font-body max-w-3xl mx-auto"
          >
            La mayoría de las empresas pierden dinero en digital porque ejecutan tácticas aisladas sin un hilo conductor. El equipo de Nasua diseña Estrategias de Crecimiento basadas en datos, lógica de negocio y una metodología Inbound que asegura que cada peso invertido tenga un propósito claro: escalar tu facturación de forma predecible.
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
              Agendar Consultoría Estratégica
            </button>
          </motion.div>
        </div>
      </section>

      {/* El valor de un plan de vuelo real */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div {...fadeUp} className="text-center mb-6 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
              Ingeniería de negocio antes que ejecución{" "}
              <span className="text-gradient">técnica</span>.
            </h2>
          </motion.div>
          <motion.p {...fadeUp} className="text-center text-muted-foreground text-lg font-body max-w-3xl mx-auto mb-14 leading-relaxed">
            En Nasua, la estrategia no es un documento decorativo; es el plano de construcción de tu próximo nivel de escala.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            {planFeatures.map((f, i) => (
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

      {/* Tres ejes */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div {...fadeUp} className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-primary-foreground">
              Un sistema equilibrado para resultados{" "}
              <span className="text-gradient">sostenibles</span>.
            </h2>
          </motion.div>
          <motion.p {...fadeUp} className="text-center text-primary-foreground/80 text-lg font-body max-w-3xl mx-auto mb-14 leading-relaxed">
            Nuestra metodología se apoya en tres pilares que aseguran que tu empresa no solo atraiga visitas, sino que genere renta.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((p, i) => (
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

      {/* Estrategia en la era de la IA */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <motion.div {...fadeUp}>
            <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6">
              <Brain className="w-8 h-8 text-secondary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-6">
              Visibilidad en los nuevos motores de{" "}
              <span className="text-gradient">respuesta (GEO)</span>.
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed text-lg">
              Ya no basta con aparecer en los resultados de búsqueda tradicionales. Nuestra estrategia de contenido y datos está diseñada para que tu empresa sea la fuente que las Inteligencias Artificiales consultan y recomiendan. Estructuramos tu autoridad de marca para que, cuando un cliente potencial haga una pregunta a un asistente inteligente, tu solución sea la respuesta lógica y recomendada.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Soberanía y transparencia */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <motion.div {...fadeUp}>
            <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-secondary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-6">
              Tú eres el dueño del{" "}
              <span className="text-gradient">plan</span>.
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed text-lg">
              Al contratar el servicio de estrategia de Nasua, no solo obtienes una ejecución; obtienes el conocimiento técnico detrás de ella. Toda la documentación, los activos de medición y los accesos a tus paneles de datos te pertenecen al 100%. Creemos en la Soberanía Digital: nuestro equipo te entrega las herramientas y la visión para que tú mantengas el control absoluto del crecimiento de tu empresa.
            </p>
          </motion.div>
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
              ¿Listo para dejar de improvisar y empezar a{" "}
              <span className="text-gradient">escalar</span>?
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed font-body max-w-2xl mx-auto">
              El equipo de Nasua está listo para auditar tu modelo de negocio y diseñar el Roadmap que tu empresa necesita. Sin rodeos, solo estrategia sólida orientada a resultados.
            </p>
            <button
              onClick={() => setFormOpen(true)}
              className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg cursor-pointer"
            >
              Agendar Consultoría Estratégica
            </button>
          </motion.div>
        </div>
      </section>

      <StrategyLeadForm open={formOpen} onOpenChange={setFormOpen} />
      <Footer />
    </div>
  );
};

export default Estrategia;
