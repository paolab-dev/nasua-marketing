const WhatsAppButton = () => {
  const phoneNumber = "573001234567"; // Cambia este número por el tuyo

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
      style={{ backgroundColor: "#25D366" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="white"
        className="h-7 w-7"
      >
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.9 15.9 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.312 22.594c-.39 1.1-1.932 2.014-3.18 2.28-.854.18-1.968.324-5.72-1.23-4.804-1.988-7.896-6.862-8.136-7.18-.228-.318-1.926-2.566-1.926-4.894s1.22-3.472 1.654-3.946c.434-.474.948-.592 1.264-.592.316 0 .632.002.908.016.292.016.684-.11 1.07.816.39.944 1.328 3.234 1.444 3.47.118.236.196.51.04.828-.158.316-.236.514-.472.79-.236.276-.498.616-.71.826-.236.236-.482.492-.208.966.276.474 1.226 2.022 2.632 3.276 1.808 1.612 3.332 2.112 3.806 2.348.474.236.75.198 1.028-.118.276-.316 1.186-1.382 1.502-1.856.316-.474.632-.394 1.066-.236.434.158 2.762 1.302 3.236 1.54.474.236.79.354.908.552.118.196.118 1.14-.272 2.24z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
