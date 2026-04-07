"use client";
import { motion } from "framer-motion";
import { ClientOnly } from "@/components/ClientOnly";

const FinancingSection = () => {
  return (
    <section className="section-padding bg-primary">
      <div className="container mx-auto max-w-3xl text-center">
        <ClientOnly minHeight="200px">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-medium text-primary-foreground font-display mb-6">
              Digitalización para Todos
            </h3>
            <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
              Democratizamos el acceso a la mejor tecnología. No necesitas
              descapitalizarte; paga tu sitio web a cuotas con tus tarjetas o
              créditos preferidos a través de Wompi.
            </p>
            <a
              href="https://www.bancolombia.com/pagos/compra-y-paga-despues"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg"
            >
              Empieza ahora con Wompi
            </a>
          </motion.div>
        </ClientOnly>
      </div>
    </section>
  );
};

export default FinancingSection;
