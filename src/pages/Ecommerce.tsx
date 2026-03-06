import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CreditCard, MessageCircle, Settings, Smartphone, Shield, Phone, ClipboardCheck, Zap, Rocket } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

const faqItems = [
  {
    q: "¿Qué es mejor: venta automática o cierre por WhatsApp?",
    a: "Depende de tu negocio. Si tus productos son estándar, la venta automática te da escala. Si tus productos requieren asesoría o personalización, el cierre por WhatsApp genera más confianza y aumenta el ticket promedio.",
  },
  {
    q: "¿Puedo empezar con WhatsApp y luego pasar a venta automática?",
    a: "Absolutamente. La infraestructura de Nasua es escalable. Puedes iniciar captando clientes por chat y, cuando estés listo, activamos la pasarela de pagos para automatizar el cobro.",
  },
  {
    q: "¿Con qué pasarelas de pago se puede integrar la tienda?",
    a: "Nos integramos con las pasarelas líderes en Colombia (como Wompi, PayU o ePayco). El objetivo es que recibas tarjetas, PSE y efectivo de la manera más cómoda para ti.",
  },
  {
    q: "¿Cómo funciona el pedido por WhatsApp?",
    a: "El cliente navega por tu tienda, añade productos al carrito y, al finalizar, el sistema genera un mensaje automático detallado que llega a tu WhatsApp con la lista de productos y el total.",
  },
  {
    q: "¿Tengo que pagar comisiones a Nasua por mis ventas?",
    a: "No. En ninguno de los dos modelos cobramos comisiones. Tu éxito y tu rentabilidad son 100% tuyos.",
  },
  {
    q: "¿Puedo financiar la creación de mi tienda virtual?",
    a: "Sí, ofrecemos opciones de financiación para que no descapitalices tu negocio. Puedes pagar tu infraestructura a cuotas mientras empiezas a vender.",
  },
  {
    q: "¿Quién se encarga de subir los productos y precios?",
    a: "En el modelo gestionado, nosotros te apoyamos con la configuración inicial y cambios importantes para que tu tienda siempre luzca profesional y sin errores.",
  },
  {
    q: "¿Mi tienda virtual es apta para vender servicios o solo productos?",
    a: "Funciona para ambos. Puedes tener un catálogo de servicios que lleve a una cita por WhatsApp o una venta directa de un paquete de servicios.",
  },
  {
    q: "¿Qué pasa si quiero cambiar mi número de WhatsApp o mi pasarela?",
    a: "Solo nos lo pides y nosotros lo actualizamos. Al ser una infraestructura gestionada, tú no tienes que pelear con configuraciones técnicas.",
  },
  {
    q: "¿Soy el dueño de la información de mis clientes?",
    a: "Siempre. A diferencia de las redes sociales, en tu tienda tú posees la base de datos de quienes te compran o te consultan, permitiéndote hacer marketing directo en el futuro.",
  },
];

const steps = [
  { icon: Phone, title: "Conexión Comercial", text: "Cuéntanos qué vendes y cómo quieres cobrar." },
  { icon: ClipboardCheck, title: "Evaluación de Catálogo", text: "Verificamos que tus productos se adapten a nuestro motor de ventas automático o vía WhatsApp." },
  { icon: CreditCard, title: "Inversión y Financiación", text: "Activas el proyecto con pago único o cuotas Wompi." },
  { icon: Zap, title: "Sprint de Configuración", text: "7 días para subir tu inventario, integrar pagos y dejar tu local abierto 24/7." },
  { icon: Rocket, title: "Venta y Operación", text: "Recibes tus primeros pedidos mientras nosotros vigilamos la estabilidad de tu tienda." },
];

