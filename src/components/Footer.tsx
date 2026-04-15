import { Mail, MapPin } from "lucide-react";
import nasuaLogo from "@/assets/nasua-logo.jpg";

const webLinks = [
  { href: "/desarrollo-web-estrategico", label: "Diseño y Desarrollo Web" },
  { href: "/landing-page", label: "Landing Pages" },
  { href: "/sitio-corporativo", label: "Sitios Corporativos" },
  { href: "/ecommerce", label: "E-commerce" },
  { href: "/webmaster", label: "Webmaster & Continuidad Digital" },
];

const serviciosLinks = [
  { href: "/estrategia-social-media", label: "Estrategia & Contenido Social Media" },
  { href: "/branding", label: "Branding & Autoridad" },
  { href: "/pauta-digital", label: "Pauta Digital & Performance" },
  { href: "/seo-geo", label: "SEO & Visibilidad IA (GEO)" },
  { href: "/copywriting", label: "Copywriting Estratégico" },
  { href: "/automatizacion", label: "Automatización Operativa" },
];

const agenciaLinks = [
  { href: "/", label: "Inicio" },
  { href: "/adn-nasua", label: "ADN Nasua" },
  { href: "/quienes-somos", label: "Quiénes Somos" },
  { href: "/blog", label: "Blog" },
];

const Footer = () => {
  return (
    <footer className="bg-primary section-padding py-12 border-t-4 border-secondary">
      <div className="container mx-auto max-w-6xl flex flex-col gap-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-6">

          {/* Logo y tagline */}
          <div className="md:col-span-1 flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-3">
              <a href="/">
                <img src={(nasuaLogo as { src: string }).src} alt="Nasua" className="w-12 h-12 rounded-lg object-cover" />
              </a>
              <a href="/" className="text-primary-foreground font-display font-bold text-xl">
                nasua
              </a>
            </div>
            <p className="text-primary-foreground/80 font-body text-sm text-center md:text-left">
              Democratizando la tecnología de punta en Colombia.
            </p>
          </div>

          {/* Diseño Web */}
          <div className="flex flex-col gap-3 text-center md:text-left">
            <h4 className="text-secondary font-display font-bold text-xs uppercase tracking-wider">
              Diseño y Desarrollo Web
            </h4>
            <nav className="flex flex-col gap-2">
              {webLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm transition-colors ${
                    link.href === "/desarrollo-web-estrategico"
                      ? "text-primary-foreground/80 hover:text-primary-foreground font-medium"
                      : "text-primary-foreground/60 hover:text-primary-foreground pl-2"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Otros servicios */}
          <div className="flex flex-col gap-3 text-center md:text-left">
            <h4 className="text-secondary font-display font-bold text-xs uppercase tracking-wider">
              Más Servicios
            </h4>
            <nav className="flex flex-col gap-2">
              {serviciosLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Agencia */}
          <div className="flex flex-col gap-3 text-center md:text-left">
            <h4 className="text-primary-foreground font-display font-bold text-xs uppercase tracking-wider">
              Agencia
            </h4>
            <nav className="flex flex-col gap-2">
              {agenciaLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contacto */}
          <div className="flex flex-col gap-3 text-center md:text-left">
            <h4 className="text-primary-foreground font-display font-bold text-xs uppercase tracking-wider">
              Contacto
            </h4>
            <div className="flex flex-col gap-2 text-primary-foreground/60 text-sm">
              <a
                href="mailto:paola@nasua.co"
                className="hover:text-primary-foreground transition-colors flex items-center gap-2 justify-center md:justify-start"
              >
                <Mail size={14} />
                paola@nasua.co
              </a>
              <a
                href="mailto:alex@nasua.co"
                className="hover:text-primary-foreground transition-colors flex items-center gap-2 justify-center md:justify-start"
              >
                <Mail size={14} />
                alex@nasua.co
              </a>
              <p className="text-primary-foreground/50 mt-1 flex items-center gap-2 justify-center md:justify-start">
                <MapPin size={14} />
                Bogotá &amp; Medellín, Colombia 🇨🇴
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col items-center gap-3">
          <div className="flex gap-2 items-center">
            <a href="/politica-privacidad" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
              Política de Privacidad
            </a>
            <span className="text-primary-foreground/30">|</span>
            <a href="/terminos-condiciones" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
              Términos y Condiciones
            </a>
          </div>
          <p className="text-primary-foreground/60 text-sm text-center">
            © 2026 Nasua. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
