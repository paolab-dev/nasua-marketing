import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Palette, TrendingUp, Zap, Clock, Search, Shield, Linkedin } from "lucide-react";
import content from "@/data/site-content.json";

const iconMap: Record<string, any> = {
  Palette,
  TrendingUp,
  Zap,
  Clock,
  Search,
  Shield,
};

const QuienesSomos = () => {
  const { quienesSomos } = content;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: quienesSomos.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <div className="bg-background text-foreground">
      <Helmet>
        <title>{quienesSomos.seo.title}</title>
        <meta name="description" content={quienesSomos.seo.description} />
        <meta property="og:title" content={quienesSomos.seo.title} />
        <meta property="og:description" content={quienesSomos.seo.description} />
        <meta property="og:image" content="https://nasua.marketing/QuienesSomosNasua.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://nasua.marketing/QuienesSomosNasua.jpg" />
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
            {quienesSomos.hero.title}{" "}
            <span className="text-gradient">{quienesSomos.hero.highlight}</span>
          </motion.h1>
          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-primary-foreground/80 font-body max-w-3xl mx-auto"
          >
            {quienesSomos.hero.text}
          </motion.p>
        </div>
      </section>

      {/* El Dúo Estratégico */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground">
              El Dúo <span className="text-gradient">Estratégico</span>
            </h2>
          </motion.div>

          <div className="space-y-12">
            {quienesSomos.duo.map((person, i) => {
              const Icon = iconMap[person.icon] || Palette;
              return (
                <motion.div
                  key={person.name}
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-2xl border border-border p-8 md:p-10 hover:border-secondary/50 transition-colors"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-display font-medium text-xl text-foreground">{person.name}</h3>
                      <div className="flex items-center gap-3">
                        <p className="text-secondary font-semibold text-sm">{person.role}</p>
                        <a href={person.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn de ${person.name}`} className="bg-[#0A66C2] rounded p-1 hover:opacity-80 transition-opacity">
                          <Linkedin className="w-4 h-4 text-white" />
                        </a>
                        {person.canva && (
                          <a href={person.canva} target="_blank" rel="noopener noreferrer" aria-label={`Canva Creator de ${person.name}`} className="bg-gradient-to-r from-[#7D2AE8] to-[#00C4CC] rounded px-2 py-0.5 hover:opacity-80 transition-opacity">
                            <span className="text-white text-xs font-bold">Canva Creator</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground font-body leading-relaxed italic mb-4">
                    {person.quote}
                  </p>
                  <p className="text-muted-foreground font-body leading-relaxed">
                    {person.bio}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Por qué Nasua es tu mejor aliado */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14">
            <h2 className="text-2xl md:text-4xl font-bold font-display text-foreground">
              Por qué Nasua es tu <span className="text-gradient">mejor aliado</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {quienesSomos.benefits.map((item) => {
              const Icon = iconMap[item.icon] || Zap;
              return (
                <motion.div
                  key={item.title}
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-xl p-8 border border-border hover:border-secondary/50 transition-colors"
                >
                  <Icon className="w-10 h-10 text-secondary mb-4" />
                  <h3 className="font-display font-medium text-xl text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground font-body leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14">
            <h2 className="text-2xl md:text-4xl font-bold font-display text-foreground">
              Preguntas <span className="text-gradient">frecuentes</span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {quienesSomos.faq.map((item, i) => (
              <motion.details
                key={i}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group bg-card rounded-xl border border-border p-6 cursor-pointer hover:border-secondary/50 transition-colors"
              >
                <summary className="font-body font-bold text-foreground list-none flex items-center justify-between">
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

export default QuienesSomos;
export const prerender = true;
