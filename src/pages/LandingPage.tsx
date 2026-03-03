import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Zap, MousePointerClick, Database, CreditCard } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

const LandingPage = () => {
  return (
    <div className="bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary/20" />
        <div className="relative z-10 container mx-auto px-6 py-32 text-center max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-secondary font-semibold tracking-widest uppercase text-sm mb-4 font-body"
          >
            La Máquina de Prospectos
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground font-display"
          >
            Página de Lanzamiento para{" "}
            <span className="text-gradient">tu Nicho</span> en Colombia:{" "}
            Captura Clientes y Vende sin Parar.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-primary-foreground/80 font-body max-w-3xl mx-auto"
          >
            Deja de botar tu dinero en publicidad que no convierte. Creamos tu página
            de aterrizaje en 7 días, diseñada para una sola cosa: que el teléfono no
            pare de sonar. Financiada con Wompi.
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
              Quiero mi página de ventas a cuotas
            </a>
          </motion.div>
        </div>
      </section>

      {/* El Dolor */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground mb-8">
              ¿Tu publicidad atrae <span className="text-gradient">clics</span> o atrae{" "}
              <span className="text-gradient">clientes</span>?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed">
              Muchos negocios en Colombia gastan fortunas en anuncios para enviar a la gente
              a un WhatsApp donde nadie responde o a una web lenta. Una Página de Lanzamiento
              es un embudo: entra un desconocido y sale un cliente interesado. Es la diferencia
              entre <strong className="text-foreground">gastar plata</strong> y{" "}
              <strong className="text-foreground">sembrar dinero</strong>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3 Secretos */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h3 className="text-2xl md:text-4xl font-bold font-display text-foreground">
              Los 3 Secretos de tu <span className="text-gradient">Landing Nasua</span>
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Velocidad de Respuesta",
                text: "Cargamos en menos de 2 segundos. En internet, un segundo de demora es una venta que se lleva tu competencia.",
              },
              {
                icon: MousePointerClick,
                title: "CTA Imposible de Ignorar",
                text: "Diseñamos el botón perfecto para que te escriban, te llamen o te dejen sus datos de inmediato.",
              },
              {
                icon: Database,
                title: "Soberanía de Datos",
                text: "Cada contacto que llegue es tuyo. No dependes de los algoritmos de las redes sociales; construyes tu propia base de datos de clientes potenciales.",
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

      {/* Financiación Inteligente */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <motion.div {...fadeUp}>
            <CreditCard className="w-12 h-12 text-secondary mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold font-display text-primary-foreground mb-6">
              Financiación <span className="text-gradient">Inteligente</span>
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/80 font-body leading-relaxed mb-8">
              No necesitas sacar millones de tu bolsillo para empezar a vender. Con Wompi,
              financias tu página y dejas que los mismos clientes nuevos que vas a conseguir
              paguen la inversión. Es el negocio más lógico del mundo.
            </p>
            <a
              href="#contacto"
              className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg"
            >
              Quiero mi página de ventas a cuotas
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
