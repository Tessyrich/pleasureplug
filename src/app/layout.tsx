import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Instrument_Serif, Manrope } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/CartProvider";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { AgeGate } from "@/components/AgeGate";
import { WhatsAppFab } from "@/components/WhatsAppFab";

const bricolage = Bricolage_Grotesque({ variable: "--font-bricolage", subsets: ["latin"] });
const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Pleasure Plug — Toys, tips & real talk",
    template: "%s · Pleasure Plug",
  },
  description:
    "Nigeria's plug for sex toys, intimacy tips and honest talk about pleasure. Discreet packaging, delivery within minutes in Lagos, Abuja, PH & more. Order on WhatsApp.",
};

export const viewport: Viewport = {
  themeColor: "#0c0609",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bricolage.variable} ${instrument.variable} ${manrope.variable} antialiased`}>
      <body className="grain min-h-screen flex flex-col">
        <CartProvider>
          <AgeGate />
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
          <WhatsAppFab />
        </CartProvider>
      </body>
    </html>
  );
}
