import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EcommerceLeadForm from "@/components/EcommerceLeadForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BarChart3, Zap, Shield, ShoppingBag, Globe, Code, RefreshCw, Target } from "lucide-react";
import content from "@/data/site-content.json";

const icons: Record<string, any> = {
  BarChart3,
  Zap,
  Shield,
  ShoppingBag,
  Globe,
  Code,
  RefreshCw,
  Target,
};

const Ecommerce = () => {
  const [formOpen, setFormOpen] = useState(false);
  const { ecommerce } = content;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ecommerce.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <div className="bg-background text-foreground">
      <Helmet>
        <title>{ecommerce.seo.title}</title>
        <meta name="description" content={ecommerce.seo.description} />
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
            {ecommerce.hero.title}{" "}
            <span className="text-gradient">{ecommerce.hero.highlight}</span>
          </motion.h1>
          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-primary-foreground/80 font-body max-w-3xl mx-auto"
          >
            {ecommerce.hero.text}
          </motion.p>
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10"
          >
            <button
              onClick={() => setFormOpen(true)}
              className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg cursor-pointer"
            >
              Agendar Consultoría de E-commerce
            </button>
          </motion.div>
        </div>
      </section>

      {/* Ingeniería de ventas */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-6 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
              Ingeniería de ventas para negocios que buscan{" "}
              <span className="text-gradient">escala</span>.
            </h2>
          </motion.div>
          <motion.p initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center text-muted-foreground text-lg font-body max-w-3xl mx-auto mb-14 leading-relaxed">
            Tener una tienda online es el primer paso; tener un negocio rentable requiere una estructura técnica sólida que soporte el crecimiento.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {ecommerce.features.map((d, i) => {
              const Icon = icons[d.icon];
              return (
                <motion.div
                  key={d.title}
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-card rounded-xl p-8 border border-border hover:border-secondary/50 transition-colors text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-5">
                    {Icon && <Icon className="w-7 h-7 text-secondary" />}
                  </div>
                  <h3 className="font-display font-medium text-xl text-foreground mb-3">
                    {d.title}
                  </h3>
                  <p className="text-muted-foreground font-body leading-relaxed text-sm">
                    {d.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tecnología */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-primary-foreground">
              Implementamos la infraestructura que tu operación{" "}
              <span className="text-gradient">necesita</span>.
            </h2>
          </motion.div>
          <motion.p initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center text-primary-foreground/80 text-lg font-body max-w-3xl mx-auto mb-14 leading-relaxed">
            Evitamos las soluciones genéricas. El equipo evalúa tu volumen de ventas, capacidad logística y equipo interno para decidir qué plataforma impulsará mejor tu crecimiento.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {ecommerce.roadmaps.map((p, i) => {
              const Icon = icons[p.icon];
              return (
                <motion.div
                  key={p.title}
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-8 border border-primary-foreground/20 text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-5">
                    {Icon && <Icon className="w-7 h-7 text-secondary" />}
                  </div>
                  <h3 className="font-display font-medium text-xl text-primary-foreground mb-1">
                    {p.title}
                  </h3>
                  <p className="text-secondary font-semibold text-sm font-body mb-3">
                    {p.subtitle || ""}
                  </p>
                  <p className="text-primary-foreground/70 font-body leading-relaxed text-sm">
                    {p.text}
                  </p>
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
            {ecommerce.faq.map((faq, i) => (
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
              ¿Listo para transformar tu tienda en un{" "}
              <span className="text-gradient">activo rentable</span>?
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed font-body max-w-2xl mx-auto">
              El equipo de Nasua está listo para auditar tu modelo de negocio y trazar el Roadmap de tu nuevo canal de ventas. Sin promesas vacías, solo tecnología orientada a resultados.
            </p>
            <button
              onClick={() => setFormOpen(true)}
              className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg cursor-pointer"
            >
              Agendar Consultoría de E-commerce
            </button>
          </motion.div>
        </div>
      </section>

      <EcommerceLeadForm open={formOpen} onOpenChange={setFormOpen} />
      <Footer />
    </div>
  );
};

export default Ecommerce;
export const prerender = true;

