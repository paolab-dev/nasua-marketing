import { motion } from "framer-motion";
import { Search } from "lucide-react";

const ValueSection = () => {
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
            <Search className="w-8 h-8 text-secondary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-display">
            No solo publicamos tus textos: Los organizamos para que Google te encuentre de una.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            Escribir es fácil, pero que Google entienda qué vendes es otra historia.
            En Nasua no solo 'pegamos' tu información; tomamos tus textos y los
            organizamos para que los buscadores los entiendan a la perfección. Le
            'hablamos clarito' a Google para que tu mensaje llegue directo a tus clientes.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ValueSection;
