import type { Metadata } from "next";
import Index from "@/views/Index";

export const metadata: Metadata = {
  title: "Nasua | Socio de Crecimiento Digital para Escalar tu Facturación",
  description:
    "Deja de comprar páginas y construye activos rentables. Nasua es el equipo de expertos que diseña tu sistema de ventas con soberanía digital y resultados.",
  alternates: { canonical: "https://nasua.marketing" },
  openGraph: {
    title: "Nasua | Socio de Crecimiento Digital para Escalar tu Facturación",
    description:
      "Deja de comprar páginas y construye activos rentables. Nasua es el equipo de expertos que diseña tu sistema de ventas con soberanía digital y resultados.",
    url: "https://nasua.marketing",
    images: [{ url: "https://nasua.marketing/og-home.jpg" }],
  },
};

export default function Page() {
  return <Index />;
}
