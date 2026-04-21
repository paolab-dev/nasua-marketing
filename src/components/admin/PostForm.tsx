"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { uploadImage } from "@/lib/storage";
import type { Post, Author, Category, Subcategory } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import RichTextEditor from "./RichTextEditor";

interface PostFormProps {
  post?: Post | null;
}

const PostForm = ({ post }: PostFormProps) => {
  const router = useRouter();
  const { toast } = useToast();

  const [authors, setAuthors] = useState<Author[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);
  const [filteredSubs, setFilteredSubs] = useState<Subcategory[]>([]);
  const [saving, setSaving] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>(post?.featured_image ?? "");

  const [form, setForm] = useState({
    title: post?.title ?? "",
    slug: post?.slug ?? "",
    content: post?.content ?? "",
    summary_tldr: post?.summary_tldr ?? "",
    meta_description: post?.meta_description ?? "",
    keywords: post?.keywords ?? "",
    canonical_url: post?.canonical_url ?? "",
    featured_image: post?.featured_image ?? "",
    author_id: post?.author_id ?? "",
    category_id: post?.category_id ?? "",
    subcategory_id: post?.subcategory_id ?? "",
    title_tag: post?.title_tag ?? "",
    cta_label: post?.cta_label ?? "",
    cta_url: post?.cta_url ?? "",
    author_bio: post?.author_bio ?? "",
    status: post?.status ?? "draft" as "draft" | "published",
    published_at: post?.published_at ? post.published_at.slice(0, 16) : "",
  });

  useEffect(() => {
    const load = async () => {
      const [a, c, s] = await Promise.all([
        supabase.from("authors").select("id, name").order("name"),
        supabase.from("categories").select("id, name").order("name"),
        supabase.from("subcategories").select("*").order("name"),
      ]);
      if (a.data) setAuthors(a.data);
      if (c.data) setCategories(c.data);
      if (s.data) setSubcategories(s.data);
    };
    load();
  }, []);

  // Filter subcategories when category changes
  useEffect(() => {
    if (form.category_id) {
      setFilteredSubs(subcategories.filter((s) => s.category_id === form.category_id));
    } else {
      setFilteredSubs([]);
    }
  }, [form.category_id, subcategories]);

  const handleTitleChange = (title: string) => {
    setForm((f) => ({
      ...f,
      title,
      slug: title
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, ""),
    }));
  };

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      let featuredImage = form.featured_image;
      if (imageFile) {
        featuredImage = await uploadImage(imageFile);
      }

      const payload = {
        title: form.title.trim(),
        slug: form.slug.trim(),
        content: form.content.replace(/&nbsp;/g, " ").replace(/\u00A0/g, " "),
        summary_tldr: form.summary_tldr.trim(),
        meta_description: form.meta_description.trim(),
        keywords: form.keywords.trim() || null,
        title_tag: form.title_tag.trim() || null,
        canonical_url: form.canonical_url.trim() || null,
        featured_image: featuredImage || null,
        author_id: form.author_id || null,
        category_id: form.category_id || null,
        subcategory_id: form.subcategory_id || null,
        cta_label: form.cta_label.trim() || null,
        cta_url: form.cta_url.trim() || null,
        author_bio: form.author_bio.trim() || null,
        status: form.status,
        published_at: form.published_at ? new Date(form.published_at).toISOString() : null,
      };

      let error;
      if (post?.id) {
        ({ error } = await supabase.from("posts").update(payload).eq("id", post.id));
      } else {
        ({ error } = await supabase.from("posts").insert(payload));
      }

      if (error) throw error;

      toast({ title: post?.id ? "Artículo actualizado" : "Artículo creado" });
      router.push("/admin-NM");
    } catch (err: any) {
      toast({ title: "Error", description: err.message, variant: "destructive" });
    } finally {
      setSaving(false);
    }
  };

  const set = (key: string, value: string) => setForm((f) => ({ ...f, [key]: value }));

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl">

      {/* Title (H1) */}
      <div className="space-y-2">
        <Label htmlFor="title">Título (H1)</Label>
        <Input
          id="title"
          value={form.title}
          onChange={(e) => handleTitleChange(e.target.value)}
          required
        />
      </div>

      {/* Slug */}
      <div className="space-y-2">
        <Label htmlFor="slug">Slug</Label>
        <Input
          id="slug"
          value={form.slug}
          onChange={(e) => set("slug", e.target.value)}
          required
          className="font-mono text-sm"
        />
      </div>

      {/* Featured Image */}
      <div className="space-y-2">
        <Label>Imagen destacada</Label>
        <Input type="file" accept="image/*" onChange={handleImageSelect} />
        <p className="text-xs text-muted-foreground">Se convertirá automáticamente a WebP.</p>
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Preview"
            className="mt-2 rounded-lg max-h-48 object-cover border border-border"
          />
        )}
      </div>

      {/* Author & Category */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Autor</Label>
          <Select value={form.author_id} onValueChange={(v) => set("author_id", v)}>
            <SelectTrigger><SelectValue placeholder="Seleccionar autor" /></SelectTrigger>
            <SelectContent>
              {authors.map((a) => (
                <SelectItem key={a.id} value={a.id}>{a.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Categoría</Label>
          <Select value={form.category_id} onValueChange={(v) => { set("category_id", v); set("subcategory_id", ""); }}>
            <SelectTrigger><SelectValue placeholder="Seleccionar categoría" /></SelectTrigger>
            <SelectContent>
              {categories.map((c) => (
                <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Subcategory */}
      {filteredSubs.length > 0 && (
        <div className="space-y-2">
          <Label>Subcategoría</Label>
          <Select value={form.subcategory_id} onValueChange={(v) => set("subcategory_id", v)}>
            <SelectTrigger><SelectValue placeholder="Seleccionar subcategoría" /></SelectTrigger>
            <SelectContent>
              {filteredSubs.map((s) => (
                <SelectItem key={s.id} value={s.id}>{s.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      {/* Content - WYSIWYG */}
      <div className="space-y-2">
        <Label>Contenido</Label>
        <RichTextEditor
          value={form.content}
          onChange={(v) => set("content", v)}
          placeholder="Escribe el contenido del artículo..."
        />
      </div>

      {/* CTA */}
      <fieldset className="border border-border rounded-xl p-5 space-y-4">
        <legend className="text-sm font-bold uppercase tracking-wider text-secondary px-2">
          Call to Action
        </legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="cta_label">Texto del botón</Label>
            <Input
              id="cta_label"
              value={form.cta_label}
              onChange={(e) => set("cta_label", e.target.value)}
              placeholder="Ej: Descarga el checklist gratis"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cta_url">URL del botón</Label>
            <Input
              id="cta_url"
              type="url"
              value={form.cta_url}
              onChange={(e) => set("cta_url", e.target.value)}
              placeholder="https://..."
            />
          </div>
        </div>
        <p className="text-xs text-muted-foreground">El botón se mostrará al final del artículo y se abrirá en una nueva pestaña.</p>
      </fieldset>

      {/* Author Bio */}
      <div className="space-y-2">
        <Label htmlFor="author_bio">Sobre el autor</Label>
        <Textarea
          id="author_bio"
          value={form.author_bio}
          onChange={(e) => set("author_bio", e.target.value)}
          rows={3}
          placeholder="Breve biografía del autor que aparecerá al final del artículo..."
        />
      </div>

      {/* SEO Section */}
      <fieldset className="border border-border rounded-xl p-5 space-y-4">
        <legend className="text-sm font-bold uppercase tracking-wider text-secondary px-2">
          SEO
        </legend>

        <div className="space-y-2">
          <Label htmlFor="title_tag">Title Tag (Título para buscadores)</Label>
          <Input
            id="title_tag"
            value={form.title_tag}
            onChange={(e) => set("title_tag", e.target.value)}
            maxLength={70}
            placeholder="Máx. 60–70 caracteres · se mostrará en la pestaña del navegador y resultados de Google"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="summary_tldr">TL;DR / Resumen AEO</Label>
          <Textarea
            id="summary_tldr"
            value={form.summary_tldr}
            onChange={(e) => set("summary_tldr", e.target.value)}
            rows={3}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="meta_description">Meta descripción</Label>
          <Textarea
            id="meta_description"
            value={form.meta_description}
            onChange={(e) => set("meta_description", e.target.value)}
            rows={2}
            maxLength={160}
            placeholder="Máx. 160 caracteres"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="keywords">Keywords</Label>
          <Input
            id="keywords"
            value={form.keywords}
            onChange={(e) => set("keywords", e.target.value)}
            placeholder="seo, marketing digital, posicionamiento"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="canonical_url">URL Canónica</Label>
          <Input
            id="canonical_url"
            type="url"
            value={form.canonical_url}
            onChange={(e) => set("canonical_url", e.target.value)}
            placeholder="https://nasua.marketing/blog/..."
          />
        </div>
      </fieldset>

      {/* Status & Published At */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Estado</Label>
          <Select value={form.status} onValueChange={(v) => set("status", v)}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="draft">Borrador</SelectItem>
              <SelectItem value="published">Publicado</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="published_at">Fecha de publicación</Label>
          <Input
            id="published_at"
            type="datetime-local"
            value={form.published_at}
            onChange={(e) => set("published_at", e.target.value)}
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3 pt-4">
        <Button type="submit" disabled={saving}>
          {saving ? "Guardando…" : post?.id ? "Actualizar artículo" : "Crear artículo"}
        </Button>
        <Button type="button" variant="outline" onClick={() => router.push("/admin-NM")}>
          Cancelar
        </Button>
      </div>
    </form>
  );
};

export default PostForm;
