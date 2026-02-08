import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ChatWidget from "@/components/ChatWidget";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Informática IAZ | Soluciones Informáticas",
    template: "%s | Informática IAZ",
  },
  description: "Servicios integrales de informática: Software a medida, desarrollo web y soporte técnico.",
  metadataBase: new URL("https://informaticaiaz.com"), // Replace with actual domain later
  openGraph: {
    title: "Informática IAZ | Soluciones Informáticas",
    description: "Servicios integrales de informática: Software a medida, desarrollo web y soporte técnico.",
    url: "https://informaticaiaz.com",
    siteName: "Informática IAZ",
    images: [
      {
        url: "/logo.png", // Assuming logo.png is suitable for OG
        width: 800,
        height: 600,
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Informática IAZ",
    description: "Soluciones tecnológicas integrales.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground selection:bg-primary selection:text-white flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <ChatWidget />
      </body>
    </html>
  );
}
