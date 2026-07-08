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
    "Cabinet d'audit, d'expertise comptable et de conseil financier, spécialisé dans l'accompagnement des filiales internationales et des entreprises leaders en Afrique centrale.",
  keywords: [
    "audit Afrique centrale",
    "expertise comptable RDC",
    "cabinet conseil financier Kinshasa",
    "SYSCOHADA",
    "IFRS Afrique",
    "due diligence Afrique centrale",
    "contrôle interne",
    "corporate finance Congo",
    "Mashini Associés",
  ],
  authors: [{ name: "Mashini & Associés" }],
  openGraph: {
    type: "website",
    siteName: "Mashini & Associés",
    title: "Mashini & Associés — Intelligence financière. Confiance. Croissance.",
    description:
      "Cabinet d'audit, d'expertise comptable et de conseil financier accompagnant les filiales internationales et les entreprises leaders en Afrique centrale.",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Mashini & Associés" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mashini & Associés — Intelligence financière. Confiance. Croissance.",
    description:
      "Cabinet d'audit, d'expertise comptable et de conseil financier en Afrique centrale.",
    images: ["/og-default.png"],
  },
  icons: {
    icon: "/logo-icon.png",
    shortcut: "/logo-icon.png",
    apple: "/logo-icon.png",
  },
  alternates: {
    canonical: "/fr",
    languages: {
      fr: "/fr",
      en: "/en",
      zh: "/zh",
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Mashini & Associés",
  url: siteUrl,
  logo: {
    "@type": "ImageObject",
    url: `${siteUrl}/logo.png`,
  },
  description:
    "Cabinet d'audit, d'expertise comptable et de conseil financier spécialisé dans l'accompagnement des filiales internationales en Afrique centrale.",
  email: "joel.mashini@mashiniassocies.com",
  address: {
    "@type": "PostalAddress",
    addressCountry: "CD",
    addressLocality: "Kinshasa",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "joel.mashini@mashiniassocies.com",
    availableLanguage: ["French", "English", "Chinese"],
  },
  knowsAbout: [
    "Audit légal",
    "Expertise comptable",
    "SYSCOHADA",
    "IFRS",
    "Contrôle interne",
    "Corporate finance",
    "Due diligence",
    "Conseil financier",
  ],
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
      <body className="min-h-full flex flex-col">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
