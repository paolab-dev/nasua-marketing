import type { Metadata } from "next";
import AdnNasua from "@/views/AdnNasua";

export const metadata: Metadata = {
  title: "ADN y Metodología Nasua | Ingeniería de Crecimiento Digital",
  description:
    "Conoce el ADN de Nasua. Unimos ingeniería de software y lógica de negocio para crear activos soberanos y rentables. Sin humo, solo resultados técnicos.",
  alternates: { canonical: "https://nasua.marketing/adn-nasua" },
  openGraph: {
    title: "ADN y Metodología Nasua | Ingeniería de Crecimiento Digital",
    description:
      "Conoce el ADN de Nasua. Unimos ingeniería de software y lógica de negocio para crear activos soberanos y rentables. Sin humo, solo resultados técnicos.",
    url: "https://nasua.marketing/adn-nasua",
    images: [{ url: "https://nasua.marketing/ADNNasua.jpg" }],
  },
};

export default function Page() {
  return <AdnNasua />;
}