const Ecommerce = () => {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <div className="bg-background text-foreground">
      <Helmet>
        <title>Tienda Virtual en Colombia | E-commerce Gestionado | Nasua</title>
        <meta name="description" content="Lanzamos tu tienda virtual en 7 días. Vende en automático con pasarela de pagos o cierra por WhatsApp. Infraestructura gestionada y financiada con Wompi." />
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary/20" />
        <div className="relative z-10 container mx-auto px-6 py-32 text-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground font-display"
          >
            Tu Tienda Virtual en Colombia: Vende en Automático o{" "}
            <span className="text-gradient">Cierra por WhatsApp</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-primary-foreground/80 font-body max-w-3xl mx-auto"
          >
            Lanzamos y gestionamos la infraestructura de ventas que tu negocio necesita. Elige entre cobros automáticos 24/7 o un catálogo profesional que lleve a tus clientes directo a tu WhatsApp. Listo en 7 días y financiado.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10"
          >
            <a
              href="#maquinaria-ventas"
              className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg"
            >
              Elegir mi modelo de Tienda
            </a>
          </motion.div>
        </div>
      </section>

      {/* Elige tu Maquinaria */}
      <section id="maquinaria-ventas" className="py-20 md:py-28 bg-background scroll-mt-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground">
              Elige tu Maquinaria de <span className="text-gradient">Ventas</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Ruta A */}
            <motion.div
              {...fadeUp}
              className="bg-card rounded-2xl border border-border p-8 md:p-10 hover:border-secondary/50 transition-colors"
            >
              <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mb-6">
                <CreditCard className="w-7 h-7 text-secondary" />
              </div>
              <p className="text-secondary font-bold text-sm uppercase tracking-wider mb-2">Ruta A</p>
              <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                Venta en Automático
              </h3>
              <p className="text-sm font-semibold text-secondary font-body mb-4">
                Para escalar sin límites.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                Pasarela de pagos integrada para que el dinero entre a tu cuenta sin mover un dedo. Ideal para productos estandarizados.
              </p>
              <p className="text-sm font-semibold text-foreground font-body">
                ✦ Cero intervención humana.
              </p>
            </motion.div>

            {/* Ruta B */}
            <motion.div
              {...fadeUp}
              className="bg-card rounded-2xl border border-border p-8 md:p-10 hover:border-accent/50 transition-colors"
            >
              <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                <MessageCircle className="w-7 h-7 text-accent" />
              </div>
              <p className="text-accent font-bold text-sm uppercase tracking-wider mb-2">Ruta B</p>
              <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                Cierre en WhatsApp
              </h3>
              <p className="text-sm font-semibold text-accent font-body mb-4">
                Para asesorar y cerrar.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                Catálogo profesional donde el cliente elige y te envía el pedido listo al chat. Ideal para ventas consultivas.
              </p>
              <p className="text-sm font-semibold text-foreground font-body">
                ✦ El poder del contacto humano.
              </p>
            </motion.div>
          </div>

          <motion.div {...fadeUp} className="text-center mt-12">
            <a
              href="https://www.bancolombia.com/pagos/compra-y-paga-despues"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg"
            >
              Empieza ahora con Wompi
            </a>
          </motion.div>
        </div>
      </section>

      {/* 3 Pilares */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h3 className="text-2xl md:text-4xl font-bold font-display text-foreground">
              Los 3 Pilares del <span className="text-gradient">E-commerce Nasua</span>
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Settings,
                title: "Infraestructura Gestionada",
                text: "No importa cuál ruta elijas, nosotros operamos la técnica. Tú solo cargas productos o atiendes chats.",
              },
              {
                icon: Smartphone,
                title: "Diseño que Convierte",
                text: "Tiendas rápidas, optimizadas para celular y diseñadas para que el cliente no se pierda en el camino.",
              },
              {
                icon: Shield,
                title: "Propiedad Legal",
                text: "Eres el dueño de tu catálogo y de la base de datos de tus clientes. Nosotros solo somos tu motor técnico.",
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

      {/* Proceso en 5 pasos */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-2xl md:text-4xl font-bold font-display text-foreground">
              El camino hacia tu <span className="text-gradient">tienda virtual</span> automatizada
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <motion.div key={step.title} {...fadeUp} className="text-center">
                <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-7 h-7 text-secondary" />
                </div>
                <p className="text-secondary font-bold text-sm mb-1">Paso {i + 1}</p>
                <h3 className="font-display font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm font-body leading-relaxed">{step.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.p {...fadeUp} className="text-center text-muted-foreground text-sm mt-10 italic">
            El plazo de 7 días hábiles inicia una vez Nasua reciba la totalidad de la información necesaria (logos, textos y fotos) por parte del cliente.
          </motion.p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-2xl md:text-4xl font-bold font-display text-foreground">
              Preguntas <span className="text-gradient">Frecuentes</span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {faqItems.map((item, i) => (
              <motion.details
                key={i}
                {...fadeUp}
                className="group bg-card rounded-xl border border-border p-6 cursor-pointer hover:border-secondary/50 transition-colors"
              >
                <summary className="font-display font-bold text-foreground list-none flex items-center justify-between">
                  <span>{item.q}</span>
                  <span className="text-secondary ml-4 group-open:rotate-45 transition-transform text-2xl">+</span>
                </summary>
                <p className="text-muted-foreground font-body leading-relaxed mt-4">
                  {item.a}
                </p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Ecommerce;
