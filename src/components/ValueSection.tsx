import { motion } from "framer-motion";
import { Palette, Layout, Globe, Target, Search, PenTool, Cog } from "lucide-react";
import { Link } from "react-router-dom";

const pillars = [
  {
    icon: Palette,
    title: "Branding & Autoridad",
    text: "Construimos la identidad visual necesaria para cerrar contratos de alto nivel y proyectar solidez.",
    href: "/branding",
  },
  {
    icon: Layout,
    title: "UX/UI Estratégico",
    text: "Diseñamos interfaces que eliminan la fricción y guían al usuario hacia la conversión final.",
    href: "/infraestructura-digital",
  },
  {
    icon: Globe,
    title: "Web de Alto Rendimiento",
    text: "Activos rápidos (Vibe Coding) y soberanos. Tú eres el dueño absoluto de cada línea de código.",
    href: "/infraestructura-digital",
  },
  {
    icon: Target,
    title: "Pauta Digital",
    text: "Inyectamos tráfico calificado en Google y Meta para generar retornos de inversión medibles.",
    href: "/pauta-digital",
  },
  {
    icon: Search,
    title: "SEO & Visibilidad IA",
    text: "Posicionamos tu marca donde tus clientes buscan hoy y donde las IAs responderán mañana.",
    href: "/seo-geo",
  },
  {
    icon: PenTool,
    title: "Copywriting Estratégico",
    text: "Redactamos mensajes persuasivos que transforman el interés del usuario en una decisión de compra.",
    href: "/copywriting",
  },
  {
    icon: Cog,
    title: "Automatización Operativa",
    text: "Implementamos CRMs y sistemas que atienden prospectos en tiempo real para que no pierdas ventas.",
    href: "/automatizacion",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

const ValueSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-5xl">
        <motion.div {...fadeUp} className="text-center mb-14 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-display mb-6">
            Activamos tu ecosistema de{" "}
            <span className="text-gradient">crecimiento</span>.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Entendemos que la web es solo el inicio. Operamos bajo la superficie para asegurar que tu negocio sea sostenible y rentable.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={p.href}
                className="block bg-card rounded-xl p-8 border border-border hover:border-secondary/50 hover:shadow-md transition-all text-center h-full group"
              >
                <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-5 group-hover:bg-secondary/30 transition-colors">
                  <p.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-display font-medium text-xl text-foreground mb-3 group-hover:text-secondary transition-colors">
                  {p.title}
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed">
                  {p.text}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
