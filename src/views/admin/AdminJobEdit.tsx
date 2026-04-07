"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { supabase } from "@/lib/supabase";
import type { Job } from "@/lib/types";
import JobForm from "@/components/admin/JobForm";

const AdminJobEdit = () => {
  const { id } = useParams<{ id: string }>();
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await supabase.from("jobs").select("*").eq("id", id).single();
      setJob(data);
      setLoading(false);
    };
    fetch();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <div className="animate-spin h-8 w-8 border-4 border-secondary border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!job) return <p className="text-muted-foreground">Vacante no encontrada.</p>;

  return (
    <div>
      <h1 className="text-2xl font-display font-bold text-foreground mb-6">Editar Vacante</h1>
      <JobForm initialData={job} />
    </div>
  );
};

export default AdminJobEdit;

