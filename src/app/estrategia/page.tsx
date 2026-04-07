import type { Metadata } from "next";
import Estrategia from "@/views/Estrategia";

export const metadata: Metadata = {
  title: "Estrategia & Contenido Social Media | Autoridad Visual con Nasua",
  description:
    "No solo planeamos, ejecutamos. Estrategia de autoridad y producción audiovisual (foto y video) para convertir tus redes en canales de venta reales.",
  alternates: { canonical: "https://nasua.marketing/estrategia" },
  openGraph: {
    title: "Estrategia & Contenido Social Media | Autoridad Visual con Nasua",
    description:
      "No solo planeamos, ejecutamos. Estrategia de autoridad y producción audiovisual (foto y video) para convertir tus redes en canales de venta reales.",
    url: "https://nasua.marketing/estrategia",
    images: [{ url: "https://nasua.marketing/og-estrategia.jpg" }],
  },
};

export default function Page() {
  return <Estrategia />;
}
