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
import { Shield, Gauge, Smartphone, Bot, ArrowRight } from "lucide-react";
import content from "@/data/site-content.json";

const icons: Record<string, any> = {
  Shield,
  Gauge,
  Smartphone,
  Bot,
  ArrowRight,
};

const InfraestructuraDigital = () => {
  const { infraestructuraDigital: infra } = content;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: infra.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <div className="bg-background text-foreground">
      <Helmet>
        <title>{infra.seo.title}</title>
        <meta name="description" content={infra.seo.description} />
        <link rel="canonical" href="https://nasua.marketing/desarrollo-web-estrategico" />
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-primary pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary/20" />
        <div className="relative z-10 container mx-auto px-6 py-32 text-center max-w-4xl">
          <motion.h1
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground font-display"
          >
            {infra.hero.title}{" "}
            <span className="text-gradient">{infra.hero.highlight}</span>
          </motion.h1>
          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-primary-foreground/80 font-body max-w-3xl mx-auto"
          >
            {infra.hero.text}
          </motion.p>
        </div>
      </section>

      {/* Activos Soberanos */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
              Tu sitio web: El único activo digital que{" "}
              <span className="text-gradient">realmente te pertenece</span>.
            </h2>
          </motion.div>
          <motion.p initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center text-muted-foreground text-lg font-body max-w-3xl mx-auto mb-6 leading-relaxed">
            Las redes sociales son canales de visibilidad, pero no te pertenecen. Depender exclusivamente de ellas es como construir en terreno alquilado: un cambio de algoritmo o un bloqueo o hackeo de cuenta inesperado pueden apagar tu negocio de un día para otro.
          </motion.p>
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-card rounded-xl p-10 border border-border max-w-3xl mx-auto"
          >
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-1">
                <Shield className="w-7 h-7 text-secondary" />
              </div>
              <p className="text-muted-foreground font-body leading-relaxed text-lg">
                En Nasua, transformamos tu presencia web en un <strong className="text-foreground">activo propio que nadie te puede quitar</strong>. Diseñamos sitios web donde los datos, la tecnología y el éxito de tu marca están bajo tu control total. No creamos dependencias; entregamos herramientas que garantizan que tu empresa sea la única dueña de su destino digital.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vibe Coding */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-primary-foreground">
              Rendimiento que las IAs y los usuarios{" "}
              <span className="text-gradient">aman</span>.
            </h2>
          </motion.div>
          <motion.p initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center text-primary-foreground/80 text-lg font-body max-w-3xl mx-auto mb-4 leading-relaxed">
            En 2026, un segundo de retraso es una venta perdida.
          </motion.p>
          <motion.p initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center text-primary-foreground/70 text-base font-body max-w-3xl mx-auto mb-14 leading-relaxed">
            Utilizamos <strong className="text-secondary">Vibe Coding</strong> para acelerar el ciclo de desarrollo sin sacrificar la calidad técnica. Esto nos permite:
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {infra.vibeCodingFeatures.map((f, i) => {
              const Icon = icons[f.icon];
              return (
                <motion.div
                  key={f.title}
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-8 border border-primary-foreground/20 text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-5">
                    {Icon && <Icon className="w-7 h-7 text-secondary" />}
                  </div>
                  <h3 className="font-display font-medium text-xl text-primary-foreground mb-3">{f.title}</h3>
                  <p className="text-primary-foreground/70 font-body leading-relaxed text-sm">{f.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Módulos de solución */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
              Arquitecturas diseñadas para objetivos{" "}
              <span className="text-gradient">específicos</span>.
            </h2>
          </motion.div>
          <motion.p initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center text-muted-foreground text-lg font-body max-w-3xl mx-auto mb-14 leading-relaxed">
            Elige el motor que tu Roadmap necesita activar hoy:
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {infra.modules.map((mod, i) => (
              <motion.div
                key={mod.title}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-card rounded-xl p-8 border border-border hover:border-secondary/50 transition-colors flex flex-col"
              >
                <p className="text-secondary font-bold text-xs mb-3 font-body uppercase tracking-wider">{mod.label}</p>
                <h3 className="font-display font-medium text-xl text-foreground mb-3">{mod.title}</h3>
                <p className="text-muted-foreground font-body leading-relaxed text-sm flex-grow mb-6">{mod.text}</p>
                <Link
                  to={mod.href}
                  className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-5 py-3 rounded-lg text-sm transition-all hover:scale-105 justify-center"
                >
                  {mod.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-background">
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
            {infra.faq.map((faq, i) => (
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
          <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground font-display">
              ¿Listo para construir un sistema que{" "}
              <span className="text-gradient">trabaje para ti</span>?
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed font-body max-w-2xl mx-auto">
              Hablemos de tus metas internacionales y de cómo el método Nasua puede acelerar tu llegada a esos objetivos. Sin rodeos, solo estrategia sólida.
            </p>
            <Link
              to="/contacto"
              className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg"
            >
              Agendar Consultoría Estratégica
            </Link>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default InfraestructuraDigital;
export const prerender = true;

