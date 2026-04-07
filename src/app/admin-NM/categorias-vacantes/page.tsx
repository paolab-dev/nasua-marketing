import AdminJobCategories from "@/views/admin/AdminJobCategories";

export const metadata = {
  title: "Categorías Vacantes | Nasua Admin",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <AdminJobCategories />;
}
