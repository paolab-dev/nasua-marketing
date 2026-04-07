import AdminJobs from "@/views/admin/AdminJobs";

export const metadata = {
  title: "Admin Vacantes | Nasua",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <AdminJobs />;
}
