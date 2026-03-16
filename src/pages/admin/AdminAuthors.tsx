import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import type { Author } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";

const AdminAuthors = () => {
  const { toast } = useToast();
  const [items, setItems] = useState<Author[]>([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const load = async () => {
    setLoading(true);
    const { data } = await supabase.from("authors").select("id, name").order("name");
    setItems(data ?? []);
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    setSaving(true);

    let error;
    if (editingId) {
      ({ error } = await supabase.from("authors").update({ name: name.trim() }).eq("id", editingId));
    } else {
      ({ error } = await supabase.from("authors").insert({ name: name.trim() }));
    }

    if (error) toast({ title: "Error", description: error.message, variant: "destructive" });
    else { toast({ title: editingId ? "Autor actualizado" : "Autor creado" }); setName(""); setEditingId(null); load(); }
    setSaving(false);
  };

  const handleEdit = (item: Author) => { setEditingId(item.id); setName(item.name); };

  const handleDelete = async (id: string) => {
    if (!confirm("¿Eliminar este autor?")) return;
    const { error } = await supabase.from("authors").delete().eq("id", id);
    if (error) toast({ title: "Error", description: error.message, variant: "destructive" });
    else { toast({ title: "Autor eliminado" }); load(); }
  };

  const handleCancel = () => { setEditingId(null); setName(""); };

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-display font-bold text-foreground mb-6">Autores</h1>

      <form onSubmit={handleSubmit} className="flex gap-3 mb-8">
        <div className="flex-1 space-y-1">
          <Label htmlFor="author-name" className="sr-only">Nombre</Label>
          <Input id="author-name" placeholder="Nombre del autor" value={name} onChange={(e) => setName(e.target.value)} required maxLength={100} />
        </div>
        <Button type="submit" disabled={saving}>{editingId ? "Actualizar" : "Crear"}</Button>
        {editingId && <Button type="button" variant="outline" onClick={handleCancel}>Cancelar</Button>}
      </form>

      {loading ? (
        <div className="space-y-3">{[1,2].map(i=><div key={i} className="h-10 bg-muted rounded animate-pulse"/>)}</div>
      ) : items.length === 0 ? (
        <p className="text-muted-foreground">No hay autores.</p>
      ) : (
        <div className="border border-border rounded-xl overflow-hidden">
          <Table>
            <TableHeader><TableRow><TableHead>Nombre</TableHead><TableHead className="text-right">Acciones</TableHead></TableRow></TableHeader>
            <TableBody>
              {items.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex gap-2 justify-end">
                      <Button size="sm" variant="outline" onClick={() => handleEdit(item)}>Editar</Button>
                      <Button size="sm" variant="destructive" onClick={() => handleDelete(item.id)}>Eliminar</Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default AdminAuthors;
