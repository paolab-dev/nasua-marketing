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
import { Shield, Wrench, Clock } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

const pillars = [
  {
    icon: Shield,
    title: "Soberanía Digital Real",
    text: "Creemos que la libertad es la base de una buena relación profesional. Todo lo que el equipo construye (dominios, cuentas de pauta, códigos y bases de datos) queda a tu nombre desde el primer día. No generamos dependencias artificiales; trabajamos para que elijas quedarte con nosotros por los resultados, no porque tengamos las llaves de tu casa digital bajo nuestro poder.",
  },
  {
    icon: Wrench,
    title: "Tecnología de Resultados",
    text: "Elegimos las herramientas según tus objetivos de facturación y escala. Si necesitas posicionamiento masivo, usamos WordPress con arquitecturas modernas. Si tu prioridad es la velocidad y una experiencia de usuario única, usamos Vibe Coding para reducir tiempos de desarrollo y salir al mercado antes que tu competencia. Usamos la tecnología que sirve a tu retorno de inversión.",
  },
  {
    icon: Clock,
    title: "Cumplimiento y Rigor Técnico",
    text: "En un sector marcado por la informalidad y los retrasos, Nasua elige la precisión. Pactamos fechas de entrega reales en el Roadmap y las cumplimos. Nuestro equipo de especialistas lidera cada proyecto con comunicación directa, asegurando que cada fase se ejecute con el rigor que una operación internacional exige.",
  },
];

const phases = [
  {
    label: "Fase 1",
    title: "Diagnóstico y Estrategia",
    text: "Todo proyecto inicia con una auditoría de tu situación actual. Analizamos tus números, tu competencia y los cuellos de botella de tu embudo de ventas. El entregable es tu Roadmap de Crecimiento: un plan de vuelo honesto que define qué piezas de tecnología y marketing necesitamos activar para alcanzar tus metas de negocio.",
  },
  {
    label: "Fase 2",
    title: "Activación del Ecosistema",
    text: "Ejecutamos los módulos de tu estrategia de forma ágil. Gracias a nuestra metodología de desarrollo, levantamos tu infraestructura (Web, Landings, Pauta o SEO) en tiempos récord. No buscamos el lanzamiento eterno; buscamos que tu sistema empiece a captar datos y generar leads lo antes posible para validar la inversión.",
  },
  {
    label: "Fase 3",
    title: "Optimización y Renta Predecible",
    text: "Un activo digital estático pierde valor. En esta fase, nuestro equipo analiza el rendimiento mensualmente. Medimos la conversión de la web, optimizamos la pauta y escalamos lo que funciona. El objetivo es transformar tu inversión inicial en una fuente de ingresos predecible y constante.",
  },
];

