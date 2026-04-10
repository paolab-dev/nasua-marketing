"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import type { Post } from "@/lib/types";
import { Button } from "@/components/ui/button";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";

const AdminPosts = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("posts")
      .select("*, authors(name), categories(name)")
      .order("created_at", { ascending: false });
    if (error) toast({ title: "Error", description: error.message, variant: "destructive" });
    else setPosts(data ?? []);
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("¿Eliminar este post?")) return;
    const { error } = await supabase.from("posts").delete().eq("id", id);
    if (error) toast({ title: "Error", description: error.message, variant: "destructive" });
    else { toast({ title: "Post eliminado" }); load(); }
  };

  return (
    <div className="max-w-5xl">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-display font-bold text-foreground">Posts</h1>
        <Button onClick={() => router.push("/admin-NM/posts/nuevo")}>+ Nuevo post</Button>
      </div>

      {loading ? (
        <div className="space-y-3">{[1,2,3].map(i=><div key={i} className="h-12 bg-muted rounded animate-pulse"/>)}</div>
      ) : posts.length === 0 ? (
        <p className="text-muted-foreground">No hay posts todavía.</p>
      ) : (
        <div className="border border-border rounded-xl overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Título</TableHead>
                <TableHead className="hidden md:table-cell">Categoría</TableHead>
                <TableHead className="hidden md:table-cell">Estado</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {posts.map((p) => (
                <TableRow key={p.id}>
                  <TableCell className="font-medium max-w-xs truncate">{p.title}</TableCell>
                  <TableCell className="hidden md:table-cell">{(p.categories as any)?.name ?? "—"}</TableCell>
                  <TableCell className="hidden md:table-cell">
                    <span className={`text-xs font-semibold uppercase px-2 py-0.5 rounded-full ${p.status === "published" ? "bg-secondary/20 text-secondary" : "bg-muted text-muted-foreground"}`}>
                      {p.status === "published" ? "Publicado" : "Borrador"}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex gap-2 justify-end">
                      <Button size="sm" variant="outline" onClick={() => router.push(`/admin-NM/posts/${p.id}`)}>Editar</Button>
                      <Button size="sm" variant="destructive" onClick={() => handleDelete(p.id)}>Eliminar</Button>
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

export default AdminPosts;

