import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ClientOnly } from "@/components/ClientOnly";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BarChart3, Camera, Video, Layers, ArrowRight, Users, Globe } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

const productionFeatures = [
  {
    icon: Camera,
    title: "Fotografía de Marca",
    text: "Sesiones programadas para capturar la esencia de tu equipo, tus procesos y tu infraestructura.",
  },
  {
    icon: Video,
    title: "Video Marketing & Reels",
    text: "Guionizamos, grabamos y editamos contenido dinámico optimizado para los algoritmos actuales.",
  },
  {
    icon: Layers,
    title: "Coherencia Total",
    text: "Al ser nosotros quienes diseñamos la estrategia y producimos el material, garantizamos que cada pieza sea fiel a tu identidad y objetivos de negocio.",
  },
];

const faqItems = [
  {
    q: "¿Por qué Nasua incluye producción fotográfica y de video en el servicio?",
    a: "Porque una estrategia sin contenido de alta calidad está incompleta. Al suministrar nosotros mismos el material audiovisual, garantizamos que la estética y el mensaje estén alineados al 100% con la autoridad que queremos proyectar para tu empresa.",
  },
  {
    q: "¿Ustedes se desplazan a mi oficina o empresa para producir el contenido?",
    a: "Sí. Coordinamos sesiones de producción para capturar contenido real y profesional. Esto le da una veracidad a tu marca que ninguna imagen genérica de internet puede igualar.",
  },
  {
    q: "¿Qué pasa si mi equipo o yo no tenemos tiempo para grabar videos?",
    a: "Esa es nuestra especialidad. Nos encargamos de todo: desde los guiones y la dirección de arte hasta la edición final. Minimizamos el esfuerzo operativo de tu parte para que tú solo te encargues de validar el resultado.",
  },
  {
    q: "¿Soy dueño del material audiovisual que produzcan para mi marca?",
    a: "Absolutamente. Bajo nuestro principio de Soberanía Digital, todo el material producido (fotos y videos) es de tu propiedad legal. Puedes usarlo en tu web, presentaciones comerciales o publicidad pagada sin restricciones.",
  },
  {
    q: "¿Cómo miden el éxito de la gestión en redes sociales?",
    a: "Nos alejamos de las métricas de vanidad. Medimos el alcance de audiencia calificada, el guardado de contenido (valor real) y, sobre todo, el tráfico que enviamos hacia tu ecosistema de ventas (clics y leads).",
  },
  {
    q: "¿Hacen guiones para los videos o solo editan?",
    a: "Hacemos el proceso completo. Nuestro equipo de Copywriting redacta guiones persuasivos basados en tu estrategia de ventas antes de encender la primera cámara, asegurando que cada palabra cuente.",
  },
  {
    q: "¿En qué redes sociales debería estar mi negocio?",
    a: "No todas las redes son rentables para todos. Analizamos dónde está tu cliente ideal (LinkedIn para B2B, Instagram/TikTok para consumo o marca personal) y enfocamos los recursos donde el retorno sea mayor.",
  },
  {
    q: "¿Cómo manejan el \"tono de voz\" de mi empresa?",
    a: "Creamos un Manual de Identidad Verbal. Si tu empresa es de ingeniería, el tono será sólido y técnico; si es de estilo de vida, será más vibrante. La coherencia en todos los canales es nuestra prioridad.",
  },
  {
    q: "¿La estrategia de contenido ayuda a mi posicionamiento SEO/GEO?",
    a: "Sí. Las señales sociales y el contenido relevante ayudan a que los buscadores y las IAs (como ChatGPT) reconozcan a tu empresa como una entidad confiable y citen tu autoridad en sus respuestas.",
  },
  {
    q: "¿Por qué elegir a Nasua y no a una agencia creativa convencional?",
    a: "Porque somos Socios de Crecimiento. No buscamos ganar premios de diseño; buscamos que tu presencia social sea una pieza de ingeniería que impulse la rentabilidad and la autoridad de tu negocio.",
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

const Estrategia = () => {
  return (
    <div className="bg-background text-foreground">
      <Helmet>
        <title>Estrategia & Contenido Social Media | Autoridad Visual con Nasua</title>
        <meta name="description" content="No solo planeamos, ejecutamos. Estrategia de autoridad y producción audiovisual (foto y video) para convertir tus redes en canales de venta reales." />
        <meta property="og:title" content="Estrategia & Contenido Social Media | Autoridad Visual con Nasua" />
        <meta property="og:description" content="No solo planeamos, ejecutamos. Estrategia de autoridad and producción audiovisual (foto y video) para convertir tus redes en canales de venta reales." />
        <meta property="og:image" content="https://nasua.marketing/EstrategiaNasua.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://nasua.marketing/EstrategiaNasua.jpg" />
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
              Estrategia & Contenido Social Media:{" "}
              <span className="text-gradient">Autoridad que Genera Negocio.</span>
            </motion.h1>
          </ClientOnly>
          <ClientOnly minHeight="40px">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6 text-lg md:text-xl text-primary-foreground/80 font-body max-w-3xl mx-auto"
            >
              Dejar de publicar por rellenar un calendario y empezar a comunicar con intención. En Nasua diseñamos tu hoja de ruta estratégica y producimos el contenido fotográfico y audiovisual de alto impacto necesario para que tu marca destaque, eduque y convierta seguidores en clientes.
            </motion.p>
          </ClientOnly>
          <ClientOnly minHeight="50px">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10"
            >
              <Link
                to="/contacto"
                className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg"
              >
                Iniciar mi Estrategia & Contenido
              </Link>
            </motion.div>
          </ClientOnly>
        </div>
      </section>

      {/* Estrategia basada en resultados */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <ClientOnly minHeight="40px">
            <motion.div {...fadeUp} className="text-center mb-6">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
                Diseñamos la autoridad que tu industria{" "}
                <span className="text-gradient">exige</span>.
              </h2>
            </motion.div>
          </ClientOnly>
          <ClientOnly minHeight="20px">
            <motion.p {...fadeUp} className="text-center text-muted-foreground text-lg font-body max-w-3xl mx-auto mb-4 leading-relaxed">
              La atención es el activo más caro del mercado; nosotros te ayudamos a capturarla y rentabilizarla.
            </motion.p>
          </ClientOnly>
          <ClientOnly minHeight="100px">
            <motion.div
              {...fadeUp}
              className="bg-card rounded-xl p-10 border border-border max-w-3xl mx-auto"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <BarChart3 className="w-7 h-7 text-secondary" />
                </div>
                <p className="text-muted-foreground font-body leading-relaxed text-lg">
                  Entendemos que las redes sociales son canales de visibilidad masiva, pero sin una estrategia de negocio son solo ruido. Nuestra metodología se enfoca en posicionar a tu equipo como el <strong className="text-foreground">experto indiscutible de su nicho</strong>. Creamos narrativas que resuelven dudas, eliminan objeciones de venta y preparan el terreno para el cierre comercial en tus propios canales.
                </p>
              </div>
            </motion.div>
          </ClientOnly>
        </div>
      </section>

      {/* Producción audiovisual */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-6 max-w-5xl">
          <ClientOnly minHeight="40px">
            <motion.div {...fadeUp} className="text-center mb-6">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-primary-foreground">
                Contenido real para marcas que no{" "}
                <span className="text-gradient">aceptan menos</span>.
              </h2>
            </motion.div>
          </ClientOnly>
          <ClientOnly minHeight="20px">
            <motion.p {...fadeUp} className="text-center text-primary-foreground/80 text-lg font-body max-w-3xl mx-auto mb-14 leading-relaxed">
              Olvídate de las fotos de stock. Tu empresa merece una imagen profesional y auténtica.
            </motion.p>
          </ClientOnly>

          <div className="grid md:grid-cols-3 gap-8">
            {productionFeatures.map((f, i) => (
              <ClientOnly key={f.title} minHeight="150px">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-8 border border-primary-foreground/20 text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-5">
                    <f.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="font-display font-medium text-xl text-primary-foreground mb-3">{f.title}</h3>
                  <p className="text-primary-foreground/70 font-body leading-relaxed text-sm">{f.text}</p>
                </motion.div>
              </ClientOnly>
            ))}
          </div>
        </div>
      </section>

      {/* El puente hacia la infraestructura */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <ClientOnly minHeight="40px">
            <motion.div {...fadeUp} className="text-center mb-6">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
                Extrayendo valor del{" "}
                <span className="text-gradient">"terreno alquilado"</span>.
              </h2>
            </motion.div>
          </ClientOnly>
          <ClientOnly minHeight="20px">
            <motion.p {...fadeUp} className="text-center text-muted-foreground text-lg font-body max-w-3xl mx-auto mb-6 leading-relaxed">
              Las redes sociales son el megáfono; tu sitio web es donde se cierra el negocio.
            </motion.p>
          </ClientOnly>
          <ClientOnly minHeight="100px">
            <motion.div
              {...fadeUp}
              className="bg-card rounded-xl p-10 border border-border max-w-3xl mx-auto"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Globe className="w-7 h-7 text-secondary" />
                </div>
                <p className="text-muted-foreground font-body leading-relaxed text-lg">
                  Nuestra visión de Social Media es sistémica. Utilizamos las redes sociales como motores de tracción para llevar a tu audiencia hacia tus activos propios (tu web y base de datos), donde tú tienes el control total de la información y la venta. Convertimos la <strong className="text-foreground">atención efímera</strong> en relaciones comerciales sólidas.
                </p>
              </div>
            </motion.div>
          </ClientOnly>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-muted/30">
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
                Deja de preocuparte por qué publicar.{" "}
                <span className="text-gradient">Nosotros lo planeamos y lo creamos.</span>
              </h2>
              <p className="text-primary-foreground/80 text-lg leading-relaxed font-body max-w-2xl mx-auto">
                No permitas que una mala imagen arruine una gran estrategia. El equipo de Nasua está listo para darle a tu marca el impacto visual y la autoridad que merece.
              </p>
              <Link
                to="/contacto"
                className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg"
              >
                Iniciar mi Estrategia & Contenido
              </Link>
            </motion.div>
          </ClientOnly>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Estrategia;
export const prerender = true;
