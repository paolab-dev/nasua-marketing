import type { Metadata } from "next";
import { createClient } from "@supabase/supabase-js";
import JobDetail from "@/views/JobDetail";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const { data: job } = await supabase
    .from("jobs")
    .select("title, short_description")
    .eq("slug", slug)
    .single();

  if (!job) {
    return { title: "Vacante no encontrada | Nasua" };
  }

  return {
    title: `${job.title} | Vacantes Nasua`,
    description: job.short_description || undefined,
    alternates: {
      canonical: `https://nasua.marketing/vacantes/${slug}`,
    },
    openGraph: {
      title: `${job.title} | Vacantes Nasua`,
      description: job.short_description || undefined,
      url: `https://nasua.marketing/vacantes/${slug}`,
    },
  };
}

export default function Page() {
  return <JobDetail />;
}
