import AdminAuthors from "@/views/admin/AdminAuthors";

export const metadata = {
  title: "Autores | Nasua Admin",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <AdminAuthors />;
}
