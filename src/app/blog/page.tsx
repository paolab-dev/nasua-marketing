import type { Metadata } from "next";
import Blog from "@/views/Blog";

export const metadata: Metadata = {
  title: "Blog | Nasua Marketing",
  description:
    "Artículos, guías y recursos de marketing digital, SEO, desarrollo web y crecimiento empresarial del equipo Nasua.",
  alternates: { canonical: "https://nasua.marketing/blog" },
  openGraph: {
    title: "Blog | Nasua Marketing",
    description:
      "Artículos, guías y recursos de marketing digital, SEO, desarrollo web y crecimiento empresarial del equipo Nasua.",
    url: "https://nasua.marketing/blog",
    images: [{ url: "https://nasua.marketing/og-blog.jpg" }],
  },
};

export default function Page() {
  return <Blog />;
}
