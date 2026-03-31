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
import { Brain, Layout, Search, Layers } from "lucide-react";
import content from "@/data/site-content.json";

const iconMap: Record<string, any> = {
  Brain,
  Layout,
  Search,
  Layers,
};

const Copywriting = () => {
  const { copywriting } = content;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".faq-answer"],
    },
    mainEntity: copywriting.faq.map((faq, i) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
        url: `https://nasua.marketing/copywriting#faq-${i}`,
      },
    })),
  };

  return (
    <div className="bg-background text-foreground">
      <Helmet>
        <title>{copywriting.seo.title}</title>
        <meta name="description" content={copywriting.seo.description} />
        <meta property="og:title" content={copywriting.seo.title} />
        <meta property="og:description" content={copywriting.seo.description} />
        <meta property="og:image" content="https://nasua.marketing/CopywritingNasua.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://nasua.marketing/CopywritingNasua.jpg" />
        <link rel="canonical" href="https://nasua.marketing/copywriting" />
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
            {copywriting.hero.title}{" "}
            <span className="text-gradient">{copywriting.hero.highlight}</span>
          </motion.h1>
          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-primary-foreground/80 font-body max-w-3xl mx-auto"
          >
            {copywriting.hero.text}
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
              Solicitar Consultoría de Copy
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Persuasión */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-6 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
              La estética atrae, pero el mensaje es el que{" "}
              <span className="text-gradient">cierra la venta</span>.
            </h2>
          </motion.div>
          <motion.p initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center text-muted-foreground text-lg font-body max-w-3xl mx-auto mb-14 leading-relaxed">
            Un diseño impecable con un mensaje débil es solo un folleto mudo.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            {copywriting.persuasionPillars.map((p, i) => {
              const Icon = iconMap[p.icon] || Brain;
              return (
                <motion.div
                  key={p.title}
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-card rounded-xl p-8 border border-border hover:border-secondary/50 transition-colors"
                >
                  <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mb-5">
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

      {/* SEO + Persuasión */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-primary-foreground">
              Escribir para humanos sin olvidar{" "}
              <span className="text-gradient">a las máquinas</span>.
            </h2>
          </motion.div>
          <motion.p initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center text-primary-foreground/80 text-lg font-body max-w-3xl mx-auto mb-14 leading-relaxed">
            En 2026, el copy debe ser irresistible para el usuario y legible para la IA.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {copywriting.seoFeatures.map((item, i) => {
              const Icon = iconMap[item.icon] || Search;
              return (
                <motion.div
                  key={item.title}
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-8 border border-primary-foreground/20"
                >
                  <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mb-5">
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
            {copywriting.faq.map((faq, i) => (
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

      {/* CTA */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground font-display">
              ¿Listo para que tu mensaje empiece a{" "}
              <span className="text-gradient">vender de verdad</span>?
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed font-body max-w-2xl mx-auto">
              Deja de usar frases hechas y empieza a usar argumentos que cierren negocios. El equipo de Nasua está listo para redactar el futuro de tu marca.
            </p>
            <Link
              to="/contacto"
              className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg"
            >
              Solicitar Consultoría de Copy
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Copywriting;
export const prerender = true;
