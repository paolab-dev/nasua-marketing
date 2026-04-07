import type { Metadata } from "next";
import SeoGeo from "@/views/SeoGeo";

export const metadata: Metadata = {
  title: "SEO & Visibilidad IA (GEO) | El Activo Más Rentable de tu Negocio",
  description:
    "No solo aparezcas en Google, sé la respuesta de la IA. Descubre cómo el SEO + Pauta construye autoridad soberana y rentabilidad a largo plazo con Nasua.",
  alternates: { canonical: "https://nasua.marketing/seo-geo" },
  openGraph: {
    title: "SEO & Visibilidad IA (GEO) | El Activo Más Rentable de tu Negocio",
    description:
      "No solo aparezcas en Google, sé la respuesta de la IA. Descubre cómo el SEO + Pauta construye autoridad soberana y rentabilidad a largo plazo con Nasua.",
    url: "https://nasua.marketing/seo-geo",
    images: [{ url: "https://nasua.marketing/og-seo.jpg" }],
  },
};

export default function Page() {
  return <SeoGeo />;
}
