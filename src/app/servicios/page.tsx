import type { Metadata } from "next";
import Servicios from "@/views/Servicios";

export const metadata: Metadata = {
  title: "Soluciones Estratégicas para Escalar tu Facturación | Nasua",
  description:
    "Conoce nuestros servicios diseñados para potenciar tu marca y acelerar tus ventas. Soluciones de marketing digital directo y efectivo con Nasua.",
  alternates: { canonical: "https://nasua.marketing/servicios" },
  openGraph: {
    title: "Soluciones Estratégicas para Escalar tu Facturación | Nasua",
    description:
      "Conoce nuestros servicios diseñados para potenciar tu marca y acelerar tus ventas. Soluciones de marketing digital directo y efectivo con Nasua.",
    url: "https://nasua.marketing/servicios",
    images: [{ url: "https://nasua.marketing/og-servicios.jpg" }],
  },
};

export default function Page() {
  return <Servicios />;
}
