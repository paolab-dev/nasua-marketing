"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import type { Post } from "@/lib/types";
import { ArrowLeft } from "lucide-react";

const BlogPostPage = () => {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug;
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from("posts")
      .select("*, authors(name), categories(name)")
      .eq("slug", slug)
      .eq("status", "published")
      .single()
      .then(({ data }) => {
        setPost(data);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <main>
        <div className="pt-28 pb-16 bg-background section-padding min-h-screen">
          <div className="container mx-auto max-w-3xl animate-pulse space-y-4">
            <div className="h-8 bg-muted rounded w-3/4" />
            <div className="h-4 bg-muted rounded w-1/2" />
            <div className="h-64 bg-muted rounded" />
          </div>
        </div>
      </main>
    );
  }

  if (!post) {
    return (
      <main>
        <div className="pt-28 pb-16 bg-background section-padding min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-display font-bold text-foreground mb-4">
              Artículo no encontrado
            </h1>
            <Link href="/blog" className="text-secondary hover:underline">
              Volver al blog
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main>
      <article className="pt-28 pb-16 bg-background section-padding">
        <div className="container mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground font-body text-sm mb-8 transition-colors"
          >
            <ArrowLeft size={16} /> Volver al blog
          </Link>

          {post.categories?.name && (
            <span className="text-sm font-semibold uppercase tracking-wider text-secondary mb-2 block">
              {post.categories.name}
            </span>
          )}

          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            {post.title}
          </h1>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            {post.authors?.name && <span>{post.authors.name}</span>}
            {post.authors?.name && post.published_at && <span>·</span>}
            {post.published_at && (
              <time dateTime={post.published_at}>
                {new Date(post.published_at).toLocaleDateString("es-CO", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            )}
          </div>

          {post.featured_image && (
            <img
              src={post.featured_image}
              alt={post.title}
              className="w-full rounded-xl mb-8 object-cover max-h-[400px]"
            />
          )}

          <div
            className="prose prose-lg max-w-none
              prose-headings:font-display prose-headings:text-foreground
              prose-p:text-muted-foreground prose-p:font-body prose-p:leading-relaxed
              prose-a:text-secondary prose-a:no-underline hover:prose-a:underline
              prose-strong:text-foreground
              prose-blockquote:border-l-secondary prose-blockquote:text-muted-foreground prose-blockquote:italic
              prose-li:text-muted-foreground prose-li:font-body
              prose-img:rounded-xl"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 mt-12 text-secondary hover:underline font-body font-semibold"
          >
            <ArrowLeft size={16} /> Volver al blog
          </Link>
        </div>
      </article>
    </main>
  );
};

export default BlogPostPage;
