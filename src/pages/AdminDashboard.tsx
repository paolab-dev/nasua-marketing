import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  return (
    <main className="min-h-screen bg-background section-padding">
      <Helmet>
        <title>Admin | Nasua</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="container mx-auto max-w-4xl pt-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-display font-bold text-foreground">Panel de Administración</h1>
          <Button variant="outline" onClick={handleLogout}>Cerrar sesión</Button>
        </div>

        <p className="text-muted-foreground">Bienvenido al panel. Aquí podrás gestionar posts, categorías y autores.</p>
      </div>
    </main>
  );
};

export default AdminDashboard;
