import type { Metadata } from "next";
import { createClient } from "@supabase/supabase-js";
import BlogPostPage from "@/views/BlogPost";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const { data: post } = await supabase
    .from("posts")
    .select("title, title_tag, meta_description, featured_image, canonical_url")
    .eq("slug", slug)
    .eq("status", "published")
    .single();

  if (!post) {
    return { title: "Post no encontrado | Nasua Blog" };
  }

  return {
    title: `${post.title_tag || post.title} | Nasua Blog`,
    description: post.meta_description || undefined,
    alternates: {
      canonical: post.canonical_url || `https://nasua.marketing/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.meta_description || undefined,
      url: `https://nasua.marketing/blog/${slug}`,
      images: post.featured_image ? [{ url: post.featured_image }] : [],
    },
  };
}

export default function Page() {
  return <BlogPostPage />;
}
