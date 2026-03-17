import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import type { Post } from "@/lib/types";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from("posts")
      .select("*, authors(name), categories(name)")
      .eq("status", "published")
      .order("published_at", { ascending: false })
      .then(({ data }) => {
        setPosts(data || []);
        setLoading(false);
      });
  }, []);

  return (
    <main>
      <Helmet>
        <title>Blog de Marketing, Publicidad y Tecnología Digital | Nasua</title>
        <meta
          name="description"
          content="Tendencias de marketing, guías de SEO, consejos de UX/UI y noticias de publicidad. Aprende a escalar tu negocio con el equipo de expertos de Nasua Marketing."
        />
        <meta property="og:title" content="Blog de Marketing, Publicidad y Tecnología Digital | Nasua" />
        <meta property="og:description" content="Tendencias de marketing, guías de SEO, consejos de UX/UI y noticias de publicidad." />
        <meta property="og:image" content="https://nasua.co/Nasua-PaginasWebProfesionalesEnColombia.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Navbar />

      <section className="pt-28 pb-16 bg-background section-padding">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4 text-center">
            Blog
          </h1>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Artículos y recursos para potenciar tu presencia digital.
          </p>

          {loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="rounded-xl bg-card border border-border animate-pulse h-80" />
              ))}
            </div>
          )}

          {!loading && posts.length === 0 && (
            <p className="text-center text-muted-foreground">No hay artículos publicados aún.</p>
          )}

          {!loading && posts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group rounded-xl overflow-hidden bg-card border border-border hover:shadow-lg transition-shadow"
                >
                  {post.featured_image && (
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={post.featured_image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="p-5 flex flex-col gap-2">
                    {post.categories?.name && (
                      <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
                        {post.categories.name}
                      </span>
                    )}
                    <h2 className="text-lg font-display font-bold text-foreground group-hover:text-secondary transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    {post.meta_description && (
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {post.meta_description}
                      </p>
                    )}
                    <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
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
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Blog;
