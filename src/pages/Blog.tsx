import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BlogPost, fetchPosts } from "@/lib/blog";

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPosts()
      .then(setPosts)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main>
      <Helmet>
        <title>Blog | Nasua – Páginas Web Profesionales</title>
        <meta name="description" content="Artículos, guías y novedades sobre diseño web, marketing digital y estrategia online para empresas en Colombia." />
        <meta property="og:title" content="Blog | Nasua – Páginas Web Profesionales" />
        <meta property="og:description" content="Artículos, guías y novedades sobre diseño web, marketing digital y estrategia online para empresas en Colombia." />
        <meta property="og:image" content="https://nasua.co/Nasua-PaginasWebProfesionalesEnColombia.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://nasua.co/Nasua-PaginasWebProfesionalesEnColombia.jpg" />
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

          {error && (
            <p className="text-center text-destructive">{error}</p>
          )}

          {!loading && !error && posts.length === 0 && (
            <p className="text-center text-muted-foreground">No hay artículos publicados aún.</p>
          )}

          {!loading && !error && posts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <a
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group rounded-xl overflow-hidden bg-card border border-border hover:shadow-lg transition-shadow"
                >
                  {post.imagenDestacada && (
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={post.imagenDestacada}
                        alt={post.nombre}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="p-5 flex flex-col gap-2">
                    {post.categoria && (
                      <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
                        {post.categoria}
                      </span>
                    )}
                    <h2 className="text-lg font-display font-bold text-foreground group-hover:text-secondary transition-colors line-clamp-2">
                      {post.nombre}
                    </h2>
                    {post.metaDescription && (
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {post.metaDescription}
                      </p>
                    )}
                    <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
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
                  </div>
                </a>
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
