import { motion } from "framer-motion";
import { ClientOnly } from "@/components/ClientOnly";

const CtaSection = () => {
  return (
    <section className="section-padding bg-primary">
      <div className="container mx-auto max-w-3xl text-center">
        <ClientOnly minHeight="250px">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground font-display">
              ¿Listo para dejar de buscar proveedores y empezar a{" "}
              <span className="text-gradient">crecer con un socio</span>?
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed max-w-2xl mx-auto font-body">
              Hablemos de tus retos y de cómo podemos poner nuestra infraestructura a trabajar para ti. Estamos listos para el diagnóstico inicial.
            </p>
            <a
              href="/contacto"
              className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg"
            >
              Agendar Consultoría
            </a>
          </motion.div>
        </ClientOnly>
      </div>
    </section>
  );
};

export default CtaSection;
