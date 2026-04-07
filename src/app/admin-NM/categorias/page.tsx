import AdminCategories from "@/views/admin/AdminCategories";

export const metadata = {
  title: "Categorías | Nasua Admin",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <AdminCategories />;
}
