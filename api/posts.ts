import type { VercelRequest, VercelResponse } from "@vercel/node";

const NOTION_DATABASE_ID = "efcc75edcc654b889809312f004ce467";

interface NotionPage {
  properties: Record<string, any>;
}

function extractText(prop: any): string {
  if (!prop) return "";
  if (prop.title) return prop.title.map((t: any) => t.plain_text).join("");
  if (prop.rich_text) return prop.rich_text.map((t: any) => t.plain_text).join("");
  if (prop.select) return prop.select?.name ?? "";
  if (prop.date) return prop.date?.start ?? "";
  if (prop.url) return prop.url ?? "";
  if (prop.files && prop.files.length > 0) {
    const f = prop.files[0];
    return f.file?.url ?? f.external?.url ?? "";
  }
  return "";
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(204).end();

  const NOTION_API_KEY = process.env.NOTION_API_KEY;
  if (!NOTION_API_KEY) {
    return res.status(500).json({ error: "NOTION_API_KEY not configured" });
  }

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
          sorts: [
            {
              property: "Fecha de Publicación",
              direction: "descending",
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      const error = await response.text();
      return res.status(response.status).json({ error });
    }

    const data = await response.json();

    const posts = data.results.map((page: NotionPage) => {
      const p = page.properties;
      return {
        nombre: extractText(p["Nombre"]),
        slug: extractText(p["Slug"]),
        metaDescription: extractText(p["Meta Description"]),
        tldr: extractText(p["TL;DR"]),
        categoria: extractText(p["Categoría"]),
        autor: extractText(p["Autor"]),
        imagenDestacada: extractText(p["Imagen Destacada"]),
        fechaPublicacion: extractText(p["Fecha de Publicación"]),
      };
    });

    return res.status(200).json(posts);
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
}
