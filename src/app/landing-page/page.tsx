import type { Metadata } from "next";
import LandingPage from "@/views/LandingPage";

export const metadata: Metadata = {
  title: "Landing Pages de Alta Conversión | Maximiza tu ROI con el equipo Nasua",
  description:
    "No pierdas dinero en anuncios. Diseñamos páginas de aterrizaje rápidas con Vibe Coding para convertir clics en facturación. Toma el control de tu pauta.",
  alternates: { canonical: "https://nasua.marketing/landing-page" },
  openGraph: {
    title: "Landing Pages de Alta Conversión | Maximiza tu ROI con el equipo Nasua",
    description:
      "No pierdas dinero en anuncios. Diseñamos páginas de aterrizaje rápidas con Vibe Coding para convertir clics en facturación. Toma el control de tu pauta.",
    url: "https://nasua.marketing/landing-page",
    images: [{ url: "https://nasua.marketing/og-landing.jpg" }],
  },
};

export default function Page() {
  return <LandingPage />;
}
