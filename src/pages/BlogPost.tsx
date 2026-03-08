import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { BlogPost } from "@/lib/blog";
import { fetchPosts } from "@/lib/blog";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts()
      .then((posts) => {
        const found = posts.find((p) => p.slug === slug) ?? null;
        setPost(found);
      })
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <main>
        <Navbar />
        <div className="pt-28 pb-16 bg-background section-padding min-h-screen">
          <div className="container mx-auto max-w-3xl animate-pulse space-y-4">
            <div className="h-8 bg-muted rounded w-3/4" />
            <div className="h-4 bg-muted rounded w-1/2" />
            <div className="h-64 bg-muted rounded" />
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  if (!post) {
    return (
      <main>
        <Navbar />
        <div className="pt-28 pb-16 bg-background section-padding min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-display font-bold text-foreground mb-4">Artículo no encontrado</h1>
            <a href="/blog" className="text-secondary hover:underline">Volver al blog</a>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Helmet>
        <title>{post.nombre} | Nasua Blog</title>
        <meta name="description" content={post.metaDescription} />
      </Helmet>
      <Navbar />

      <article className="pt-28 pb-16 bg-background section-padding">
        <div className="container mx-auto max-w-3xl">
          {post.categoria && (
            <span className="text-sm font-semibold uppercase tracking-wider text-secondary mb-2 block">
              {post.categoria}
            </span>
          )}
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            {post.nombre}
          </h1>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            {post.autor && <span>{post.autor}</span>}
            {post.autor && post.fechaPublicacion && <span>·</span>}
            {post.fechaPublicacion && (
              <time dateTime={post.fechaPublicacion}>
                {new Date(post.fechaPublicacion).toLocaleDateString("es-CO", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            )}
          </div>

          {post.imagenDestacada && (
            <img
              src={post.imagenDestacada}
              alt={post.nombre}
              className="w-full rounded-xl mb-8 object-cover max-h-[400px]"
            />
          )}

          {post.tldr && (
            <div className="bg-card border border-border rounded-xl p-6 mb-8">
              <h2 className="text-sm font-bold uppercase tracking-wider text-secondary mb-2">TL;DR</h2>
              <p className="text-foreground">{post.tldr}</p>
            </div>
          )}

          <a href="/blog" className="inline-block mt-8 text-secondary hover:underline font-semibold">
            ← Volver al blog
          </a>
        </div>
      </article>

      <Footer />
    </main>
  );
};

export default BlogPost;
