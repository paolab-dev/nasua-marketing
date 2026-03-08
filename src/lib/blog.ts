export interface BlogPost {
  nombre: string;
  slug: string;
  metaDescription: string;
  tldr: string;
  categoria: string;
  autor: string;
  imagenDestacada: string;
  fechaPublicacion: string;
}

export async function fetchPosts(): Promise<BlogPost[]> {
  const res = await fetch("/api/posts");
  if (!res.ok) throw new Error("Error al cargar posts");
  return res.json();
}
