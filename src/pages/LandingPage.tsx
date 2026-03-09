import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { Zap, Rocket, Target, Lightbulb, CreditCard, FileText, Palette, CheckCircle, Shield, Database, Server, MessageSquare } from "lucide-react";


const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

const faqItems = [
  {
    q: "¿Por qué una Landing Page es más rápida de entregar que una web normal?",
    a: "Porque está enfocada en un solo objetivo y una sola oferta. Esto nos permite aplicar nuestro proceso de Vibe Coding con máxima eficiencia y entregarte una herramienta lista para campañas en solo 2 días hábiles.",
  },
  {
    q: "¿Qué pasa si mis fotos o textos no son profesionales?",
    a: "Para eso estamos nosotros. Organizamos tu mensaje para que suene profesional y amigable para los buscadores, y nos encargamos de que visualmente tu marca se vea de primer nivel, sin importar lo que nos entregues al inicio.",
  },
  {
    q: "¿Puedo pagar mi Landing en cuotas?",
    a: "Claro. A través de Wompi puedes financiar tu Landing Page hasta en 4 cuotas. Inviertes hoy y dejas que las ventas que genere la página ayuden a pagarla.",
  },
  {
    q: "¿Esta Landing sirve para hacer publicidad en Google o Facebook?",
    a: "Está diseñada específicamente para eso. Creamos estructuras que cargan rápido y tienen el mensaje claro, lo que baja tus costos de publicidad y sube tus conversiones.",
  },
  {
    q: "¿La Landing es mía o se la alquilo a Nasua?",
    a: "Es tuya. Nasua es el operador que se encarga de que siempre funcione bien, pero tú tienes el título de propiedad legal. La transparencia es nuestro pilar.",
  },
  {
    q: "¿Cómo ayuda la \"semántica\" u organización de textos a mi Landing?",
    a: "Ayuda a que Google entienda qué vendes y te posicione mejor orgánicamente, incluso si estás haciendo pauta. Un sitio bien organizado siempre es más barato de anunciar.",
  },
  {
    q: "¿Puedo conectar mi WhatsApp directamente?",
    a: "Sí. Integramos botones de contacto directo para que el cliente pase de ver tu oferta a hablar contigo en un segundo.",
  },
  {
    q: "¿Qué garantía tengo de que la página sea rápida?",
    a: "Utilizamos estándares modernos de optimización. Una Landing lenta es una venta perdida, por eso nos obsesionamos con la velocidad de carga.",
  },
  {
    q: "¿Qué pasa si quiero cambiar algo después de los 2 días?",
    a: "Al ser una infraestructura gestionada, solo nos pides el cambio y nosotros lo ejecutamos. No tienes que aprender a usar editores complicados.",
  },
  {
    q: "¿Inician el trabajo apenas pague?",
    a: "Exactamente. Una vez confirmado el pago y recibida tu información, el equipo de Nasua activa el cronómetro de 48 horas.",
  },
];

const targetAudience = [
  { icon: Rocket, title: "Lanzamiento de Productos o Servicios Únicos" },
  { icon: Target, title: "Campañas de Google Ads o Meta (Instagram/Facebook)" },
  { icon: Lightbulb, title: "Profesionales Independientes que necesitan resultados ya" },
  { icon: Zap, title: "Pruebas de mercado para nuevas ideas de negocio" },
];

const sprintSteps = [
  { icon: CreditCard, title: "Activación Instantánea", text: "Eliges tu plan, realizas el pago (puedes usar Wompi a 4 cuotas) y el reloj empieza a correr." },
  { icon: FileText, title: "Entrega de Insumos", text: "Nos pasas tu logo, fotos y lo que quieres decir." },
  { icon: MessageSquare, title: "Curaduría de Contenido", text: "Alex (Director de Mercadeo) pule tus textos para que Google los adore." },
  { icon: Palette, title: "Arquitectura de Élite", text: "Paola (Directora UX/UI) diseña una interfaz que vuela y convence." },
  { icon: CheckCircle, title: "Entrega Final", text: "En 2 días tu Landing está al aire, lista para recibir tráfico." },
];

const infraFeatures = [
  { icon: Server, title: "Soporte Técnico Total", text: "Tú no tienes que saber qué es un hosting o un dominio. Nosotros operamos todo el enredo técnico." },
  { icon: Shield, title: "Propiedad Soberana", text: "Tú eres el dueño legal de tu Landing. Si decides irte, te entregamos tu casa digital sin obstáculos." },
  { icon: Database, title: "Soberanía en los Datos", text: "Los prospectos (leads) que lleguen son 100% tuyos." },
];

