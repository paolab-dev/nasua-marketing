"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PenTool, Zap, Link, Bot, Target, ClipboardCheck, Layout, Code, Rocket } from "lucide-react";
import content from "@/data/site-content.json";

const icons: Record<string, any> = {
  PenTool,
  Zap,
  Link,
  Bot,
  Target,
  ClipboardCheck,
  Layout,
  Code,
  Rocket,
};

const LandingPage = () => {
  const [formOpen, setFormOpen] = useState(false);
  const { landingPage } = content;

  // Local helper for landing-specific icons/structure if needed
  const processSteps = [
    { icon: ClipboardCheck, title: "Briefing de Ventas", text: "Entendemos tu producto, tu margen y a quién le hablas." },
    { icon: Layout, title: "Arquitectura y Copy", text: "Definimos el mensaje y la estructura que convencerá a tu audiencia." },
    { icon: Code, title: "Desarrollo y Medición", text: "Construimos la página y configuramos todo el rastreo de datos." },
    { icon: Rocket, title: "Lanzamiento y Ajuste", text: "Ponemos la máquina a rodar y optimizamos según el comportamiento real de los usuarios." },
  ];

  return (
    <div className="bg-background text-foreground">

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
            {landingPage.hero.title}{" "}
            <span className="text-gradient">{landingPage.hero.highlight}</span>
          </motion.h1>
          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-primary-foreground/80 font-body max-w-3xl mx-auto"
          >
            {landingPage.hero.text}
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
              Agendar Consultoría de Conversión
            </button>
          </motion.div>
        </div>
      </section>

      {/* Ingeniería de conversión */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-6 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
              Ingeniería de conversión para resultados{" "}
              <span className="text-gradient">medibles</span>.
            </h2>
          </motion.div>
          <motion.p initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center text-muted-foreground text-lg font-body max-w-3xl mx-auto mb-14 leading-relaxed">
            Muchos negocios fallan porque envían tráfico de calidad a sitios lentos o confusos. En Nasua construimos el motor que transforma ese tráfico en clientes.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            {landingPage.features.map((f, i) => {
              const Icon = icons[f.icon];
              return (
                <motion.div
                  key={f.title}
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-card rounded-xl p-8 border border-border hover:border-secondary/50 transition-colors text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-5">
                    {Icon && <Icon className="w-7 h-7 text-secondary" />}
                  </div>
                  <h3 className="font-display font-medium text-xl text-foreground mb-3">{f.title}</h3>
                  <p className="text-muted-foreground font-body leading-relaxed text-sm">{f.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integración técnica */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-primary-foreground">
              {landingPage.integrations.title}{" "}
              <span className="text-gradient">{landingPage.integrations.highlight}</span>.
            </h2>
          </motion.div>
          <motion.p initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center text-primary-foreground/80 text-lg font-body max-w-3xl mx-auto mb-14 leading-relaxed">
            {landingPage.integrations.text}
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {landingPage.integrations.items.map((item, i) => {
              const Icon = icons[item.icon];
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
                    {Icon && <Icon className="w-7 h-7 text-secondary" />}
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
              De 0 a leads en{" "}
              <span className="text-gradient">tiempo récord</span>.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-7 h-7 text-secondary" />
                </div>
                <p className="text-secondary font-bold text-sm mb-1 font-body">Paso {i + 1}</p>
                <h3 className="font-display font-medium text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm font-body leading-relaxed">{step.text}</p>
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
            {landingPage.faq.map((faq, i) => (
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
              Deja de adivinar y empieza a{" "}
              <span className="text-gradient">convertir</span>.
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed font-body max-w-2xl mx-auto">
              El equipo de Nasua está listo para auditar tus campañas actuales y diseñar la landing page que tu negocio necesita para escalar. Sin rodeos, solo resultados técnicos.
            </p>
            <button
              onClick={() => setFormOpen(true)}
              className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg cursor-pointer"
            >
              Agendar Consultoría de Conversión
            </button>
          </motion.div>
        </div>
      </section>

      <LeadCaptureForm open={formOpen} onOpenChange={setFormOpen} />
    </div>
  );
};

export default LandingPage;

