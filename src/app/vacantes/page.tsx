import type { Metadata } from "next";
import Jobs from "@/views/Jobs";

export const metadata: Metadata = {
  title: "Vacantes | Nasua Marketing",
  description:
    "Proyectos y oportunidades de colaboración en Nasua Marketing. Únete a nuestro equipo de expertos en growth, diseño y desarrollo web.",
  alternates: { canonical: "https://nasua.marketing/vacantes" },
  openGraph: {
    title: "Vacantes | Nasua Marketing",
    description:
      "Proyectos y oportunidades de colaboración en Nasua Marketing. Únete a nuestro equipo de expertos en growth, diseño y desarrollo web.",
    url: "https://nasua.marketing/vacantes",
    images: [{ url: "https://nasua.marketing/og-vacantes.jpg" }],
  },
};

export default function Page() {
  return <Jobs />;
}
