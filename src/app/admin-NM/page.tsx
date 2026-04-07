import AdminPosts from "@/views/admin/AdminPosts";

export const metadata = {
  title: "Admin Posts | Nasua",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <AdminPosts />;
}
