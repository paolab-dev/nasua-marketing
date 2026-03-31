import { motion } from "framer-motion";
import { ClipboardCheck, Rocket, BarChart3 } from "lucide-react";
import { ClientOnly } from "@/components/ClientOnly";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Diagnóstico",
    text: "Auditamos tu embudo actual y trazamos un plan de vuelo basado en tus números.",
  },
  {
    icon: Rocket,
    title: "Activación",
    text: "Ejecutamos con agilidad técnica para salir al mercado en días, no en meses.",
  },
  {
    icon: BarChart3,
    title: "Optimización",
    text: "Medimos y ajustamos mensualmente para asegurar que tu inversión sea predecible.",
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-primary">
      <div className="container mx-auto max-w-5xl">
        <ClientOnly minHeight="60px">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display text-primary-foreground">
              Un Roadmap diseñado para{" "}
              <span className="text-gradient">no perder tiempo</span>.
            </h2>
          </motion.div>
        </ClientOnly>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <ClientOnly key={s.title} minHeight="150px">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-5">
                  <s.icon className="w-8 h-8 text-secondary" />
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
            </ClientOnly>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
