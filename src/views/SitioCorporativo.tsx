"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import CorporateLeadForm from "@/components/CorporateLeadForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Shield, Brain, TrendingUp, Globe, Code, ShoppingBag, Zap, Smartphone, Link, ClipboardCheck, Layout, Wrench, Rocket } from "lucide-react";

const differentials = [
  {
    icon: Shield,
    title: "Autoridad Instantánea",
    text: "Proyecta la solidez de una empresa líder desde el primer segundo.",
  },
  {
    icon: Brain,
    title: "Centro de Operaciones",
    text: "Conecta tus redes sociales, campañas de pauta y sistemas internos en un solo lugar.",
  },
  {
    icon: TrendingUp,
    title: "Propiedad Total",
    text: "El control de tu presencia digital, tus datos y tu tecnología siempre está en tus manos.",
  },
];

const platforms = [
  {
    icon: Globe,
    title: "WordPress Enterprise",
    text: "La solución estándar para empresas que requieren una gestión de contenidos potente, un SEO profundo y la capacidad de que su equipo interno actualice información sin depender de programadores.",
  },
  {
    icon: Code,
    title: "Vibe Coding (React / Custom)",
    text: "Para corporaciones que exigen una velocidad de carga instantánea, seguridad de alto nivel y una experiencia de usuario que las plataformas tradicionales no pueden ofrecer.",
  },
  {
    icon: ShoppingBag,
    title: "Sistemas Integrados",
    text: "Si tu empresa requiere funciones de comercio electrónico o membresías, evaluamos la integración de Shopify o módulos personalizados que aseguren una operación fluida.",
  },
];

const features = [
  {
    icon: Zap,
    title: "Velocidad de Carga Extrema",
    text: "En 2026, cada segundo cuenta. Optimizamos tu sitio para que la experiencia del usuario sea instantánea en cualquier dispositivo.",
  },
  {
    icon: Smartphone,
    title: "Diseño Orientado a la Conversión",
    text: "Aplicamos psicología de navegación para guiar al visitante hacia la acción (compra, registro o contacto).",
  },
  {
    icon: Link,
    title: "Arquitectura Escalable",
    text: "Tu sitio crece contigo. Añade nuevas funcionalidades, secciones o integraciones a medida que tu empresa se expande.",
  },
  {
    icon: Shield,
    title: "Seguridad y Soporte Continuo",
    text: "Protegemos tu activo más valioso con protocolos de seguridad avanzados y mantenimiento preventivo constante.",
  },
];

const processSteps = [
  { icon: ClipboardCheck, title: "Diagnóstico de Infraestructura", text: "Analizamos tus necesidades técnicas y tus proyecciones de crecimiento." },
  { icon: Layout, title: "Arquitectura de Información", text: "Definimos la estructura que mejor proyecte tu autoridad y facilite la navegación del usuario." },
  { icon: Wrench, title: "Desarrollo y Testing", text: "Implementamos la tecnología elegida bajo estándares estrictos de seguridad y rendimiento." },
  { icon: Rocket, title: "Entrega y Entrenamiento", text: "Te entregamos las llaves de tu activo y capacitamos a tu equipo para que operen el sitio con total autonomía." },
];

