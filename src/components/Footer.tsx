import nasuaLogo from "@/assets/nasua-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-primary section-padding py-12">
      <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={nasuaLogo} alt="Nasua" className="w-12 h-12 rounded-lg object-cover" />
          <span className="text-primary-foreground font-display font-bold text-xl">
            nasua
          </span>
        </div>
        <p className="text-primary-foreground/60 text-sm text-center md:text-right">
          © 2026 Nasua. Todos los derechos reservados. Hecho en Colombia 🇨🇴
        </p>
      </div>
    </footer>
  );
};

export default Footer;
