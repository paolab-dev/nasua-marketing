import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const SovereigntySection = () => {
  return (
    <section className="section-padding bg-primary">
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
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground font-display">
            Aquí tú eres el jefe.
          </h2>
          <p className="text-primary-foreground/80 text-lg leading-relaxed max-w-2xl mx-auto">
            Muchos emprendedores sufren porque su proveedor "desapareció" con
            las claves. En Nasua, te firmamos un{" "}
            <span className="text-secondary font-semibold">
              Contrato de Soberanía
            </span>
            : El dominio, el código y los accesos son 100% tuyos. Nosotros
            construimos la máquina, pero tú tienes el título de propiedad.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SovereigntySection;
