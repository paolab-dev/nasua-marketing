import { Outlet, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FileText, Users, FolderOpen, Briefcase, Tag, LogOut } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { supabase } from "@/lib/supabase";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

const navItems = [
  { title: "Posts", url: "/admin-NM", icon: FileText },
  { title: "Categorías", url: "/admin-NM/categorias", icon: FolderOpen },
  { title: "Autores", url: "/admin-NM/autores", icon: Users },
  { title: "Vacantes", url: "/admin-NM/vacantes", icon: Briefcase },
];

function AdminSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            {!collapsed && "Administración"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end={item.url === "/admin-NM"}
                      className="hover:bg-muted/50"
                      activeClassName="bg-muted text-primary font-medium"
                    >
                      <item.icon className="mr-2 h-4 w-4 shrink-0" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

const AdminLayout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  return (
    <>
      <Helmet>
        <title>Admin | Nasua</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <SidebarProvider>
        <div className="min-h-screen flex w-full">
          <AdminSidebar />

          <div className="flex-1 flex flex-col">
            <header className="h-14 flex items-center justify-between border-b border-border px-4">
              <SidebarTrigger className="ml-1" />
              <Button variant="ghost" size="sm" onClick={handleLogout} className="gap-2">
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:inline">Cerrar sesión</span>
              </Button>
            </header>

            <main className="flex-1 p-4 md:p-8 overflow-auto">
              <Outlet />
            </main>
          </div>
        </div>
      </SidebarProvider>
    </>
  );
};

export default AdminLayout;
