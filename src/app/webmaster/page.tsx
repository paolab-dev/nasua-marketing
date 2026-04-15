import type { Metadata } from "next";
import Webmaster from "@/views/Webmaster";

export const metadata: Metadata = {
  title: "Webmaster y Continuidad Digital: Tu Web Siempre Operativa | Nasua",
  description:
    "Protege y optimiza tu entorno digital. Con el servicio de Webmaster de Nasua, aseguramos que tu sitio sea rápido, seguro y esté siempre listo para vender.",
  alternates: { canonical: "https://nasua.marketing/webmaster" },
  openGraph: {
    title: "Webmaster y Continuidad Digital: Tu Web Siempre Operativa | Nasua",
    description:
      "Protege y optimiza tu entorno digital. Con el servicio de Webmaster de Nasua, aseguramos que tu sitio sea rápido, seguro y esté siempre listo para vender.",
    url: "https://nasua.marketing/webmaster",
    images: [{ url: "https://nasua.marketing/og-webmaster.jpg" }],
  },
};

export default function Page() {
  return <Webmaster />;
}
