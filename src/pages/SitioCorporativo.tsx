import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, Clock, Shield, TrendingUp } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

const SitioCorporativo = () => {
  return (
    <div className="bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent/20" />
        <div className="relative z-10 container mx-auto px-6 py-32 text-center max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-secondary font-semibold tracking-widest uppercase text-sm mb-4 font-body"
          >
            El Salto a la Profesionalización
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground font-display"
          >
            Sitio Web para <span className="text-gradient">tu Nicho</span> en Colombia:{" "}
            La Oficina Virtual que tu Negocio merece.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-primary-foreground/80 font-body max-w-3xl mx-auto"
          >
            Deja de ser un negocio invisible. Construimos tu sede digital en 7 días para
            que proyectes la confianza necesaria para cerrar mejores contratos. Financiada
            con Wompi y 100% bajo tu propiedad.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10"
          >
            <a
              href="#contacto"
              className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg"
            >
              Quiero mi oficina virtual a cuotas
            </a>
          </motion.div>
        </div>
      </section>

      {/* El Dolor */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground mb-8">
              ¿Tu negocio se ve tan <span className="text-gradient">grande</span> como realmente es?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed">
              En Colombia, la primera impresión ya no es el apretón de manos, es tu link en
              Google. Si un cliente potencial te busca y no encuentra una web profesional,
              estás perdiendo el contrato antes de la primera llamada. Nasua te da el estatus
              de una multinacional a un precio que cuida tu flujo de caja.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3 Pilares */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h3 className="text-2xl md:text-4xl font-bold font-display text-foreground">
              Los 3 Pilares de tu <span className="text-gradient">Sede Digital</span>
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Credibilidad Instantánea",
                text: "Un sitio que no solo informa, sino que convence. Diseñado para que tu experiencia y tus servicios brillen con luz propia.",
              },
              {
                icon: Clock,
                title: "Vitrina 24/7",
                text: "Mientras tú descansas, tu sitio web sigue contando tu historia, mostrando tus proyectos y resolviendo dudas de tus clientes.",
              },
              {
                icon: Shield,
                title: "Soberanía de Marca",
                text: "Tu dominio y tu correo corporativo son los cimientos de tu empresa. Con Nasua, tú eres el único dueño de esos activos. Nada de alquileres eternos.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                className="bg-card rounded-xl p-8 border border-border hover:border-secondary/50 transition-colors text-center"
              >
                <item.icon className="w-10 h-10 text-secondary mx-auto mb-4" />
                <h4 className="font-display font-bold text-xl text-foreground mb-3">
                  {item.title}
                </h4>
                <p className="text-muted-foreground font-body leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inversión */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <motion.div {...fadeUp}>
            <TrendingUp className="w-12 h-12 text-secondary mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold font-display text-primary-foreground mb-6">
              Invierte en tu Activo más <span className="text-gradient">Importante</span>
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/80 font-body leading-relaxed mb-8">
              Un sitio web informativo no es un gasto, es un activo que valoriza tu empresa.
              Con el respaldo de Wompi, puedes diferir la inversión mientras tu marca empieza
              a cobrar más por sus servicios gracias a su nueva imagen profesional.
            </p>
            <a
              href="#contacto"
              className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg"
            >
              Quiero mi oficina virtual a cuotas
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SitioCorporativo;
