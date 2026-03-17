import { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/lib/supabase";
import type { Job } from "@/lib/types";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar, Clock, DollarSign, ArrowLeft, Paperclip, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const MAX_FILE_SIZE = 10 * 1024 * 1024;
const ALLOWED_TYPES = ["application/pdf"];

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      resolve(result.split(",")[1]);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

const JobDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { toast } = useToast();
  const fileRef = useRef<HTMLInputElement>(null);

  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const [form, setForm] = useState({
    nombre: "",
    email: "",
    portfolio: "",
    github: "",
    valor: "",
    tiempo: "",
    coverLetter: "",
  });

  useEffect(() => {
    supabase
      .from("jobs")
      .select("*")
      .eq("slug", slug)
      .single()
      .then(({ data }) => {
        setJob(data);
        setLoading(false);
      });
  }, [slug]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    if (f.size > MAX_FILE_SIZE) {
      toast({ title: "Archivo muy grande", description: "Máximo 10 MB", variant: "destructive" });
      return;
    }
    if (!ALLOWED_TYPES.includes(f.type)) {
      toast({ title: "Tipo no permitido", description: "Solo archivos PDF", variant: "destructive" });
      return;
    }
    setFile(f);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!job) return;
    const missing = Object.entries(form).some(([, v]) => !v.trim());
    if (missing || !file) {
      toast({ title: "Campos incompletos", description: "Todos los campos son obligatorios, incluyendo el archivo adjunto.", variant: "destructive" });
      return;
    }
    setSending(true);
    try {
      const base64 = await fileToBase64(file);
      const res = await window.fetch("/api/send-proposal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jobTitle: job.title,
          data: form,
          attachment: { filename: file.name, content: base64, type: file.type },
        }),
      });
      if (!res.ok) throw new Error("Error al enviar");
      setSent(true);
    } catch {
      toast({ title: "Error", description: "No se pudo enviar la propuesta. Intenta de nuevo.", variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  if (loading) {
    return (
      <main>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center pt-20">
          <div className="animate-spin h-8 w-8 border-4 border-secondary border-t-transparent rounded-full" />
        </div>
      </main>
    );
  }

  if (!job) {
    return (
      <main>
        <Navbar />
        <div className="min-h-screen flex flex-col items-center justify-center pt-20 gap-4">
          <p className="text-muted-foreground font-body">Proyecto no encontrado.</p>
          <Link to="/proyectos" className="text-secondary font-body font-semibold hover:underline">
            ← Volver a proyectos
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Helmet>
        <title>{job.title} | Proyectos Nasua</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Navbar />

      <section className="pt-28 pb-20 bg-background min-h-screen">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link
            to="/proyectos"
            className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground font-body text-sm mb-8 transition-colors"
          >
            <ArrowLeft size={16} /> Volver a proyectos
          </Link>

          {/* Job header */}
          <div className="bg-card border-2 border-border rounded-xl p-8 mb-10">
            <span className="inline-block px-3 py-1 rounded-full bg-accent/15 text-accent font-body text-xs font-semibold mb-4">
              {job.category}
            </span>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              {job.title}
            </h1>

            {/* Rich HTML description */}
            <div
              className="prose prose-lg max-w-none mb-6
                prose-headings:font-display prose-headings:text-foreground
                prose-p:text-muted-foreground prose-p:font-body prose-p:leading-relaxed
                prose-strong:text-foreground
                prose-blockquote:border-l-secondary prose-blockquote:text-muted-foreground prose-blockquote:italic
                prose-li:text-muted-foreground prose-li:font-body
                prose-ul:text-muted-foreground prose-ol:text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: job.description }}
            />

            <div className="flex flex-wrap gap-2 mb-6">
              {job.skills.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-sm font-body font-medium"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground font-body border-t border-border pt-5">
              <span className="flex items-center gap-1.5">
                <Calendar size={15} className="text-secondary" /> Cierre: {job.deadline}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={15} className="text-secondary" /> {job.duration}
              </span>
              <span className="flex items-center gap-1.5">
                <DollarSign size={15} className="text-secondary" /> {job.budget}
              </span>
            </div>
          </div>

          {/* Form */}
          {sent ? (
            <div className="bg-card border-2 border-secondary/30 rounded-xl p-10 text-center">
              <CheckCircle2 className="mx-auto h-14 w-14 text-secondary mb-4" />
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                ¡Propuesta Enviada!
              </h2>
              <p className="text-muted-foreground font-body">
                Revisaremos tu propuesta y te contactaremos pronto.
              </p>
            </div>
          ) : (
            <div className="bg-card border-2 border-border rounded-xl p-8">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Enviar Propuesta
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label className="font-body font-medium">Nombre completo *</Label>
                    <Input name="nombre" value={form.nombre} onChange={handleChange} required />
                  </div>
                  <div className="space-y-2">
                    <Label className="font-body font-medium">Email *</Label>
                    <Input name="email" type="email" value={form.email} onChange={handleChange} required />
                  </div>
                  <div className="space-y-2">
                    <Label className="font-body font-medium">URL de Portfolio *</Label>
                    <Input name="portfolio" type="url" value={form.portfolio} onChange={handleChange} required placeholder="https://" />
                  </div>
                  <div className="space-y-2">
                    <Label className="font-body font-medium">GitHub / Dribbble *</Label>
                    <Input name="github" type="url" value={form.github} onChange={handleChange} required placeholder="https://" />
                  </div>
                  <div className="space-y-2">
                    <Label className="font-body font-medium">Valor propuesta (USD) *</Label>
                    <Input name="valor" type="number" min="1" value={form.valor} onChange={handleChange} required placeholder="$" />
                  </div>
                  <div className="space-y-2">
                    <Label className="font-body font-medium">Tiempo estimado (semanas) *</Label>
                    <Input name="tiempo" type="number" min="1" value={form.tiempo} onChange={handleChange} required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="font-body font-medium">Vibe Check / Cover Letter *</Label>
                  <Textarea
                    name="coverLetter"
                    value={form.coverLetter}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Cuéntanos por qué eres el match perfecto para este proyecto..."
                  />
                </div>

                <div className="space-y-2">
                  <Label className="font-body font-medium">Adjuntar archivo * (Solo PDF — máx 10 MB)</Label>
                  <div
                    onClick={() => fileRef.current?.click()}
                    className="border-2 border-dashed border-border rounded-lg p-6 text-center cursor-pointer hover:border-secondary/50 transition-colors"
                  >
                    <Paperclip className="mx-auto h-6 w-6 text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground font-body">
                      {file ? file.name : "Haz clic para seleccionar un archivo"}
                    </p>
                    <input ref={fileRef} type="file" accept=".pdf" className="hidden" onChange={handleFile} />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-secondary text-secondary-foreground font-body font-bold py-3 rounded-lg hover:bg-secondary/90 transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {sending ? (
                    <>
                      <div className="animate-spin h-5 w-5 border-2 border-secondary-foreground border-t-transparent rounded-full" />
                      Enviando...
                    </>
                  ) : (
                    "Enviar Propuesta Definitiva"
                  )}
                </button>
              </form>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default JobDetail;
