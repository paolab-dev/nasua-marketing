import { motion } from "framer-motion";
import { FileText, Building2, ShoppingCart } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Landing Page",
    purpose: "Para vender YA.",
    goal: "Para generar CONFIANZA.",
    desc: "Una página directa enfocada en que te contacten o compren un solo producto.",
    href: "/landing-page",
  },
  {
    icon: Building2,
    title: "Sitio web empresarial",
    purpose: "Para generar CONFIANZA.",
    goal: "Para cobrar en AUTOMÁTICO.",
    desc: "Tu oficina virtual completa para mostrar tus servicios y atraer mejores clientes.",
    href: "/sitio-corporativo",
  },
  {
    icon: ShoppingCart,
    title: "Tienda virtual",
    purpose: "Para cobrar en AUTOMÁTICO.",
    goal: "O a través del WHATSAPP DE TU NEGOCIO.",
    desc: "Tu local abierto 24/7. Catálogo, carrito de compras y pagos con Wompi.",
    href: "/ecommerce",
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-primary">
      <div className="container mx-auto max-w-5xl">
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
              <h3 className="font-display font-bold text-xl text-primary-foreground mb-2">
                {s.title}
              </h3>
              <p className="text-accent font-semibold text-sm mb-3">
                {s.purpose}
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
