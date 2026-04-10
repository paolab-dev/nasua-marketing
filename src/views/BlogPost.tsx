"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import type { Post } from "@/lib/types";
import { ArrowLeft, Calendar, User, Tag, ChevronRight } from "lucide-react";

const BlogPostPage = () => {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug;
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from("posts")
      .select("*, authors(name), categories(name), subcategories(name)")
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
      <main className="bg-background min-h-screen">
        {/* Hero skeleton */}
        <div className="bg-primary/5 pt-24 pb-12 px-6">
          <div className="container mx-auto max-w-4xl animate-pulse space-y-4">
            <div className="h-4 bg-muted rounded w-32" />
            <div className="h-10 bg-muted rounded w-3/4" />
            <div className="h-10 bg-muted rounded w-1/2" />
            <div className="h-4 bg-muted rounded w-48" />
          </div>
        </div>
        <div className="container mx-auto max-w-4xl px-6 py-12 animate-pulse space-y-4">
          <div className="h-72 bg-muted rounded-2xl" />
          <div className="h-4 bg-muted rounded" />
          <div className="h-4 bg-muted rounded w-5/6" />
          <div className="h-4 bg-muted rounded w-4/6" />
        </div>
      </main>
    );
  }

  if (!post) {
    return (
      <main className="bg-background min-h-screen flex items-center justify-center">
        <div className="text-center px-6">
          <p className="text-secondary font-semibold uppercase tracking-wider text-sm mb-3">404</p>
          <h1 className="text-4xl font-display font-bold text-foreground mb-4">
            Artículo no encontrado
          </h1>
          <p className="text-muted-foreground mb-8">El artículo que buscas no existe o fue eliminado.</p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft size={16} /> Volver al blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-background">

      {/* ── HERO HEADER ── */}
      <header className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent/20" />
        <div className="relative z-10 container mx-auto max-w-4xl px-6 pt-28 pb-14">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-primary-foreground/60 text-sm mb-6">
            <Link href="/blog" className="hover:text-primary-foreground transition-colors">Blog</Link>
            {post.categories?.name && (
              <>
                <ChevronRight size={14} className="shrink-0" />
                <span className="text-primary-foreground/80">{post.categories.name}</span>
              </>
            )}
            {post.subcategories?.name && (
              <>
                <ChevronRight size={14} className="shrink-0" />
                <span className="text-primary-foreground/80">{post.subcategories.name}</span>
              </>
            )}
          </nav>

          {/* Category badge */}
          {post.categories?.name && (
            <span className="inline-block bg-secondary/20 text-secondary border border-secondary/30 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              {post.categories.name}
            </span>
          )}

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground leading-tight mb-6">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-primary-foreground/70">
            {post.authors?.name && (
              <span className="flex items-center gap-1.5">
                <User size={14} className="shrink-0" />
                {post.authors.name}
              </span>
            )}
            {post.published_at && (
              <time dateTime={post.published_at} className="flex items-center gap-1.5">
                <Calendar size={14} className="shrink-0" />
                {new Date(post.published_at).toLocaleDateString("es-CO", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            )}
            {post.subcategories?.name && (
              <span className="flex items-center gap-1.5">
                <Tag size={14} className="shrink-0" />
                {post.subcategories.name}
              </span>
            )}
          </div>
        </div>
      </header>

      {/* ── FEATURED IMAGE ── */}
      {post.featured_image && (
        <div className="container mx-auto max-w-4xl px-6">
          <div className="-mt-8 rounded-2xl overflow-hidden shadow-xl border border-border">
            <img
              src={post.featured_image}
              alt={post.title}
              className="w-full object-cover max-h-[480px]"
            />
          </div>
        </div>
      )}

      {/* ── CONTENT ── */}
      <div className="container mx-auto max-w-4xl px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 items-start">

          {/* Article body */}
          <article>
            <div
              className="prose prose-lg max-w-none
                prose-headings:font-display prose-headings:text-foreground prose-headings:font-bold
                prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
                prose-p:text-muted-foreground prose-p:font-body prose-p:leading-relaxed prose-p:text-base
                prose-a:text-secondary prose-a:no-underline hover:prose-a:underline prose-a:font-semibold
                prose-strong:text-foreground
                prose-blockquote:border-l-4 prose-blockquote:border-secondary prose-blockquote:bg-secondary/5 prose-blockquote:rounded-r-xl prose-blockquote:py-1 prose-blockquote:text-muted-foreground prose-blockquote:italic
                prose-li:text-muted-foreground prose-li:font-body
                prose-img:rounded-2xl prose-img:shadow-md
                prose-code:bg-muted prose-code:text-foreground prose-code:rounded prose-code:px-1.5 prose-code:text-sm
                prose-pre:bg-primary prose-pre:text-primary-foreground prose-pre:rounded-xl"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* CTA Button */}
            {post.cta_label && post.cta_url && (
              <div className="mt-12 p-8 bg-primary rounded-2xl text-center">
                <p className="text-primary-foreground/80 font-body text-sm mb-4 uppercase tracking-wider font-semibold">
                  ¿Listo para dar el siguiente paso?
                </p>
                <a
                  href={post.cta_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-secondary text-white font-display font-bold px-8 py-4 rounded-xl hover:bg-secondary/90 active:scale-95 transition-all text-base shadow-lg"
                >
                  {post.cta_label}
                </a>
              </div>
            )}

            {/* Author Bio */}
            {post.author_bio && (
              <div className="mt-10 flex gap-4 p-6 bg-card border border-border rounded-2xl">
                <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <User size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-1">
                    Sobre el autor
                  </p>
                  {post.authors?.name && (
                    <p className="text-sm font-display font-semibold text-foreground mb-1">{post.authors.name}</p>
                  )}
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">
                    {post.author_bio}
                  </p>
                </div>
              </div>
            )}

            {/* Back link */}
            <div className="mt-12 pt-8 border-t border-border">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 font-body font-semibold transition-colors"
              >
                <ArrowLeft size={16} /> Volver al blog
              </Link>
            </div>
          </article>

          {/* ── SIDEBAR ── */}
          <aside className="lg:sticky lg:top-24 space-y-6">

            {/* Share / contact CTA */}
            <div className="bg-primary rounded-2xl p-6 text-center">
              <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-primary-foreground font-display font-bold text-base mb-2">
                ¿Quieres resultados así?
              </h3>
              <p className="text-primary-foreground/70 text-xs font-body mb-4 leading-relaxed">
                Agenda una charla de 15 min con nuestro equipo.
              </p>
              <Link
                href="/contacto"
                className="block bg-secondary text-white font-semibold text-sm px-4 py-2.5 rounded-xl hover:bg-secondary/90 transition-colors"
              >
                Agendar consultoría
              </Link>
            </div>

            {/* Category info */}
            {post.categories?.name && (
              <div className="bg-card border border-border rounded-2xl p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Categoría</p>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-secondary transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-secondary shrink-0" />
                  {post.categories.name}
                  {post.subcategories?.name && (
                    <span className="text-muted-foreground font-normal">/ {post.subcategories.name}</span>
                  )}
                </Link>
              </div>
            )}

            {/* Published date card */}
            {post.published_at && (
              <div className="bg-card border border-border rounded-2xl p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Publicado</p>
                <p className="text-sm font-semibold text-foreground">
                  {new Date(post.published_at).toLocaleDateString("es-CO", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            )}
          </aside>
        </div>
      </div>
    </main>
  );
};

export default BlogPostPage;
