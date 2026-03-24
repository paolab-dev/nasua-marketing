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
import { Database, Mail, Link2, Bell, Shield } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

const crmPillars = [
  {
    icon: Database,
    title: "Implementación de CRM Estratégico",
    text: "No instalamos software; diseñamos procesos. Configuramos tu CRM (HubSpot, Pipedrive o soluciones a medida) para que tengas visibilidad total de tu embudo de ventas. Sabrás exactamente en qué etapa está cada cliente, quién debe contactarlo y qué falta para cerrar el negocio.",
  },
  {
    icon: Mail,
    title: "Nutrición de Prospectos (Lead Nurturing)",
    text: "Automatizamos el seguimiento. Si un cliente no compra hoy, nuestro sistema se encarga de mantener tu marca presente mediante secuencias lógicas de correos y mensajes de WhatsApp. Educamos al prospecto de forma automática hasta que esté listo para la transacción.",
  },
];

const operationFeatures = [
  {
    icon: Link2,
    title: "Integración Total",
    text: "Conectamos tu web, tus campañas de pauta y tus redes sociales con tu sistema de gestión interna. La información fluye sin errores humanos ni duplicidades.",
  },
  {
    icon: Bell,
    title: "Notificaciones en Tiempo Real",
    text: "Alertamos a tu equipo comercial en el segundo exacto en que entra una oportunidad de alto valor, asegurando una tasa de contacto inmediata.",
  },
  {
    icon: Shield,
    title: "Soberanía Operativa",
    text: "Como en todo lo que hace Nasua, los sistemas y las bases de datos son tuyos. Configuramos las herramientas a tu nombre para que el conocimiento del negocio se quede siempre en tu empresa.",
  },
];

