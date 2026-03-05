import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const FinancingSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto">
            <Shield className="w-8 h-8 text-secondary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-display">
            Sin Secuestros Técnicos.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            Depender de nuestro equipo es tu mayor ventaja operativa, pero nunca
            serás nuestro rehén. Aunque nosotros gestionamos la técnica, la{" "}
            <span className="text-secondary font-semibold">
              Propiedad Legal es 100% tuya
            </span>
            . Si algún día decides irte, te entregamos tus activos mediante un
            contrato de transferencia transparente. Sin peleas, sin trucos.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinancingSection;
