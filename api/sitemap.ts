import type { VercelRequest, VercelResponse } from "@vercel/node";

const BASE_URL = "https://nasua.marketing";

const NOTION_DATABASE_ID = "efcc75edcc654b889809312f004ce467";

const STATIC_ROUTES: { path: string; priority: string }[] = [
  { path: "/", priority: "1.0" },
  { path: "/adn-nasua", priority: "0.8" },
  { path: "/ecommerce", priority: "0.8" },
  { path: "/landing-page", priority: "0.8" },
  { path: "/sitio-corporativo", priority: "0.8" },
  { path: "/estrategia", priority: "0.8" },
  { path: "/quienes-somos", priority: "0.8" },
  { path: "/contacto", priority: "0.8" },
  { path: "/blog", priority: "0.8" },
];

export default async function handler(_req: VercelRequest, res: VercelResponse) {
  const today = new Date().toISOString().split("T")[0];

  let blogSlugs: string[] = [];

  const NOTION_API_KEY = process.env.NOTION_API_KEY;
  if (NOTION_API_KEY) {
    try {
      const response = await fetch(
        `https://api.notion.com/v1/databases/${NOTION_DATABASE_ID}/query`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${NOTION_API_KEY}`,
            "Notion-Version": "2022-06-28",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            filter: {
              property: "Estado",
              select: { equals: "Publicado" },
            },
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        blogSlugs = data.results
          .map((page: any) => {
            const slugProp = page.properties["Slug"];
            if (slugProp?.rich_text?.length) {
              return slugProp.rich_text.map((t: any) => t.plain_text).join("");
            }
            return null;
          })
          .filter(Boolean);
      }
    } catch {
      // silently continue with static routes only
    }
  }

  const urls = STATIC_ROUTES.map(
    (r) => `  <url>
    <loc>${BASE_URL}${r.path}</loc>
    <lastmod>${today}</lastmod>
    <priority>${r.priority}</priority>
  </url>`
  );

  for (const slug of blogSlugs) {
    urls.push(`  <url>
    <loc>${BASE_URL}/blog/${slug}</loc>
    <lastmod>${today}</lastmod>
    <priority>0.6</priority>
  </url>`);
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;

  res.setHeader("Content-Type", "application/xml");
  res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");
  return res.status(200).send(xml);
}
