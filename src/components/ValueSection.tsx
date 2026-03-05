import { motion } from "framer-motion";
import { Key, Zap, CreditCard } from "lucide-react";

const values = [
  {
    icon: Key,
    title: "Tuyo para siempre",
    text: "Te entregamos las llaves y la propiedad total.",
  },
  {
    icon: Zap,
    title: "Al aire en 7 días",
    text: "Usamos IA profesional para ir a la velocidad de tu negocio.",
  },
  {
    icon: CreditCard,
    title: "Financiación Wompi",
    text: "No te descapitalices. Paga mientras el sitio te genera ventas.",
  },
];

const ValueSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-display mb-4">
            Tú vendes, nosotros operamos.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Sabemos que tu tiempo vale oro. Por eso, en Nasua no te entregamos
            un código que no sabes usar; te entregamos una operación
            funcionando. Nosotros nos encargamos de que todo vuele, mientras tú
            recuperas horas de tu vida para lo que realmente importa: tu
            negocio.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary/15 flex items-center justify-center mb-5">
                <v.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-2">
                ✅ {v.title}
              </h3>
              <p className="text-muted-foreground">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