const LandingPage = () => {
  const [formOpen, setFormOpen] = useState(false);
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <div className="bg-background text-foreground">
      <Helmet>
        <title>Landing Page Profesional en 48 Horas | Nasua Colombia</title>
        <meta name="description" content="Construimos tu Landing Page de alta conversión en solo 2 días. Calidad de élite, bajo costo y financiación con Wompi. Propiedad 100% tuya." />
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
            Tu Landing Page Profesional en 48 Horas:{" "}
            <span className="text-gradient">Convierte Clics en Clientes ya mismo.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-primary-foreground/80 font-body max-w-3xl mx-auto"
          >
            No pierdas más dinero enviando tráfico a un sitio lento o confuso. Construimos tu máquina de ventas de alta conversión en solo 2 días. Calidad de élite, bajo costo y optimizada para que Google y tus clientes entiendan tu oferta de inmediato.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => setFormOpen(true)}
              className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg cursor-pointer"
            >
              👉 ¡Quiero mi Landing en 2 días!
            </button>
            <a
              href="https://www.bancolombia.com/pagos/compra-y-paga-despues"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-primary-foreground/40 hover:border-primary-foreground text-primary-foreground font-bold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105"
            >
              Financia con Wompi en 4 cuotas
            </a>
          </motion.div>
        </div>
      </section>

      {/* Diferencial Nasua */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground mb-8">
              Tú pones la oferta, nosotros la organizamos para que <span className="text-gradient">venda</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed">
              Una Landing Page no es solo poner un botón de WhatsApp. En Nasua tomamos tu propuesta y la estructuramos para que Google la lea con claridad y tus clientes la entiendan sin rodeos. Organizamos tus textos para que los buscadores te den prioridad y tu mensaje sea tan directo que el cliente no tenga más opción que contactarte.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ¿Para quién es? */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-2xl md:text-4xl font-bold font-display text-foreground">
              ¿Para quién es este <span className="text-gradient">"Vendedor Relámpago"</span>?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetAudience.map((item) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                className="bg-card rounded-xl p-6 border border-border hover:border-secondary/50 transition-colors text-center"
              >
                <item.icon className="w-10 h-10 text-secondary mx-auto mb-4" />
                <h3 className="font-body font-normal text-lg text-foreground">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sprint de 48 Horas */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-2xl md:text-4xl font-bold font-display text-primary-foreground">
              El Sprint de 48 Horas: <span className="text-gradient">Sin Vueltas</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6">
            {sprintSteps.map((step, i) => (
              <motion.div key={step.title} {...fadeUp} className="text-center">
                <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-7 h-7 text-secondary" />
                </div>
                <p className="text-secondary font-bold text-sm mb-1">Paso {i + 1}</p>
                <h3 className="font-body font-normal text-primary-foreground mb-2">{step.title}</h3>
                <p className="text-primary-foreground/70 text-sm font-body leading-relaxed">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infraestructura Gestionada */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-2xl md:text-4xl font-bold font-display text-foreground">
              Infraestructura Gestionada: <span className="text-gradient">Cero Enredos</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {infraFeatures.map((item) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                className="bg-card rounded-xl p-8 border border-border hover:border-secondary/50 transition-colors text-center"
              >
                <item.icon className="w-10 h-10 text-secondary mx-auto mb-4" />
                <h3 className="font-body font-normal text-xl text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-2xl md:text-4xl font-bold font-display text-foreground">
              Centro de Respuestas <span className="text-gradient">Landing Page</span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {faqItems.map((item, i) => (
              <motion.details
                key={i}
                {...fadeUp}
                className="group bg-card rounded-xl border border-border p-6 cursor-pointer hover:border-secondary/50 transition-colors"
              >
                <summary className="font-body font-bold text-foreground list-none flex items-center justify-between">
                  <span>{item.q}</span>
                  <span className="text-secondary ml-4 group-open:rotate-45 transition-transform text-2xl">+</span>
                </summary>
                <p className="text-muted-foreground font-body leading-relaxed mt-4">
                  {item.a}
                </p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      <LeadCaptureForm open={formOpen} onOpenChange={setFormOpen} />
      <Footer />
    </div>
  );
};

export default LandingPage;
