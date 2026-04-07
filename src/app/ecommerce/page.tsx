import type { Metadata } from "next";
import Ecommerce from "@/views/Ecommerce";

export const metadata: Metadata = {
  title: "E-commerce Escalable | Ecosistemas de Venta de Alto Rendimiento",
  description:
    "Construimos infraestructuras de venta integradas con tu logística. Toma el control de tus datos y escala tu e-commerce sin comisiones por cada venta.",
  alternates: { canonical: "https://nasua.marketing/ecommerce" },
  openGraph: {
    title: "E-commerce Escalable | Ecosistemas de Venta de Alto Rendimiento",
    description:
      "Construimos infraestructuras de venta integradas con tu logística. Toma el control de tus datos y escala tu e-commerce sin comisiones por cada venta.",
    url: "https://nasua.marketing/ecommerce",
    images: [{ url: "https://nasua.marketing/og-ecommerce.jpg" }],
  },
};

export default function Page() {
  return <Ecommerce />;
}
