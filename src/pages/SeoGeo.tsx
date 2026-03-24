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
import {
  TrendingUp,
  Shield,
  DollarSign,
  Eye,
  BarChart3,
  Database,
  Bot,
  Star,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

const consciousnessPillars = [
  {
    icon: TrendingUp,
    title: "Sostenibilidad",
    text: "El tráfico orgánico no se detiene cuando apagas la tarjeta de crédito.",
  },
  {
    icon: Star,
    title: "Credibilidad",
    text: "El usuario confía más en quien Google y las IAs posicionan de forma natural que en quien paga por aparecer.",
  },
  {
    icon: DollarSign,
    title: "Valor de Empresa",
    text: "Un negocio con autoridad orgánica es un activo mucho más valioso y vendible que uno que depende 100% de anuncios.",
  },
];

const multiplierEffects = [
  {
    icon: Eye,
    title: "Dominio Visual",
    text: "Ocupas más espacio en la pantalla del usuario (Anuncio + Resultado Orgánico), proyectando una autoridad imbatible.",
  },
  {
    icon: DollarSign,
    title: "Reducción de Costos (CAC)",
    text: "El SEO nos enseña qué palabras convierten mejor, optimizando la pauta. A su vez, una web bien posicionada orgánicamente suele tener mejores puntajes de calidad en Google Ads, bajando el precio que pagas por cada clic.",
  },
  {
    icon: BarChart3,
    title: "Data Inteligente",
    text: "Usamos los datos de la pauta para acelerar los resultados de SEO, atacando directamente lo que ya sabemos que trae dinero a tu cuenta.",
  },
];

const geoPillars = [
  {
    icon: Bot,
    title: "GEO (Generative Engine Optimization)",
    text: "Estructuramos tu infraestructura digital para que los LLMs (Large Language Models) puedan leer, procesar y recomendar tu marca.",
  },
  {
    icon: Database,
    title: "Autoridad Semántica",
    text: "Ya no basta con repetir palabras; hay que demostrar experiencia, autoridad y confianza (E-E-A-T). En Nasua preparamos tu contenido para ser el referente que la IA elige como \"la respuesta correcta\".",
  },
];

const faqs = [
  {
    q: "¿Por qué es fundamental invertir en SEO hoy mismo?",
    a: "Porque el SEO es un activo que se acumula con el tiempo. Cada día que pasa sin una estrategia orgánica es un día que tu competencia toma ventaja en autoridad. Es la inversión con el mayor retorno (ROI) a largo plazo en el mundo digital.",
  },
  {
    q: "¿Cómo beneficia a mi negocio combinar el SEO con la Pauta Digital?",
    a: "La pauta te da flujo de caja hoy, mientras el SEO construye rentabilidad para mañana. Al combinarlos, dominas tu nicho, generas confianza doble en el usuario y logras que tu costo de adquisición de clientes baje progresivamente.",
  },
  {
    q: "¿Qué es el GEO y por qué es vital con la llegada de ChatGPT?",
    a: "El GEO es la optimización para motores de respuesta de IA. Con la IA, el usuario ya no navega 10 links; lee una respuesta directa. Si tu infraestructura no está optimizada (GEO), la IA no te encontrará y quedarás fuera del nuevo ciclo de consumo de información.",
  },
  {
    q: "¿El equipo de Nasua usa IA para crear contenido de SEO?",
    a: "Usamos la IA como herramienta de análisis y estructura, pero el contenido final siempre tiene el criterio humano y la visión estratégica de nuestros expertos. Google y los LLMs penalizan el contenido genérico; nosotros premiamos la autoridad real.",
  },
  {
    q: "¿En cuánto tiempo veré resultados orgánicos?",
    a: "El SEO es una maratón. Los primeros cambios técnicos se notan en semanas, pero la autoridad real y el tráfico masivo suelen consolidarse entre los 4 y 8 meses. Es un compromiso con el crecimiento sólido de tu empresa.",
  },
  {
    q: "¿Cómo afecta la velocidad de mi web (Vibe Coding) al SEO?",
    a: "Es un factor crítico. Google y las IAs tienen poco tiempo para rastrear sitios. Si tu web es lenta, te penalizan. Nuestra metodología asegura que tu infraestructura vuele, facilitando que los motores te indexen y te posicionen por encima de la competencia.",
  },
  {
    q: '¿Qué es la "Soberanía Digital" aplicada al SEO?',
    a: "Significa que tú eres el dueño de tu estrategia y tus activos. No dependes de plataformas \"rentadas\" que no te dejan optimizar el código. Con Nasua, tienes el control total para implementar las mejoras técnicas que el SEO de última generación exige.",
  },
  {
    q: "¿Cómo saben si mi estrategia de SEO está funcionando?",
    a: "Medimos todo: desde el crecimiento en impresiones y clics hasta, lo más importante, las conversiones orgánicas. Te entregamos dashboards donde ves cómo el SEO empieza a restarle peso al gasto en pauta publicitaria.",
  },
  {
    q: "¿Qué importancia tiene el marcado Schema (Datos Estructurados)?",
    a: "Es el \"traductor\" para las IAs. Le dice a Google y a ChatGPT: \"Este texto es un servicio\", \"Este es el autor\", \"Este es el precio\". Sin esto, la IA puede malinterpretar tu negocio. En Nasua, el marcado Schema es parte integral de nuestra ingeniería.",
  },
  {
    q: "¿Por qué confiar en Nasua para mi estrategia de SEO y GEO?",
    a: "Porque unimos 15 años de experiencia en marketing con una mentalidad de ingeniería de software. No solo escribimos blogs; construimos infraestructuras de autoridad que están listas para los desafíos tecnológicos de 2026 y más allá.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

const SeoGeo = () => {
  return (
    <div className="bg-background text-foreground">
      <Helmet>
        <title>SEO &amp; Visibilidad IA (GEO) | El Activo Más Rentable de tu Negocio</title>
        <meta name="description" content="No solo aparezcas en Google, sé la respuesta de la IA. Descubre cómo el SEO + Pauta construye autoridad soberana y rentabilidad a largo plazo con Nasua." />
        <meta property="og:title" content="SEO & Visibilidad IA (GEO) | El Activo Más Rentable de tu Negocio" />
        <meta property="og:description" content="No solo aparezcas en Google, sé la respuesta de la IA. Descubre cómo el SEO + Pauta construye autoridad soberana y rentabilidad a largo plazo con Nasua." />
        <meta property="og:image" content="https://nasua.marketing/SeoGeoNasua.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://nasua.marketing/SeoGeoNasua.jpg" />
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
            SEO &amp; Visibilidad IA (GEO):{" "}
            <span className="text-gradient">El activo más rentable de tu negocio.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-primary-foreground/80 font-body max-w-3xl mx-auto"
          >
            En un mundo digital saturado, el SEO no es una opción técnica; es la construcción de tu patrimonio. En Nasua unimos la estrategia orgánica con la llegada de los LLMs (como ChatGPT) para que tu empresa deje de "rentar" tráfico y empiece a ser dueña de su autoridad.
          </motion.p>
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
              Iniciar mi Estrategia de Autoridad
            </Link>
          </motion.div>
        </div>
      </section>

      {/* La consciencia del SEO */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div {...fadeUp} className="text-center mb-6 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
              ¿Estás construyendo un activo o solo{" "}
              <span className="text-gradient">pagando por visibilidad</span>?
            </h2>
          </motion.div>
          <motion.div {...fadeUp} className="max-w-3xl mx-auto mb-14">
            <p className="text-center text-muted-foreground text-lg font-body leading-relaxed mb-4">
              La pauta digital te da velocidad, pero el SEO te da libertad.
            </p>
            <p className="text-center text-muted-foreground font-body leading-relaxed">
              Hacer SEO es una decisión de consciencia empresarial. Mientras la pauta (ads) es como{" "}
              <strong className="text-foreground">alquilar un espacio</strong> en una avenida concurrida, el SEO es{" "}
              <strong className="text-foreground">comprar el terreno y construir un edificio</strong>.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {consciousnessPillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-card rounded-xl p-8 border border-border hover:border-secondary/50 transition-colors text-center"
              >
                <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-5">
                  <p.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-display font-medium text-xl text-foreground mb-3">{p.title}</h3>
                <p className="text-muted-foreground font-body leading-relaxed text-sm">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO + Pauta: Efecto multiplicador */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div {...fadeUp} className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-primary-foreground">
              El efecto multiplicador de la{" "}
              <span className="text-gradient">visibilidad total</span>.
            </h2>
          </motion.div>
          <motion.p {...fadeUp} className="text-center text-primary-foreground/80 text-lg font-body max-w-3xl mx-auto mb-4 leading-relaxed">
            No elijas entre uno u otro; haz que trabajen juntos para bajar tus costos.
          </motion.p>
          <motion.p {...fadeUp} className="text-center text-primary-foreground/70 text-base font-body max-w-3xl mx-auto mb-14 leading-relaxed">
            En Nasua, entendemos que la pauta y el SEO son las dos caras de una misma moneda. Cuando combinamos ambos:
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {multiplierEffects.map((item, i) => (
              <motion.div
                key={item.title}
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
            ))}
          </div>
        </div>
      </section>

      {/* GEO: La Era de los LLMs */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div {...fadeUp} className="text-center mb-6 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
              De motores de búsqueda a{" "}
              <span className="text-gradient">motores de respuesta</span>.
            </h2>
          </motion.div>
          <motion.div {...fadeUp} className="max-w-3xl mx-auto mb-14">
            <p className="text-center text-muted-foreground text-lg font-body leading-relaxed mb-4">
              Si ChatGPT no sabe quién eres, para el futuro de la búsqueda no existes.
            </p>
            <p className="text-center text-muted-foreground font-body leading-relaxed">
              Con la llegada de modelos como <strong className="text-foreground">ChatGPT, Gemini y Perplexity</strong>, la búsqueda ha cambiado. Ya no solo se trata de "links azules", sino de ser la fuente citada por la Inteligencia Artificial.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {geoPillars.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-card rounded-xl p-8 border border-border hover:border-secondary/50 transition-colors"
              >
                <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mb-5">
                  <item.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-display font-medium text-xl text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground font-body leading-relaxed text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.h2
            {...fadeUp}
            className="text-3xl md:text-4xl font-bold text-foreground font-display text-center mb-12"
          >
            Preguntas <span className="text-gradient">frecuentes</span>
          </motion.h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
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
          <motion.div {...fadeUp} className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground font-display">
              No seas un espectador de la{" "}
              <span className="text-gradient">evolución digital</span>.
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed font-body max-w-2xl mx-auto">
              Es momento de transformar tu sitio web en una autoridad que las IAs recomienden y tus clientes elijan. El equipo de Nasua está listo para auditar tu ecosistema y trazar tu Roadmap de Visibilidad Total.
            </p>
            <Link
              to="/contacto"
              className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg"
            >
              Iniciar mi Estrategia de Autoridad
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SeoGeo;
