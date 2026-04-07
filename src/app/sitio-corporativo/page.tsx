import type { Metadata } from "next";
import SitioCorporativo from "@/views/SitioCorporativo";

export const metadata: Metadata = {
  title: "Sitio Corporativo | Presencia Web Profesional | Nasua",
  description:
    "Diseñamos tu sitio corporativo con estrategia de conversión. Web profesional, rápida y optimizada para posicionar tu empresa y generar confianza.",
  alternates: { canonical: "https://nasua.marketing/sitio-corporativo" },
  openGraph: {
    title: "Sitio Corporativo | Presencia Web Profesional | Nasua",
    description:
      "Diseñamos tu sitio corporativo con estrategia de conversión. Web profesional, rápida y optimizada para posicionar tu empresa y generar confianza.",
    url: "https://nasua.marketing/sitio-corporativo",
    images: [{ url: "https://nasua.marketing/og-sitio-corporativo.jpg" }],
  },
};

export default function Page() {
  return <SitioCorporativo />;
}
