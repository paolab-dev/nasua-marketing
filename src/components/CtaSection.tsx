"use client";
import { motion } from "framer-motion";
import content from "@/data/site-content.json";

const CtaSection = () => {
  const { cta } = content.home;

  return (
    <section className="section-padding bg-primary">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          initial={false}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground font-display">
            {cta.title}{" "}
            <span className="text-gradient">{cta.highlight}</span>?
          </h2>
          <p className="text-primary-foreground/80 text-lg leading-relaxed max-w-2xl mx-auto font-body">
            {cta.text}
          </p>
          <a
            href="/contacto"
            className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg"
          >
            {cta.button}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
