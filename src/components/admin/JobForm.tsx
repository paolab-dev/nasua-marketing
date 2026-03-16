import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import type { Job } from "@/lib/types";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const CATEGORIES = [
  "Desarrollo & Diseño",
  "Diseño UI/UX",
  "Vibe Coding",
  "Desarrollo Móvil",
];

interface Props {
  initialData?: Job;
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const JobForm = ({ initialData }: Props) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const isEditing = !!initialData;

  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    title: initialData?.title || "",
    slug: initialData?.slug || "",
    category: initialData?.category || CATEGORIES[0],
    description: initialData?.description || "",
    skills: initialData?.skills?.join(", ") || "",
    deadline: initialData?.deadline || "",
    duration: initialData?.duration || "",
    budget: initialData?.budget || "",
    status: initialData?.status || "open" as "open" | "closed",
    meta_description: initialData?.meta_description || "",
    canonical_url: initialData?.canonical_url || "",
  });

  useEffect(() => {
    if (!isEditing) {
      setForm((p) => ({ ...p, slug: slugify(p.title) }));
    }
  }, [form.title, isEditing]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    const payload = {
      title: form.title,
      slug: form.slug,
      category: form.category,
      description: form.description,
      skills: form.skills.split(",").map((s) => s.trim()).filter(Boolean),
      deadline: form.deadline,
      duration: form.duration,
      budget: form.budget,
      status: form.status,
      meta_description: form.meta_description,
      canonical_url: form.canonical_url,
    };

    let error;
    if (isEditing) {
      ({ error } = await supabase.from("jobs").update(payload).eq("id", initialData.id));
    } else {
      ({ error } = await supabase.from("jobs").insert(payload));
    }

    setSaving(false);

    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      toast({ title: isEditing ? "Vacante actualizada" : "Vacante creada" });
      navigate("/admin-NM/vacantes");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label className="font-body font-medium">Título *</Label>
          <Input name="title" value={form.title} onChange={handleChange} required />
        </div>
        <div className="space-y-2">
          <Label className="font-body font-medium">Slug</Label>
          <Input name="slug" value={form.slug} onChange={handleChange} />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label className="font-body font-medium">Categoría *</Label>
          <Select value={form.category} onValueChange={(v) => setForm((p) => ({ ...p, category: v }))}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              {CATEGORIES.map((c) => (
                <SelectItem key={c} value={c}>{c}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label className="font-body font-medium">Status</Label>
          <Select value={form.status} onValueChange={(v) => setForm((p) => ({ ...p, status: v as "open" | "closed" }))}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="open">Open</SelectItem>
              <SelectItem value="closed">Closed</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label className="font-body font-medium">Descripción *</Label>
        <Textarea name="description" value={form.description} onChange={handleChange} required rows={4} />
      </div>

      <div className="space-y-2">
        <Label className="font-body font-medium">Skills (separadas por coma)</Label>
        <Input name="skills" value={form.skills} onChange={handleChange} placeholder="React, Figma, Tailwind" />
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        <div className="space-y-2">
          <Label className="font-body font-medium">Cierre propuestas</Label>
          <Input name="deadline" value={form.deadline} onChange={handleChange} placeholder="15 Abr 2026" />
        </div>
        <div className="space-y-2">
          <Label className="font-body font-medium">Duración</Label>
          <Input name="duration" value={form.duration} onChange={handleChange} placeholder="4–6 semanas" />
        </div>
        <div className="space-y-2">
          <Label className="font-body font-medium">Presupuesto</Label>
          <Input name="budget" value={form.budget} onChange={handleChange} placeholder="$2,000 – $3,500" />
        </div>
      </div>

      <hr className="border-border" />

      <div className="space-y-2">
        <Label className="font-body font-medium">Meta Description (SEO)</Label>
        <Textarea name="meta_description" value={form.meta_description} onChange={handleChange} rows={2} />
      </div>
      <div className="space-y-2">
        <Label className="font-body font-medium">Canonical URL</Label>
        <Input name="canonical_url" value={form.canonical_url} onChange={handleChange} placeholder="https://" />
      </div>

      <div className="flex gap-3 pt-2">
        <Button type="submit" disabled={saving}>
          {saving ? "Guardando..." : isEditing ? "Guardar Cambios" : "Crear Vacante"}
        </Button>
        <Button type="button" variant="outline" onClick={() => navigate("/admin-NM/vacantes")}>
          Cancelar
        </Button>
      </div>
    </form>
  );
};

export default JobForm;
