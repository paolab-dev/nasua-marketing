import PostForm from "@/components/admin/PostForm";

const AdminPostNew = () => (
  <div className="max-w-3xl">
    <h1 className="text-2xl font-display font-bold text-foreground mb-8">Nuevo Post</h1>
    <PostForm />
  </div>
);

export default AdminPostNew;

export const prerender = false;
