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
import {
  TrendingUp,
  DollarSign,
  Eye,
  BarChart3,
  Database,
  Bot,
  Star,
} from "lucide-react";
import content from "@/data/site-content.json";

const iconMap: Record<string, any> = {
  TrendingUp,
  DollarSign,
  Eye,
  BarChart3,
  Database,
  Bot,
  Star,
};

const SeoGeo = () => {
  const { seoGeo } = content;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".faq-answer"],
    },
    mainEntity: seoGeo.faq.map((faq, i) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
        url: `https://nasua.marketing/seo-geo#faq-${i}`,
      },
    })),
  };

  return (
    <div className="bg-background text-foreground">
      <Helmet>
        <title>{seoGeo.seo.title}</title>
        <meta name="description" content={seoGeo.seo.description} />
        <meta property="og:title" content={seoGeo.seo.title} />
        <meta property="og:description" content={seoGeo.seo.description} />
        <meta property="og:image" content="https://nasua.marketing/SeoGeoNasua.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://nasua.marketing/SeoGeoNasua.jpg" />
        <link rel="canonical" href="https://nasua.marketing/seo-geo" />
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary/20" />
        <div className="relative z-10 container mx-auto px-6 py-32 text-center max-w-4xl">
          <motion.h1
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground font-display"
          >
            {seoGeo.hero.title}{" "}
            <span className="text-gradient">{seoGeo.hero.highlight}</span>
          </motion.h1>
          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-primary-foreground/80 font-body max-w-3xl mx-auto"
          >
            {seoGeo.hero.text}
          </motion.p>
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10"
          >
            <Link
              to="/contacto"
              className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg"
            >
              Iniciar mi Estrategia de Autoridad
            </Link>
          </motion.div>
        </div>
      </section>

      {/* La consciencia del SEO */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-6 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
              ¿Estás construyendo un activo o solo{" "}
              <span className="text-gradient">pagando por visibilidad</span>?
            </h2>
          </motion.div>
          <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="max-w-3xl mx-auto mb-14">
            <p className="text-center text-muted-foreground text-lg font-body leading-relaxed mb-4">
              La pauta digital te da velocidad, pero el SEO te da libertad.
            </p>
            <p className="text-center text-muted-foreground font-body leading-relaxed">
              Hacer SEO es una decisión de consciencia empresarial. Mientras la pauta (ads) es como{" "}
              <strong className="text-foreground">alquilar un espacio</strong> en una avenida concurrida, el SEO es{" "}
              <strong className="text-foreground">comprar el terreno y construir un edificio</strong>.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {seoGeo.consciousnessPillars.map((p, i) => {
              const Icon = iconMap[p.icon] || TrendingUp;
              return (
                <motion.div
                  key={p.title}
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-card rounded-xl p-8 border border-border hover:border-secondary/50 transition-colors text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="font-display font-medium text-xl text-foreground mb-3">{p.title}</h3>
                  <p className="text-muted-foreground font-body leading-relaxed text-sm">{p.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEO + Pauta: Efecto multiplicador */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-primary-foreground">
              El efecto multiplicador de la{" "}
              <span className="text-gradient">visibilidad total</span>.
            </h2>
          </motion.div>
          <motion.p initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center text-primary-foreground/80 text-lg font-body max-w-3xl mx-auto mb-4 leading-relaxed">
            No elijas entre uno u otro; haz que trabajen juntos para bajar tus costos.
          </motion.p>
          <motion.p initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center text-primary-foreground/70 text-base font-body max-w-3xl mx-auto mb-14 leading-relaxed">
            En Nasua, entendemos que la pauta y el SEO son las dos caras de una misma moneda. Cuando combinamos ambos:
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {seoGeo.multiplierEffects.map((item, i) => {
              const Icon = iconMap[item.icon] || DollarSign;
              return (
                <motion.div
                  key={item.title}
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-8 border border-primary-foreground/20 text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="font-display font-medium text-xl text-primary-foreground mb-3">{item.title}</h3>
                  <p className="text-primary-foreground/70 font-body leading-relaxed text-sm">{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GEO: La Era de los LLMs */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-6 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
              De motores de búsqueda a{" "}
              <span className="text-gradient">motores de respuesta</span>.
            </h2>
          </motion.div>
          <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="max-w-3xl mx-auto mb-14">
            <p className="text-center text-muted-foreground text-lg font-body leading-relaxed mb-4">
              Si ChatGPT no sabe quién eres, para el futuro de la búsqueda no existes.
            </p>
            <p className="text-center text-muted-foreground font-body leading-relaxed">
              Con la llegada de modelos como <strong className="text-foreground">ChatGPT, Gemini y Perplexity</strong>, la búsqueda ha cambiado. Ya no solo se trata de "links azules", sino de ser la fuente citada por la Inteligencia Artificial.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {seoGeo.geoPillars.map((item, i) => {
              const Icon = iconMap[item.icon] || Bot;
              return (
                <motion.div
                  key={item.title}
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-card rounded-xl p-8 border border-border hover:border-secondary/50 transition-colors"
                >
                  <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mb-5">
                    <Icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="font-display font-medium text-xl text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground font-body leading-relaxed text-sm">{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.h2
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-bold text-foreground font-display text-center mb-12"
          >
            Preguntas <span className="text-gradient">frecuentes</span>
          </motion.h2>
          <Accordion type="single" collapsible className="space-y-3">
            {seoGeo.faq.map((faq, i) => (
              <AccordionItem
                id={`faq-${i}`}
                key={i}
                value={`item-${i}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-body font-bold text-foreground hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="faq-answer text-muted-foreground leading-relaxed">
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
          <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground font-display">
              No seas un espectador de la{" "}
              <span className="text-gradient">evolución digital</span>.
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed font-body max-w-2xl mx-auto">
              Es momento de transformar tu sitio web en una autoridad que las IAs recomienden y tus clientes elijan. El equipo de Nasua está listo para auditar tu ecosistema y trazar tu Roadmap de Visibilidad Total.
            </p>
            <Link
              to="/contacto"
              className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg"
            >
              Iniciar mi Estrategia de Autoridad
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SeoGeo;
export const prerender = true;
