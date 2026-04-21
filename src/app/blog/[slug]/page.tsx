import { cache } from "react";
import type { Metadata } from "next";
import { createClient } from "@supabase/supabase-js";
import BlogPostPage from "@/views/BlogPost";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

/** Cached so generateMetadata and Page share the same DB round-trip */
const getPost = cache(async (slug: string) => {
  const { data } = await supabase
    .from("posts")
    .select("*, authors(name), categories(name), subcategories(name)")
    .eq("slug", slug)
    .eq("status", "published")
    .single();
  return data as import("@/lib/types").Post | null;
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

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

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  return <BlogPostPage post={post} />;
}
