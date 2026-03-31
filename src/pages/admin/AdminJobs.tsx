import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import type { Job } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AdminJobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchJobs = async () => {
    const { data } = await supabase
      .from("jobs")
      .select("*")
      .order("created_at", { ascending: false });
    setJobs(data || []);
    setLoading(false);
  };

  useEffect(() => { fetchJobs(); }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("¿Eliminar esta vacante?")) return;
    const { error } = await supabase.from("jobs").delete().eq("id", id);
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Vacante eliminada" });
      fetchJobs();
    }
  };

  const toggleStatus = async (job: Job) => {
    const newStatus = job.status === "open" ? "closed" : "open";
    await supabase.from("jobs").update({ status: newStatus }).eq("id", job.id);
    fetchJobs();
  };

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <div className="animate-spin h-8 w-8 border-4 border-secondary border-t-transparent rounded-full" />
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-display font-bold text-foreground">Vacantes</h1>
        <Button asChild>
          <Link to="/admin-NM/vacantes/nueva">
            <Plus className="h-4 w-4 mr-2" /> Nueva Vacante
          </Link>
        </Button>
      </div>

      <div className="border border-border rounded-xl overflow-hidden">
        <table className="w-full text-sm font-body">
          <thead className="bg-muted/50">
            <tr>
              <th className="text-left p-3 font-medium">Título</th>
              <th className="text-left p-3 font-medium hidden md:table-cell">Categoría</th>
              <th className="text-left p-3 font-medium">Status</th>
              <th className="text-right p-3 font-medium">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job.id} className="border-t border-border">
                <td className="p-3 font-medium text-foreground">{job.title}</td>
                <td className="p-3 hidden md:table-cell text-muted-foreground">{job.category}</td>
                <td className="p-3">
                  <button
                    onClick={() => toggleStatus(job)}
                    className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                      job.status === "open"
                        ? "bg-secondary/15 text-secondary"
                        : "bg-destructive/15 text-destructive"
                    }`}
                  >
                    {job.status === "open" ? "Open" : "Closed"}
                  </button>
                </td>
                <td className="p-3 text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon" asChild>
                      <Link to={`/admin-NM/vacantes/editar/${job.id}`}>
                        <Pencil className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(job.id)}>
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
            {jobs.length === 0 && (
              <tr>
                <td colSpan={4} className="p-6 text-center text-muted-foreground">
                  No hay vacantes creadas.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminJobs;

export const prerender = false;
