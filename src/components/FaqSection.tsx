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
    q: "¿Cómo puedo financiar la creación de un sitio web para mi negocio en Colombia?",
    a: "A través de Nasua, puedes digitalizar tu empresa hoy mismo y pagar la inversión en cuotas mensuales utilizando el respaldo de Wompi. Esto permite que cualquier emprendedor o pyme en Colombia acceda a tecnología de élite sin afectar su flujo de caja de contado, difiriendo el costo según sus posibilidades financieras.",
  },
  {
    q: "¿Por qué Nasua puede entregar una página web profesional en solo 7 días?",
    a: "Utilizamos un método de desarrollo avanzado llamado Vibe Coding, que combina la experiencia de arquitectos humanos con el poder de la Inteligencia Artificial profesional. Esto nos permite eliminar los tiempos muertos de la programación tradicional y entregar una infraestructura comercial completa, probada y funcional en una semana calendario.",
  },
  {
    q: "¿Necesito tener conocimientos técnicos para administrar mi sitio web con Nasua?",
    a: "No, en absoluto. Nasua opera bajo un modelo de Infraestructura Gestionada. Esto significa que nosotros somos tu departamento de tecnología delegado. Tú te enfocas en vender y atender a tus clientes, mientras nuestro equipo experto se encarga de todas las actualizaciones, ajustes técnicos y mantenimiento de tu sitio.",
  },
  {
    q: "Si Nasua gestiona mi web, ¿quién es el dueño legal del dominio y del código?",
    a: "El dueño legal y absoluto eres tú como cliente. Aunque Nasua administra la operación técnica para garantizar que tu sitio siempre vuele, la propiedad legal de los activos digitales (dominio, contenidos y archivos) te pertenece. Esto queda blindado bajo un contrato de transparencia desde el primer día.",
  },
  {
    q: "¿Qué pasa si quiero cambiar un precio o una foto en mi página web?",
    a: "Con nuestro modelo gestionado, no tienes que preocuparte por aprender a usar herramientas complejas. Simplemente nos solicitas el cambio y nuestro equipo lo ejecuta por ti. Esto garantiza que tu sitio nunca se \"rompa\" por un error de edición y que siempre mantenga una imagen profesional ante tus clientes.",
  },
  {
    q: "¿Es seguro realizar el pago de mi sitio web a través de Wompi?",
    a: "Es totalmente seguro. Wompi es la pasarela de pagos líder en Colombia, respaldada por Bancolombia. Al usar este sistema, tus datos financieros están protegidos por estándares bancarios internacionales y puedes elegir pagar con tarjetas de crédito, PSE o corresponsales bancarios con total tranquilidad.",
  },
  {
    q: "¿Qué diferencia hay entre una Página de Lanzamiento y una Tienda Virtual?",
    a: "Una Página de Lanzamiento (Landing Page) es un \"francotirador\" diseñado para convertir publicidad en contactos directos de clientes. Una Tienda Virtual (Ecommerce) es un local digital completo con catálogo, carrito de compras e integración de pagos automáticos para que vendas tus productos sin intervención humana manual.",
  },
  {
    q: "¿Qué sucede si en el futuro decido dejar de trabajar con Nasua?",
    a: "Creemos en la libertad, no en los rehenes. Si decides migrar tu operación, activamos nuestro Contrato de Transferencia Transparente. Te entregamos tus activos digitales de forma organizada para que puedas llevarlos a otro proveedor, asegurando que nunca pierdas tu inversión ni tu presencia en internet.",
  },
  {
    q: "¿Mi sitio web aparecerá en los primeros resultados de Google en Colombia?",
    a: "Todos los sitios de Nasua están construidos con una arquitectura de SEO Semántico. Esto facilita que tanto Google como las nuevas inteligencias artificiales de búsqueda entiendan exactamente qué vendes y dónde estás ubicado, aumentando drásticamente tus posibilidades de aparecer ante clientes potenciales en tu ciudad.",
  },
  {
    q: "¿Por qué es mejor un sitio gestionado por Nasua que hacerlo yo mismo en plataformas gratuitas?",
    a: "Las plataformas gratuitas suelen ser lentas, limitadas y no te pertenecen realmente. Al elegir la infraestructura gestionada de Nasua, obtienes velocidad de carga superior, diseño profesional de alta conversión y un equipo experto que resuelve problemas por ti, convirtiendo tu web en una herramienta de ingresos y no en una tarea pendiente en tu lista.",
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