const faqs = [
  {
    q: "¿Qué es exactamente la automatización operativa?",
    a: "Es el uso de tecnología para realizar tareas repetitivas (como enviar correos de bienvenida, asignar leads o mover estados en un CRM) sin intervención humana. El objetivo es ganar velocidad y reducir errores en el proceso de venta.",
  },
  {
    q: "¿Por qué mi empresa necesita un CRM?",
    a: "Porque lo que no se mide no se puede mejorar. Un CRM te permite dejar de depender de la memoria de los vendedores y pasar a una gestión basada en datos, asegurando que ningún cliente potencial se quede sin seguimiento.",
  },
  {
    q: "¿Ustedes eligen el software o puedo usar el mío?",
    a: "Somos agnósticos a la herramienta. Si ya tienes un CRM, lo optimizamos. Si no tienes uno, analizamos tu operación y te recomendamos la opción que mejor se adapte a tu presupuesto y metas de escala.",
  },
  {
    q: "¿Cómo ayuda la automatización al ROI de mis campañas de pauta?",
    a: "De nada sirve invertir en anuncios si los leads llegan y nadie los atiende. La automatización asegura que el tráfico que compramos sea procesado de inmediato, aumentando drásticamente la rentabilidad de tu inversión publicitaria.",
  },
  {
    q: '¿La automatización hace que el trato con el cliente sea "frío"?',
    a: "Al contrario. Al automatizar lo repetitivo, tu equipo tiene más tiempo para personalizar las interacciones que realmente importan. Usamos la tecnología para ser más eficientes, no menos humanos.",
  },
  {
    q: "¿Pueden automatizar procesos de WhatsApp?",
    a: "Sí. Implementamos flujos de respuesta y asignación en WhatsApp para que los prospectos reciban información instantánea y sean derivados al vendedor correcto sin esperas.",
  },
  {
    q: "¿Soy el dueño de la configuración y de los datos?",
    a: "Absolutamente. Aplicamos la Soberanía Digital. Todas las licencias y bases de datos están a nombre de tu empresa. Nasua es el arquitecto que construye el sistema, pero tú tienes la propiedad total.",
  },
  {
    q: "¿Cuánto tiempo toma implementar un sistema de automatización?",
    a: "Una implementación base (configuración de CRM y flujos principales) suele tomar entre 15 y 25 días hábiles, dependiendo de la complejidad de tus procesos actuales.",
  },
  {
    q: "¿Qué pasa si mis procesos cambian en el futuro?",
    a: "Nuestros sistemas son escalables. Los diseñamos de forma modular para que puedas añadir nuevas etapas, vendedores o integraciones a medida que tu negocio crezca internacionalmente.",
  },
  {
    q: "¿Ofrecen capacitación para mi equipo?",
    a: "Sí. No entregamos una herramienta vacía; entrenamos a tu equipo comercial para que sepa usar el sistema, sacarle provecho a los datos y convertir la tecnología en su mejor aliado de ventas.",
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

const Automatizacion = () => {
  return (
    <div className="bg-background text-foreground">
      <Helmet>
        <title>Automatización Operativa | Eficiencia y Cierre de Ventas en Nasua</title>
        <meta name="description" content="Implementamos CRMs y sistemas de automatización que atienden prospectos en tiempo real. Escala tu operación sin escalar tu equipo. Soberanía total garantizada." />
        <meta property="og:title" content="Automatización Operativa | Eficiencia y Cierre de Ventas en Nasua" />
        <meta property="og:description" content="Implementamos CRMs y sistemas de automatización que atienden prospectos en tiempo real. Escala tu operación sin escalar tu equipo. Soberanía total garantizada." />
        <meta property="og:image" content="https://nasua.marketing/AutomatizacionNasua.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://nasua.marketing/AutomatizacionNasua.jpg" />
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
            Automatización Operativa:{" "}
            <span className="text-gradient">Eficiencia y cierre de ventas en Nasua.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-primary-foreground/80 font-body max-w-3xl mx-auto"
          >
            La tecnología debe trabajar para ti, no al revés. En Nasua implementamos sistemas de automatización que eliminan las tareas repetitivas, centralizan tu información y aseguran que cada prospecto sea atendido en tiempo real, maximizando tu capacidad de cierre.
          </motion.p>
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
              Agendar Consultoría de Procesos
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Sistemas que no duermen */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div {...fadeUp} className="text-center mb-6 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
              Porque un lead frío es una{" "}
              <span className="text-gradient">inversión perdida</span>.
            </h2>
          </motion.div>
          <motion.p {...fadeUp} className="text-center text-muted-foreground text-lg font-body max-w-3xl mx-auto mb-14 leading-relaxed">
            En 2026, la velocidad de respuesta es el factor #1 en la decisión de compra.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            {crmPillars.map((p, i) => (
              <motion.div
                key={p.title}
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
            ))}
          </div>
        </div>
      </section>

      {/* Operación sin fricción */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div {...fadeUp} className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-primary-foreground">
              Libera a tu talento de las{" "}
              <span className="text-gradient">tareas manuales</span>.
            </h2>
          </motion.div>
          <motion.p {...fadeUp} className="text-center text-primary-foreground/80 text-lg font-body max-w-3xl mx-auto mb-14 leading-relaxed">
            Tu equipo debe estar cerrando tratos, no llenando excels.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {operationFeatures.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-8 border border-primary-foreground/20 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-display font-medium text-xl text-primary-foreground mb-3">{item.title}</h3>
                <p className="text-primary-foreground/70 font-body leading-relaxed text-sm">{item.text}</p>
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
              Deja de perseguir leads y empieza a{" "}
              <span className="text-gradient">gestionar cierres</span>.
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed font-body max-w-2xl mx-auto">
              Tu infraestructura digital está lista. Es hora de que tu operación también lo esté. El equipo de Nasua está listo para automatizar tu crecimiento.
            </p>
            <Link
              to="/contacto"
              className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg"
            >
              Agendar Consultoría de Procesos
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Automatizacion;
