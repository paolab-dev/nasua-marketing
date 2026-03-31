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
import {
  Globe,
  Wrench,
  Search,
  Target,
  Megaphone,
  PenTool,
  Cog,
  Palette,
  Zap,
  Eye,
  TrendingUp,
} from "lucide-react";
import content from "@/data/site-content.json";

const iconMap: Record<string, any> = {
  Globe,
  Wrench,
  Search,
  Target,
  Megaphone,
  PenTool,
  Cog,
  Palette,
  Zap,
  Eye,
  TrendingUp,
};

const Servicios = () => {
  const { servicios } = content;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: servicios.faq.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <div className="bg-background text-foreground">
      <Helmet>
        <title>{servicios.seo.title}</title>
        <meta name="description" content={servicios.seo.description} />
        <meta property="og:title" content={servicios.seo.title} />
        <meta property="og:description" content={servicios.seo.description} />
        <meta property="og:image" content="https://nasua.marketing/Nasua-PaginasWebProfesionalesEnColombia.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://nasua.marketing/Nasua-PaginasWebProfesionalesEnColombia.jpg" />
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent/30" />
        <div className="relative z-10 container mx-auto px-6 py-32 text-center max-w-4xl">
          <motion.h1
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground font-display"
          >
            {servicios.hero.title}{" "}
            <span className="text-gradient">{servicios.hero.highlight}</span>.
          </motion.h1>
          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-primary-foreground/80 font-body max-w-3xl mx-auto"
          >
            {servicios.hero.text}
          </motion.p>
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10"
          >
            <a
              href="/contacto"
              className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg"
            >
              Agendar Consultoría Estratégica
            </a>
          </motion.div>
        </div>
      </section>

      {/* Servicios por grupos */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-6 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
              {servicios.intro.title}{" "}
              <span className="text-gradient">{servicios.intro.highlight}</span>.
            </h2>
          </motion.div>
          <motion.p
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center text-muted-foreground text-lg font-body max-w-3xl mx-auto mb-16 leading-relaxed"
          >
            {servicios.intro.text}
          </motion.p>

          <div className="space-y-16">
            {servicios.groups.map((group, gi) => (
              <div key={group.label}>
                <motion.div
                  initial={false}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center gap-3 mb-8"
                >
                  <span className="text-2xl">{group.emoji}</span>
                  <h3 className="text-xl font-bold font-display text-foreground">{group.label}</h3>
                  <div className="flex-1 h-px bg-border" />
                </motion.div>
                <div className="grid md:grid-cols-2 gap-6">
                  {group.services.map((s, i) => {
                    const Icon = iconMap[s.icon] || Globe;
                    return (
                      <motion.a
                        key={s.title}
                        href={s.href}
                        initial={false}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + gi * 0.05 }}
                        className="block bg-card rounded-xl p-8 border border-border hover:border-secondary/50 hover:shadow-md transition-all group"
                      >
                        <div className="flex items-start gap-5">
                          <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center shrink-0 group-hover:bg-secondary/30 transition-colors">
                            <Icon className="w-6 h-6 text-secondary" />
                          </div>
                          <div>
                            <h4 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-secondary transition-colors">
                              {s.title}
                            </h4>
                            <p className="text-muted-foreground font-body leading-relaxed text-sm">
                              {s.text}
                            </p>
                          </div>
                        </div>
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciadores */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-primary-foreground">
              {servicios.differentiators.title}{" "}
              <span className="text-gradient">{servicios.differentiators.highlight}</span>.
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {servicios.differentiators.items.map((d, i) => {
              const Icon = iconMap[d.icon] || Zap;
              return (
                <motion.div
                  key={d.title}
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="font-display font-semibold text-xl text-primary-foreground mb-3">
                    {d.title}
                  </h3>
                  <p className="text-primary-foreground/70 font-body leading-relaxed text-sm">
                    {d.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-background" id="faq">
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
            {servicios.faq.map((faq, i) => (
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
              ¿Listo para dejar de buscar proveedores y empezar a{" "}
              <span className="text-gradient">crecer con un socio</span>?
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed font-body max-w-2xl mx-auto">
              Hablemos de tus retos y de cómo podemos poner nuestra infraestructura a trabajar para ti. Estamos listos para el diagnóstico inicial.
            </p>
            <a
              href="/contacto"
              className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg"
            >
              Agendar Consultoría
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Servicios;
export const prerender = true;
