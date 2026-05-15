import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { AnimationLoader } from "@/components/AnimationLoader/AnimationLoader";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "700"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://averisoffers.com"),
  title: {
    default: "Averis | Customer Engagement & Performance Marketing",
    template: "%s | Averis"
  },
  description:
    "Averis helps brands improve customer communication, retention, and digital engagement through modern marketing technologies and data-driven strategies.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Averis | Customer Engagement & Performance Marketing",
    description:
      "Customer engagement and performance marketing agency focused on retention, automation, and digital growth.",
    url: "https://averisoffers.com",
    siteName: "Averis",
    type: "website",
    locale: "en_GB"
  },
  twitter: {
    card: "summary_large_image",
    title: "Averis | Customer Engagement & Performance Marketing",
    description:
      "Customer engagement and performance marketing agency focused on retention, automation, and digital growth."
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0d1a"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body suppressHydrationWarning>
        {children}
        <AnimationLoader />
      </body>
    </html>
  );
}
