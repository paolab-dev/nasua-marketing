import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Briefcase, Scale, Building2, Award, CreditCard, FileText, Palette, CheckCircle, Rocket, Wrench, Shield, TrendingUp } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

const faqItems = [
  {
    q: "¿Por qué este sitio tarda 5 días y la Landing solo 2?",
    a: "Porque una web empresarial tiene más secciones (Inicio, Nosotros, Servicios, Contacto). Necesitamos esos 5 días para asegurar que cada página sea coherente, profesional y esté bien estructurada para Google.",
  },
  {
    q: "¿Qué pasa si no tengo fotos profesionales de mi empresa?",
    a: "Paola (Nuestra directora UX/UI) te guiará o usará recursos de alta calidad que se alineen con tu marca. El objetivo es que, con lo que tengas, tu negocio se vea de talla mundial.",
  },
  {
    q: "¿Cómo ayuda John (Director de Mercadeo) a mi posicionamiento?",
    a: "Nos aseguramos de que la estructura de tus servicios siga una lógica semántica. Esto hace que Google entienda rápidamente qué problemas solucionas y te muestre a las personas que buscan exactamente lo que tú ofreces.",
  },
  {
    q: "¿Puedo pagar mi web empresarial en cuotas?",
    a: "Claro. A través de Wompi puedes diferir la inversión hasta en 4 cuotas. Es la mejor forma de profesionalizar tu imagen sin afectar tu flujo de caja mensual.",
  },
  {
    q: "¿Ustedes se encargan del hosting y el dominio?",
    a: "Sí, nosotros gestionamos toda la parte técnica \"aburrida\". Tú no tienes que lidiar con configuraciones de servidores ni facturas técnicas adicionales.",
  },
  {
    q: "¿La página será fácil de encontrar en Google?",
    a: "Sí. Al organizar tus textos y usar una arquitectura limpia, le damos a Google todas las señales necesarias para que te indexe correctamente y te dé prioridad sobre sitios desorganizados.",
  },
  {
    q: "¿Qué tan segura es mi web empresarial?",
    a: "Implementamos capas de seguridad modernas para proteger tu información y la de tus clientes. Como es una infraestructura gestionada, nosotros vigilamos la seguridad 24/7.",
  },
  {
    q: "¿Puedo incluir testimonios de mis clientes actuales?",
    a: "Es vital. Diseñamos secciones específicas para testimonios y casos de éxito, lo que refuerza tu autoridad y ayuda a cerrar más contratos.",
  },
  {
    q: "¿Qué pasa si quiero cambiar la información después de la entrega?",
    a: "Solo nos avisas. Nuestro equipo de soporte realiza las actualizaciones por ti para que tu web siempre esté al día sin que tú tengas que aprender a programar.",
  },
  {
    q: "¿El sitio es mío o de Nasua?",
    a: "El sitio es tuyo legalmente. Nasua es tu aliado operativo. Si algún día quieres llevarte tu web, te entregamos tus activos sin complicaciones.",
  },
];

const targetAudience = [
  { icon: Briefcase, title: "Consultores y Profesionales Independientes" },
  { icon: Scale, title: "Oficinas de Abogados, Médicos y Arquitectos" },
  { icon: Building2, title: "PYMES que venden servicios especializados" },
  { icon: Award, title: "Empresas que necesitan una carta de presentación de alto nivel" },
];

const processSteps = [
  { icon: CreditCard, title: "Activación de Proyecto", text: "Realizas el pago y eliges tu medio (Wompi a 4 cuotas disponible)." },
  { icon: FileText, title: "Entrega de Insumos", text: "Nos pasas tu logo, las fotos de tu equipo/servicios y lo que quieres contar." },
  { icon: Palette, title: "Curaduría y Diseño", text: "Organizamos tu mensaje para Google mientras diseñamos una interfaz de confianza." },
  { icon: CheckCircle, title: "Revisión de Estándares", text: "Verificamos que todo cargue rápido y se vea impecable en móviles." },
  { icon: Rocket, title: "Entrega de Llaves", text: "En 5 días tu oficina digital está abierta al mundo." },
];

