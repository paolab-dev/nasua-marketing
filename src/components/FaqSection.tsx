import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const faqs = [
  {
    q: "¿Qué diferencia a Nasua de una agencia de marketing tradicional?",
    a: "Una agencia tradicional suele ejecutar tareas aisladas: un diseño o una campaña de anuncios. En Nasua trabajamos como tu Socio de Crecimiento. Nuestro equipo se involucra en tu modelo de negocio para construir una infraestructura técnica que tiene un solo objetivo: rentabilidad. No entregamos piezas sueltas; entregamos un sistema que escala tu facturación de forma lógica.",
  },
  {
    q: "¿Por qué el enfoque en \"Soberanía Digital\"?",
    a: "En el sector digital abundan las malas prácticas donde las agencias retienen los accesos de sus clientes. En Nasua, tú eres el dueño total de tus activos. Dominios, cuentas de pauta, códigos y bases de datos quedan a tu nombre desde el primer día. El equipo trabaja para que elijas seguir con nosotros por los resultados que generamos, no por una dependencia técnica forzada.",
  },
  {
    q: "¿Cómo seleccionan la tecnología para cada proyecto?",
    a: "No usamos una sola herramienta para todo. Seleccionamos la tecnología según tus objetivos de negocio. Si buscas un posicionamiento orgánico (SEO) robusto, el equipo implementa WordPress con arquitecturas modernas. Si tu prioridad es la velocidad de carga y una experiencia de usuario única, empleamos Vibe Coding para reducir tiempos de desarrollo. Usamos el motor que asegure el retorno de tu inversión.",
  },
  {
    q: "¿En cuánto tiempo se ven los resultados?",
    a: "La velocidad operativa es una de nuestras prioridades. Gracias a nuestra metodología de trabajo ágil, el equipo entrega activos funcionales (como Landings o webs de alto rendimiento) en pocos días o semanas. La pauta digital genera tráfico de forma inmediata, mientras que el SEO y la autoridad de marca son motores que se fortalecen con el análisis y ajuste mensual constante.",
  },
  {
    q: "¿El equipo se encarga de la pauta en Google y Meta?",
    a: "Sí. Como socios de tu crecimiento, gestionamos tu inversión publicitaria con un enfoque total en el retorno (ROI). No buscamos métricas de vanidad como \"likes\"; buscamos clientes potenciales calificados. Alineamos el mensaje de tus anuncios con la arquitectura de tu sitio web para que cada peso invertido tenga la mayor probabilidad de conversión.",
  },
  {
    q: "¿Cómo es la comunicación con el equipo de trabajo?",
    a: "Creemos en la comunicación directa y sin filtros. Al contratarnos, trabajas con los estrategas que diseñaron el método y ejecutan tu Roadmap, no con intermediarios o pasantes. Nuestro equipo técnico y estratégico mantiene contacto constante para asegurar que las decisiones se tomen con criterio de negocio y rapidez.",
  },
  {
    q: "¿Qué sucede después de lanzar el sitio web o las campañas?",
    a: "Un sistema digital que no se mide, pierde valor rápidamente. Tras el lanzamiento, el equipo entra en una fase de Optimización y Renta. Analizamos el comportamiento de tus usuarios, ajustamos los embudos de venta y escalamos los presupuestos que generan ganancias. Nuestro compromiso es mantener tu motor de ventas actualizado y competitivo mes a mes.",
  },
  {
    q: "¿Trabajan con empresas fuera de Colombia?",
    a: "Sí. Nuestra estructura está diseñada para atender mercados internacionales, especialmente en Latinoamérica y el mercado hispano de Estados Unidos. El equipo entiende los retos de escala global y adaptamos la estrategia de pauta y SEO para que tu marca compita con éxito en entornos de alta exigencia profesional.",
  },
  {
    q: "¿Ofrecen opciones de financiación para el desarrollo?",
    a: "Sabemos que la liquidez es clave para tu operación. A través de nuestra alianza con Wompi (Bancolombia), puedes pagar el desarrollo de tus activos digitales a cuotas o usar tarjeta de crédito. El objetivo es que la tecnología empiece a generar ventas para tu empresa mientras gestionas tu flujo de caja de forma responsable.",
  },
  {
    q: "¿Cuál es el primer paso para empezar?",
    a: "Todo inicia con una Consultoría de Diagnóstico. En esta sesión, nuestro equipo analiza tu situación actual, identifica los cuellos de botella en tu proceso de ventas y define un Roadmap claro. No es una llamada comercial común; es el inicio de un plan estratégico diseñado para que dejes de gastar en marketing y empieces a invertir en crecimiento.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

const FaqSection = () => {
  return (
    <section className="section-padding bg-background" id="faq">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>
      <div className="container mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
  );
};

export default FaqSection;
