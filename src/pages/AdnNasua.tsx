import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Zap, Heart, Award, Globe, Users } from "lucide-react";

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
            ADN Nasua
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground font-display"
          >
            La Agencia de Crecimiento que revoluciona la{" "}
            <span className="text-gradient">Propiedad Digital</span> en Colombia.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-primary-foreground/80 font-body max-w-3xl mx-auto"
          >
            No somos una fábrica de páginas; somos los arquitectos de tu infraestructura
            comercial. Unimos tecnología de vanguardia con un modelo ético donde el dueño
            de negocio siempre tiene el control.
          </motion.p>
        </div>
      </section>

      {/* Manifiesto */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div {...fadeUp} className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground">
              Soberanía o <span className="text-gradient">Secuestro</span>
            </h2>
          </motion.div>
          <motion.blockquote
            {...fadeUp}
            className="relative border-l-4 border-secondary pl-6 md:pl-10 text-lg md:text-xl leading-relaxed text-muted-foreground font-body italic"
          >
            "En el mercado tradicional, muchos te 'alquilan' tu propio negocio. Te entregan
            un sitio, pero se quedan con las llaves. En Nasua, nacimos para romper ese modelo.
            Creemos que la <strong className="text-foreground">Soberanía Digital</strong> es
            un derecho: si tú pagas por la herramienta, la herramienta debe ser 100% tuya.
            Sin letras chiquitas, sin contratos de amarre."
          </motion.blockquote>
        </div>
      </section>

      {/* Metodología */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div {...fadeUp} className="text-center mb-8">
            <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground">
              Eficiencia <span className="text-gradient">Radical</span>
            </h2>
            <p className="mt-3 text-lg text-muted-foreground font-body">
              Por qué somos los más rápidos de Colombia.
            </p>
          </motion.div>
          <motion.p
            {...fadeUp}
            className="text-lg md:text-xl leading-relaxed text-muted-foreground font-body text-center max-w-3xl mx-auto"
          >
            El mundo no espera. Tu negocio tampoco. En Nasua implementamos{" "}
            <strong className="text-foreground">Vibe Coding</strong>, un método donde
            nuestros expertos humanos potencian su capacidad con Inteligencia Artificial
            profesional. Esto nos permite comprimir meses de desarrollo en solo{" "}
            <strong className="text-foreground">7 días</strong>, sin sacrificar ni un pixel
            de calidad técnica.
          </motion.p>

          <motion.div {...fadeUp} className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              { icon: Zap, label: "7 días", desc: "De concepto a sitio en línea" },
              { icon: Shield, label: "IA Profesional", desc: "Calidad humana amplificada" },
              { icon: Heart, label: "Sin atajos", desc: "Pixel-perfect, siempre" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-card rounded-xl p-6 text-center border border-border"
              >
                <item.icon className="w-8 h-8 text-secondary mx-auto mb-3" />
                <h4 className="font-display font-bold text-foreground text-lg">{item.label}</h4>
                <p className="text-sm text-muted-foreground font-body mt-1">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pilares de Confianza */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h3 className="text-2xl md:text-4xl font-bold font-display text-foreground">
              Pilares de <span className="text-gradient">Confianza</span>
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Respaldo Wompi",
                text: "Democratizamos el acceso a la tecnología. Si tienes un sueño y una cédula, tienes la financiación para tu local digital.",
              },
              {
                icon: Globe,
                title: "Certificación de Propiedad",
                text: "Cada proyecto se entrega con un certificado legal donde Nasua cede el 100% de los derechos del código y dominio al cliente.",
              },
              {
                icon: Users,
                title: "ADN Colombiano",
                text: "Entendemos los desafíos del empresario local. Hablamos tu mismo idioma, sin tecnicismos que confunden.",
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
