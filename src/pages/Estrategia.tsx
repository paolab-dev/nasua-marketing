import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StrategyLeadForm from "@/components/StrategyLeadForm";
import { Search, Zap, BarChart3, Target, Megaphone, ClipboardCheck, Rocket, TrendingUp } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

const motores = [
  {
    icon: Search,
    title: "Investigación de Mercado e Innovación",
    text: "Nuestro equipo analiza las dinámicas del consumidor y las tendencias de tu sector. No trabajamos con suposiciones; aplicamos modelos de investigación de negocios para encontrar oportunidades de innovación que te pongan un paso por delante de tu competencia.",
  },
  {
    icon: Zap,
    title: "Automatizaciones (Marketing & Procesos)",
    text: "Diseñamos e implementamos sistemas que eliminan el trabajo manual. Desde flujos de captura de clientes hasta integraciones complejas de CRM. Hacemos que la tecnología trabaje 24/7 para que tu equipo se concentre solo en lo que genera valor: cerrar negocios.",
  },
  {
    icon: BarChart3,
    title: "SEO (Posicionamiento Orgánico de Autoridad)",
    text: "Como equipo, hemos tenido la responsabilidad de posicionar marcas internacionales de la talla de Samsung. Aplicamos esa misma metodología en tu negocio, organizando semánticamente tu contenido para que los buscadores te reconozcan como la autoridad número uno en tu sector.",
  },
  {
    icon: Megaphone,
    title: "SEM (Google Partner, Meta & TikTok Ads)",
    text: "Contamos con el mejor equipo certificado como Google Partner, lo que garantiza que tu inversión está en manos de expertos validados. Maximizamos tu retorno en Google Ads, Meta Ads y TikTok Ads. Tenemos la experiencia de haber gestionado presupuestos superiores a los $5.000 millones COP anuales, optimizando cada peso para atraer clientes reales.",
  },
];

const steps = [
  { icon: ClipboardCheck, title: "Auditoría y Diagnóstico", text: "El equipo analiza tu situación actual y el potencial de tu mercado." },
  { icon: Target, title: "Hoja de Ruta Estratégica", text: "Diseñamos el plan de acción (SEO, SEM o Automatización) según tus metas." },
  { icon: Rocket, title: "Ejecución de Élite", text: "Activamos nuestra maquinaria técnica y creativa para cumplir objetivos." },
  { icon: TrendingUp, title: "Optimización y Escala", text: "Medimos resultados en tiempo real y ajustamos para maximizar tu crecimiento." },
];

const faqItems = [
  {
    q: "¿Por qué es importante que Nasua sea Google Partner?",
    a: "Porque certifica que nuestro equipo sigue las mejores prácticas y tiene un conocimiento profundo de la plataforma. Esto se traduce en campañas más baratas y mucho más efectivas para tu bolsillo.",
  },
  {
    q: "¿Qué experiencia tiene el equipo con grandes marcas?",
    a: "Hemos trabajado en estrategias para empresas multinacionales, lo que nos permite aplicar metodologías de gran escala a la realidad y presupuesto de tu negocio.",
  },
  {
    q: "¿Cómo ayuda la investigación de mercado a una Pyme?",
    a: "Evita que malgastes dinero en publicidad que no funciona. Entender la psicología de tu consumidor permite que nuestro equipo cree mensajes que realmente conecten y vendan.",
  },
  {
    q: "¿Hacen publicidad en TikTok e Instagram?",
    a: "Sí. Somos expertos en TikTok Ads y Meta Ads, diseñando campañas que no solo se ven bien, sino que están optimizadas para el comportamiento específico de cada red social.",
  },
  {
    q: "¿Qué significa 'hablarle clarito' a Google?",
    a: "Es nuestra forma de decir que organizamos tu web de forma semántica. El equipo de Nasua estructura tus textos para que la IA de Google entienda exactamente quién eres y te ponga frente a quien te está buscando.",
  },
  {
    q: "¿Puedo automatizar mi proceso de ventas si es muy artesanal?",
    a: "Totalmente. El equipo de Nasua encuentra los puntos donde la tecnología puede ahorrarte tiempo, sin perder el toque humano que valoran tus clientes.",
  },
  {
    q: "¿El SEO de Nasua sirve para aparecer en otros países?",
    a: "Sí. Nuestra experiencia internacional nos permite configurar tu estrategia orgánica para dominar mercados locales o expandirte globalmente según tu visión.",
  },
  {
    q: "¿Cómo miden el éxito de una campaña de SEM?",
    a: "Nos enfocamos en el ROI (Retorno de Inversión). No nos importan solo los 'likes', nos importa cuántas ventas o contactos reales genera cada peso que inviertes.",
  },
  {
    q: "¿Qué diferencia hay entre Nasua y una agencia de publicidad común?",
    a: "La mayoría de las agencias solo 'hacen anuncios'. El equipo Nasua diseña la infraestructura técnica y la estrategia de mercadeo completa para que tu negocio sea escalable.",
  },
  {
    q: "¿Cómo puedo empezar a trabajar con el equipo de estrategia?",
    a: "Iniciamos con una sesión de diagnóstico. Analizamos tu modelo de negocio y te proponemos la combinación de SEO, SEM o Automatización que te dé resultados más rápido.",
  },
];

