import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Palette, TrendingUp, Zap, Clock, Search, Shield } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

const faqItems = [
  {
    q: "¿Quiénes están detrás de Nasua?",
    a: "Nasua es liderada por Paola Bohórquez (experta en diseño UX/UI global) y John Alexander Escobar (estratega de mercadeo ex-Samsung). Juntos combinan diseño de primer nivel con estrategias de ventas probadas.",
  },
  {
    q: "¿Por qué dicen que soy el dueño legal de mi web?",
    a: "Porque lo eres. A diferencia de otros modelos, en Nasua el dominio y los activos están a tu nombre. Nosotros gestionamos la técnica por comodidad para ti, pero tú tienes la soberanía total por contrato.",
  },
  {
    q: "¿Cómo ayuda un Director de Mercadeo en la creación de mi web?",
    a: "Alex se encarga de que tu contenido no sea solo 'bonito'. Él organiza la información para que Google la entienda (semántica), mejorando tus posibilidades de aparecer en los primeros resultados.",
  },
  {
    q: "¿Qué significa que Paola sea Creadora Oficial de Canva?",
    a: "Es un sello de calidad global. Significa que su criterio estético y capacidad de diseño han sido validados por una de las plataformas tecnológicas más grandes del mundo. Tu web tendrá estándares de diseño internacional.",
  },
  {
    q: "¿Nasua es una agencia tradicional?",
    a: "No. Somos un aliado de Infraestructura Gestionada. No te cobramos por 'horas hombre' lentas, sino por resultados rápidos y soporte técnico continuo para que tú nunca sufras con la tecnología.",
  },
  {
    q: "¿Realmente entienden el mercado colombiano?",
    a: "Totalmente. Alex ha fundado empresas en Colombia y entiende los retos de flujo de caja y ventas de las Pymes locales. Por eso incluimos opciones de pago como Wompi hasta en 4 cuotas.",
  },
  {
    q: "¿Qué es el Vibe Coding que mencionan?",
    a: "Es nuestra metodología de desarrollo acelerada por IA. Nos permite construir en horas lo que antes tomaba semanas, manteniendo una calidad técnica superior y reduciendo los costos para ti.",
  },
  {
    q: "¿Qué pasa si necesito soporte un domingo?",
    a: "Contamos con sistemas de monitoreo 24/7. Nuestra gestión asegura que tu sitio esté siempre en línea, y nuestro equipo de soporte humano atiende tus cambios en tiempo récord.",
  },
  {
    q: "¿Por qué ofrecen precios tan bajos comparados con agencias grandes?",
    a: "Porque no tenemos la burocracia ni la lentitud de las agencias grandes. Usamos tecnología de punta para ser eficientes y te pasamos ese ahorro a ti en el precio final.",
  },
  {
    q: "¿Cuál es la visión a largo plazo de Nasua con mi negocio?",
    a: "Queremos ser tu departamento de tecnología. Que tú te olvides de los servidores, los virus y las actualizaciones, y te concentres en lo que mejor haces: hacer crecer tu negocio.",
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Bajo Costo y Alta Calidad",
    text: "Gracias a la IA y procesos optimizados, eliminamos los sobrecostos de las agencias lentas.",
  },
  {
    icon: Clock,
    title: "Velocidad sin Excusas",
    text: "Entregamos desde 2 días (Landings) hasta 10 días (E-commerce).",
  },
  {
    icon: Search,
    title: "Organización de Contenidos",
    text: "No 'pegamos' textos; los estructuramos para que Google te encuentre de una.",
  },
  {
    icon: Shield,
    title: "Soberanía Legal",
    text: "Tú tienes el título de propiedad. Si algún día decides irte, te facilitamos el camino.",
  },
];

const QuienesSomos = () => {
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
        <title>Quiénes Somos | Nasua - Las mentes detrás de tu infraestructura de crecimiento</title>
        <meta name="description" content="Conoce al equipo de Nasua: Paola Bohórquez (Canva Creator LATAM, Directora UX/UI) y John Escobar (Director de Mercadeo ex-Samsung). Infraestructura gestionada para tu negocio." />
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
            Las mentes detrás de tu{" "}
            <span className="text-gradient">infraestructura de crecimiento.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-primary-foreground/80 font-body max-w-3xl mx-auto"
          >
            En Nasua no solo construimos sitios web; diseñamos la base técnica y estratégica para que tu negocio escale sin fricciones. Somos el equipo que entiende que tú debes dedicarte a vender, mientras nosotros hacemos que la tecnología trabaje para ti.
          </motion.p>
        </div>
      </section>

      {/* El Dúo Estratégico */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground">
              El Dúo <span className="text-gradient">Estratégico</span>
            </h2>
          </motion.div>

          <div className="space-y-12">
            {/* Paola */}
            <motion.div
              {...fadeUp}
              className="bg-card rounded-2xl border border-border p-8 md:p-10 hover:border-secondary/50 transition-colors"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Palette className="w-7 h-7 text-secondary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-foreground">Paola Bohórquez Guevara</h3>
                  <p className="text-secondary font-semibold text-sm">Directora UX/UI</p>
                </div>
              </div>
              <p className="text-muted-foreground font-body leading-relaxed italic mb-4">
                "La arquitectura digital no es solo que se vea bien, es que funcione para el usuario."
              </p>
              <p className="text-muted-foreground font-body leading-relaxed">
                Arquitecta digital con más de 20 años de experiencia en mercados globales (EE.UU., Australia, Europa). Como Creadora Oficial de Canva para LATAM, Paola fusiona una sensibilidad estética de élite con la eficiencia del Vibe Coding. Su misión es asegurar que tu web no solo sea hermosa, sino que sea rápida, intuitiva y profesional.
              </p>
            </motion.div>

            {/* John */}
            <motion.div
              {...fadeUp}
              className="bg-card rounded-2xl border border-border p-8 md:p-10 hover:border-secondary/50 transition-colors"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center">
                  <TrendingUp className="w-7 h-7 text-secondary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-foreground">John Alexander Escobar Sánchez</h3>
                  <p className="text-secondary font-semibold text-sm">Director de Mercadeo</p>
                </div>
              </div>
              <p className="text-muted-foreground font-body leading-relaxed italic mb-4">
                "La tecnología sin estrategia es solo un adorno. Hablémosle clarito a Google."
              </p>
              <p className="text-muted-foreground font-body leading-relaxed">
                Estratega de mercadeo con más de una década de experiencia. Su trayectoria incluye el liderazgo SEO para Samsung Colombia y la gestión de presupuestos de pauta superiores a los $5.000 millones COP anuales. Alex es el experto en psicología del consumidor que toma tus textos y los organiza para que los buscadores te premien y tus clientes te elijan.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Por qué Nasua es tu mejor aliado */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-2xl md:text-4xl font-bold font-display text-foreground">
              Por qué Nasua es tu <span className="text-gradient">mejor aliado</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((item) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                className="bg-card rounded-xl p-8 border border-border hover:border-secondary/50 transition-colors"
              >
                <item.icon className="w-10 h-10 text-secondary mb-4" />
                <h3 className="font-display font-bold text-xl text-foreground mb-3">
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
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-2xl md:text-4xl font-bold font-display text-foreground">
              Centro de Respuestas de <span className="text-gradient">Confianza</span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {faqItems.map((item, i) => (
              <motion.details
                key={i}
                {...fadeUp}
                className="group bg-card rounded-xl border border-border p-6 cursor-pointer hover:border-secondary/50 transition-colors"
              >
                <summary className="font-display font-bold text-foreground list-none flex items-center justify-between">
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
    </div>
  );
};

export default QuienesSomos;
