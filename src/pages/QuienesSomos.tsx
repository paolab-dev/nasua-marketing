import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Palette, TrendingUp } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

const faqItems = [
  {
    q: "¿Qué hace diferente al equipo de Nasua frente a otras agencias?",
    a: "La diferencia radica en nuestro equilibrio: unimos la arquitectura digital estética de Paola (Canva Creator) con la estrategia de crecimiento y psicología del consumidor de John (ex-Samsung). No solo creamos páginas; construimos infraestructuras comerciales que generan dinero.",
  },
  {
    q: "¿Por qué confiar en la dirección técnica de Paola Bohórquez?",
    a: "Paola cuenta con más de dos décadas de experiencia y ha sido validada globalmente como creadora oficial de Canva para Latinoamérica. Su capacidad para simplificar arquitecturas complejas permite que tu negocio tenga tecnología de punta sin la fricción de los métodos tradicionales.",
  },
  {
    q: "¿Cómo garantiza John Escobar que mi inversión sea rentable?",
    a: "John ha manejado presupuestos masivos y ha liderado estrategias para marcas líderes como Samsung. Su enfoque no es \"tener una web\", sino usar la inteligencia de negocios y el posicionamiento orgánico para que tu inversión se traduzca en flujo de caja constante.",
  },
  {
    q: "¿Los fundadores de Nasua realmente entienden los retos de una Pyme en Colombia?",
    a: "Totalmente. John ha fundado empresas en sectores reales como el turismo y el retail. Conocemos de primera mano los desafíos de presupuesto, nómina y ventas que enfrentas. Por eso creamos un modelo financiado y rápido.",
  },
  {
    q: '¿Qué es el "Vibe Coding" y cómo beneficia a mi empresa?',
    a: "Es nuestra metodología de desarrollo guiada por IA que Paola lidera. Nos permite ser 10 veces más rápidos que la competencia sin sacrificar la calidad técnica, entregando tu proyecto en 7 días en lugar de meses.",
  },
  {
    q: "¿Cómo se aplica la psicología del consumidor en el diseño de mi sitio?",
    a: "John integra el análisis del comportamiento humano en la estructura de cada página. Esto asegura que cada botón, texto y sección esté diseñado para capturar la atención y convertir visitantes en clientes reales.",
  },
  {
    q: "¿Nasua tiene experiencia en mercados fuera de Colombia?",
    a: "Sí. Ambos fundadores han liderado proyectos y equipos en EE.UU., Canadá, Europa, Australia e India. Traemos los estándares de calidad del primer mundo a la realidad del empresario colombiano.",
  },
  {
    q: '¿Por qué el equipo de Nasua insiste en la "Infraestructura Gestionada"?',
    a: "Porque sabemos que tú debes dedicarte a tu negocio. Paola y John diseñaron un modelo donde Nasua opera la tecnología para que tú nunca tengas que pelear con un código o un servidor, actuando como tu departamento técnico delegado.",
  },
  {
    q: "¿Qué respaldo legal me dan los fundadores sobre mi propiedad?",
    a: "La transparencia es nuestro valor no negociable. Aunque nosotros gestionamos la operación para tu comodidad, Paola y John garantizan mediante contrato que tú eres el único dueño legal de tu dominio, tus datos y tus activos digitales.",
  },
  {
    q: "¿Es posible escalar mi negocio con Nasua a largo plazo?",
    a: "Esa es nuestra especialidad. La visión de John en modelos de negocio y la capacidad de Paola para crear Micro-SaaS y aplicaciones aseguran que la infraestructura que construimos hoy sea el cimiento sólido sobre el cual puedas escalar mañana.",
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
        <title>Quiénes Somos | Nasua - Arquitectura Digital y Estrategia de Crecimiento</title>
        <meta name="description" content="Conoce al equipo fundador de Nasua: Paola Bohórquez (Canva Creator LATAM) y John Escobar (ex-Samsung). Arquitectura digital global y estrategia de crecimiento para tu negocio." />
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
            Nasua: Arquitectura Digital Global y{" "}
            <span className="text-gradient">Estrategia de Crecimiento</span>.
          </motion.h1>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-primary-foreground/80 font-body max-w-3xl mx-auto"
          >
            Nasua nace de la unión de dos trayectorias de alto impacto que fusionan el diseño de clase mundial con la inteligencia de negocios a gran escala.
          </motion.h3>
        </div>
      </section>

      {/* Equipo Fundador */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground">
              El Equipo Fundador: Experiencia que{" "}
              <span className="text-gradient">Transforma Negocios</span>
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
                  <p className="text-secondary font-semibold text-sm">Lead Digital Architect · Canva Creator LATAM</p>
                </div>
              </div>
              <p className="text-muted-foreground font-body leading-relaxed">
                Aporta más de 20 años de experiencia construyendo ecosistemas digitales en mercados globales. Su maestría en Vibe Coding y arquitectura de información garantiza que cada proyecto sea una pieza de ingeniería visual rápida, escalable y estética.
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
                  <p className="text-secondary font-semibold text-sm">Strategic Growth Director</p>
                </div>
              </div>
              <p className="text-muted-foreground font-body leading-relaxed">
                Aporta la visión del emprendedor serial y el rigor del estratega corporativo. Con experiencia liderando el SEO de Samsung Colombia y gestionando presupuestos de pauta superiores a los $5.000 millones COP anuales, John asegura que cada infraestructura digital no solo sea funcional, sino que esté blindada por la psicología del consumidor y diseñada para generar rentabilidad real.
              </p>
            </motion.div>
          </div>

          <motion.div {...fadeUp} className="text-center mt-14">
            <div className="bg-primary/10 rounded-2xl p-8 border border-secondary/20">
              <Users className="w-10 h-10 text-secondary mx-auto mb-4" />
              <p className="text-lg md:text-xl text-foreground font-body leading-relaxed font-semibold">
                Juntos, democratizan la tecnología de punta, entregando en 7 días la robustez que antes solo estaba al alcance de las grandes multinacionales.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-2xl md:text-4xl font-bold font-display text-foreground">
              Las mentes detrás de <span className="text-gradient">Nasua</span>
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
