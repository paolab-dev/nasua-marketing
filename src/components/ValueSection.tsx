import { motion } from "framer-motion";
import { Globe, Bot, Target, Film, PenTool, Cog, Palette, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import content from "@/data/site-content.json";

const icons: Record<string, any> = {
  Globe,
  Bot,
  Target,
  Film,
  PenTool,
  Cog,
  Palette,
  Wrench,
};

const ValueSection = () => {
  const { pillars } = content.home;

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          initial={false}
          className="text-center mb-14 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-display mb-6">
            {pillars.title}{" "}
            <span className="text-gradient">{pillars.highlight}</span>.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {pillars.text}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.items.map((p, i) => {
            const Icon = icons[p.icon];
            return (
              <motion.div
                key={p.title}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                initial={false}
              >
                <Link
                  to={p.href}
                  className="block bg-card rounded-xl p-8 border border-border hover:border-secondary/50 hover:shadow-md transition-all text-center h-full group"
                >
                  <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-5 group-hover:bg-secondary/30 transition-colors">
                    {Icon && <Icon className="w-7 h-7 text-secondary" />}
                  </div>
                  <h3 className="font-display font-medium text-xl text-foreground mb-3 group-hover:text-secondary transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-muted-foreground font-body leading-relaxed">
                    {p.text}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueSection;

