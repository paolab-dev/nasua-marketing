"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Award,
  Layers,
  CheckCircle,
  Palette,
  FileText,
  Lightbulb,
  Target,
} from "lucide-react";
import content from "@/data/site-content.json";

const iconMap: Record<string, any> = {
  Award,
  Layers,
  CheckCircle,
  Palette,
  FileText,
  Lightbulb,
  Target,
};

const Branding = () => {
  const { branding } = content;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".faq-answer"],
    },
    mainEntity: branding.faq.map((faq, i) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
        url: `https://nasua.marketing/branding#faq-${i}`,
      },
    })),
  };

  return (
    <div className="bg-background text-foreground">

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
            {branding.hero.title}{" "}
            <span className="text-gradient">{branding.hero.highlight}</span>
          </motion.h1>
          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-primary-foreground/80 font-body max-w-3xl mx-auto"
          >
            {branding.hero.text}
          </motion.p>
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10"
          >
            <Link
              href="/contacto"
              className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg"
            >
              Cotizar Proyecto de Branding
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Pilares */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
              Identidad visual pensada para{" "}
              <span className="text-gradient">cerrar negocios</span>.
            </h2>
            <p className="mt-4 text-muted-foreground text-lg font-body leading-relaxed">
              El mercado internacional no perdona una imagen descuidada. Tu branding es tu carta de presentación ante clientes de alto ticket.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {branding.pillars.map((p, i) => {
              const Icon = iconMap[p.icon] || Award;
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

      {/* Integración */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-primary-foreground">
              Diseño que respeta la ingeniería y el{" "}
              <span className="text-gradient">rendimiento</span>.
            </h2>
            <p className="mt-4 text-primary-foreground/80 text-lg font-body max-w-3xl mx-auto leading-relaxed">
              A diferencia de agencias creativas tradicionales, el equipo de Nasua diseña marcas que funcionan en el mundo real (y digital).
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {branding.integrations.map((item, i) => {
              const Icon = iconMap[item.icon] || Target;
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

      {/* Proceso */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
              El camino estratégico de{" "}
              <span className="text-gradient">Nasua</span>.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {branding.processSteps.map((step, i) => {
              const Icon = iconMap[step.icon] || Lightbulb;
              return (
                <motion.div
                  key={step.title}
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-secondary" />
                  </div>
                  <p className="text-secondary font-bold text-sm mb-1 font-body">Fase {i + 1}</p>
                  <h3 className="font-display font-medium text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm font-body leading-relaxed">{step.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
              Herramientas de{" "}
              <span className="text-gradient">alto estándar</span>.
            </h2>
            <p className="text-muted-foreground text-lg font-body mt-4 max-w-2xl mx-auto">
              Trabajamos con las mismas herramientas que usan los equipos de diseño de las empresas Fortune 500.
            </p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-4">
            {branding.tools.map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={false}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card border border-border rounded-xl px-6 py-4 flex items-center gap-3 hover:border-secondary/50 transition-colors"
              >
                <span className="text-2xl">{tool.icon}</span>
                <span className="font-body font-medium text-foreground">{tool.name}</span>
              </motion.div>
            ))}
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
            {branding.faq.map((faq, i) => (
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
              ¿Listo para proyectar la autoridad que tu negocio{" "}
              <span className="text-gradient">merece</span>?
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed font-body max-w-2xl mx-auto">
              Deja de ser una opción más y conviértete en la referencia de tu industria. El equipo de Nasua está listo para construir tu identidad de alto impacto.
            </p>
            <Link
              href="/contacto"
              className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg"
            >
              Cotizar Proyecto de Branding
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Branding;
