import "./globals.css";
import { Inter, Outfit } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-body", 
  weight: ["300", "400", "500", "600"] 
});

const outfit = Outfit({ 
  subsets: ["latin"], 
  variable: "--font-heading", 
  weight: ["300", "400", "500", "600", "700"] 
});

export const metadata = {
  title: "Dr. Mrinalini Atrey | Portfolio",
  description: "Academic portfolio, research, and insights.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className={`${inter.variable} ${outfit.variable}`}>
        <div className="bg-orbs"></div>
        <Navbar />
        <ScrollReveal />
        {children}
        <Footer />
        <GoogleAnalytics gaId="G-0PTY2P47K2" />
      </body>
    </html>
  );
}
