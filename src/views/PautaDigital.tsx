"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Shield,
  BarChart3,
  Users,
  CreditCard,
  Search,
  Video,
  Image,
  MessageCircle,
} from "lucide-react";
import content from "@/data/site-content.json";
import PautaDigitalLeadForm from "@/components/PautaDigitalLeadForm";

const iconMap: Record<string, any> = {
  Shield,
  BarChart3,
  Users,
  CreditCard,
  Search,
  Video,
  Image,
  MessageCircle,
};

const PautaDigital = () => {
  const { pautaDigital } = content;
  const [formOpen, setFormOpen] = useState(false);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pautaDigital.faq.map((faq) => ({
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
            {pautaDigital.hero.title}{" "}
            <span className="text-gradient">{pautaDigital.hero.highlight}</span>
          </motion.h1>
          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-primary-foreground/80 font-body max-w-3xl mx-auto"
          >
            {pautaDigital.hero.text}
          </motion.p>
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => setFormOpen(true)}
              className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg"
            >
              Solicitar Auditoría de Pauta
            </button>
            <span className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground font-semibold px-5 py-3 rounded-lg text-sm font-body">
              ⭐ Google Partners Certificados
            </span>
          </motion.div>
        </div>
      </section>

      {/* El guardián del presupuesto */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
              15 años optimizando el capital de{" "}
              <span className="text-gradient">nuestros clientes</span>.
            </h2>
          </motion.div>
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-card rounded-xl p-10 border border-border max-w-3xl mx-auto"
          >
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-1">
                <BarChart3 className="w-7 h-7 text-secondary" />
              </div>
              <div>
                <p className="text-secondary font-bold text-sm mb-2 font-body uppercase tracking-wider">
                  El Guardián de tu Presupuesto
                </p>
                <p className="text-muted-foreground font-body leading-relaxed text-lg">
                  En el mundo del performance, la trayectoria es la diferencia entre quemar dinero y generar activos. Nuestro equipo opera bajo una premisa innegociable:{" "}
                  <strong className="text-foreground">
                    Cuidar el presupuesto del cliente como si fuera propio.
                  </strong>{" "}
                  Con 15 años en el mercado digital, hemos perfeccionado el arte de la optimización diaria. No nos interesa que gastes más, nos interesa que gastes mejor. Analizamos cada puja y cada segmento para asegurar que tu inversión rinda al máximo, eliminando el desperdicio en tráfico que no convierte.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Plataformas */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-primary-foreground">
              Ejecución impecable en los canales que{" "}
              <span className="text-gradient">mueven la aguja</span>.
            </h2>
          </motion.div>
          <motion.p initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center text-primary-foreground/80 text-lg font-body max-w-3xl mx-auto mb-14 leading-relaxed">
            Contamos con aliados estratégicos que garantizan un estándar de calidad internacional en cada campaña.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            {pautaDigital.platforms.map((p, i) => {
              const Icon = iconMap[p.icon] || Search;
              return (
                <motion.div
                  key={p.title}
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-8 border border-primary-foreground/20"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-display font-medium text-xl text-primary-foreground">{p.title}</h3>
                      <span className="text-secondary text-xs font-bold font-body uppercase tracking-wider">{p.badge}</span>
                    </div>
                  </div>
                  <p className="text-primary-foreground/70 font-body leading-relaxed text-sm">{p.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Soberanía y Transparencia */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
              Tu inversión, tus cuentas,{" "}
              <span className="text-gradient">tu propiedad</span>.
            </h2>
          </motion.div>
          <motion.p initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center text-muted-foreground text-lg font-body max-w-3xl mx-auto mb-14 leading-relaxed">
            Al igual que en el desarrollo, en la pauta aplicamos la Soberanía Digital.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {pautaDigital.sovereignty.map((s, i) => {
              const Icon = iconMap[s.icon] || Shield;
              return (
                <motion.div
                  key={s.title}
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-card rounded-xl p-8 border border-border hover:border-secondary/50 transition-colors text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="font-display font-medium text-xl text-foreground mb-3">{s.title}</h3>
                  <p className="text-muted-foreground font-body leading-relaxed text-sm">{s.text}</p>
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
            {pautaDigital.faq.map((faq, i) => (
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
              Optimización técnica respaldada por{" "}
              <span className="text-gradient">15 años de trayectoria</span>.
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed font-body max-w-2xl mx-auto">
              No permitas que tu presupuesto se evapore. El equipo de Nasua está listo para realizar una auditoría técnica de tus campañas y trazar un Roadmap de Performance rentable.
            </p>
            <button
              onClick={() => setFormOpen(true)}
              className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg"
            >
              Solicitar Auditoría de Pauta
            </button>
          </motion.div>
        </div>
      </section>

      <PautaDigitalLeadForm open={formOpen} onOpenChange={setFormOpen} />
    </div>
  );
};

export default PautaDigital;
