import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BarChart3, Camera, Video, Layers, Globe } from "lucide-react";
import content from "@/data/site-content.json";

const iconMap: Record<string, any> = {
  BarChart3,
  Camera,
  Video,
  Layers,
  Globe,
};

const Estrategia = () => {
  const { estrategia } = content;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: estrategia.faq.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <div className="bg-background text-foreground">
      <Helmet>
        <title>{estrategia.seo.title}</title>
        <meta name="description" content={estrategia.seo.description} />
        <meta property="og:title" content={estrategia.seo.title} />
        <meta property="og:description" content={estrategia.seo.description} />
        <meta property="og:image" content="https://nasua.marketing/EstrategiaNasua.jpg" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://nasua.marketing/estrategia-social-media" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://nasua.marketing/EstrategiaNasua.jpg" />
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary/20" />
        <div className="relative z-10 container mx-auto px-6 py-32 text-center max-w-4xl">
          <motion.h1
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground font-display"
          >
            {estrategia.hero.title}{" "}
            <span className="text-gradient">{estrategia.hero.highlight}</span>
          </motion.h1>
          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-primary-foreground/80 font-body max-w-3xl mx-auto"
          >
            {estrategia.hero.text}
          </motion.p>
          <motion.div
            initial={false}
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
        </div>
      </section>

      {/* RESULTADOS */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
              Diseñamos la autoridad que tu industria{" "}
              <span className="text-gradient">exige</span>.
            </h2>
          </motion.div>
          <motion.p initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center text-muted-foreground text-lg font-body max-w-3xl mx-auto mb-4 leading-relaxed">
            La atención es el activo más caro del mercado; nosotros te ayudamos a capturarla y rentabilizarla.
          </motion.p>
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
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
        </div>
      </section>

      {/* AUDIOVISUAL */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-primary-foreground">
              Contenido real para marcas que no{" "}
              <span className="text-gradient">aceptan menos</span>.
            </h2>
          </motion.div>
          <motion.p initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center text-primary-foreground/80 text-lg font-body max-w-3xl mx-auto mb-14 leading-relaxed">
            Olvídate de las fotos de stock. Tu empresa merece una imagen profesional y auténtica.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {estrategia.productionFeatures.map((f, i) => {
              const Icon = iconMap[f.icon] || Camera;
              return (
                <motion.div
                  key={f.title}
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-8 border border-primary-foreground/20 text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="font-display font-medium text-xl text-primary-foreground mb-3">{f.title}</h3>
                  <p className="text-primary-foreground/70 font-body leading-relaxed text-sm">{f.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INFRAESTRUCTURA */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
              Extrayendo valor del{" "}
              <span className="text-gradient">"terreno alquilado"</span>.
            </h2>
          </motion.div>
          <motion.p initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center text-muted-foreground text-lg font-body max-w-3xl mx-auto mb-6 leading-relaxed">
            Las redes sociales son el megáfono; tu sitio web es donde se cierra el negocio.
          </motion.p>
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
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
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.h2
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-bold text-foreground font-display text-center mb-12"
          >
            Preguntas <span className="text-gradient">frecuentes</span>
          </motion.h2>
          <Accordion type="single" collapsible className="space-y-3">
            {estrategia.faq.map((faq, i) => (
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

      {/* CTA */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="space-y-6">
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
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Estrategia;
export const prerender = true;
