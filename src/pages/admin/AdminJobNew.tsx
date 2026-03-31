import JobForm from "@/components/admin/JobForm";

const AdminJobNew = () => (
  <div>
    <h1 className="text-2xl font-display font-bold text-foreground mb-6">Nueva Vacante</h1>
    <JobForm />
  </div>
);

export default AdminJobNew;

export const prerender = false;
