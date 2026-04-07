import type { Metadata } from "next";
import Branding from "@/views/Branding";

export const metadata: Metadata = {
  title: "Branding & Autoridad | Identidad Visual Estratégica para Negocios",
  description:
    "No diseñamos logos, construimos la autoridad que tu empresa necesita para cerrar contratos internacionales. Identidad visual estratégica con el sello Nasua.",
  alternates: { canonical: "https://nasua.marketing/branding" },
  openGraph: {
    title: "Branding & Autoridad | Identidad Visual Estratégica para Negocios",
    description:
      "No diseñamos logos, construimos la autoridad que tu empresa necesita para cerrar contratos internacionales. Identidad visual estratégica con el sello Nasua.",
    url: "https://nasua.marketing/branding",
    images: [{ url: "https://nasua.marketing/og-branding.jpg" }],
  },
};

export default function Page() {
  return <Branding />;
}