const faqItems = [
  {
    q: "¿Realmente pueden entregar un sitio corporativo en 48 horas?",
    a: "Sí. Gracias a nuestra metodología de desarrollo ágil, eliminamos los procesos lentos y nos enfocamos en lo que tu negocio necesita para salir al mercado. Esto te permite tener un entorno digital funcional y profesional en tiempo récord, permitiéndote captar oportunidades de venta sin esperas de meses.",
  },
  {
    q: "¿Qué diferencia hay entre un sitio de Nasua y una página web convencional?",
    a: "La mayoría de las agencias diseñan páginas 'bonitas'; nosotros diseñamos arquitecturas de conversión. Cada sección, botón y texto de tu sitio corporativo tiene un objetivo estratégico: proyectar autoridad, resolver dudas de tus clientes y facilitar el cierre de ventas.",
  },
  {
    q: "¿Mi sitio estará preparado para aparecer en ChatGPT y buscadores de IA?",
    a: "Absolutamente. No solo hacemos SEO tradicional para Google; optimizamos tu sitio para el GEO (Generative Engine Optimization). Esto asegura que cuando un usuario consulte a una Inteligencia Artificial por soluciones como las tuyas, tu empresa sea una de las fuentes recomendadas.",
  },
  {
    q: "¿Podré actualizar el contenido yo mismo o dependeré de la agencia?",
    a: "Depende de la tecnología que elijamos según tus objetivos. Si necesitas total autonomía para cambios diarios, desarrollamos sobre sistemas autogestionables como WordPress. Si priorizas la máxima velocidad de carga y un diseño de vanguardia, utilizamos herramientas de desarrollo dinámico (como Lovable); en este caso, nosotros nos encargamos de los ajustes para asegurar que el sitio siempre rinda al 100%.",
  },
  {
    q: "¿Qué pasa si mi empresa crece y necesito más funciones después?",
    a: "Nuestros sitios son modulares y escalables. Puedes empezar con una estructura corporativa sólida y, a medida que tu facturación aumente, integrar un CRM, sistemas de automatización, blogs especializados o herramientas de venta sin tener que reconstruir todo desde cero.",
  },
  {
    q: "¿Ustedes se encargan del mantenimiento técnico?",
    a: "Sí. Al ser tu Socio de Crecimiento, el equipo monitorea que tu infraestructura esté siempre actualizada, segura y volando en términos de velocidad.",
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

const SitioCorporativo = () => {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <div className="bg-background text-foreground">

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
            Sitio Web Corporativo:{" "}
            <span className="text-gradient">Tu Centro de Mando Digital.</span>
          </motion.h1>
          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-primary-foreground/80 font-body max-w-3xl mx-auto"
          >
            No diseñamos simples páginas web; construimos el activo estratégico que centraliza tu operación, proyecta autoridad y facilita el cierre de ventas. En Nasua, pasamos de la idea al despliegue en tiempo récord para que tu negocio nunca se detenga.
          </motion.p>
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10"
          >
            <button
              onClick={() => setFormOpen(true)}
              className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg cursor-pointer"
            >
              Agendar Consultoría de Crecimiento
            </button>
          </motion.div>
        </div>
      </section>

      {/* El fin de las páginas estáticas */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-6 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
              Un activo diseñado para generar{" "}
              <span className="text-gradient">confianza y conversiones</span>.
            </h2>
          </motion.div>
          <motion.p initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center text-muted-foreground text-lg font-body max-w-3xl mx-auto mb-14 leading-relaxed">
            En el mercado actual, tu sitio web es el lugar donde se cierran los tratos. Un sitio corporativo con el sello Nasua no solo se ve bien; está diseñado bajo una arquitectura de ventas que elimina las fricciones entre tu cliente y tu producto.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {differentials.map((d, i) => (
              <motion.div
                key={d.title}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-card rounded-xl p-8 border border-border hover:border-secondary/50 transition-colors text-center"
              >
                <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-5">
                  <d.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-display font-medium text-xl text-foreground mb-3">{d.title}</h3>
                <p className="text-muted-foreground font-body leading-relaxed text-sm">{d.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tecnología */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-primary-foreground">
              La infraestructura adecuada para tu nivel de{" "}
              <span className="text-gradient">operación</span>.
            </h2>
          </motion.div>
          <motion.p initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center text-primary-foreground/80 text-lg font-body max-w-3xl mx-auto mb-14 leading-relaxed">
            El equipo técnico evalúa tus necesidades de contenido, seguridad y rendimiento para implementar la plataforma más rentable.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {platforms.map((p, i) => (
              <motion.div
                key={p.title}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-8 border border-primary-foreground/20 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-5">
                  <p.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-display font-medium text-xl text-primary-foreground mb-3">{p.title}</h3>
                <p className="text-primary-foreground/70 font-body leading-relaxed text-sm">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Características */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
              Tecnología de alto nivel al servicio de{" "}
              <span className="text-gradient">tu rentabilidad</span>.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={false}
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
            ))}
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
              De la estrategia al lanzamiento en días,{" "}
              <span className="text-gradient">no en meses</span>.
            </h2>
            <p className="text-muted-foreground text-lg font-body max-w-3xl mx-auto mt-4 leading-relaxed">
              Gracias a nuestras herramientas de desarrollo ágil, hemos eliminado los procesos que tardaban a veces días y las esperas interminables. Menos reuniones innecesarias y más entregas de valor que puedes ver y probar en tiempo real.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={false}
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
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-background">
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
          <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground font-display">
              ¿Listo para construir tu centro de{" "}
              <span className="text-gradient">mando digital</span>?
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed font-body max-w-2xl mx-auto">
              El equipo de Nasua está listo para auditar tu infraestructura actual y diseñar el sitio empresarial que tu operación necesita. Sin promesas vacías, solo tecnología orientada a resultados.
            </p>
            <button
              onClick={() => setFormOpen(true)}
              className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg cursor-pointer"
            >
              Agendar Consultoría de Crecimiento
            </button>
          </motion.div>
        </div>
      </section>

      <CorporateLeadForm open={formOpen} onOpenChange={setFormOpen} />
    </div>
  );
};

export default SitioCorporativo;
