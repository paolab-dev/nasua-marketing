"use client";
import { motion } from "framer-motion";
import { ClipboardCheck, Rocket, BarChart3 } from "lucide-react";
import content from "@/data/site-content.json";

const icons: Record<string, any> = {
  ClipboardCheck,
  Rocket,
  BarChart3,
};

const ServicesSection = () => {
  const { roadmap } = content.home;

  return (
    <section className="section-padding bg-primary">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          initial={false}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display text-primary-foreground">
            {roadmap.title} <span className="text-gradient">{roadmap.highlight}</span>.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {roadmap.steps.map((s, i) => {
            const Icon = icons[s.title === "Diagnóstico" ? "ClipboardCheck" : s.title === "Activación" ? "Rocket" : "BarChart3"];
            return (
              <motion.div
                key={s.title}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                initial={false}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-5">
                  {Icon && <Icon className="w-8 h-8 text-secondary" />}
                </div>
                <p className="text-secondary font-bold text-sm mb-1 font-body">
                  Paso {i + 1}
                </p>
                <h3 className="font-display font-medium text-xl text-primary-foreground mb-3">
                  {s.title}
                </h3>
                <p className="text-primary-foreground/70 font-body leading-relaxed">
                  {s.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
