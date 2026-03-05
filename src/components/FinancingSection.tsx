import { motion } from "framer-motion";

const FinancingSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">
            Digitalización para Todos
          </h3>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            Democratizamos el acceso a la mejor tecnología. No necesitas
            descapitalizarte; paga tu sitio web a cuotas con tus tarjetas o
            créditos preferidos a través de Wompi.
          </p>
          <a
            href="#contacto"
            className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg"
          >
            Empieza ahora con Wompi
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FinancingSection;
