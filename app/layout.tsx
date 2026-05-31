import type { Metadata } from "next";
import { Inter, Lexend } from "next/font/google";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Alder & Stone Renovations | Premium Home Renovations Cheshire",
  description:
    "Demo website concept for a premium Cheshire renovation company specialising in kitchens, bathrooms, refurbishments and garage conversions.",
  keywords: [
    "home renovations Cheshire",
    "kitchen renovations Cheshire",
    "bathroom fitting Cheshire",
    "property refurbishment",
    "garage conversions",
    "local renovation company",
    "premium trades website",
    "VCUK Web Services demo",
  ],
  openGraph: {
    title: "Alder & Stone Renovations | Premium Home Renovations Cheshire",
    description:
      "Demo website concept for a premium Cheshire renovation company specialising in kitchens, bathrooms, refurbishments and garage conversions.",
    url: siteConfig.url,
    siteName: "Alder & Stone Renovations Demo",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en-GB">
      <body className={`${inter.variable} ${lexend.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
