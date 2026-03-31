import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { ClientOnly } from "@/components/ClientOnly";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PenTool, Zap, Link, Bot, Target, ClipboardCheck, Layout, Code, Rocket } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

const conversionFeatures = [
  {
    icon: PenTool,
    title: "Copywriting de Respuesta Directa",
    text: "No llenamos espacios con texto genérico. Nuestro equipo redacta guiones de venta diseñados para resolver los dolores de tu cliente ideal y presentar tu solución como la opción lógica. Usamos estructuras de persuasión que guían al usuario hacia la acción, eliminando distracciones y centrando toda la atención en tu objetivo de conversión.",
  },
  {
    icon: Zap,
    title: "Velocidad de Carga en Milisegundos",
    text: "En el mundo de los anuncios, cada segundo de carga es dinero perdido. Implementamos tecnologías de alto rendimiento (como Vibe Coding) para asegurar que tu landing page sea instantánea, especialmente en dispositivos móviles. Una página rápida no solo mejora la experiencia del usuario, sino que reduce la tasa de rebote y mejora la calificación de tus anuncios en las plataformas de pauta.",
  },
];

const integrations = [
  {
    icon: Link,
    title: "Conexión con tu CRM",
    text: "Los datos de tus clientes potenciales llegan automáticamente a tu base de datos (HubSpot, Salesforce o Google Sheets), permitiendo que tu equipo comercial actúe de inmediato.",
  },
  {
    icon: Bot,
    title: "Automatización de Respuesta",
    text: "Configuramos disparadores para que el lead reciba un correo o mensaje de WhatsApp apenas se registre. La rapidez en el primer contacto es vital para no enfriar la venta.",
  },
  {
    icon: Target,
    title: "Tracking de Precisión",
    text: "Instalamos APIs de Conversión y Píxeles de seguimiento para que sepas exactamente cuánto te cuesta cada cliente y qué anuncios están generando rentabilidad real.",
  },
];

const processSteps = [
  { icon: ClipboardCheck, title: "Briefing de Ventas", text: "Entendemos tu producto, tu margen y a quién le hablas." },
  { icon: Layout, title: "Arquitectura y Copy", text: "Definimos el mensaje y la estructura que convencerá a tu audiencia." },
  { icon: Code, title: "Desarrollo y Medición", text: "Construimos la página y configuramos todo el rastreo de datos." },
  { icon: Rocket, title: "Lanzamiento y Ajuste", text: "Ponemos la máquina a rodar y optimizamos según el comportamiento real de los usuarios." },
];

