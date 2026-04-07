import type { Metadata } from "next";
import QuienesSomos from "@/views/QuienesSomos";

export const metadata: Metadata = {
  title: "Quiénes Somos | Nasua Marketing | Expertos en Growth y Web",
  description:
    "Conoce al equipo multidisciplinario de Nasua. Unimos marketing, diseño UX/UI y desarrollo web para impulsar negocios sostenibles y rentables. ¡Conócenos!",
  alternates: { canonical: "https://nasua.marketing/quienes-somos" },
  openGraph: {
    title: "Quiénes Somos | Nasua Marketing | Expertos en Growth y Web",
    description:
      "Conoce al equipo multidisciplinario de Nasua. Unimos marketing, diseño UX/UI y desarrollo web para impulsar negocios sostenibles y rentables. ¡Conócenos!",
    url: "https://nasua.marketing/quienes-somos",
    images: [{ url: "https://nasua.marketing/og-quienes-somos.jpg" }],
  },
};

export default function Page() {
  return <QuienesSomos />;
}
