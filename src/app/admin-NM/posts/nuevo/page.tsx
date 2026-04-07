import AdminPostNew from "@/views/admin/AdminPostNew";

export const metadata = {
  title: "Nuevo Post | Nasua Admin",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <AdminPostNew />;
}