const managementFeatures = [
  { icon: Wrench, title: "Mantenimiento Incluido", text: "Nosotros vigilamos que tu web siempre funcione. Si necesitas cambiar un servicio o un teléfono, nosotros lo hacemos." },
  { icon: Shield, title: "Propiedad Legal", text: "Tú eres el dueño de tu marca y de tu web. Nosotros solo somos los ingenieros que mantienen el edificio en pie." },
  { icon: TrendingUp, title: "Escalabilidad", text: "¿Mañana quieres vender productos? Tu web empresarial puede crecer cuando tú lo decidas." },
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
        <title>Sitio Web Empresarial en 5 Días | Nasua Colombia</title>
        <meta name="description" content="Proyecta la imagen profesional que tu negocio merece en solo 5 días. Alta calidad, textos optimizados para Google y financiación con Wompi." />
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
            Tu Sitio Web Empresarial en 5 días:{" "}
            <span className="text-gradient">Autoridad y Confianza a Bajo Costo.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-primary-foreground/80 font-body max-w-3xl mx-auto"
          >
            Proyecta la imagen profesional que tu negocio merece sin esperar meses. Creamos tu oficina digital con estándares globales en solo 5 días. Alta calidad, textos optimizados para Google y gestionada por expertos.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="/contacto"
              className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg"
            >
              👉 ¡Profesionalizar mi negocio ahora!
            </a>
            <a
              href="https://www.bancolombia.com/pagos/compra-y-paga-despues"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-primary-foreground/40 hover:border-primary-foreground text-primary-foreground font-bold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105"
            >
              Financia hasta en 4 cuotas con Wompi
            </a>
          </motion.div>
        </div>
      </section>

      {/* El Valor de la Claridad */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground mb-8">
              Tú nos cuentas qué haces, nosotros le explicamos a Google <span className="text-gradient">por qué eres el mejor</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed">
              Tener una web 'bonita' no sirve si nadie la encuentra. En Nasua tomamos la información de tus servicios y la organizamos estratégicamente. Le 'hablamos clarito' a Google para que tu empresa aparezca como una autoridad en su sector. Organizamos tus textos para que los buscadores te premien y tus clientes confíen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ¿Para quién es? */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-2xl md:text-4xl font-bold font-display text-foreground">
              ¿Para quién es esta <span className="text-gradient">Solución Corporativa</span>?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetAudience.map((item) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                className="bg-card rounded-xl p-6 border border-border hover:border-secondary/50 transition-colors text-center"
              >
                <item.icon className="w-10 h-10 text-secondary mx-auto mb-4" />
                <h3 className="font-display font-bold text-lg text-foreground">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso de 5 Días */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-2xl md:text-4xl font-bold font-display text-primary-foreground">
              El Proceso de 5 Días: <span className="text-gradient">Sin Complicaciones</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6">
            {processSteps.map((step, i) => (
              <motion.div key={step.title} {...fadeUp} className="text-center">
                <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-7 h-7 text-secondary" />
                </div>
                <p className="text-secondary font-bold text-sm mb-1">Paso {i + 1}</p>
                <h3 className="font-display font-bold text-primary-foreground mb-2">{step.title}</h3>
                <p className="text-primary-foreground/70 text-sm font-body leading-relaxed">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gestión Nasua */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-2xl md:text-4xl font-bold font-display text-foreground">
              Gestión Nasua: <span className="text-gradient">Tu Departamento de Tecnología</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {managementFeatures.map((item) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                className="bg-card rounded-xl p-8 border border-border hover:border-secondary/50 transition-colors text-center"
              >
                <item.icon className="w-10 h-10 text-secondary mx-auto mb-4" />
                <h3 className="font-display font-bold text-xl text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed">
                  {item.text}
                </p>
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
              Centro de Respuestas <span className="text-gradient">Empresariales</span>
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
