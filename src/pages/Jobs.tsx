import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import type { Job } from "@/lib/types";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Clock, DollarSign } from "lucide-react";

function stripHtml(html: string): string {
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
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((job) => (
                <div
                  key={job.id}
                  className="bg-card border-2 border-border rounded-xl p-6 flex flex-col hover:border-secondary/50 transition-colors group"
                >
                  <span className="inline-block self-start px-3 py-1 rounded-full bg-accent/15 text-accent font-body text-xs font-semibold mb-3">
                    {job.category}
                  </span>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-muted-foreground font-body text-sm mb-4 flex-1 line-clamp-3">
                    {job.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {job.skills.map((s) => (
                      <span
                        key={s}
                        className="px-2 py-0.5 rounded bg-primary/10 text-primary text-xs font-body font-medium"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Meta row */}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground font-body border-t border-border pt-4 mb-5">
                    <span className="flex items-center gap-1">
                      <Calendar size={13} /> {job.deadline ? new Date(job.deadline).toLocaleDateString("es-CO", { day: "numeric", month: "short", year: "numeric" }) : "—"}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={13} /> {job.development_time}
                    </span>
                    <span className="flex items-center gap-1">
                      <DollarSign size={13} /> {job.budget_range}
                    </span>
                  </div>

                  <Link
                    to={`/proyectos/${job.slug}`}
                    className="block text-center bg-primary text-primary-foreground font-body font-semibold text-sm py-2.5 rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Enviar Propuesta
                  </Link>
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
