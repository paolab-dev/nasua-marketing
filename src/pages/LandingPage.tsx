import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Zap, Gauge, Wrench, Shield, MessageSquare, ClipboardCheck, CreditCard, Rocket, Phone } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

const faqItems = [
  {
    q: "¿Qué es una página de lanzamiento gestionada y en qué se diferencia de una normal?",
    a: "Una landing page gestionada por Nasua es una infraestructura diseñada exclusivamente para convertir publicidad en ventas, donde nosotros nos encargamos de toda la operación técnica (servidores, velocidad, actualizaciones). A diferencia de una página normal donde tú debes aprender a usar el software, aquí nosotros operamos la máquina para que tú solo te encargues de atender a los clientes.",
  },
  {
    q: "¿Cómo funciona el pago a cuotas con Wompi para mi landing page?",
    a: "A través de nuestra alianza con Wompi (Bancolombia), puedes financiar el 100% de la creación de tu landing page. Al momento de la compra, eliges el número de cuotas que mejor se adapte a tu flujo de caja. Esto permite que tu nueva página empiece a generar ventas que ayuden a pagar su propia inversión mes a mes.",
  },
  {
    q: "¿Realmente mi página de ventas estará lista en solo 7 días?",
    a: "Sí. Gracias a nuestro flujo de trabajo apoyado en IA profesional (Vibe Coding), eliminamos las semanas de espera de las agencias tradicionales. En 7 días hábiles entregamos tu estructura comercial probada, integrada con tus canales de contacto y lista para recibir tráfico pago.",
  },
  {
    q: "¿Quién es el dueño legal de la landing page si Nasua se encarga de la parte técnica?",
    a: "El dueño legal absoluto eres tú. En Nasua somos los administradores de tu infraestructura, pero la propiedad del dominio, los archivos y el código te pertenece por contrato. Si en el futuro decides gestionar tu propia tecnología, facilitamos la transferencia de todos tus activos de manera transparente.",
  },
  {
    q: "¿Necesito contratar un hosting o servidor por aparte?",
    a: "No. En el modelo de Infraestructura Gestionada de Nasua, nosotros nos encargamos de que tu página esté siempre en línea, sea segura y cargue a velocidad relámpago. Tú no tienes que lidiar con facturas técnicas adicionales ni configuraciones complejas de servidores.",
  },
  {
    q: "¿Qué pasa si quiero cambiar una promoción o un precio en mi landing?",
    a: "Con Nasua no tienes que entrar a editar códigos ni aprender a usar constructores visuales. Simplemente nos envías el cambio que necesitas y nuestro equipo experto lo ejecuta por ti. Esto garantiza que tu página nunca pierda su diseño profesional ni sufra errores técnicos por una mala edición.",
  },
  {
    q: "¿Mi página de lanzamiento está optimizada para verse en celulares?",
    a: "Totalmente. Diseñamos bajo la filosofía Mobile-First, ya que en globalmente más del 90% de las conversiones ocurren desde un smartphone. Tu landing page cargará de forma impecable y rápida en cualquier dispositivo, asegurando que no pierdas ni un solo prospecto por problemas de visualización.",
  },
  {
    q: "¿Por qué es mejor una landing page de Nasua que enviar clientes a mi Instagram?",
    a: "Enviar publicidad a Instagram distrae al usuario con contenido de otros perfiles o notificaciones. Una Landing Page de Nasua es un entorno controlado sin distracciones, diseñado con un solo objetivo: que el cliente te deje sus datos o te contacte por WhatsApp. Esto aumenta tu tasa de cierre hasta en un 300%.",
  },
  {
    q: "¿Puedo conectar mi WhatsApp y mis formularios de correo directamente?",
    a: "Sí. Integramos botones de contacto directo a WhatsApp y formularios de captura que envían la información de tus prospectos a donde tú la necesites. Así, cada clic en tu publicidad se convierte en una conversación real con un cliente potencial.",
  },
  {
    q: "¿Qué garantía tengo de que mi página aparecerá en las búsquedas de IA y Google?",
    a: "Construimos cada landing con arquitectura semántica, lo que facilita que algoritmos de búsqueda y motores de respuesta por IA (como ChatGPT o Gemini) entiendan exactamente qué ofreces. Esto te da una ventaja competitiva de posicionamiento frente a páginas construidas con otros métodos.",
  },
];

