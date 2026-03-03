import { useState } from "react";
import { Menu, X } from "lucide-react";
import nasuaLogo from "@/assets/nasua-logo.jpg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/90 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-2">
          <a href="/">
            <img src={nasuaLogo} alt="Nasua" className="w-10 h-10 rounded-lg object-cover" />
          </a>
          <a href="/" className="text-primary-foreground font-display font-bold text-lg">
            nasua
          </a>
        </div>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          <a href="/adn-nasua" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
            ADN Nasua
          </a>
          <a href="/landing-page" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
            Landing Page
          </a>
          <a href="/sitio-corporativo" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
            Sitio Corporativo
          </a>
          <a href="/ecommerce" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
            eCommerce
          </a>
          <a
            href="/contacto"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-5 py-2 rounded-lg text-sm transition-all"
          >
            Quiero mi Sitio
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="lg:hidden text-primary-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-primary border-t border-primary-foreground/10 px-6 py-4 space-y-4">
          <a href="/adn-nasua" className="block text-primary-foreground/70 text-sm" onClick={() => setOpen(false)}>
            ADN Nasua
          </a>
          <a href="/landing-page" className="block text-primary-foreground/70 text-sm" onClick={() => setOpen(false)}>
            Landing Page
          </a>
          <a href="/sitio-corporativo" className="block text-primary-foreground/70 text-sm" onClick={() => setOpen(false)}>
            Sitio Corporativo
          </a>
          <a href="/ecommerce" className="block text-primary-foreground/70 text-sm" onClick={() => setOpen(false)}>
            eCommerce
          </a>
          <a
            href="/contacto"
            className="block bg-secondary text-secondary-foreground font-semibold px-5 py-2 rounded-lg text-sm text-center"
            onClick={() => setOpen(false)}
          >
            Quiero mi Sitio
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
