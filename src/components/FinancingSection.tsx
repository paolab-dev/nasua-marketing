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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-display mb-6">
            Tu éxito no puede esperar a que tengas todo el capital.
          </h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            Con el respaldo de Wompi, puedes pagar tu inversión en las cuotas
            que mejor le queden a tu flujo de caja. Usa tus tarjetas, PSE o
            créditos preferidos. Digitalízate hoy y paga con las ventas de
            mañana.
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
