import { next } from "@vercel/edge";

const BASE_URL = "https://nasua.marketing";

interface PageMeta {
  title: string;
  description: string;
  image: string;
}

const routeMeta: Record<string, PageMeta> = {
  "/": {
    title: "Nasua Marketing | Estrategia SEO, UX/UI y Desarrollo Web",
    description: "Transformamos tu modelo de negocio con SEO de alto impacto, diseño UX/UI centrado en conversión y desarrollo web robusto. Haz tu marca sostenible hoy.",
    image: `${BASE_URL}/Nasua-PaginasWebProfesionalesEnColombia.jpg`,
  },
  "/adn-nasua": {
    title: "ADN Nasua | Metodología Estratégica en SEO, UX/UI y Negocios",
    description: "Conoce el ADN Nasua: una fusión entre diseño UX/UI, desarrollo web y SEO estratégico para crear negocios rentables y sostenibles.",
    image: `${BASE_URL}/ADNNasua.jpg`,
  },
  "/landing-page": {
    title: "Diseño de Landing Pages de Alta Conversión | Nasua Marketing",
    description: "Convierte clics en clientes con landing pages optimizadas. Diseño UX/UI experto, desarrollo en Lovable y SEO para maximizar tu ROI. ¡Empieza a vender más!",
    image: `${BASE_URL}/LandingPageNasua.jpg`,
  },
  "/sitio-corporativo": {
    title: "Diseño de Sitios Web Corporativos | Lovable & UX/UI | Nasua",
    description: "Construimos la presencia digital de tu empresa con sitios web de alto nivel. Diseño UX/UI premium, SEO técnico y arquitectura escalable para tu negocio.",
    image: `${BASE_URL}/SitioCorporativoNasua.jpg`,
  },
  "/ecommerce": {
    title: "Diseño de Tiendas Online Lovable | eCommerce & UX | Nasua",
    description: "Lleva tu negocio al siguiente nivel con una tienda online optimizada. Desarrollo eCommerce en Lovable con foco en UX/UI, SEO y conversión. ¡Vende más hoy!",
    image: `${BASE_URL}/EmpezarProyectoNasua.jpg`,
  },
  "/estrategia": {
    title: "Ads, SEO e Investigación de Mercados | Crecimiento Nasua",
    description: "Escala tu negocio con pauta digital (Ads), SEO técnico e investigación de mercados profunda. Estrategias de crecimiento basadas en datos y rentabilidad.",
    image: `${BASE_URL}/EstrategiaNasua.jpg`,
  },
  "/quienes-somos": {
    title: "Quiénes Somos | Nasua Marketing | Expertos en Growth y Web",
    description: "Conoce al equipo multidisciplinario de Nasua. Unimos marketing, diseño UX/UI y desarrollo web para impulsar negocios sostenibles y rentables. ¡Conócenos!",
    image: `${BASE_URL}/QuienesSomosNasua.jpg`,
  },
  "/contacto": {
    title: "Contacto | Nasua Marketing | Agencia de Growth y WordPress",
    description: "¿Listo para escalar tu negocio? Contacta a Nasua Marketing. Expertos en SEO, Ads, UX/UI y Desarrollo Web en Colombia. Agenda tu consultoría estratégica hoy.",
    image: `${BASE_URL}/EmpezarProyectoNasua.jpg`,
  },
  "/blog": {
    title: "Blog de Marketing, Publicidad y Tecnología Digital | Nasua",
    description: "Tendencias de marketing, guías de SEO, consejos de UX/UI y noticias de publicidad. Aprende a escalar tu negocio con el equipo de expertos de Nasua Marketing.",
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
