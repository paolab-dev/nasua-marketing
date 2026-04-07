"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import type { Job, JobCategory } from "@/lib/types";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import RichTextEditor from "./RichTextEditor";

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
  const router = useRouter();
  const { toast } = useToast();
  const isEditing = !!initialData;

  const [saving, setSaving] = useState(false);
  const [categories, setCategories] = useState<JobCategory[]>([]);
  const [form, setForm] = useState({
    title: initialData?.title || "",
    slug: initialData?.slug || "",
    category: initialData?.category || "",
    short_description: initialData?.short_description || "",
    description: initialData?.description || "",
    skills: initialData?.skills?.join(", ") || "",
    deadline: initialData?.deadline || "",
    development_time: initialData?.development_time || "",
    budget_range: initialData?.budget_range || "",
    status: initialData?.status || "open" as "open" | "closed",
  });

  useEffect(() => {
    supabase.from("job_categories").select("id, name").order("name").then(({ data }) => {
      if (data) setCategories(data);
    });
  }, []);

  useEffect(() => {
    if (!isEditing) {
      setForm((p) => ({ ...p, slug: slugify(p.title) }));
    }
  }, [form.title, isEditing]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    const payload = {
      title: form.title,
      slug: form.slug,
      category: form.category,
      short_description: form.short_description,
      description: form.description,
      skills: form.skills.split(",").map((s) => s.trim()).filter(Boolean),
      deadline: form.deadline || null,
      development_time: form.development_time,
      budget_range: form.budget_range,
      status: form.status,
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
      router.push("/admin-NM/vacantes");
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
            <SelectTrigger><SelectValue placeholder="Seleccionar categoría" /></SelectTrigger>
            <SelectContent>
              {categories.map((c) => (
                <SelectItem key={c.id} value={c.name}>{c.name}</SelectItem>
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
        <Label className="font-body font-medium">Descripción corta (para cards) *</Label>
        <Input name="short_description" value={form.short_description} onChange={handleChange} required placeholder="Resumen de 1-2 líneas para la tarjeta pública" />
      </div>

      <div className="space-y-2">
        <Label className="font-body font-medium">Descripción completa *</Label>
        <RichTextEditor
          value={form.description}
          onChange={(v) => setForm((p) => ({ ...p, description: v }))}
          placeholder="Describe el proyecto en detalle..."
        />
      </div>

      <div className="space-y-2">
        <Label className="font-body font-medium">Skills (separadas por coma)</Label>
        <Input name="skills" value={form.skills} onChange={handleChange} placeholder="React, Figma, Tailwind" />
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        <div className="space-y-2">
          <Label className="font-body font-medium">Cierre propuestas</Label>
          <Input name="deadline" type="date" value={form.deadline} onChange={handleChange} />
        </div>
        <div className="space-y-2">
          <Label className="font-body font-medium">Tiempo de desarrollo</Label>
          <Input name="development_time" value={form.development_time} onChange={handleChange} placeholder="4–6 semanas" />
        </div>
        <div className="space-y-2">
          <Label className="font-body font-medium">Rango de presupuesto</Label>
          <Input name="budget_range" value={form.budget_range} onChange={handleChange} placeholder="$2,000 – $3,500" />
        </div>
      </div>

      <div className="flex gap-3 pt-2">
        <Button type="submit" disabled={saving}>
          {saving ? "Guardando..." : isEditing ? "Guardar Cambios" : "Crear Vacante"}
        </Button>
        <Button type="button" variant="outline" onClick={() => router.push("/admin-NM/vacantes")}>
          Cancelar
        </Button>
      </div>
    </form>
  );
};

export default JobForm;
