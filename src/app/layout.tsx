import type { Metadata } from "next";
import { Nunito, Inter } from "next/font/google";
import "./globals.css";
import WhatsAppWidget from "@/components/shared/WhatsAppWidget";

const nunito = Nunito({
  variable: "--font-nunito-var",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter-var",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muskaan Child Development Center | Growing Skills. Growing Confidence.",
  description:
    "Muskaan Child Development Center offers personalized special education, school readiness, NIOS guidance, vocational skills, and life skills programs to help every child grow into an independent and confident adult.",
  keywords: [
    "child development center",
    "special education",
    "NIOS guidance",
    "school readiness",
    "vocational skills",
    "autism therapy",
    "inclusive education",
    "Muskaan CDC",
  ],
  openGraph: {
    title: "Muskaan Child Development Center",
    description: "Growing Skills. Growing Confidence.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        {children}
        <WhatsAppWidget />
      </body>
    </html>
  );
}
