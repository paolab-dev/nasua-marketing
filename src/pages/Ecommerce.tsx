import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EcommerceLeadForm from "@/components/EcommerceLeadForm";
import { MessageCircle, CreditCard, Search, Smartphone, CheckCircle, Zap, Package, Rocket, ShoppingCart, Shield, Users } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

const faqItems = [
  {
    q: "¿Por qué varían los precios entre los dos modelos de tienda?",
    a: "Porque la Venta Automática requiere una integración técnica más compleja con entidades bancarias y pasarelas de pago, además de una configuración de seguridad más robusta. El Modelo WhatsApp es más sencillo y económico de implementar.",
  },
  {
    q: "¿Puedo empezar con WhatsApp y después pasar a Pasarela de Pagos?",
    a: "¡Claro que sí! Nuestra infraestructura es escalable. Puedes iniciar con el modelo de WhatsApp para validar tus ventas y, cuando estés listo para automatizar, hacemos el upgrade a la pasarela de pagos.",
  },
  {
    q: "¿Nasua cobra comisión por mis ventas en alguno de los modelos?",
    a: "Nunca. El 100% de lo que vendas es tuyo. Nosotros cobramos por la creación y gestión técnica de la tienda, no por tus resultados.",
  },
  {
    q: "¿La opción de WhatsApp incluye el carrito de compras?",
    a: "Sí. El cliente puede ir sumando productos a un carrito y, al finalizar, el sistema le genera un resumen profesional que te llega a tu WhatsApp con el listado y el total de la compra.",
  },
  {
    q: "¿Qué necesito para la opción de Pasarela de Pagos?",
    a: "Necesitas tener una cuenta activa en una pasarela (como Wompi). Si no la tienes, nosotros te orientamos en el proceso, pero recuerda que este modelo tiene un costo de implementación técnica diferente.",
  },
  {
    q: "¿Cómo ayuda la organización de textos a mi tienda?",
    a: "Nos aseguramos que los nombres y descripciones de tus productos sigan una lógica que Google premia. Esto significa que tienes más oportunidades de aparecer cuando alguien busque lo que tú vendes en internet.",
  },
  {
    q: "¿Puedo pagar cualquiera de los dos modelos con Wompi a cuotas?",
    a: "Sí. Ambos modelos pueden financiarse hasta en 4 cuotas usando Wompi, facilitando tu flujo de caja desde el primer día.",
  },
  {
    q: "¿Quién se encarga de subir los productos?",
    a: "Nosotros te entregamos la tienda con tu inventario inicial configurado. Como es una infraestructura gestionada, si en el futuro necesitas cambios masivos, nuestro equipo de soporte técnico los ejecuta por ti.",
  },
  {
    q: "¿La tienda es fácil de usar desde un celular?",
    a: "Totalmente. Diseñamos cada tienda bajo el concepto Mobile-First, asegurando que comprar desde un smartphone sea rápido, fluido y sin errores.",
  },
  {
    q: "¿Qué pasa con la propiedad legal de mis clientes?",
    a: "Toda la base de datos de los clientes que te compren o te contacten es tuya. Nasua solo opera la tecnología; tú eres el dueño legal de toda la información y de tu marca.",
  },
];

const steps = [
  { icon: CheckCircle, title: "Elección del Modelo", text: "Decides entre WhatsApp o Pasarela según tu necesidad y presupuesto." },
  { icon: CreditCard, title: "Activación y Pago", text: "Inicias el proyecto (puedes financiar hasta en 4 cuotas con Wompi)." },
  { icon: Package, title: "Carga de Insumos", text: "Nos envías el listado de productos, precios y fotos." },
  { icon: Search, title: "Optimización Semántica", text: "Pulimos tus descripciones para que Google te prefiera." },
  { icon: Rocket, title: "Lanzamiento", text: "En máximo 10 días tu tienda está facturando." },
];

