import type { Metadata } from "next";
import PautaDigital from "@/views/PautaDigital";

export const metadata: Metadata = {
  title: "Pauta Digital & Performance | Maximiza tu ROI con el Equipo Nasua",
  description:
    "Optimizamos tu inversión en Google, Meta, TikTok y Pinterest Ads. Google Partners con 15 años de experiencia cuidando tu presupuesto y escalando tu ROI.",
  alternates: { canonical: "https://nasua.marketing/pauta-digital" },
  openGraph: {
    title: "Pauta Digital & Performance | Maximiza tu ROI con el Equipo Nasua",
    description:
      "Optimizamos tu inversión en Google, Meta, TikTok y Pinterest Ads. Google Partners con 15 años de experiencia cuidando tu presupuesto y escalando tu ROI.",
    url: "https://nasua.marketing/pauta-digital",
    images: [{ url: "https://nasua.marketing/og-pauta.jpg" }],
  },
};

export default function Page() {
  return <PautaDigital />;
}
