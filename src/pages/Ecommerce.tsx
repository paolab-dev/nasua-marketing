import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShoppingCart, MessageCircle, Shield, CreditCard, Search } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

const Ecommerce = () => {
  return (
    <div className="bg-background text-foreground">
      <Navbar />

      {/* 1. Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent/20" />
        <div className="relative z-10 container mx-auto px-6 py-32 text-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground font-display"
          >
            Crea tu Página Web Profesional en 7 días:{" "}
            <span className="text-gradient">
              Con Financiación Wompi y Control Total del Código.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-primary-foreground/80 font-body max-w-3xl mx-auto"
          >
            Lanzamos tu infraestructura de ventas hoy. Elige cobro automático o cierre
            por WhatsApp. Tú pones el negocio, nosotros la tecnología y Wompi la financiación.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contacto"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg"
            >
              Iniciar Proyecto
            </a>
            <a
              href="#credito"
              className="border-2 border-primary-foreground/50 hover:border-primary-foreground text-primary-foreground font-semibold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105"
            >
              🔍 Realizar mi estudio de crédito con Wompi
            </a>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-4 text-xs text-primary-foreground/50 font-body"
          >
            Análisis inmediato. Tu cupo depende de tu buen historial financiero, sin compromisos con Nasua.
          </motion.p>
        </div>
      </section>

      {/* 2. Barra de Confianza */}
      <section className="py-8 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-muted-foreground font-body mb-4">
            Habilitamos tu crecimiento con el respaldo de:
          </p>
          <div className="flex items-center justify-center gap-6">
            <div className="bg-card border border-border rounded-lg px-6 py-3">
              <span className="font-display font-bold text-xl text-foreground">Wompi</span>
              <span className="block text-xs text-muted-foreground">by Bancolombia</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. eCommerce Adaptativo */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground">
              Tú defines el canal, nosotros la <span className="text-gradient">potencia</span>.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              {...fadeUp}
              className="bg-card rounded-2xl border border-border p-8 md:p-10 hover:border-secondary/50 transition-colors"
            >
              <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mb-6">
                <CreditCard className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-display font-bold text-2xl text-foreground mb-3">
                Cobro Automático
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                Integración total con pasarela Wompi. Tu cliente elige, paga y recibe
                confirmación sin intervención humana.
              </p>
              <p className="text-sm font-semibold text-secondary font-body">
                ✦ Ideal para productos de venta rápida.
              </p>
              <div className="mt-6 bg-muted/50 rounded-xl p-5 border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <ShoppingCart className="w-5 h-5 text-accent" />
                  <span className="text-sm font-semibold text-foreground font-body">Ejemplo: Pasarela de pagos</span>
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-muted rounded w-full" />
                  <div className="h-3 bg-muted rounded w-3/4" />
                  <div className="flex gap-2 mt-3">
                    <div className="h-8 bg-secondary/20 rounded flex-1 flex items-center justify-center">
                      <span className="text-xs text-secondary font-semibold">💳 Pagar</span>
                    </div>
                    <div className="h-8 bg-accent/20 rounded flex-1 flex items-center justify-center">
                      <span className="text-xs text-accent font-semibold">PSE</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              {...fadeUp}
              className="bg-card rounded-2xl border border-border p-8 md:p-10 hover:border-accent/50 transition-colors"
            >
              <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                <MessageCircle className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display font-bold text-2xl text-foreground mb-3">
                Cierre por WhatsApp
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                Embudo hacia chat asistido por agentes de IA o representantes de ventas
                de tu empresa.
              </p>
              <p className="text-sm font-semibold text-accent font-body">
                ✦ Ideal para ventas que requieren confianza y asesoría.
              </p>
              <div className="mt-6 bg-muted/50 rounded-xl p-5 border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <MessageCircle className="w-5 h-5 text-secondary" />
                  <span className="text-sm font-semibold text-foreground font-body">Ejemplo: Embudo a WhatsApp</span>
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-muted rounded w-full" />
                  <div className="h-3 bg-muted rounded w-2/3" />
                  <div className="mt-3 h-8 bg-secondary/20 rounded flex items-center justify-center">
                    <span className="text-xs text-secondary font-semibold">💬 Hablar por WhatsApp</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Soberanía */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <motion.div {...fadeUp}>
            <Shield className="w-12 h-12 text-secondary mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold font-display text-primary-foreground mb-6">
              Tu código es tuyo. <span className="text-gradient">Punto.</span>
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/80 font-body leading-relaxed">
              En 2026, depender de una agencia que retiene tus accesos es un riesgo.
              Con Nasua, recibes el código fuente y el control total de tus activos.
              Usamos <strong className="text-primary-foreground">Vibe Coding</strong> para
              entregarte una web blindada, rápida y 100% soberana.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 5. Gancho Wompi */}
      <section id="credito" className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <motion.div {...fadeUp}>
            <Search className="w-12 h-12 text-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground mb-6">
              ¿Quieres saber si tienes el{" "}
              <span className="text-gradient">crédito aprobado</span>?
            </h2>
            <p className="text-lg text-muted-foreground font-body leading-relaxed mb-8">
              No necesitas descapitalizarte para tener tecnología de punta. El estudio
              de crédito es gestionado íntegramente por Wompi (Bancolombia). Si tienes
              un buen comportamiento financiero, ellos financian tu transformación digital.
            </p>
            <a
              href="#contacto"
              className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg"
            >
              🔍 Iniciar análisis de crédito en Wompi
            </a>
            <p className="mt-4 text-xs text-muted-foreground/70 font-body max-w-lg mx-auto">
              Nasua no otorga créditos ni influye en la decisión de Wompi. Tu responsabilidad
              crediticia es con la entidad financiera.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Ecommerce;
