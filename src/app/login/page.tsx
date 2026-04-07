import type { Metadata } from "next";
import Login from "@/views/Login";

export const metadata: Metadata = {
  title: "Iniciar Sesión | Nasua Admin",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <Login />;
}