const steps = [
  { icon: Phone, title: "Contacto y Objetivo", text: "Iniciamos con tu visión de ventas." },
  { icon: ClipboardCheck, title: "Diagnóstico de Conversión", text: "Evaluamos si tu oferta es apta para nuestra infraestructura de alta conversión." },
  { icon: CreditCard, title: "Activación y Pago", text: "Aseguras tu cupo de desarrollo (Financiación Wompi disponible)." },
  { icon: Zap, title: "Sprint de Optimización", text: "7 días para diseñar, redactar y programar tu embudo de ventas." },
  { icon: Rocket, title: "Lanzamiento y Tracción", text: "Tu landing queda al aire bajo nuestra gestión técnica para que no pierdas ni un lead." },
];

const LandingPage = () => {
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
        <title>Landing Page Profesional en Colombia | Nasua</title>
        <meta name="description" content="Construimos y gestionamos tu landing page de alta conversión en 7 días. Financiación con Wompi. Propiedad 100% tuya." />
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
            Tu Landing Page Profesional: Atrae Clientes Rápidamente y{" "}
            <span className="text-gradient">Financia con Wompi</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-primary-foreground/80 font-body max-w-3xl mx-auto"
          >
            Construimos y gestionamos tu landing page para que dejes de perder dinero en publicidad. Una infraestructura de alta conversión, operada por expertos y financiada a tu ritmo.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10"
          >
            <a
              href="#contacto"
              className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg"
            >
              Activar mi vendedor 24/7 con Wompi
            </a>
          </motion.div>
        </div>
      </section>

      {/* Gestión para Resultados */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground mb-8">
              Gestión para <span className="text-gradient">Resultados</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed">
              Una landing page no es un folleto digital; es una herramienta de precisión. En Nasua no te entregamos una plantilla vacía. Diseñamos la estrategia, montamos la tecnología y nos encargamos de que siempre esté a punto. Tú solo ocúpate de atender a los clientes que empezarán a llegar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ¿Por qué una Landing Gestionada? */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-2xl md:text-4xl font-bold font-display text-foreground">
              ¿Por qué una Landing <span className="text-gradient">Gestionada</span> y no un sitio web común?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: MessageSquare,
                title: "Cero Distracciones",
                text: "Diseñada para una sola acción: que te contacten o te compren.",
              },
              {
                icon: Gauge,
                title: "Velocidad de Carga Élite",
                text: "Optimizada para que nadie se vaya por lentitud.",
              },
              {
                icon: Wrench,
                title: "Mantenimiento Incluido",
                text: "¿Quieres cambiar un bono o una oferta? Nosotros lo hacemos. No pierdas tiempo aprendiendo a editar.",
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

      {/* Transparencia y Propiedad */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <motion.div {...fadeUp}>
            <Shield className="w-12 h-12 text-secondary mx-auto mb-6" />
            <h3 className="text-2xl md:text-4xl font-bold font-display text-primary-foreground mb-6">
              Transparencia y Propiedad
            </h3>
            <p className="text-lg md:text-xl text-primary-foreground/80 font-body leading-relaxed">
              Aunque nuestro equipo experto opera la maquinaria para que tú no sufras con la técnica, la propiedad legal de la landing y los datos de tus clientes son 100% tuyos. Si algún día decides gestionar tu propio equipo, te transferimos todo sin fricciones.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Proceso en 5 pasos */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-2xl md:text-4xl font-bold font-display text-foreground">
              Cómo activamos tu <span className="text-gradient">máquina de captación</span> de clientes en una semana
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

export default LandingPage;
