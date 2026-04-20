"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Database, Mail, Link2, Bell, Shield } from "lucide-react";
import content from "@/data/site-content.json";
import AutomatizacionLeadForm from "@/components/AutomatizacionLeadForm";

const iconMap: Record<string, any> = {
  Database,
  Mail,
  Link2,
  Bell,
  Shield,
};

const Automatizacion = () => {
  const { automatizacion } = content;
  const [formOpen, setFormOpen] = useState(false);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: automatizacion.faq.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
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
            {automatizacion.hero.title}{" "}
            <span className="text-gradient">{automatizacion.hero.highlight}</span>
          </motion.h1>
          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-primary-foreground/80 font-body max-w-3xl mx-auto"
          >
            {automatizacion.hero.text}
          </motion.p>
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10"
          >
            <button
              onClick={() => setFormOpen(true)}
              className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg"
            >
              Agendar Consultoría de Procesos
            </button>
          </motion.div>
        </div>
      </section>

      {/* Sistemas que no duermen */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-6 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
              Porque un lead frío es una{" "}
              <span className="text-gradient">inversión perdida</span>.
            </h2>
          </motion.div>
          <motion.p initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center text-muted-foreground text-lg font-body max-w-3xl mx-auto mb-14 leading-relaxed">
            En 2026, la velocidad de respuesta es el factor #1 en la decisión de compra.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            {automatizacion.crmPillars.map((p, i) => {
              const Icon = iconMap[p.icon] || Database;
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

      {/* Operación sin fricción */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-primary-foreground">
              Libera a tu talento de las{" "}
              <span className="text-gradient">tareas manuales</span>.
            </h2>
          </motion.div>
          <motion.p initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center text-primary-foreground/80 text-lg font-body max-w-3xl mx-auto mb-14 leading-relaxed">
            Tu equipo debe estar cerrando tratos, no llenando excels.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {automatizacion.operationFeatures.map((item, i) => {
              const Icon = iconMap[item.icon] || Link2;
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
            {automatizacion.faq.map((faq, i) => (
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

      {/* CTA */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground font-display">
              Deja de perseguir leads y empieza a{" "}
              <span className="text-gradient">gestionar cierres</span>.
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed font-body max-w-2xl mx-auto">
              Tu infraestructura digital está lista. Es hora de que tu operación también lo esté. El equipo de Nasua está listo para automatizar tu crecimiento.
            </p>
            <button
              onClick={() => setFormOpen(true)}
              className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg"
            >
              Agendar Consultoría de Procesos
            </button>
          </motion.div>
        </div>
      </section>

      <AutomatizacionLeadForm open={formOpen} onOpenChange={setFormOpen} />
    </div>
  );
};

export default Automatizacion;
