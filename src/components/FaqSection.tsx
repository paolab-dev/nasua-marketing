import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "¿Cuánto tiempo tarda en estar listo mi sitio web?",
    a: "Nuestro proceso de Vibe Coding nos permite entregar un sitio de alta fidelidad en 7 días hábiles, contados a partir de que recibimos la información básica de tu negocio. No sacrificamos calidad por velocidad; simplemente usamos tecnología más eficiente.",
  },
  {
    q: "¿Es seguro realizar el análisis de crédito con Wompi?",
    a: "Totalmente. Wompi (respaldado por Bancolombia) es la pasarela líder en seguridad. El proceso ocurre en sus servidores cifrados; Nasua nunca tiene acceso a tus datos bancarios ni financieros. Tu cupo de crédito depende 100% de tu historial con ellos.",
  },
  {
    q: "¿Puedo llevarme mi web a otro servidor si decido no seguir con Nasua?",
    a: "Sí. A diferencia de las agencias tradicionales o plataformas alquiladas, aquí tú eres el dueño total del código fuente. Creemos en la Soberanía Digital: tu negocio no debe ser rehén de ningún proveedor.",
  },
  {
    q: "¿Por qué Nasua no usa WordPress para sus desarrollos?",
    a: "En 2026, WordPress es vulnerable y lento para las exigencias del mercado. En Nasua usamos arquitecturas modernas (Vercel/Edge) que son virtualmente imposibles de hackear, cargan en milisegundos y no dependen de plugins que se rompen todo el tiempo.",
  },
  {
    q: "¿Qué pasa si prefiero cerrar mis ventas por WhatsApp en lugar de cobrar automático?",
    a: "Tu tienda es adaptativa. Podemos configurar un embudo híbrido: el cliente ve tu catálogo profesional y, al dar clic, llega a tu WhatsApp con el pedido listo y filtrado. Es ideal para negocios que requieren asesoría antes de cobrar.",
  },
  {
    q: "¿Qué cubre el pago del soporte y mantenimiento anual?",
    a: "El fee de $490.000 COP anuales asegura que tu web esté siempre en línea en redes de alta velocidad, protegida contra nuevas amenazas y actualizada con las últimas mejoras de IA. Es el seguro de vida de tu activo digital.",
  },
  {
    q: "¿Mi página web aparecerá como respuesta en ChatGPT o Gemini?",
    a: "Sí. Aplicamos estrategias de AEO (Answer Engine Optimization) y datos estructurados. Esto facilita que los motores de inteligencia artificial lean, entiendan y recomienden tu negocio cuando un usuario haga preguntas relacionadas con tus servicios.",
  },
];

const FaqSection = () => {
  return (
    <section className="section-padding bg-background" id="faq">
      <div className="container mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-foreground font-display text-center mb-12"
        >
          Preguntas Frecuentes
        </motion.h2>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-card border border-border rounded-lg px-6"
            >
              <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline">
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
