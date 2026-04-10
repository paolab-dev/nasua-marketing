import type { Metadata } from "next";
import Script from "next/script";
import "@/index.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Providers } from "./providers";

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nasua",
  url: "https://nasua.marketing",
  logo: "https://nasua.marketing/nasua-logo.jpg",
  description:
    "Socios de Crecimiento Digital. Diseñamos sistemas de ventas con soberanía digital para escalar la facturación de tu empresa.",
  sameAs: [],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://nasua.marketing"),
  title: {
    default: "Nasua | Socios de Crecimiento Digital",
    template: "%s | Nasua",
  },
  description:
    "Socios de Crecimiento Digital. Diseñamos sistemas de ventas con soberanía digital para escalar la facturación de tu empresa.",
  openGraph: {
    siteName: "Nasua",
    type: "website",
    locale: "es_CO",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Providers>
          <ScrollToTop />
          <Navbar />
          {children}
          <Footer />
        </Providers>

        <Script
          id="org-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-V3LWZ351PP"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-V3LWZ351PP');`}
        </Script>
      </body>
    </html>
  );
}
