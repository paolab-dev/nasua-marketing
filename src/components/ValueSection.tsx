import { motion } from "framer-motion";
import { Globe, Bot, Target, Film, PenTool, Cog, Palette, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { ClientOnly } from "@/components/ClientOnly";

const pillars = [
  {
    icon: Globe,
    title: "Web de Alto Rendimiento",
    text: "Sitios ultra-rápidos, soberanos y listos para convertir.",
    href: "/infraestructura-digital",
  },
  {
    icon: Bot,
    title: "Visibilidad IA (SEO & GEO)",
    text: "Sé la respuesta que Google y ChatGPT recomiendan.",
    href: "/seo-geo",
  },
  {
    icon: Target,
    title: "Pauta Digital (Performance)",
    text: "Inversión estratégica en anuncios con retorno medible.",
    href: "/pauta-digital",
  },
  {
    icon: Film,
    title: "Estrategia & Contenido Social",
    text: "Autoridad visual y narrativa con producción profesional.",
    href: "/estrategia",
  },
  {
    icon: PenTool,
    title: "Copywriting",
    text: "Persuasión para convertir clics en ventas.",
    href: "/copywriting",
  },
  {
    icon: Cog,
    title: "Automatización",
    text: "Sistemas y CRMs que trabajan para ti.",
    href: "/automatizacion",
  },
  {
    icon: Palette,
    title: "Branding",
    text: "Identidad sólida para destacar en mercados internacionales.",
    href: "/branding",
  },
  {
    icon: Wrench,
    title: "Webmaster & Soporte Técnico",
    text: "Tu sitio web siempre al 100%, seguro y actualizado.",
    href: "/infraestructura-digital",
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
      <div className="container mx-auto max-w-6xl">
        <ClientOnly minHeight="150px">
          <motion.div {...fadeUp} className="text-center mb-14 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-display mb-6">
              Soluciones estratégicas para{" "}
              <span className="text-gradient">escalar tu facturación</span>.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Ocho pilares estratégicos diseñados para que tu empresa sea la autoridad de su industria.
            </p>
          </motion.div>
        </ClientOnly>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((p, i) => (
            <ClientOnly key={p.title} minHeight="200px">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
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
            </ClientOnly>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
