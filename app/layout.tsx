import type { Metadata } from "next";
import { Manrope, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import ScrollToTop from "@/components/ScrollToTop";
import { ToastProvider } from "@/components/ToastProvider";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { generatePersonSchema, generateLegalServiceSchema } from "./schema";

const manrope = Manrope({ 
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin", "cyrillic"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Адвокат Анатолій Сарнавський | Захист по економічним злочинам",
  description: "Професійний захист по економічним злочинам. Досвід роботи зі слідчими, прокуратурою, СБУ, ДБР. Фокус на будівництві та держзакупівлях. Оперативно. Конфіденційно. Ефективно.",
  keywords: "адвокат, економічні злочини, захист, обшук, допит, стаття 191, будівництво, тендери",
  authors: [{ name: "Анатолій Сарнавський" }],
  openGraph: {
    title: "Адвокат Анатолій Сарнавський",
    description: "Професійний захист по економічним злочинам",
    type: "website",
    locale: "uk_UA",
    siteName: "Адвокат Анатолій Сарнавський",
  },
  twitter: {
    card: "summary_large_image",
    title: "Адвокат Анатолій Сарнавський",
    description: "Професійний захист по економічним злочинам",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = generatePersonSchema();
  const legalServiceSchema = generateLegalServiceSchema();

  return (
    <html lang="uk" className={`${manrope.variable} ${cormorant.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <LanguageProvider>
          <ToastProvider>
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
            <FloatingCTA />
            <ScrollToTop />
          </ToastProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}

