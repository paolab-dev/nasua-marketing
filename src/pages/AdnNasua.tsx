import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Zap, CreditCard, FileCheck, BookOpen, ShieldCheck, Headphones } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

const AdnNasua = () => {
  return (
    <div className="bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent/30" />
        <div className="relative z-10 container mx-auto px-6 py-32 text-center max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-secondary font-semibold tracking-widest uppercase text-sm mb-4 font-body"
          >
            La Realidad del Crecimiento
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground font-display"
          >
            ADN Nasua: Tu Infraestructura de Crecimiento Gestionada con{" "}
            <span className="text-gradient">Transparencia Total</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-primary-foreground/80 font-body max-w-3xl mx-auto"
          >
            Creemos que los dueños de negocio en Colombia deben enfocarse en vender,
            no en programar. Somos el motor técnico detrás de tu marca, garantizando
            rapidez, financiación y la propiedad legal de tus activos.
          </motion.p>
        </div>
      </section>

      {/* Gestión para Crecer */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div {...fadeUp} className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground">
              Gestión para Crecer, Propiedad para{" "}
              <span className="text-gradient">Decidir</span>
            </h2>
          </motion.div>
          <motion.div
            {...fadeUp}
            className="space-y-6 text-lg md:text-xl leading-relaxed text-muted-foreground font-body text-center max-w-3xl mx-auto"
          >
            <p>
              En el modelo tradicional, te entregan un sitio web y te dejan solo en un
              laberinto técnico. O peor, te mantienen como rehén sin acceso a nada.
            </p>
            <p>
              <strong className="text-foreground">La Diferencia Nasua:</strong> En Nasua
              operamos bajo el concepto de{" "}
              <strong className="text-foreground">Infraestructura Gestionada</strong>.
              Nosotros nos encargamos de que todo vuele, se actualice y funcione. Tú te
              apalancas de nuestra técnica para la excelencia, pero nunca serás nuestro
              rehén. Tú eres el dueño legal de la empresa, y por ende, de su casa digital.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3 Pilares */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div {...fadeUp} className="text-center mb-8">
            <h3 className="text-2xl md:text-4xl font-bold font-display text-foreground">
              Los 3 Pilares de la Filosofía{" "}
              <span className="text-gradient">Nasua</span>
            </h3>
          </motion.div>

          <motion.div {...fadeUp} className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                label: "Velocidad sin Excusas",
                desc: "Usamos IA profesional para entregar en 7 días. Lo que otros tardan meses, nosotros lo resolvemos en una semana porque el mercado no espera.",
              },
              {
                icon: CreditCard,
                label: "Democratización Financiera",
                desc: "Gracias a nuestro aliado Wompi, eliminamos la barrera del capital. Si tienes la visión, tienes la financiación.",
              },
              {
                icon: FileCheck,
                label: "Transparencia de Salida",
                desc: "Nuestra mayor garantía de calidad es que no te obligamos a quedarte. Si algún día decides migrar, facilitamos la entrega de tus activos mediante un Contrato de Transferencia claro y directo.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-card rounded-xl p-6 text-center border border-border"
              >
                <item.icon className="w-8 h-8 text-secondary mx-auto mb-3" />
                <h4 className="font-display font-bold text-foreground text-lg">
                  {item.label}
                </h4>
                <p className="text-sm text-muted-foreground font-body mt-1">
                  {item.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Por qué Nasua */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
              ¿Por qué construir tu sitio web con Nasua es tu{" "}
              <span className="text-gradient">mejor decisión</span>?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Cero curva de aprendizaje",
                text: "No tienes que aprender a usar herramientas difíciles.",
              },
              {
                icon: ShieldCheck,
                title: "Seguridad Continua",
                text: "Nosotros vigilamos que tu sitio esté en línea y seguro.",
              },
              {
                icon: Headphones,
                title: "Soporte de Élite",
                text: "Un equipo que entiende tu negocio en Colombia y ejecuta tus cambios en tiempo récord.",
              },
            ].map((pillar) => (
              <motion.div
                key={pillar.title}
                {...fadeUp}
                className="bg-card rounded-xl p-8 border border-border hover:border-secondary/50 transition-colors"
              >
                <pillar.icon className="w-10 h-10 text-accent mb-4" />
                <h4 className="font-display font-bold text-foreground text-xl mb-3">
                  {pillar.title}
                </h4>
                <p className="text-muted-foreground font-body leading-relaxed">
                  {pillar.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AdnNasua;