const Ecommerce = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [preselectedModel, setPreselectedModel] = useState<string | undefined>();

  const openFormWithModel = (model: string) => {
    setPreselectedModel(model);
    setFormOpen(true);
  };

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
        <meta name="description" content="Tienda virtual profesional en 10 días. Elige entre catálogo con cierre por WhatsApp o venta automática con pasarela de pagos. Calidad de élite a precio justo." />
        <meta property="og:title" content="Tienda Virtual en Colombia | E-commerce Gestionado | Nasua" />
        <meta property="og:description" content="Tienda virtual profesional en 10 días. Catálogo WhatsApp o venta automática con pasarela de pagos." />
        <meta property="og:image" content="https://nasua.co/EmpezarProyectoNasua.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://nasua.co/EmpezarProyectoNasua.jpg" />
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
            Tienda Virtual Profesional en 10 días:{" "}
            <span className="text-gradient">Elige cómo quieres vender.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-primary-foreground/80 font-body max-w-3xl mx-auto"
          >
            Desde catálogos ágiles para cerrar ventas por WhatsApp hasta infraestructuras 100% automatizadas con pasarela de pagos. Calidad de élite a precio justo y lista en máximo 10 días. Tú eliges el modelo que mejor se adapte a tu presupuesto y operación.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#modelos-tienda"
              className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg"
            >
              Ver modelos y precios
            </a>
            <a
              href="https://www.bancolombia.com/pagos/compra-y-paga-despues"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-primary-foreground/40 hover:border-primary-foreground text-primary-foreground font-semibold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105"
            >
              Financia hasta en 4 cuotas con Wompi
            </a>
          </motion.div>
        </div>
      </section>

      {/* Elige tu Motor de Ventas */}
      <section id="modelos-tienda" className="py-20 md:py-28 bg-background scroll-mt-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground">
              Elige tu Motor de <span className="text-gradient">Ventas</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Opción A: WhatsApp */}
            <motion.div
              {...fadeUp}
              className="bg-card rounded-2xl border border-border p-8 md:p-10 hover:border-accent/50 transition-colors"
            >
              <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                <MessageCircle className="w-7 h-7 text-accent" />
              </div>
              <p className="text-accent font-bold text-sm uppercase tracking-wider mb-2">Opción A</p>
              <h3 className="font-display font-medium text-2xl text-foreground mb-2">
                Venta Directa a WhatsApp
              </h3>
              <p className="text-sm font-semibold text-accent font-body mb-4">
                Modelo Ágil
              </p>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                Ideal para negocios que prefieren el cierre humano o asesorado. Tus clientes eligen los productos en un catálogo profesional y te envían el pedido detallado directamente a tu chat.
              </p>
              <p className="text-sm font-semibold text-foreground font-body mb-4">
                ✦ Más económico, configuración rápida y control total del contacto con el cliente.
              </p>
              <p className="text-lg font-bold text-accent font-display mb-6">
                Desde $X.XXX.XXX
              </p>
              <button
                onClick={() => openFormWithModel("whatsapp")}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-6 py-3 rounded-lg transition-all hover:scale-105 shadow-lg"
              >
                Crear tienda por WhatsApp
              </button>
            </motion.div>

            {/* Opción B: Pasarela */}
            <motion.div
              {...fadeUp}
              className="bg-card rounded-2xl border border-border p-8 md:p-10 hover:border-secondary/50 transition-colors"
            >
              <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mb-6">
                <CreditCard className="w-7 h-7 text-secondary" />
              </div>
              <p className="text-secondary font-bold text-sm uppercase tracking-wider mb-2">Opción B</p>
              <h3 className="font-display font-medium text-2xl text-foreground mb-2">
                Venta 100% Automática
              </h3>
              <p className="text-sm font-semibold text-secondary font-body mb-4">
                Modelo Escala
              </p>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                Para negocios que buscan vender sin mover un dedo. Integramos una pasarela de pagos (Wompi, PayU, ePayco) para que el cliente pague de inmediato con tarjeta o PSE.
              </p>
              <p className="text-sm font-semibold text-foreground font-body mb-4">
                ✦ Automatización total, cobros 24/7 y gestión de pedidos sin intervención humana.
              </p>
              <p className="text-lg font-bold text-secondary font-display mb-6">
                Desde $Y.YYY.YYY
              </p>
              <button
                onClick={() => openFormWithModel("automatica")}
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-6 py-3 rounded-lg transition-all hover:scale-105 shadow-lg"
              >
                Crear tienda automática
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* El Valor Nasua */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div {...fadeUp} className="text-center">
            <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6">
              <Search className="w-8 h-8 text-secondary" />
            </div>
            <h2 className="text-2xl md:text-4xl font-bold font-display text-foreground mb-6">
              No solo subimos productos:{" "}
              <span className="text-gradient">Organizamos tu catálogo para Google.</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed text-lg max-w-3xl mx-auto">
              Sin importar el modelo que elijas, en Nasua tomamos la información de tus productos y la organizamos para que Google la entienda de inmediato. Le 'hablamos clarito' al buscador sobre lo que vendes, ayudando a que tus productos aparezcan en los resultados de búsqueda de forma orgánica.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Proceso de 10 días */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-2xl md:text-4xl font-bold font-display text-foreground">
              El Proceso de <span className="text-gradient">10 Días</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <motion.div key={step.title} {...fadeUp} className="text-center">
                <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-7 h-7 text-secondary" />
                </div>
                <p className="text-secondary font-bold text-sm mb-1">Paso {i + 1}</p>
                <h3 className="font-display font-medium text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm font-body leading-relaxed">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-2xl md:text-4xl font-bold font-display text-foreground">
              Preguntas <span className="text-gradient">frecuentes</span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {faqItems.map((item, i) => (
              <motion.details
                key={i}
                {...fadeUp}
                className="group bg-card rounded-xl border border-border p-6 cursor-pointer hover:border-secondary/50 transition-colors"
              >
                <summary className="font-body font-bold text-foreground list-none flex items-center justify-between">
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

      <EcommerceLeadForm open={formOpen} onOpenChange={setFormOpen} preselectedModel={preselectedModel} />
      <Footer />
    </div>
  );
};

export default Ecommerce;
