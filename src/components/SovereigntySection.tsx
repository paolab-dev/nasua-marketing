import { motion } from "framer-motion";
import { Shield, Clock, Wrench } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Soberanía Total",
    text: "Dominios, códigos y datos son tuyos. Trabajamos para que te quedes por resultados, no por dependencia.",
  },
  {
    icon: Clock,
    title: "Cumplimiento Radical",
    text: "Respetamos los tiempos. Pactamos fechas y entregamos resultados sin excusas técnicas.",
  },
  {
    icon: Wrench,
    title: "Tecnología de Resultados",
    text: "Usamos la herramienta que mejor sirva a tu retorno de inversión, no la que nos parezca más fácil.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

const SovereigntySection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-5xl">
        <motion.div {...fadeUp} className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-display">
            Tecnología con criterio y{" "}
            <span className="text-gradient">honestidad</span>.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-xl p-8 border border-border hover:border-secondary/50 transition-colors text-center"
            >
              <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-5">
                <v.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-display font-medium text-xl text-foreground mb-3">
                {v.title}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                {v.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SovereigntySection;
