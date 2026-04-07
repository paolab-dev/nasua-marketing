import type { Metadata } from "next";
import Automatizacion from "@/views/Automatizacion";

export const metadata: Metadata = {
  title: "Automatización Operativa | Eficiencia y Cierre de Ventas en Nasua",
  description:
    "Optimiza tu proceso comercial con automatización operativa. Implementamos sistemas de seguimiento y CRM para que tu equipo se enfoque en cerrar ventas con Nasua.",
  alternates: { canonical: "https://nasua.marketing/automatizacion" },
  openGraph: {
    title: "Automatización Operativa | Eficiencia y Cierre de Ventas en Nasua",
    description:
      "Optimiza tu proceso comercial con automatización operativa. Implementamos sistemas de seguimiento y CRM para que tu equipo se enfoque en cerrar ventas con Nasua.",
    url: "https://nasua.marketing/automatizacion",
    images: [{ url: "https://nasua.marketing/og-automatizacion.jpg" }],
  },
};

export default function Page() {
  return <Automatizacion />;
}
