import type { Metadata } from "next";
import TerminosCondiciones from "@/views/TerminosCondiciones";

export const metadata: Metadata = {
  title: "Términos y Condiciones | Nasua Marketing",
  description: "Consulta los términos y condiciones de uso de los servicios de Nasua Marketing.",
  alternates: { canonical: "https://nasua.marketing/terminos-condiciones" },
};

export default function Page() {
  return <TerminosCondiciones />;
}
