import { motion } from "framer-motion";
import { FileText, Building2, ShoppingCart } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Landing Page",
    subtitle: "Ventas Relámpago",
    time: "2 días hábiles",
    desc: "Ideal para captar leads y vender un producto o servicio específico ya mismo.",
    href: "/landing-page",
  },
  {
    icon: Building2,
    title: "Web Empresarial",
    subtitle: "Autoridad Corporativa",
    time: "5 días hábiles",
    desc: "Perfecta para oficinas de servicios, consultores y empresas que buscan proyectar confianza.",
    href: "/sitio-corporativo",
  },
  {
    icon: ShoppingCart,
    title: "Tienda Virtual",
    subtitle: "Venta en Automático",
    time: "Hasta 10 días hábiles",
    desc: "Tu local abierto 24/7 con catálogo integrado y cierre por WhatsApp o pasarela de pagos.",
    href: "/ecommerce",
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-primary">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display text-primary-foreground">
            Infraestructura Digital diseñada para la{" "}
            <span className="text-gradient">velocidad de tu negocio</span>.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-8 border border-primary-foreground/20 text-center flex flex-col"
            >
              <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-5">
                <s.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-display font-medium text-xl text-primary-foreground mb-1">
                {s.title}
              </h3>
              <p className="text-accent font-semibold text-sm mb-2">
                {s.subtitle}
              </p>
              <p className="text-secondary font-bold text-sm mb-3">
                ⏱ {s.time}
              </p>
              <p className="text-primary-foreground/70 text-sm flex-1 mb-6">
                {s.desc}
              </p>
              <a
                href={s.href}
                className="inline-block border border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-semibold px-6 py-3 rounded-lg transition-all"
              >
                Ver más
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
