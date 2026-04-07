import { MetadataRoute } from "next";
import { createClient } from "@supabase/supabase-js";

const BASE_URL = "https://nasua.marketing";

const STATIC_ROUTES: { path: string; priority: number }[] = [
  { path: "/", priority: 1.0 },
  { path: "/adn-nasua", priority: 0.8 },
  { path: "/servicios", priority: 0.9 },
  { path: "/desarrollo-web-estrategico", priority: 0.8 },
  { path: "/landing-page", priority: 0.8 },
  { path: "/sitio-corporativo", priority: 0.8 },
  { path: "/ecommerce", priority: 0.8 },
  { path: "/estrategia", priority: 0.8 },
  { path: "/branding", priority: 0.8 },
  { path: "/pauta-digital", priority: 0.8 },
  { path: "/seo-geo", priority: 0.8 },
  { path: "/copywriting", priority: 0.8 },
  { path: "/automatizacion", priority: 0.8 },
  { path: "/quienes-somos", priority: 0.7 },
  { path: "/contacto", priority: 0.7 },
  { path: "/blog", priority: 0.8 },
  { path: "/vacantes", priority: 0.6 },
  { path: "/politica-privacidad", priority: 0.3 },
  { path: "/terminos-condiciones", priority: 0.3 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const today = new Date().toISOString();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((r) => ({
    url: `${BASE_URL}${r.path}`,
    lastModified: today,
    priority: r.priority,
  }));

  let blogEntries: MetadataRoute.Sitemap = [];

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
      blogEntries = posts.map((post: { slug: string; published_at: string | null }) => ({
        url: `${BASE_URL}/blog/${post.slug}`,
        lastModified: post.published_at ?? today,
        priority: 0.6,
      }));
    }
  } catch {
    // continue with static routes only
  }

  return [...staticEntries, ...blogEntries];
}
