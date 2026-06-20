import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ChatWidget from "@/components/ChatWidget";
import { Toaster } from "react-hot-toast";
import { Analytics } from '@vercel/analytics/react';
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
    default: "Informática IAZ | Desarrollo Web y Soporte Técnico",
    template: "%s | Informática IAZ",
  },
  description: "Especialistas en desarrollo de sistemas a medida, páginas web profesionales y soporte técnico IT para empresas y pymes. Incrementa la productividad de tu negocio hoy.",
  metadataBase: new URL("https://informaticaiaz.com"),
  keywords: ["soporte técnico", "desarrollo web", "sistemas de gestión", "mantenimiento informático", "software a medida para pymes"],
  openGraph: {
    title: "Informática IAZ | Transformación Digital y Soporte Técnico",
    description: "Impulsa tu negocio con sistemas de gestión a medida y diseño web premium. Soporte técnico rápido y confiable.",
    url: "https://informaticaiaz.com",
    siteName: "Informática IAZ",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Informática IAZ - Soluciones Tecnológicas",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Informática IAZ | Expertos en Tecnología",
    description: "Sistemas a medida, páginas web de alto impacto y soporte técnico profesional.",
    images: ["/logo.png"],
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
    
    <Toaster 
      position="bottom-center"
      toastOptions={{
        style: {
          background: '#0f172a',
          color: '#fff',
          border: '1px solid #1e293b',
        },
        success: {
          iconTheme: {
            primary: '#22c55e',
            secondary: '#fff',
          },
        },
      }} 
    />
    <Analytics />
  </body>
</html>
  );
}
