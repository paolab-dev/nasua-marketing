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
    q: "¿De verdad entregan mi página en solo 2 días?",
    a: "Sí, para las Landing Pages nuestra promesa es de 48 horas hábiles. El cronómetro empieza a correr en el momento en que confirmamos tu pago y nos entregas el \"Kit de Insumos\" (tu logo, fotos y los textos básicos). Para proyectos más grandes como E-commerce, nos tomamos hasta 10 días para asegurar que toda la maquinaria de ventas quede a punto.",
  },
  {
    q: "¿Qué hacen exactamente con mis textos para que Google me encuentre?",
    a: "No somos una agencia que solo \"pega\" información. Nuestro Director de Mercadeo y el equipo de contenido revisan tus textos y los organizan bajo una estructura lógica que Google ama. Usamos títulos, palabras clave y jerarquías que le explican claramente a los buscadores qué haces y por qué eres la mejor opción. Es SEO real incluido desde el día uno.",
  },
  {
    q: "¿Cómo funciona la financiación con Wompi?",
    a: "Queremos que tu negocio crezca sin asfixiar tu bolsillo. Al momento de pagar, eliges la opción de Wompi y puedes diferir el valor de tu infraestructura digital hasta en 4 cuotas. Es una forma flexible de estrenar casa digital mientras los nuevos clientes empiezan a llegar.",
  },
  {
    q: "¿Por qué el costo es bajo si dicen que la calidad es de élite?",
    a: "La respuesta es tecnología. Gracias al Vibe Coding y al uso de Inteligencia Artificial avanzada, eliminamos cientos de horas de trabajo manual que las agencias tradicionales te cobran carísimo. No ahorramos en calidad, ahorramos en tiempo de ejecución y te transferimos ese beneficio a ti.",
  },
  {
    q: "¿Yo soy el dueño legal de mi página web?",
    a: "100% sí. A diferencia de otros que te \"alquilan\" la web o te tienen de rehén, en Nasua tú eres el dueño absoluto de tu dominio, tus archivos y tu base de datos. Nosotros operamos y gestionamos la tecnología para que tú no sufras, pero el activo es tuyo y tienes el título de propiedad legal por contrato.",
  },
  {
    q: "¿Necesito saber de programación o tecnología para manejar mi web?",
    a: "Para nada. Ese es precisamente el \"ADN Nasua\". Nosotros somos tu departamento de tecnología delegado. Si necesitas cambiar un precio, subir una foto o actualizar un servicio, simplemente nos lo pides y nuestro equipo lo hace por ti. Tú dedícate a vender, que nosotros nos encargamos de que los cables funcionen.",
  },
  {
    q: "¿Qué pasa si después quiero convertir mi página informativa en una tienda?",
    a: "Nuestra arquitectura es escalable. No tienes que botar lo que ya hiciste. Si empiezas con una web empresarial y luego decides vender productos en automático, podemos evolucionar tu plataforma sin traumas técnicos. Tu inversión inicial siempre está protegida.",
  },
  {
    q: "¿Qué incluye el mantenimiento y la gestión de Nasua?",
    a: "Incluye que tu página esté siempre al aire, sea rápida y segura. Vigilamos los servidores, actualizamos la tecnología para que no se quede obsoleta y estamos pendientes de cualquier ajuste que necesites. Es como tener un mecánico de confianza para tu local digital 24/7.",
  },
  {
    q: "¿Qué necesito entregarles para que empiecen a trabajar?",
    a: "Necesitamos tres cosas básicas: tu logo (en buena calidad), las fotos que quieras mostrar y los textos con la información de tu negocio. Una vez recibamos esto y el pago, activamos nuestro equipo de diseño y mercadeo para cumplir con los tiempos de entrega.",
  },
  {
    q: "¿Por qué elegir a Nasua y no a un diseñador independiente?",
    a: "Porque en Nasua no solo compras diseño. Compras la experiencia de una Directora UX/UI que ha trabajado para mercados globales y un Director de Mercadeo que ha gestionado marcas como Samsung. Te llevas una estrategia de crecimiento y una infraestructura técnica de nivel multinacional a un precio de mercado local.",
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
          Preguntas frecuentes: Todo lo que necesitas saber sobre tu nueva web
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