const faqs = [
  {
    q: '¿Qué significa exactamente la "Soberanía Digital" en Nasua?',
    a: "Significa que tú eres el dueño legal y técnico de todo. A diferencia de agencias que retienen accesos para forzar la permanencia, en Nasua registramos todo a nombre de tu empresa. Tienes el control total de tus dominios, códigos y datos desde el inicio.",
  },
  {
    q: "¿Por qué el equipo utiliza una Metodología Inbound de Crecimiento?",
    a: "Porque es la forma más rentable de escalar. En lugar de perseguir clientes de forma intrusiva, construimos un sistema que los atrae mediante valor y autoridad, convirtiendo el tráfico en facturación real de forma lógica y escalable.",
  },
  {
    q: "¿Cómo seleccionan la tecnología si no utilizan una plataforma única?",
    a: "La selección se basa en tus metas. Si buscas SEO masivo, usamos WordPress. Si buscas velocidad extrema y personalización, usamos Vibe Coding. Si es una tienda con logística compleja, evaluamos Shopify. La tecnología está al servicio de tu retorno de inversión (ROI), no al revés.",
  },
  {
    q: "¿Es obligatorio pasar por la fase de Diagnóstico?",
    a: "Sí. Iniciar un desarrollo o campaña sin un diagnóstico es arriesgar tu capital. Esta fase nos permite identificar fugas de dinero en tu proceso actual y trazar un Roadmap real. Si detectamos que una idea no será rentable, te lo diremos antes de que inviertas.",
  },
  {
    q: '¿Qué beneficios reales aporta el "Vibe Coding" a mi empresa?',
    a: "Velocidad competitiva. Es una metodología de desarrollo ágil que reduce drásticamente el tiempo de salida al mercado. Te permite tener activos de alto rendimiento operando en días o semanas, validando tu oferta y captando leads mucho antes que con el desarrollo tradicional.",
  },
  {
    q: "¿Por qué es necesario el mantenimiento y la optimización mensual?",
    a: "Porque el mercado y los algoritmos cambian. La fase de Optimización y Renta asegura que tu sistema siga siendo competitivo, ajustando los embudos de venta y reduciendo tus costos de adquisición de clientes mes a mes.",
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

const AdnNasua = () => {
  return (
    <div className="bg-background text-foreground">
      <Helmet>
        <title>ADN y Metodología Nasua | Ingeniería de Crecimiento Digital</title>
        <meta name="description" content="Conoce el ADN de Nasua. Unimos ingeniería de software y lógica de negocio para crear activos soberanos y rentables. Sin humo, solo resultados técnicos." />
        <meta property="og:title" content="ADN y Metodología Nasua | Ingeniería de Crecimiento Digital" />
        <meta property="og:description" content="Conoce el ADN de Nasua. Unimos ingeniería de software y lógica de negocio para crear activos soberanos y rentables. Sin humo, solo resultados técnicos." />
        <meta property="og:image" content="https://nasua.marketing/ADNNasua.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://nasua.marketing/ADNNasua.jpg" />
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
            ADN y Metodología Nasua |{" "}
            <span className="text-gradient">Ingeniería de Crecimiento Digital</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-primary-foreground/80 font-body max-w-3xl mx-auto"
          >
            En Nasua no diseñamos páginas para portafolios; construimos sistemas que resuelven problemas de negocio. Nuestra identidad se basa en la transparencia técnica y nuestra metodología en resultados medibles que aseguran tu control total.
          </motion.p>
        </div>
      </section>

      {/* ADN: Pilares */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div {...fadeUp} className="text-center mb-6 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
              ADN Nasua: Los pilares de nuestro{" "}
              <span className="text-gradient">compromiso</span>
            </h2>
          </motion.div>
          <motion.p {...fadeUp} className="text-center text-muted-foreground text-lg font-body max-w-3xl mx-auto mb-14 leading-relaxed">
            Lo que nos define como tu Socio de Crecimiento. Antes de ejecutar cualquier línea de código, nos regimos por principios que protegen tu inversión y el futuro de tu empresa.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-card rounded-xl p-8 border border-border hover:border-secondary/50 transition-colors text-center"
              >
                <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-5">
                  <p.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-display font-medium text-xl text-foreground mb-3">
                  {p.title}
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed text-sm">
                  {p.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Método Inbound */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div {...fadeUp} className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-primary-foreground">
              El Método Inbound: Tu mapa hacia la{" "}
              <span className="text-gradient">rentabilidad</span>
            </h2>
          </motion.div>
          <motion.p {...fadeUp} className="text-center text-primary-foreground/80 text-lg font-body max-w-3xl mx-auto mb-14 leading-relaxed">
            Un proceso modular diseñado para escalar. No improvisamos. Aplicamos un ciclo de crecimiento que atrae, convierte y fideliza mediante tres etapas claras:
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-5">
                  <span className="text-secondary font-bold text-xl font-display">{i + 1}</span>
                </div>
                <p className="text-secondary font-bold text-sm mb-1 font-body">{phase.label}</p>
                <h3 className="font-display font-medium text-xl text-primary-foreground mb-3">
                  {phase.title}
                </h3>
                <p className="text-primary-foreground/70 font-body leading-relaxed text-sm">
                  {phase.text}
                </p>
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
            <a
              href="/contacto"
              className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg"
            >
              Agendar Consultoría Estratégica
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AdnNasua;
