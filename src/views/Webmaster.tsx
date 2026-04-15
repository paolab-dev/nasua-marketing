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
  Shield,
  ShieldCheck,
  Clock,
  Wrench,
  Edit3,
  CheckCircle,
  Star,
} from "lucide-react";
import content from "@/data/site-content.json";

const iconMap: Record<string, any> = {
  Shield,
  ShieldCheck,
  Clock,
  Wrench,
  Edit3,
  CheckCircle,
  Star,
};

const Webmaster = () => {
  const { webmaster } = content;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".faq-answer"],
    },
    mainEntity: webmaster.faq.map((faq, i) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
        url: `https://nasua.marketing/webmaster#faq-${i}`,
      },
    })),
  };

  return (
    <div className="bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

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
            {webmaster.hero.title}{" "}
            <span className="text-gradient">{webmaster.hero.highlight}</span>
          </motion.h1>
          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-primary-foreground/80 font-body max-w-3xl mx-auto"
          >
            {webmaster.hero.text}
          </motion.p>
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contacto"
              className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg"
            >
              Agendar Auditoría de 15 Minutos
            </Link>
            <Link
              href="/contacto"
              className="inline-block bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground border border-primary-foreground/30 font-semibold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105"
            >
              Ver Planes de Webmaster
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Qué incluye el servicio */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-6 max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
              ¿Qué incluye un servicio de{" "}
              <span className="text-gradient">mantenimiento web profesional</span>?
            </h2>
          </motion.div>
          <motion.p
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center text-muted-foreground text-lg font-body max-w-3xl mx-auto mb-14 leading-relaxed"
          >
            En Nasua dividimos nuestra gestión en dos frentes estratégicos para adaptarnos a las necesidades reales de cada negocio. Ambos planes están diseñados para garantizar que la plataforma sea un{" "}
            <strong className="text-foreground">acelerador de ventas</strong> y no un obstáculo técnico.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            {webmaster.plans.map((plan, i) => {
              const Icon = iconMap[plan.icon] || Shield;
              return (
                <motion.div
                  key={plan.title}
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-card rounded-xl p-8 border border-border hover:border-secondary/50 transition-colors"
                >
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl text-foreground leading-tight">
                        {plan.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-body">{plan.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-xs text-secondary font-semibold uppercase tracking-wider mb-5 mt-3">
                    "{plan.concept}"
                  </p>
                  <ul className="space-y-4 mb-6">
                    {plan.items.map((item) => (
                      <li key={item.title} className="flex gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-foreground font-body">{item.title}:</span>{" "}
                          <span className="text-muted-foreground font-body text-sm">{item.text}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-secondary/10 rounded-lg p-4 border border-secondary/20">
                    <p className="text-sm font-body text-foreground">
                      <span className="font-bold text-secondary">Beneficio clave:</span>{" "}
                      {plan.benefit}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Transparencia Nasua */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display text-primary-foreground">
              Transparencia Nasua:{" "}
              <span className="text-gradient">El alcance de nuestra gestión</span>
            </h2>
          </motion.div>
          <motion.p
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center text-primary-foreground/70 text-lg font-body max-w-3xl mx-auto mb-14 leading-relaxed"
          >
            Para construir una relación de confianza como Socios de Crecimiento, en Nasua gestionamos las expectativas bajo criterios profesionales de operatividad.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {webmaster.transparency.map((item, i) => {
              const Icon = iconMap[item.icon] || ShieldCheck;
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
                  <h3 className="font-display font-medium text-xl text-primary-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-primary-foreground/70 font-body leading-relaxed text-sm">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Autoridad detrás de tu arquitectura */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
              La autoridad detrás de tu{" "}
              <span className="text-gradient">arquitectura digital</span>
            </h2>
          </motion.div>
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-card border border-border rounded-xl p-10 text-center"
          >
            <p className="text-muted-foreground font-body leading-relaxed text-lg mb-6">
              Tener un sitio web lento o desactualizado es como tener un local comercial con la puerta cerrada:{" "}
              <strong className="text-foreground">los clientes intentan entrar, pero ninguno logra comprar</strong>.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              En Nasua, aplicamos el estándar de excelencia que nuestro equipo ha ejecutado durante{" "}
              <strong className="text-foreground">15 años</strong> para marcas líderes como{" "}
              <strong className="text-foreground">Samsung, Claro y Bimbo</strong>. Entendemos que la tecnología debe ser invisible para el empresario, pero impecable para el cliente.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              No solo mantenemos webs; protegemos la{" "}
              <strong className="text-foreground">reputación y la continuidad</strong> de los negocios de nuestros aliados.
            </p>
          </motion.div>
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
            FAQ — <span className="text-gradient">Webmaster</span>
          </motion.h2>
          <Accordion type="single" collapsible className="space-y-3">
            {webmaster.faq.map((faq, i) => (
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

      {/* CTA Final */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground font-display">
              Delega la operatividad,{" "}
              <span className="text-gradient">enfócate en facturar</span>.
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed font-body max-w-2xl mx-auto">
              Tu web merece el mismo nivel de excelencia que tu producto o servicio. El equipo de Nasua está listo para mantener tu entorno digital en su máximo rendimiento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacto"
                className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg"
              >
                Agendar Auditoría de 15 Minutos
              </Link>
              <Link
                href="/contacto"
                className="inline-block bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground border border-primary-foreground/30 font-semibold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105"
              >
                Ver Planes de Webmaster
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Webmaster;
