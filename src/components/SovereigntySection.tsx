"use client";
import { motion } from "framer-motion";
import { Shield, Clock, Wrench } from "lucide-react";
import content from "@/data/site-content.json";

const icons: Record<string, any> = {
  Shield,
  Clock,
  Wrench,
};

const SovereigntySection = () => {
  const { sovereignty } = content.home;

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          initial={false}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-display">
            {sovereignty.title}{" "}
            <span className="text-gradient">{sovereignty.highlight}</span>.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {sovereignty.values.map((v, i) => {
            const Icon = icons[v.icon];
            return (
              <motion.div
                key={v.title}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                initial={false}
                className="bg-card rounded-xl p-8 border border-border hover:border-secondary/50 transition-colors text-center"
              >
                <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-5">
                  {Icon && <Icon className="w-7 h-7 text-secondary" />}
                </div>
                <h3 className="font-display font-medium text-xl text-foreground mb-3">
                  {v.title}
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed">
                  {v.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SovereigntySection;
