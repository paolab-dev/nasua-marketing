import type { Metadata } from "next";
import Contacto from "@/views/Contacto";

export const metadata: Metadata = {
  title: "Contacto | Nasua Marketing | Agencia de Growth y WordPress",
  description:
    "¿Listo para escalar tu negocio? Contacta a Nasua Marketing. Expertos en SEO, Ads, UX/UI y Desarrollo Web en Colombia.",
  alternates: { canonical: "https://nasua.marketing/contacto" },
  openGraph: {
    title: "Contacto | Nasua Marketing | Agencia de Growth y WordPress",
    description:
      "¿Listo para escalar tu negocio? Contacta a Nasua Marketing. Expertos en SEO, Ads, UX/UI y Desarrollo Web en Colombia.",
    url: "https://nasua.marketing/contacto",
    images: [{ url: "https://nasua.marketing/og-contacto.jpg" }],
  },
};

export default function Page() {
  return <Contacto />;
}
