import nasuaLogo from "@/assets/nasua-logo.jpg";

const navLinks = [
  { href: "/adn-nasua", label: "ADN Nasua" },
  { href: "/landing-page", label: "Landing Page" },
  { href: "/sitio-corporativo", label: "Sitio Corporativo" },
  { href: "/ecommerce", label: "eCommerce" },
  { href: "/quienes-somos", label: "Quiénes Somos" },
  { href: "/contacto", label: "Contacto" },
];

const Footer = () => {
  return (
    <footer className="bg-primary section-padding py-12">
      <div className="container mx-auto max-w-5xl flex flex-col gap-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          <div className="flex items-center gap-3">
            <a href="/">
              <img src={nasuaLogo} alt="Nasua" className="w-12 h-12 rounded-lg object-cover" />
            </a>
            <a href="/" className="text-primary-foreground font-display font-bold text-xl">
              nasua
            </a>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
            {navLinks.map((link) => (
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
        <div className="border-t border-primary-foreground/10 pt-6">
          <p className="text-primary-foreground/60 text-sm text-center">
            © 2026 Nasua. Todos los derechos reservados. Hecho en Colombia 🇨🇴
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
