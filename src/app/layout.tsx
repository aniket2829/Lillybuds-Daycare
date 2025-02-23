import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

// Move the font loader call to the module scope, outside of the Layout component
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title:
    "Lily Buds Daycare - A Safe and Nurturing environment for you little ones",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang="en" className={poppins.variable}>
        <body>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </>
  );
}
