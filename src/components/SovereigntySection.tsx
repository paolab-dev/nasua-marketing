import { motion } from "framer-motion";
import { MessageSquare, CreditCard, Wrench, Search, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Diagnóstico Flash",
    text: "Entendemos tu necesidad y te enviamos el link de pago.",
  },
  {
    icon: CreditCard,
    title: "Activación",
    text: "Realizas el pago (puedes usar Wompi hasta en 4 cuotas) y nos envías tus fotos y textos.",
  },
  {
    icon: Wrench,
    title: "Manos a la obra",
    text: "Aquí arranca nuestro reloj (de 2 a 10 días según tu plan).",
  },
  {
    icon: Search,
    title: "Pulida de textos",
    text: "Organizamos tu información para que Google te quiera.",
  },
  {
    icon: Rocket,
    title: "Lanzamiento",
    text: "Tu negocio estrena casa digital de lujo y bajo tu propiedad legal.",
  },
];

const SovereigntySection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-display">
            Cómo activamos tu negocio en{" "}
            <span className="text-gradient">5 pasos simples</span>.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-7 h-7 text-secondary" />
              </div>
              <p className="text-secondary font-bold text-sm mb-1">Paso {i + 1}</p>
              <h3 className="font-body font-normal text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SovereigntySection;
