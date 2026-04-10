"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import type { Post } from "@/lib/types";
import { ArrowLeft, Calendar, User, Tag, ChevronRight, Zap } from "lucide-react";

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
      <main className="bg-background min-h-screen overflow-x-hidden">
        <div className="bg-primary pt-24 pb-14 px-6">
          <div className="mx-auto max-w-3xl animate-pulse space-y-4">
            <div className="h-4 bg-white/10 rounded w-32" />
            <div className="h-10 bg-white/10 rounded w-3/4" />
            <div className="h-10 bg-white/10 rounded w-1/2" />
            <div className="h-4 bg-white/10 rounded w-48" />
          </div>
        </div>
        <div className="mx-auto max-w-3xl px-6 py-12 animate-pulse space-y-4">
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
      <main className="bg-background min-h-screen flex items-center justify-center overflow-x-hidden">
        <div className="text-center px-6">
          <p className="text-secondary font-semibold uppercase tracking-wider text-sm mb-3">404</p>
          <h1 className="text-4xl font-display font-bold text-foreground mb-4">Artículo no encontrado</h1>
          <p className="text-muted-foreground mb-8">El artículo que buscas no existe o fue eliminado.</p>
          <Link href="/blog" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors">
            <ArrowLeft size={16} /> Volver al blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-background overflow-x-hidden">

      {/* ── HERO ── */}
      <header className="bg-primary">
        <div className="absolute inset-x-0 bg-gradient-to-br from-primary via-primary to-accent/20 pointer-events-none" />
        <div className="mx-auto max-w-5xl px-6 pt-28 pb-14">

          {/* Breadcrumb */}
          <nav className="flex items-center flex-wrap gap-1 text-primary-foreground/60 text-sm mb-5">
            <Link href="/blog" className="hover:text-primary-foreground transition-colors">Blog</Link>
            {post.categories?.name && (
              <>
                <ChevronRight size={13} className="shrink-0" />
                <span className="text-primary-foreground/80">{post.categories.name}</span>
              </>
            )}
            {(post.subcategories as any)?.name && (
              <>
                <ChevronRight size={13} className="shrink-0" />
                <span className="text-primary-foreground/80">{(post.subcategories as any).name}</span>
              </>
            )}
          </nav>

          {/* Category badge */}
          {post.categories?.name && (
            <span className="inline-block bg-secondary/20 text-secondary border border-secondary/30 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5">
              {post.categories.name}
            </span>
          )}

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground leading-tight mb-6 max-w-3xl">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-primary-foreground/70">
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
                  year: "numeric", month: "long", day: "numeric",
                })}
              </time>
            )}
            {(post.subcategories as any)?.name && (
              <span className="flex items-center gap-1.5">
                <Tag size={14} className="shrink-0" />
                {(post.subcategories as any).name}
              </span>
            )}
          </div>
        </div>
      </header>

      {/* ── BODY ── */}
      <div className="mx-auto max-w-5xl px-6 py-10 lg:py-14">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">

          {/* ── MAIN COLUMN ── */}
          <div className="w-full min-w-0 lg:flex-1">

            {/* Featured image */}
            {post.featured_image && (
              <div className="rounded-2xl overflow-hidden shadow-lg border border-border mb-10">
                <img
                  src={post.featured_image}
                  alt={post.title}
                  className="w-full object-cover max-h-[460px]"
                />
              </div>
            )}

            {/* Article content */}
            <div
              className="prose prose-base max-w-none break-words
                [&_*]:max-w-full
                prose-headings:font-display prose-headings:text-foreground prose-headings:font-bold prose-headings:leading-snug prose-headings:mt-8 prose-headings:mb-3
                prose-h2:text-2xl prose-h3:text-xl prose-h4:text-lg
                prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4
                prose-a:text-secondary prose-a:no-underline hover:prose-a:underline prose-a:font-semibold
                prose-strong:text-foreground prose-strong:font-semibold
                prose-blockquote:not-italic prose-blockquote:border-l-4 prose-blockquote:border-secondary prose-blockquote:bg-secondary/5 prose-blockquote:pl-5 prose-blockquote:py-3 prose-blockquote:pr-4 prose-blockquote:rounded-r-xl prose-blockquote:text-muted-foreground
                prose-ul:text-muted-foreground prose-ol:text-muted-foreground prose-li:leading-relaxed
                prose-img:rounded-2xl prose-img:shadow-md prose-img:w-full
                prose-code:bg-muted prose-code:text-foreground prose-code:rounded prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:font-mono
                prose-pre:bg-primary prose-pre:text-primary-foreground prose-pre:rounded-xl prose-pre:overflow-x-auto"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* CTA */}
            {post.cta_label && post.cta_url && (
              <div className="mt-12 rounded-2xl bg-primary p-8 text-center">
                <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap size={18} className="text-secondary" />
                </div>
                <h3 className="text-primary-foreground font-display font-bold text-xl mb-2">
                  ¿Listo para dar el siguiente paso?
                </h3>
                <p className="text-primary-foreground/70 text-sm mb-6 max-w-md mx-auto">
                  Aplica lo que aprendiste con el apoyo de nuestro equipo.
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

            {/* Author bio */}
            {post.author_bio && (
              <div className="mt-10 flex gap-4 p-6 bg-card border border-border rounded-2xl">
                <div className="shrink-0 w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                  <User size={18} className="text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-1">Sobre el autor</p>
                  {post.authors?.name && (
                    <p className="text-sm font-display font-semibold text-foreground mb-1">{post.authors.name}</p>
                  )}
                  <p className="text-sm text-muted-foreground leading-relaxed">{post.author_bio}</p>
                </div>
              </div>
            )}

            {/* Back */}
            <div className="mt-12 pt-8 border-t border-border">
              <Link href="/blog" className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 font-semibold transition-colors text-sm">
                <ArrowLeft size={15} /> Volver al blog
              </Link>
            </div>
          </div>

          {/* ── SIDEBAR ── */}
          <aside className="w-full lg:w-64 xl:w-72 shrink-0 lg:sticky lg:top-24 space-y-5">

            {/* CTA card */}
            <div className="bg-primary rounded-2xl p-6 text-center">
              <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap size={18} className="text-secondary" />
              </div>
              <h3 className="text-primary-foreground font-display font-bold text-base mb-2 leading-snug">
                ¿Quieres resultados así?
              </h3>
              <p className="text-primary-foreground/65 text-xs mb-5 leading-relaxed">
                Agenda una charla de 15 min con nuestro equipo en Medellín.
              </p>
              <Link
                href="/contacto"
                className="block bg-secondary text-white font-semibold text-sm px-4 py-2.5 rounded-xl hover:bg-secondary/90 transition-colors"
              >
                Agendar consultoría
              </Link>
            </div>

            {/* Category */}
            {post.categories?.name && (
              <div className="bg-card border border-border rounded-2xl p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Categoría</p>
                <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <span className="w-2 h-2 rounded-full bg-secondary shrink-0" />
                  <span>{post.categories.name}</span>
                  {(post.subcategories as any)?.name && (
                    <span className="text-muted-foreground font-normal text-xs">/ {(post.subcategories as any).name}</span>
                  )}
                </div>
              </div>
            )}

            {/* Date */}
            {post.published_at && (
              <div className="bg-card border border-border rounded-2xl p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Publicado</p>
                <p className="text-sm font-semibold text-foreground">
                  {new Date(post.published_at).toLocaleDateString("es-CO", {
                    year: "numeric", month: "long", day: "numeric",
                  })}
                </p>
              </div>
            )}

            {/* Author mini */}
            {post.authors?.name && (
              <div className="bg-card border border-border rounded-2xl p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Autor</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <User size={15} className="text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-foreground">{post.authors.name}</span>
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </main>
  );
};

export default BlogPostPage;
