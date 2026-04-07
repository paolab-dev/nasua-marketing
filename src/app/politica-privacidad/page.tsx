import type { Metadata } from "next";
import PoliticaPrivacidad from "@/views/PoliticaPrivacidad";

export const metadata: Metadata = {
  title: "Política de Privacidad | Nasua Marketing",
  description: "Consulta la política de privacidad y tratamiento de datos personales de Nasua Marketing.",
  alternates: { canonical: "https://nasua.marketing/politica-privacidad" },
};

export default function Page() {
  return <PoliticaPrivacidad />;
}
