import { Helmet } from "react-helmet-async";
import PostForm from "@/components/admin/PostForm";

const AdminPostNew = () => (
  <main className="min-h-screen bg-background px-4 py-8 md:px-12">
    <Helmet>
      <title>Nuevo Post | Admin Nasua</title>
      <meta name="robots" content="noindex, nofollow" />
    </Helmet>
    <div className="container mx-auto max-w-3xl">
      <h1 className="text-3xl font-display font-bold text-foreground mb-8">Nuevo Post</h1>
      <PostForm />
    </div>
  </main>
);

export default AdminPostNew;
