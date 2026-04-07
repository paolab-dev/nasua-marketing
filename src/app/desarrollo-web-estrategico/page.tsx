import type { Metadata } from "next";
import InfraestructuraDigital from "@/views/InfraestructuraDigital";

export const metadata: Metadata = {
  title: "Desarrollo Web Estratégico | La Base de tu Presencia Digital",
  description:
    "Construimos la base sólida de tu presencia digital. Transforma tu web en un activo propio que nadie te puede quitar. Ingeniería y estrategia con Nasua.",
  alternates: { canonical: "https://nasua.marketing/desarrollo-web-estrategico" },
  openGraph: {
    title: "Desarrollo Web Estratégico | La Base de tu Presencia Digital",
    description:
      "Construimos la base sólida de tu presencia digital. Transforma tu web en un activo propio que nadie te puede quitar. Ingeniería y estrategia con Nasua.",
    url: "https://nasua.marketing/desarrollo-web-estrategico",
    images: [{ url: "https://nasua.marketing/og-infraestructura.jpg" }],
  },
};

export default function Page() {
  return <InfraestructuraDigital />;
}
