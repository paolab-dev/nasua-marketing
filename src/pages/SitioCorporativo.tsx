import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, Wrench, Shield, Phone, ClipboardCheck, CreditCard, Zap, Rocket } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

const faqItems = [
  {
    q: "¿Qué es un sitio web empresarial gestionado?",
    a: "Es una solución donde Nasua diseña y administra la presencia digital de tu empresa. Nosotros nos encargamos del mantenimiento, seguridad y actualizaciones, para que tú no tengas que aprender a programar ni contratar personal técnico interno.",
  },
  {
    q: "¿Cómo ayuda Wompi a financiar mi sitio corporativo?",
    a: "Gracias a nuestra alianza, puedes diferir el costo de tu sitio web en cuotas mensuales con tarjetas de crédito o PSE. Es la forma más inteligente de profesionalizar tu imagen sin descapitalizar tu operación de contado.",
  },
  {
    q: "¿Por qué es mejor que Nasua gestione mi web en lugar de hacerlo yo?",
    a: "Un sitio empresarial requiere seguridad constante y optimización de velocidad. Al delegarlo en Nasua, garantizas que tu imagen siempre sea perfecta y que expertos resuelvan cualquier duda técnica en minutos, ahorrándote horas de frustración.",
  },
  {
    q: "¿Quién figura como dueño legal del dominio y la web?",
    a: "Tú. Aunque nosotros operamos la infraestructura, el dominio y los archivos son de tu propiedad legal. Esto queda estipulado en nuestro contrato de transparencia para tu total tranquilidad.",
  },
  {
    q: "¿Mi empresa tendrá correos electrónicos corporativos?",
    a: "Sí. Parte de tu sede digital es proyectar seriedad. Incluimos la configuración de correos profesionales (ej: contacto@tuempresa.com) para que cada comunicación que envíes refuerce tu marca.",
  },
  {
    q: "¿El sitio web estará optimizado para Google en Colombia?",
    a: "Totalmente. Aplicamos arquitectura semántica y SEO local para que, cuando busquen tus servicios en tu ciudad, tu empresa aparezca como una opción de autoridad ante los algoritmos de búsqueda.",
  },
  {
    q: "¿Qué pasa si necesito añadir un nuevo servicio o proyecto al sitio?",
    a: "Con nuestro modelo gestionado, simplemente nos envías la información y nosotros la subimos con el diseño correcto. Así mantienes la coherencia visual sin riesgo de dañar la estructura del sitio.",
  },
  {
    q: "¿Qué seguridad tiene mi sitio web empresarial contra ataques?",
    a: "Implementamos capas de seguridad de última generación y monitoreo constante. Al ser un sitio gestionado por Nasua, nosotros respondemos por la integridad técnica de tu oficina virtual 24/7.",
  },
  {
    q: "¿Puedo pedir que me entreguen el sitio si decido irme de Nasua?",
    a: "Sí. Contamos con un Contrato de Transferencia Transparente. Si decides llevarte tu web a otro proveedor, te entregamos todos tus activos digitales de manera organizada y sin obstáculos.",
  },
  {
    q: "¿Por qué un sitio web es mejor que solo tener redes sociales?",
    a: "Las redes sociales son \"terreno alquilado\" que puede cambiar sus reglas en cualquier momento. Un sitio web empresarial es tu activo propio, el centro de tu ecosistema digital donde tú controlas la narrativa y la experiencia del cliente.",
  },
];

const steps = [
  { icon: Phone, title: "Consulta de Marca", text: "Definimos la identidad y los servicios que quieres proyectar." },
  { icon: ClipboardCheck, title: "Diagnóstico de Autoridad", text: "Evaluamos los pilares que harán que tu empresa se vea líder en su sector." },
  { icon: CreditCard, title: "Formalización", text: "Cotización aceptada y pago procesado para iniciar el montaje." },
  { icon: Zap, title: "Sprint de Identidad", text: "7 días para levantar la infraestructura de tu oficina virtual con acabados de élite." },
  { icon: Rocket, title: "Entrega y Soporte", text: "Lanzamos tu marca al mundo y nos quedamos como tu departamento técnico delegado." },
];

const SitioCorporativo = () => {
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
        <title>Sitio Web Empresarial en Colombia | Nasua</title>
        <meta name="description" content="Proyecta la imagen de una multinacional con una sede digital de élite. Construida en 7 días, gestionada por expertos y financiada con Wompi." />
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
            Tu Sitio Web Empresarial: Autoridad, Confianza y{" "}
            <span className="text-gradient">Financiación Wompi</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-primary-foreground/80 font-body max-w-3xl mx-auto"
          >
            Proyecta la imagen de una multinacional con una sede digital de élite. Nosotros la construimos y gestionamos en 7 días, tú eres el dueño legal y la pagas a cuotas mientras tu marca crece.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10"
          >
            <a
              href="https://www.bancolombia.com/pagos/compra-y-paga-despues"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg"
            >
              Profesionalizar mi empresa financiada con Wompi
            </a>
          </motion.div>
        </div>
      </section>

      {/* Tu Oficina Virtual */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground mb-8">
              Tu Oficina Virtual, Siempre <span className="text-gradient">Impecable</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed">
              En Colombia, la confianza es la moneda más valiosa. Si un cliente no encuentra una web seria, tu negocio no existe. En Nasua nos encargamos de que tu oficina virtual esté siempre actualizada, segura y rápida. Tú pones la visión, nosotros ponemos la tecnología.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3 Pilares */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-2xl md:text-4xl font-bold font-display text-foreground">
              Los 3 Pilares de tu <span className="text-gradient">Sede Digital</span> Gestionada
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Imagen de Élite",
                text: "Un diseño que grita profesionalismo y atrae a mejores clientes con mayor presupuesto.",
              },
              {
                icon: Wrench,
                title: "Cero Estrés Técnico",
                text: "¿Cambiaste de dirección o tienes un nuevo servicio? Solo dinos y lo actualizamos. No pierdas tiempo peleando con códigos.",
              },
              {
                icon: Shield,
                title: "Propiedad Protegida",
                text: "Gestionamos la técnica para tu comodidad, pero el dominio y la marca son legalmente tuyos bajo contrato.",
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
              Proceso de construcción de tu <span className="text-gradient">sede digital</span> corporativa
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

export default SitioCorporativo;
