import { motion } from "framer-motion";
import bgImage from "@/assets/background.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={bgImage} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      <div className="relative z-10 container mx-auto section-padding pt-32 md:pt-24 flex flex-col items-center text-center gap-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground font-display">
            Socio de Crecimiento Digital:{" "}
            <span className="text-gradient">Construimos activos que facturan.</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-primary-foreground/80 font-body max-w-3xl"
        >
          No somos una agencia tradicional; somos tu Socio de Crecimiento. Si tu inversión digital no se traduce en rentabilidad, no está cumpliendo su trabajo. Diseñamos sistemas para empresas que buscan escala, velocidad y control total de su tecnología.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <a
            href="/contacto"
            className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg"
          >
            Agendar Consultoría Estratégica
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
