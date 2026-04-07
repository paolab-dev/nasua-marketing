import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const BASE_URL = "https://nasua.marketing";

const STATIC_ROUTES = [
  { path: "/", priority: "1.0" },
  { path: "/adn-nasua", priority: "0.8" },
  { path: "/servicios", priority: "0.9" },
  { path: "/desarrollo-web-estrategico", priority: "0.8" },
  { path: "/landing-page", priority: "0.8" },
  { path: "/sitio-corporativo", priority: "0.8" },
  { path: "/ecommerce", priority: "0.8" },
  { path: "/estrategia", priority: "0.8" },
  { path: "/branding", priority: "0.8" },
  { path: "/pauta-digital", priority: "0.8" },
  { path: "/seo-geo", priority: "0.8" },
  { path: "/copywriting", priority: "0.8" },
  { path: "/automatizacion", priority: "0.8" },
  { path: "/quienes-somos", priority: "0.7" },
  { path: "/contacto", priority: "0.7" },
  { path: "/blog", priority: "0.8" },
  { path: "/vacantes", priority: "0.6" },
  { path: "/politica-privacidad", priority: "0.3" },
  { path: "/terminos-condiciones", priority: "0.3" },
];

export async function GET() {
  const today = new Date().toISOString().split("T")[0];

  const urls: string[] = STATIC_ROUTES.map(
    (r) => `  <url>
    <loc>${BASE_URL}${r.path}</loc>
    <lastmod>${today}</lastmod>
    <priority>${r.priority}</priority>
  </url>`
  );

  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    const { data: posts } = await supabase
      .from("posts")
      .select("slug, published_at")
      .eq("status", "published")
      .order("published_at", { ascending: false });

    if (posts) {
      for (const post of posts) {
        const lastmod = post.published_at
          ? post.published_at.split("T")[0]
          : today;
        urls.push(`  <url>
    <loc>${BASE_URL}/blog/${post.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>0.6</priority>
  </url>`);
      }
    }
  } catch {
    // continue with static routes only
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
