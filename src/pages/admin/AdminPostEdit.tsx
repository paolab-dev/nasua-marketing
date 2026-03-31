import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import type { Post } from "@/lib/types";
import PostForm from "@/components/admin/PostForm";

const AdminPostEdit = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.from("posts").select("*").eq("id", id).single()
      .then(({ data }) => { setPost(data); setLoading(false); });
  }, [id]);

  if (loading) {
    return <div className="flex justify-center py-16"><div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full" /></div>;
  }

  return (
    <div className="max-w-3xl">
      <h1 className="text-2xl font-display font-bold text-foreground mb-8">Editar Post</h1>
      <PostForm post={post} />
    </div>
  );
};

export default AdminPostEdit;

export const prerender = false;