const Estrategia = () => {
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
        <title>Estrategia y Crecimiento Digital | Agencia Nasua</title>
        <meta name="description" content="SEO, SEM (Google Partner), automatizaciones y estrategia de crecimiento. Equipo con experiencia en Samsung y presupuestos de más de $5.000 millones COP anuales." />
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
            Estrategia y Crecimiento Digital:{" "}
            <span className="text-gradient">El Motor de las Marcas de Alto Impacto.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-primary-foreground/80 font-body max-w-3xl mx-auto"
          >
            En Nasua no solo construimos webs; diseñamos el ecosistema que hace que tu negocio domine el mercado. Investigación, visibilidad y automatización ejecutada por un equipo de expertos con estándares globales.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10"
          >
            <button
              onClick={() => setFormOpen(true)}
              className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg"
            >
              ¡Escalar mi negocio ahora!
            </button>
          </motion.div>
        </div>
      </section>

      {/* Motores de Crecimiento */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground">
              Nuestros Motores de <span className="text-gradient">Crecimiento</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {motores.map((item) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                className="bg-card rounded-2xl border border-border p-8 md:p-10 hover:border-secondary/50 transition-colors"
              >
                <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-display font-medium text-xl text-foreground mb-3">
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

      {/* Diferencial */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div {...fadeUp} className="text-center">
            <h2 className="text-2xl md:text-4xl font-bold font-display text-foreground mb-6">
              El Diferencial Nasua:{" "}
              <span className="text-gradient">Un Equipo, Una Sola Visión</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed text-lg max-w-3xl mx-auto">
              En Nasua no trabajamos en silos. Nuestro equipo opera de forma unificada. Esto garantiza que cada anuncio en TikTok, cada automatización y cada palabra en tu SEO tengan coherencia estética y estratégica. Es la unión de la inteligencia de negocios con el diseño de clase mundial bajo un mismo sello de calidad.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Proceso */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-2xl md:text-4xl font-bold font-display text-foreground">
              Proceso de <span className="text-gradient">Implementación Nasua</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div key={step.title} {...fadeUp} className="text-center">
                <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-7 h-7 text-secondary" />
                </div>
                <p className="text-secondary font-bold text-sm mb-1">Paso {i + 1}</p>
                <h3 className="font-display font-medium text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm font-body leading-relaxed">{step.text}</p>
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
              Preguntas <span className="text-gradient">frecuentes</span>
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

      <Footer />
      <StrategyLeadForm open={formOpen} onOpenChange={setFormOpen} />
    </div>
  );
};

export default Estrategia;
