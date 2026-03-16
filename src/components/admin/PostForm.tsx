import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { uploadImage } from "@/lib/storage";
import type { Post, Author, Category } from "@/lib/types";
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

interface PostFormProps {
  post?: Post | null;
}

const PostForm = ({ post }: PostFormProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const [authors, setAuthors] = useState<Author[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [saving, setSaving] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>(post?.featured_image ?? "");

  const [form, setForm] = useState({
    title: post?.title ?? "",
    slug: post?.slug ?? "",
    content: post?.content ?? "",
    summary_tldr: post?.summary_tldr ?? "",
    meta_description: post?.meta_description ?? "",
    canonical_url: post?.canonical_url ?? "",
    featured_image: post?.featured_image ?? "",
    author_id: post?.author_id ?? "",
    category_id: post?.category_id ?? "",
    status: post?.status ?? "draft" as "draft" | "published",
    published_at: post?.published_at ? post.published_at.slice(0, 16) : "",
  });

  useEffect(() => {
    const load = async () => {
      const [a, c] = await Promise.all([
        supabase.from("authors").select("id, name").order("name"),
        supabase.from("categories").select("id, name").order("name"),
      ]);
      if (a.data) setAuthors(a.data);
      if (c.data) setCategories(c.data);
    };
    load();
  }, []);

  // Auto-generate slug from title
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

      // Upload image if a new one was selected
      if (imageFile) {
        featuredImage = await uploadImage(imageFile);
      }

      const payload = {
        title: form.title.trim(),
        slug: form.slug.trim(),
        content: form.content,
        summary_tldr: form.summary_tldr.trim(),
        meta_description: form.meta_description.trim(),
        canonical_url: form.canonical_url.trim() || null,
        featured_image: featuredImage || null,
        author_id: form.author_id || null,
        category_id: form.category_id || null,
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

      toast({ title: post?.id ? "Post actualizado" : "Post creado" });
      navigate("/admin-NM");
    } catch (err: any) {
      toast({
        title: "Error",
        description: err.message,
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  const set = (key: string, value: string) => setForm((f) => ({ ...f, [key]: value }));

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl">
      {/* Title */}
      <div className="space-y-2">
        <Label htmlFor="title">Título</Label>
        <Input
          id="title"
          value={form.title}
          onChange={(e) => handleTitleChange(e.target.value)}
          required
          maxLength={200}
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
          maxLength={200}
          className="font-mono text-sm"
        />
      </div>

      {/* Content */}
      <div className="space-y-2">
        <Label htmlFor="content">Contenido</Label>
        <Textarea
          id="content"
          value={form.content}
          onChange={(e) => set("content", e.target.value)}
          rows={12}
          className="font-mono text-sm"
        />
      </div>

      {/* SEO Section */}
      <fieldset className="border border-border rounded-xl p-5 space-y-4">
        <legend className="text-sm font-bold uppercase tracking-wider text-secondary px-2">
          SEO
        </legend>

        <div className="space-y-2">
          <Label htmlFor="summary_tldr">TL;DR / Resumen AEO</Label>
          <Textarea
            id="summary_tldr"
            value={form.summary_tldr}
            onChange={(e) => set("summary_tldr", e.target.value)}
            rows={3}
            maxLength={500}
          />
          <p className="text-xs text-muted-foreground">{form.summary_tldr.length}/500</p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="meta_description">Meta Description</Label>
          <Textarea
            id="meta_description"
            value={form.meta_description}
            onChange={(e) => set("meta_description", e.target.value)}
            rows={2}
            maxLength={160}
          />
          <p className="text-xs text-muted-foreground">{form.meta_description.length}/160</p>
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

      {/* Featured Image */}
      <div className="space-y-2">
        <Label>Imagen destacada</Label>
        <Input type="file" accept="image/*" onChange={handleImageSelect} />
        <p className="text-xs text-muted-foreground">
          Se convertirá automáticamente a WebP antes de subirla.
        </p>
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
            <SelectTrigger>
              <SelectValue placeholder="Seleccionar autor" />
            </SelectTrigger>
            <SelectContent>
              {authors.map((a) => (
                <SelectItem key={a.id} value={a.id}>
                  {a.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Categoría</Label>
          <Select value={form.category_id} onValueChange={(v) => set("category_id", v)}>
            <SelectTrigger>
              <SelectValue placeholder="Seleccionar categoría" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((c) => (
                <SelectItem key={c.id} value={c.id}>
                  {c.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Status & Published At */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Estado</Label>
          <Select value={form.status} onValueChange={(v) => set("status", v)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
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
          {saving ? "Guardando…" : post?.id ? "Actualizar" : "Crear post"}
        </Button>
        <Button type="button" variant="outline" onClick={() => navigate("/admin-NM")}>
          Cancelar
        </Button>
      </div>
    </form>
  );
};

export default PostForm;
