import type { Metadata } from "next";
import Copywriting from "@/views/Copywriting";

export const metadata: Metadata = {
  title: "Copywriting Estratégico | Textos que Convierten Clics en Ventas",
  description:
    "No escribimos palabras, diseñamos argumentos de venta. Descubre el Copywriting Estratégico de Nasua: psicología aplicada para escalar tu facturación.",
  alternates: { canonical: "https://nasua.marketing/copywriting" },
  openGraph: {
    title: "Copywriting Estratégico | Textos que Convierten Clics en Ventas",
    description:
      "No escribimos palabras, diseñamos argumentos de venta. Descubre el Copywriting Estratégico de Nasua: psicología aplicada para escalar tu facturación.",
    url: "https://nasua.marketing/copywriting",
    images: [{ url: "https://nasua.marketing/og-copywriting.jpg" }],
  },
};

export default function Page() {
  return <Copywriting />;
}
