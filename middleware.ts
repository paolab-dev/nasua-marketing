import { next } from "@vercel/edge";

const BASE_URL = "https://nasua.marketing";

interface PageMeta {
  title: string;
  description: string;
  image: string;
}

const routeMeta: Record<string, PageMeta> = {
  "/": {
    title: "Nasua – Páginas Web Profesionales en Colombia",
    description: "Páginas web profesionales en Colombia desde 48 horas. Landing pages, sitios corporativos y tiendas virtuales con financiación Wompi. 100% tuyo.",
    image: `${BASE_URL}/Nasua-PaginasWebProfesionalesEnColombia.jpg`,
  },
  "/adn-nasua": {
    title: "ADN Nasua | Filosofía de Trabajo",
    description: "Velocidad radical, alta calidad a bajo costo y contenido que Google entiende. Tu infraestructura de crecimiento gestionada.",
    image: `${BASE_URL}/ADNNasua.jpg`,
  },
  "/landing-page": {
    title: "Landing Page Profesional en 48 Horas | Nasua Colombia",
    description: "Landing Page de alta conversión en solo 2 días. Calidad de élite, bajo costo y financiación con Wompi.",
    image: `${BASE_URL}/LandingPageNasua.jpg`,
  },
  "/sitio-corporativo": {
    title: "Sitio Web Empresarial en 5 Días | Nasua Colombia",
    description: "Proyecta la imagen profesional que tu negocio merece en solo 5 días. Alta calidad y financiación con Wompi.",
    image: `${BASE_URL}/SitioCorporativoNasua.jpg`,
  },
  "/ecommerce": {
    title: "Tienda Virtual en Colombia | E-commerce Gestionado | Nasua",
    description: "Tienda virtual profesional en 10 días. Catálogo WhatsApp o venta automática con pasarela de pagos.",
    image: `${BASE_URL}/EmpezarProyectoNasua.jpg`,
  },
  "/estrategia": {
    title: "Estrategia y Crecimiento Digital | Agencia Nasua",
    description: "SEO, SEM (Google Partner), automatizaciones y estrategia de crecimiento digital para tu negocio.",
    image: `${BASE_URL}/EstrategiaNasua.jpg`,
  },
  "/quienes-somos": {
    title: "Quiénes Somos | Nasua",
    description: "Conoce al equipo de Nasua: Paola Bohórquez (Directora UX/UI) y John Escobar (Director de Mercadeo ex-Samsung).",
    image: `${BASE_URL}/QuienesSomosNasua.jpg`,
  },
  "/contacto": {
    title: "Contacto | Nasua",
    description: "Cuéntanos qué necesitas y en menos de 24 horas te contactamos con una propuesta personalizada.",
    image: `${BASE_URL}/EmpezarProyectoNasua.jpg`,
  },
  "/blog": {
    title: "Blog | Nasua – Páginas Web Profesionales",
    description: "Artículos, guías y novedades sobre diseño web, marketing digital y estrategia online para empresas en Colombia.",
    image: `${BASE_URL}/Nasua-PaginasWebProfesionalesEnColombia.jpg`,
  },
  "/terminos-y-condiciones": {
    title: "Términos y Condiciones | Nasua",
    description: "Términos y condiciones de uso del sitio web de Nasua.",
    image: `${BASE_URL}/Nasua-PaginasWebProfesionalesEnColombia.jpg`,
  },
  "/politica-de-privacidad": {
    title: "Política de Privacidad | Nasua",
    description: "Política de privacidad de Nasua. Conoce cómo protegemos tus datos personales.",
    image: `${BASE_URL}/Nasua-PaginasWebProfesionalesEnColombia.jpg`,
  },
};

const CRAWLER_UA = /facebookexternalhit|WhatsApp|Twitterbot|TwitterBot|LinkedInBot|Slackbot|Discordbot|TelegramBot/i;

function getMetaForPath(path: string): PageMeta {
  if (routeMeta[path]) return routeMeta[path];
  if (path.startsWith("/blog/")) {
    return {
      title: "Blog | Nasua – Páginas Web Profesionales",
      description: "Artículos y recursos para potenciar tu presencia digital.",
      image: `${BASE_URL}/Nasua-PaginasWebProfesionalesEnColombia.jpg`,
    };
  }
  return routeMeta["/"];
}

export default function middleware(request: Request) {
  const ua = request.headers.get("user-agent") || "";

  // Not a crawler — continue normally to SPA
  if (!CRAWLER_UA.test(ua)) {
    return next();
  }

  const url = new URL(request.url);
  const path = url.pathname;

  // Skip static files
  if (path.includes(".")) {
    return next();
  }

  const meta = getMetaForPath(path);
  const canonicalUrl = `${BASE_URL}${path}`;

  const html = `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8"/>
<title>${meta.title}</title>
<meta name="description" content="${meta.description}"/>
<meta property="og:title" content="${meta.title}"/>
<meta property="og:description" content="${meta.description}"/>
<meta property="og:image" content="${meta.image}"/>
<meta property="og:url" content="${canonicalUrl}"/>
<meta property="og:type" content="website"/>
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="${meta.title}"/>
<meta name="twitter:description" content="${meta.description}"/>
<meta name="twitter:image" content="${meta.image}"/>
</head>
<body></body>
</html>`;

  return new Response(html, {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}

export const config = {
  matcher: "/((?!api|_next|static|.*\\..*).*)",
};
