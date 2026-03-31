import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import type { Job } from "@/lib/types";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Clock, DollarSign, ArrowRight } from "lucide-react";

function stripHtml(html: string): string {
  if (typeof window === "undefined") return html.replace(/<[^>]*>/g, "");
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent || "";
}

const Jobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("Todos");

  useEffect(() => {
    const fetchData = async () => {
      const [jobsRes, catsRes] = await Promise.all([
        supabase.from("jobs").select("*").eq("status", "open").order("created_at", { ascending: false }),
        supabase.from("job_categories").select("name").order("name"),
      ]);
      setJobs(jobsRes.data || []);
      setCategories((catsRes.data || []).map((c: { name: string }) => c.name));
      setLoading(false);
    };
    fetchData();
  }, []);

  const filtered =
    activeFilter === "Todos"
      ? jobs
      : jobs.filter((j) => j.category === activeFilter);

  return (
    <main>
      <Helmet>
        <title>Proyectos Abiertos | Nasua</title>
        <meta
          name="description"
          content="Explora los proyectos abiertos de Nasua y envía tu propuesta. Buscamos talento en desarrollo web, diseño UI/UX y vibe coding."
        />
      </Helmet>
      <Navbar />

      <section className="pt-28 pb-20 bg-background min-h-screen">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="max-w-3xl mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-secondary/15 text-secondary font-body text-xs font-semibold tracking-wider uppercase mb-4">
              Proyectos
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
              Proyectos <span className="text-secondary">Abiertos</span>
            </h1>
            <p className="text-muted-foreground font-body text-lg">
              Encuentra el proyecto perfecto para tu talento y envía tu propuesta.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {["Todos", ...categories].map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-lg text-sm font-body font-medium border transition-all ${
                  activeFilter === f
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-foreground border-border hover:border-primary/40"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          {loading ? (
            <div className="flex justify-center py-20">
              <div className="animate-spin h-8 w-8 border-4 border-secondary border-t-transparent rounded-full" />
            </div>
          ) : filtered.length === 0 ? (
            <p className="text-muted-foreground text-center py-20 font-body">
              No hay proyectos disponibles en esta categoría.
            </p>
          ) : (
            <div className="flex flex-col gap-5">
              {filtered.map((job) => (
                <div
                  key={job.id}
                  className="bg-card border border-border rounded-xl p-6 md:p-8 flex flex-col md:flex-row gap-6 hover:border-secondary/50 transition-colors group"
                >
                  {/* Left: Content */}
                  <div className="flex-1 min-w-0">
                    <span className="inline-block px-3 py-1 rounded-full bg-accent/15 text-accent font-body text-xs font-semibold mb-3">
                      {job.category}
                    </span>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-muted-foreground font-body text-sm mb-4 line-clamp-2">
                      {job.short_description || stripHtml(job.description)}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-1.5">
                      {job.skills.map((s) => (
                        <span
                          key={s}
                          className="px-3 py-1 rounded-full border border-border text-foreground text-xs font-body font-medium"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: Meta + CTA */}
                  <div className="md:w-64 flex-shrink-0 flex flex-col justify-between gap-4 md:border-l md:border-border md:pl-6">
                    <div className="space-y-3 text-sm font-body">
                      <div>
                        <span className="flex items-center gap-1.5 text-muted-foreground text-xs uppercase tracking-wider mb-0.5">
                          <Calendar size={13} /> Cierre de propuestas
                        </span>
                        <span className="text-foreground font-semibold">
                          {job.deadline ? new Date(job.deadline).toLocaleDateString("es-CO", { day: "numeric", month: "short", year: "numeric" }) : "—"}
                        </span>
                      </div>
                      <div>
                        <span className="flex items-center gap-1.5 text-muted-foreground text-xs uppercase tracking-wider mb-0.5">
                          <Clock size={13} /> Tiempo de desarrollo
                        </span>
                        <span className="text-foreground font-semibold">{job.development_time}</span>
                      </div>
                      <div>
                        <span className="flex items-center gap-1.5 text-muted-foreground text-xs uppercase tracking-wider mb-0.5">
                          <DollarSign size={13} /> Presupuesto estimado
                        </span>
                        <span className="text-secondary font-bold">{job.budget_range}</span>
                      </div>
                    </div>

                    <Link
                      to={`/proyectos/${job.slug}`}
                      className="flex items-center justify-center gap-2 bg-primary text-primary-foreground font-body font-semibold text-sm py-3 rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      Enviar Propuesta <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Jobs;
export const prerender = true;
