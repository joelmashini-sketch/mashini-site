import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import { getLocale } from "next-intl/server";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const siteUrl = "https://www.mashini-associes.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mashini & Associés — Audit, Expertise Comptable & Conseil Financier",
    template: "%s | Mashini & Associés",
  },
  description:
    "Cabinet premium d'audit, d'expertise comptable et de conseil financier spécialisé dans l'accompagnement des filiales internationales en Afrique centrale.",
  keywords: [
    "audit Afrique centrale",
    "expertise comptable RDC",
    "cabinet conseil financier",
    "SYSCOHADA",
    "due diligence Afrique",
    "investment advisory",
  ],
  openGraph: {
    type: "website",
    siteName: "Mashini & Associés",
    title: "Mashini & Associés — Intelligence financière. Confiance. Croissance.",
    description:
      "Cabinet premium d'audit, d'expertise comptable et de conseil financier accompagnant les filiales internationales en Afrique centrale.",
  },
  alternates: {
    canonical: "/",
    languages: {
      fr: "/",
      en: "/en",
      zh: "/zh",
    },
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  return (
    <html
      lang={locale}
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
