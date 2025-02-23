import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/common/navbar";
import { comfortaa } from "@/config/globals";
import Footer from "@/components/common/footer";
import { Toaster } from "@/components/ui/toaster";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title:
    "Lily Buds Daycare - A Safe And Nurturing Environment For Your Little Ones",
  description: "A Safe And Nurturing Environment For Your Little Ones",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${comfortaa.className} bg-customColor`}>
        <Navbar/>
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
