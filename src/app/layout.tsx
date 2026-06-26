import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Moonlight Network",
  description: "Il server Minecraft di civiltà roleplay medievale. Unisciti all'avventura su moonlightnetwork.gamehosting.it",
  openGraph: {
    title: "Moonlight Network",
    description: "Il server Minecraft di civiltà roleplay medievale.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