const faqItems = [
  {
    q: "¿Por qué no es recomendable enviar el tráfico de mis anuncios a mi sitio web principal?",
    a: "Un sitio web corporativo está diseñado para informar sobre la empresa, mostrar servicios y generar confianza general. Tiene demasiados puntos de fuga (menú, redes sociales, blog) que distraen al usuario. Una Landing Page tiene un único objetivo: la conversión. Al eliminar las distracciones y centrar el mensaje en una sola oferta, el equipo asegura que el porcentaje de usuarios que realizan la acción deseada sea mucho mayor, optimizando así tu inversión en publicidad.",
  },
  {
    q: "¿Qué tecnología utiliza el equipo para desarrollar las Landing Pages?",
    a: "La selección técnica se basa en tus metas de escala y velocidad. Si el proyecto requiere un rendimiento técnico superior y una carga instantánea para grandes volúmenes de tráfico, el equipo utiliza Vibe Coding (React/Lovable). Si necesitas una herramienta que tu propio equipo de marketing pueda ajustar rápidamente para promociones estacionales, implementamos WordPress Moderno. Seleccionamos la infraestructura que mejor proteja tu retorno de inversión.",
  },
  {
    q: "¿La Landing Page será de mi propiedad absoluta?",
    a: "Sí. En Nasua aplicamos el principio de Soberanía Digital. Todo el desarrollo, el dominio y los accesos técnicos quedan a nombre de tu empresa desde el inicio. No creemos en modelos que condicionan la permanencia del cliente a través del control de sus activos. Eres dueño de tu tecnología y de la información que generas.",
  },
  {
    q: "¿Cuánto tiempo toma tener una Landing Page operativa?",
    a: "Gracias a nuestra metodología de trabajo ágil, el equipo puede entregar una estructura de conversión funcional en un periodo de 3 a 5 días hábiles. Esto incluye el diseño de la arquitectura, la redacción del guion de ventas y la configuración técnica de los sistemas de medición.",
  },
  {
    q: "¿El equipo de Nasua también se encarga de redactar los textos?",
    a: "Sí. El éxito de una landing page depende en gran medida de un copywriting de respuesta directa. Nuestro equipo redacta guiones de venta diseñados para conectar con los problemas de tu cliente y presentar tu solución de forma clara y persuasiva. No usamos textos de relleno; cada palabra tiene la función de guiar al usuario hacia la decisión de compra o registro.",
  },
  {
    q: "¿Cómo recibiré la información de los clientes potenciales (leads)?",
    a: "No dejamos los datos en un simple correo electrónico que puede perderse. El equipo integra tu landing page directamente con tu CRM (HubSpot, Salesforce o Google Sheets). Además, configuramos notificaciones automáticas para que tu equipo comercial sepa en tiempo real cuándo entra un nuevo prospecto, permitiendo una atención inmediata que es crítica para cerrar la venta.",
  },
  {
    q: "¿Qué tipo de seguimiento y medición instalan en la página?",
    a: "Lo que no se mide, no se puede mejorar. El equipo instala toda la infraestructura de rastreo necesaria: Píxeles de seguimiento, Google Tag Manager y API de Conversiones. Esto permite que sepas exactamente qué anuncios están generando ventas y cuál es tu costo real por cada cliente captado, permitiendo tomar decisiones basadas en datos y no en suposiciones.",
  },
  {
    q: "¿La página será apta para dispositivos móviles?",
    a: "Absolutamente. Sabemos que más del 80% del tráfico de anuncios en Meta y Google proviene de dispositivos móviles. El equipo diseña cada landing page bajo un enfoque Mobile-First, asegurando que la experiencia de navegación sea rápida y el formulario de contacto sea fácil de completar desde cualquier celular.",
  },
  {
    q: "¿Ofrecen opciones para pagar el desarrollo a cuotas?",
    a: "Sí. Entendemos que la gestión del flujo de caja es vital para cualquier negocio. A través de nuestra alianza con Wompi (Bancolombia), puedes financiar el desarrollo de tus activos de conversión y pagarlos con tarjeta de crédito o a cuotas mensuales. El objetivo es que la misma rentabilidad generada por la landing page ayude a cubrir la inversión.",
  },
  {
    q: "¿Cuál es el primer paso para dejar de perder dinero en anuncios?",
    a: "Todo inicia con un Diagnóstico de Conversión. Nuestro equipo analiza tus campañas actuales y tu oferta para definir el Roadmap técnico de tu nueva landing page. No es una asesoría genérica; es un plan de acción directo para mejorar tu rentabilidad desde la primera semana.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const LandingPage = () => {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <div className="bg-background text-foreground">
      <Helmet>
        <title>Landing Pages de Alta Conversión | Maximiza tu ROI con el equipo Nasua</title>
        <meta name="description" content="No pierdas dinero en anuncios. Diseñamos páginas de aterrizaje rápidas con Vibe Coding para convertir clics en facturación. Toma el control de tu pauta." />
        <meta property="og:title" content="Landing Pages de Alta Conversión | Maximiza tu ROI con el equipo Nasua" />
        <meta property="og:description" content="No pierdas dinero en anuncios. Diseñamos páginas de aterrizaje rápidas con Vibe Coding para convertir clics en facturación. Toma el control de tu pauta." />
        <meta property="og:image" content="https://nasua.marketing/LandingPageNasua.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://nasua.marketing/LandingPageNasua.jpg" />
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary/20" />
        <div className="relative z-10 container mx-auto px-6 py-32 text-center max-w-4xl">
          <ClientOnly minHeight="60px">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground font-display"
            >
              Landing Pages de Alta Conversión:{" "}
              <span className="text-gradient">Optimiza tu pauta con el equipo Nasua.</span>
            </motion.h1>
          </ClientOnly>
          <ClientOnly minHeight="40px">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6 text-lg md:text-xl text-primary-foreground/80 font-body max-w-3xl mx-auto"
            >
              Si estás invirtiendo en Google o Meta Ads pero no recibes leads calificados, el problema suele estar en el destino. El equipo de Nasua diseña páginas de aterrizaje de alto rendimiento, optimizadas técnicamente para maximizar cada peso de tu inversión publicitaria y reducir tu costo de adquisición.
            </motion.p>
          </ClientOnly>
          <ClientOnly minHeight="50px">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10"
            >
              <button
                onClick={() => setFormOpen(true)}
                className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg cursor-pointer"
              >
                Agendar Consultoría de Conversión
              </button>
            </motion.div>
          </ClientOnly>
        </div>
      </section>

      {/* Eslabón crítico */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <ClientOnly minHeight="40px">
            <motion.div {...fadeUp} className="text-center mb-6 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
                Ingeniería de conversión para resultados{" "}
                <span className="text-gradient">medibles</span>.
              </h2>
            </motion.div>
          </ClientOnly>
          <ClientOnly minHeight="40px">
            <motion.p {...fadeUp} className="text-center text-muted-foreground text-lg font-body max-w-3xl mx-auto mb-14 leading-relaxed">
              Muchos negocios fallan porque envían tráfico de calidad a sitios lentos o confusos. En Nasua construimos el motor que transforma ese tráfico en clientes.
            </motion.p>
          </ClientOnly>

          <div className="grid md:grid-cols-2 gap-8">
            {conversionFeatures.map((f, i) => (
              <ClientOnly key={f.title} minHeight="200px">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-card rounded-xl p-8 border border-border hover:border-secondary/50 transition-colors text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-5">
                    <f.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="font-display font-medium text-xl text-foreground mb-3">{f.title}</h3>
                  <p className="text-muted-foreground font-body leading-relaxed text-sm">{f.text}</p>
                </motion.div>
              </ClientOnly>
            ))}
          </div>
        </div>
      </section>

      {/* Sistema conectado */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-6 max-w-5xl">
          <ClientOnly minHeight="40px">
            <motion.div {...fadeUp} className="text-center mb-6">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-primary-foreground">
                Integración técnica con tu operación{" "}
                <span className="text-gradient">comercial</span>.
              </h2>
            </motion.div>
          </ClientOnly>
          <ClientOnly minHeight="40px">
            <motion.p {...fadeUp} className="text-center text-primary-foreground/80 text-lg font-body max-w-3xl mx-auto mb-14 leading-relaxed">
              Para que una landing page sea rentable, debe estar vinculada con el resto de tu negocio. El equipo se encarga de que la tecnología trabaje para ti.
            </motion.p>
          </ClientOnly>

          <div className="grid md:grid-cols-3 gap-8">
            {integrations.map((item, i) => (
              <ClientOnly key={item.title} minHeight="200px">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-8 border border-primary-foreground/20 text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-5">
                    <item.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="font-display font-medium text-xl text-primary-foreground mb-3">{item.title}</h3>
                  <p className="text-primary-foreground/70 font-body leading-relaxed text-sm">{item.text}</p>
                </motion.div>
              </ClientOnly>
            ))}
          </div>
        </div>
      </section>

      {/* Tecnología basada en objetivos */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <ClientOnly minHeight="150px">
            <motion.div {...fadeUp} className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-6">
                El motor adecuado para tu volumen de{" "}
                <span className="text-gradient">tráfico</span>.
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed text-lg">
                Si buscas una escala masiva y un rendimiento técnico superior, el equipo desarrolla bajo Vibe Coding (React/Lovable). Si necesitas una herramienta que tu propio equipo de marketing pueda editar y ajustar en minutos para promociones rápidas, implementamos WordPress Moderno. Elegimos la herramienta que maximice tu retorno de inversión, manteniendo siempre tu Soberanía Digital: tú eres el dueño del código y de los datos.
              </p>
            </motion.div>
          </ClientOnly>
        </div>
      </section>

      {/* Proceso */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-6 max-w-5xl">
          <ClientOnly minHeight="40px">
            <motion.div {...fadeUp} className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
                De 0 a leads en{" "}
                <span className="text-gradient">tiempo récord</span>.
              </h2>
            </motion.div>
          </ClientOnly>

          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <ClientOnly key={step.title} minHeight="150px">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <p className="text-secondary font-bold text-sm mb-1 font-body">Paso {i + 1}</p>
                  <h3 className="font-display font-medium text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm font-body leading-relaxed">{step.text}</p>
                </motion.div>
              </ClientOnly>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <ClientOnly minHeight="40px">
            <motion.h2
              {...fadeUp}
              className="text-3xl md:text-4xl font-bold text-foreground font-display text-center mb-12"
            >
              Preguntas <span className="text-gradient">frecuentes</span>
            </motion.h2>
          </ClientOnly>
          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-body font-bold text-foreground hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Cierre CTA */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <ClientOnly minHeight="200px">
            <motion.div {...fadeUp} className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground font-display">
                Deja de adivinar y empieza a{" "}
                <span className="text-gradient">convertir</span>.
              </h2>
              <p className="text-primary-foreground/80 text-lg leading-relaxed font-body max-w-2xl mx-auto">
                El equipo de Nasua está listo para auditar tus campañas actuales y diseñar la landing page que tu negocio necesita para escalar. Sin rodeos, solo resultados técnicos.
              </p>
              <button
                onClick={() => setFormOpen(true)}
                className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg cursor-pointer"
              >
                Agendar Consultoría de Conversión
              </button>
            </motion.div>
          </ClientOnly>
        </div>
      </section>

      <LeadCaptureForm open={formOpen} onOpenChange={setFormOpen} />
      <Footer />
    </div>
  );
};

export default LandingPage;
export const prerender = true;
