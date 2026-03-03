import { motion } from "framer-motion";
import bgImage from "@/assets/background.jpg";
import phoneMockup from "@/assets/phone-mockup.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={bgImage} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/70" />
      </div>

      <div className="relative z-10 container mx-auto section-padding pt-32 md:pt-24 flex flex-col items-center text-center gap-8">
        {/* Row: H1 left + Mockup right */}
        <div className="w-full grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground font-display text-left">
              Páginas Web Profesionales en Colombia:{" "}
              <span className="text-gradient">
                Ten tu sitio hoy y págalo a cuotas con Wompi.
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center"
          >
            <img
              src={phoneMockup}
              alt="Mockup de un sitio web profesional en un dispositivo móvil"
              className="w-56 md:w-72 lg:w-80 animate-float drop-shadow-2xl"
            />
          </motion.div>
        </div>

        {/* Centered copy below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-2xl space-y-6"
        >
          <p className="text-lg md:text-xl text-primary-foreground/80 font-body">
            ¿Sin liquidez para digitalizar tu negocio? No te detengas. Lanzamos
            tu maquinaria de ventas en 7 días, la pagas en cuotas con Wompi y
            eres el dueño absoluto de todo desde el primer momento.
          </p>
          <div className="space-y-3">
            <a
              href="#contacto"
              className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg"
            >
              👉 Quiero mi Sitio Web
            </a>
            <p className="text-xs text-primary-foreground/50">
              Aprobación inmediata con Wompi. Nasua no otorga créditos ni influye en la decisión de Wompi. Tu responsabilidad crediticia es con la entidad financiera.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
