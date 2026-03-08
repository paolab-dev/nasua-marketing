import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import nasuaLogo from "@/assets/nasua-logo.jpg";

const servicios = [
  { href: "/landing-page", label: "Landing Page" },
  { href: "/sitio-corporativo", label: "Sitio Corporativo" },
  { href: "/ecommerce", label: "eCommerce" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [serviciosOpen, setServiciosOpen] = useState(false);
  const [mobileServiciosOpen, setMobileServiciosOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServiciosOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/90 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-2">
          <a href="/">
            <img src={nasuaLogo} alt="Nasua" className="w-[46px] h-[46px] rounded-lg object-cover" />
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

          {/* Servicios dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setServiciosOpen(!serviciosOpen)}
              className="flex items-center gap-1 text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
            >
              Servicios
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${serviciosOpen ? "rotate-180" : ""}`}
              />
            </button>

            {serviciosOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 bg-primary border border-primary-foreground/15 rounded-xl shadow-xl py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                {servicios.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    className="block px-4 py-2.5 text-sm text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/5 transition-colors"
                    onClick={() => setServiciosOpen(false)}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="/blog" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
            Blog
          </a>
          <a href="/quienes-somos" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
            Quiénes Somos
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

          {/* Mobile servicios accordion */}
          <div>
            <button
              onClick={() => setMobileServiciosOpen(!mobileServiciosOpen)}
              className="flex items-center gap-1 text-primary-foreground/70 text-sm w-full"
            >
              Servicios
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${mobileServiciosOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileServiciosOpen && (
              <div className="pl-4 mt-2 space-y-3">
                {servicios.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    className="block text-primary-foreground/60 text-sm"
                    onClick={() => setOpen(false)}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="/blog" className="block text-primary-foreground/70 text-sm" onClick={() => setOpen(false)}>
            Blog
          </a>
          <a href="/quienes-somos" className="block text-primary-foreground/70 text-sm" onClick={() => setOpen(false)}>
            Quiénes Somos
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
