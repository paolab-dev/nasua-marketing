import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/lib/supabase";
import type { Post } from "@/lib/types";
import PostForm from "@/components/admin/PostForm";

const AdminPostEdit = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from("posts")
      .select("*")
      .eq("id", id)
      .single()
      .then(({ data }) => {
        setPost(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full" />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background px-4 py-8 md:px-12">
      <Helmet>
        <title>Editar Post | Admin Nasua</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-3xl font-display font-bold text-foreground mb-8">Editar Post</h1>
        <PostForm post={post} />
      </div>
    </main>
  );
};

export default AdminPostEdit;
