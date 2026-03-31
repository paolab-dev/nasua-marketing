import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/lib/supabase";
import type { Post } from "@/lib/types";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
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
            <h1 className="text-3xl font-display font-bold text-foreground mb-4">
              Artículo no encontrado
            </h1>
            <Link to="/blog" className="text-secondary hover:underline">
              Volver al blog
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Helmet>
        <title>{post.title} | Nasua Blog</title>
        <meta name="description" content={post.meta_description} />
        {post.canonical_url && <link rel="canonical" href={post.canonical_url} />}
        <meta property="og:title" content={`${post.title} | Nasua Blog`} />
        <meta property="og:description" content={post.meta_description} />
        <meta
          property="og:image"
          content={post.featured_image || "https://nasua.co/Nasua-PaginasWebProfesionalesEnColombia.jpg"}
        />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Navbar />

      <article className="pt-28 pb-16 bg-background section-padding">
        <div className="container mx-auto max-w-3xl">
          <Link
            to="/blog"
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


          {/* Rich HTML content */}
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
            to="/blog"
            className="inline-flex items-center gap-1.5 mt-12 text-secondary hover:underline font-body font-semibold"
          >
            <ArrowLeft size={16} /> Volver al blog
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  );
};

export default BlogPostPage;
export const prerender = true;

export async function getStaticPaths() {
  const { data } = await supabase
    .from("posts")
    .select("slug")
    .eq("status", "published");
  return data?.map((p) => `/blog/${p.slug}`) ?? [];
}
