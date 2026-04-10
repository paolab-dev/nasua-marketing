"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import type { Category, Subcategory } from "@/lib/types";
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
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";

/* ──────────────────────────────────────────────
   Categorías
────────────────────────────────────────────── */

const AdminCategories = () => {
  const { toast } = useToast();

  // ── Categories state ──
  const [cats, setCats] = useState<Category[]>([]);
  const [loadingCats, setLoadingCats] = useState(true);
  const [catForm, setCatForm] = useState({ name: "", slug: "", meta_description: "", keywords: "" });
  const [editingCatId, setEditingCatId] = useState<string | null>(null);
  const [savingCat, setSavingCat] = useState(false);

  // ── Subcategories state ──
  const [subs, setSubs] = useState<Subcategory[]>([]);
  const [loadingSubs, setLoadingSubs] = useState(true);
  const [subForm, setSubForm] = useState({ name: "", slug: "", meta_description: "", keywords: "", category_id: "" });
  const [editingSubId, setEditingSubId] = useState<string | null>(null);
  const [savingSub, setSavingSub] = useState(false);

  // ── Load ──
  const loadCats = async () => {
    setLoadingCats(true);
    const { data, error } = await supabase.from("categories").select("*").order("name");
    if (error) toast({ title: "Error cargando categorías", description: error.message, variant: "destructive" });
    setCats(data ?? []);
    setLoadingCats(false);
  };

  const loadSubs = async () => {
    setLoadingSubs(true);
    const { data, error } = await supabase.from("subcategories").select("*").order("name");
    if (error) toast({ title: "Error cargando subcategorías", description: error.message, variant: "destructive" });
    setSubs(data ?? []);
    setLoadingSubs(false);
  };

  useEffect(() => { loadCats(); loadSubs(); }, []);

  // ── Auto-slug from name ──
  const toSlug = (s: string) =>
    s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  const setCatField = (key: string, value: string) => {
    setCatForm((f) => {
      const updated = { ...f, [key]: value };
      if (key === "name" && !editingCatId) updated.slug = toSlug(value);
      return updated;
    });
  };

  const setSubField = (key: string, value: string) => {
    setSubForm((f) => {
      const updated = { ...f, [key]: value };
      if (key === "name" && !editingSubId) updated.slug = toSlug(value);
      return updated;
    });
  };

  // ── Category CRUD ──
  const handleCatSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!catForm.name.trim()) return;
    setSavingCat(true);

    const payload = {
      name: catForm.name.trim(),
      slug: catForm.slug.trim() || null,
      meta_description: catForm.meta_description.trim() || null,
      keywords: catForm.keywords.trim() || null,
    };

    let error;
    if (editingCatId) {
      ({ error } = await supabase.from("categories").update(payload).eq("id", editingCatId));
    } else {
      ({ error } = await supabase.from("categories").insert(payload));
    }

    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      toast({ title: editingCatId ? "Categoría actualizada" : "Categoría creada" });
      setCatForm({ name: "", slug: "", meta_description: "", keywords: "" });
      setEditingCatId(null);
      loadCats();
    }
    setSavingCat(false);
  };

  const handleCatEdit = (item: Category) => {
    setEditingCatId(item.id);
    setCatForm({ name: item.name, slug: item.slug ?? "", meta_description: item.meta_description ?? "", keywords: item.keywords ?? "" });
  };

  const handleCatDelete = async (id: string) => {
    if (!confirm("¿Eliminar esta categoría? También se eliminarán sus subcategorías.")) return;
    const { error } = await supabase.from("categories").delete().eq("id", id);
    if (error) toast({ title: "Error", description: error.message, variant: "destructive" });
    else { toast({ title: "Categoría eliminada" }); loadCats(); loadSubs(); }
  };

  // ── Subcategory CRUD ──
  const handleSubSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!subForm.name.trim() || !subForm.category_id) return;
    setSavingSub(true);

    const payload = {
      name: subForm.name.trim(),
      slug: subForm.slug.trim() || null,
      meta_description: subForm.meta_description.trim() || null,
      keywords: subForm.keywords.trim() || null,
      category_id: subForm.category_id,
    };

    let error;
    if (editingSubId) {
      ({ error } = await supabase.from("subcategories").update(payload).eq("id", editingSubId));
    } else {
      ({ error } = await supabase.from("subcategories").insert(payload));
    }

    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      toast({ title: editingSubId ? "Subcategoría actualizada" : "Subcategoría creada" });
      setSubForm({ name: "", slug: "", meta_description: "", keywords: "", category_id: "" });
      setEditingSubId(null);
      loadSubs();
    }
    setSavingSub(false);
  };

  const handleSubEdit = (item: Subcategory) => {
    setEditingSubId(item.id);
    setSubForm({ name: item.name, slug: item.slug ?? "", meta_description: item.meta_description ?? "", keywords: item.keywords ?? "", category_id: item.category_id });
  };

  const handleSubDelete = async (id: string) => {
    if (!confirm("¿Eliminar esta subcategoría?")) return;
    const { error } = await supabase.from("subcategories").delete().eq("id", id);
    if (error) toast({ title: "Error", description: error.message, variant: "destructive" });
    else { toast({ title: "Subcategoría eliminada" }); loadSubs(); }
  };

  const getCatName = (id: string) => cats.find((c) => c.id === id)?.name ?? "—";

  return (
    <div className="max-w-3xl space-y-12">

      {/* ── CATEGORÍAS ── */}
      <section>
        <h1 className="text-2xl font-display font-bold text-foreground mb-6">Categorías</h1>

        <form onSubmit={handleCatSubmit} className="space-y-4 mb-8 border border-border rounded-xl p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <Label htmlFor="cat-name">Nombre *</Label>
              <Input id="cat-name" placeholder="Ej: Marketing Digital" value={catForm.name} onChange={(e) => setCatField("name", e.target.value)} required maxLength={100} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="cat-slug">Slug</Label>
              <Input id="cat-slug" placeholder="marketing-digital" value={catForm.slug} onChange={(e) => setCatField("slug", e.target.value)} className="font-mono text-sm" maxLength={120} />
            </div>
          </div>
          <div className="space-y-1">
            <Label htmlFor="cat-meta">Meta descripción</Label>
            <Textarea id="cat-meta" placeholder="Descripción para motores de búsqueda (máx. 160 caracteres)" value={catForm.meta_description} onChange={(e) => setCatField("meta_description", e.target.value)} rows={2} maxLength={160} />
          </div>
          <div className="space-y-1">
            <Label htmlFor="cat-kw">Keywords</Label>
            <Input id="cat-kw" placeholder="seo, posicionamiento, google" value={catForm.keywords} onChange={(e) => setCatField("keywords", e.target.value)} maxLength={255} />
          </div>
          <div className="flex gap-3">
            <Button type="submit" disabled={savingCat}>{editingCatId ? "Actualizar" : "Crear categoría"}</Button>
            {editingCatId && <Button type="button" variant="outline" onClick={() => { setEditingCatId(null); setCatForm({ name: "", slug: "", meta_description: "", keywords: "" }); }}>Cancelar</Button>}
          </div>
        </form>

        {loadingCats ? (
          <div className="space-y-3">{[1,2].map(i=><div key={i} className="h-10 bg-muted rounded animate-pulse"/>)}</div>
        ) : cats.length === 0 ? (
          <p className="text-muted-foreground">No hay categorías.</p>
        ) : (
          <div className="border border-border rounded-xl overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nombre</TableHead>
                  <TableHead className="hidden md:table-cell">Slug</TableHead>
                  <TableHead className="text-right">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cats.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.name}</TableCell>
                    <TableCell className="hidden md:table-cell font-mono text-sm text-muted-foreground">{item.slug ?? "—"}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex gap-2 justify-end">
                        <Button size="sm" variant="outline" onClick={() => handleCatEdit(item)}>Editar</Button>
                        <Button size="sm" variant="destructive" onClick={() => handleCatDelete(item.id)}>Eliminar</Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </section>

      {/* ── SUBCATEGORÍAS ── */}
      <section>
        <h2 className="text-xl font-display font-bold text-foreground mb-6">Subcategorías</h2>

        <form onSubmit={handleSubSubmit} className="space-y-4 mb-8 border border-border rounded-xl p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <Label htmlFor="sub-name">Nombre *</Label>
              <Input id="sub-name" placeholder="Ej: SEO Local" value={subForm.name} onChange={(e) => setSubField("name", e.target.value)} required maxLength={100} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="sub-slug">Slug</Label>
              <Input id="sub-slug" placeholder="seo-local" value={subForm.slug} onChange={(e) => setSubField("slug", e.target.value)} className="font-mono text-sm" maxLength={120} />
            </div>
          </div>
          <div className="space-y-1">
            <Label>Categoría padre *</Label>
            <Select value={subForm.category_id} onValueChange={(v) => setSubForm((f) => ({ ...f, category_id: v }))}>
              <SelectTrigger>
                <SelectValue placeholder="Seleccionar categoría" />
              </SelectTrigger>
              <SelectContent>
                {cats.map((c) => (
                  <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1">
            <Label htmlFor="sub-meta">Meta descripción</Label>
            <Textarea id="sub-meta" placeholder="Descripción para motores de búsqueda (máx. 160 caracteres)" value={subForm.meta_description} onChange={(e) => setSubField("meta_description", e.target.value)} rows={2} maxLength={160} />
          </div>
          <div className="space-y-1">
            <Label htmlFor="sub-kw">Keywords</Label>
            <Input id="sub-kw" placeholder="seo local, google maps, geolocalización" value={subForm.keywords} onChange={(e) => setSubField("keywords", e.target.value)} maxLength={255} />
          </div>
          <div className="flex gap-3">
            <Button type="submit" disabled={savingSub}>{editingSubId ? "Actualizar" : "Crear subcategoría"}</Button>
            {editingSubId && <Button type="button" variant="outline" onClick={() => { setEditingSubId(null); setSubForm({ name: "", slug: "", meta_description: "", keywords: "", category_id: "" }); }}>Cancelar</Button>}
          </div>
        </form>

        {loadingSubs ? (
          <div className="space-y-3">{[1,2].map(i=><div key={i} className="h-10 bg-muted rounded animate-pulse"/>)}</div>
        ) : subs.length === 0 ? (
          <p className="text-muted-foreground">No hay subcategorías.</p>
        ) : (
          <div className="border border-border rounded-xl overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nombre</TableHead>
                  <TableHead>Categoría</TableHead>
                  <TableHead className="hidden md:table-cell">Slug</TableHead>
                  <TableHead className="text-right">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {subs.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.name}</TableCell>
                    <TableCell className="text-muted-foreground">{getCatName(item.category_id)}</TableCell>
                    <TableCell className="hidden md:table-cell font-mono text-sm text-muted-foreground">{item.slug ?? "—"}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex gap-2 justify-end">
                        <Button size="sm" variant="outline" onClick={() => handleSubEdit(item)}>Editar</Button>
                        <Button size="sm" variant="destructive" onClick={() => handleSubDelete(item.id)}>Eliminar</Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </section>
    </div>
  );
};

export default AdminCategories;
