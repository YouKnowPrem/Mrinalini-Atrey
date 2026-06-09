import "../globals.css";
import { Inter, Outfit } from "next/font/google";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollReveal from "../../components/ScrollReveal";
import DelayedAnalytics from "@/components/DelayedAnalytics";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-body", 
  weight: ["300", "400", "500", "600"],
  display: "swap"
});

const outfit = Outfit({ 
  subsets: ["latin"], 
  variable: "--font-heading", 
  weight: ["300", "400", "500", "600", "700"],
  display: "swap"
});

export const metadata = {
  title: "Dr. Mrinalini Atrey | Portfolio",
  description: "Academic portfolio, research, and insights.",
};

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link 
          id="fa-css"
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
          media="print" 
        />
        <script dangerouslySetInnerHTML={{ __html: `var link=document.getElementById('fa-css'); if(link.sheet) { link.media='all'; } else { link.onload=function(){ this.media='all'; } }` }} />
        <noscript>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        </noscript>
      </head>
      <body className={`${inter.variable} ${outfit.variable}`}>
        <div className="bg-orbs">
          <Image
            src="/bahufort-optimized.webp"
            alt="Background"
            fill
            priority
            sizes="100vw"
            style={{
              objectFit: "cover",
              objectPosition: "center",
              zIndex: -2,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "linear-gradient(135deg, rgba(251, 207, 232, 0.8), rgba(233, 213, 255, 0.8), rgba(255, 237, 213, 0.8))",
              zIndex: -1,
            }}
          />
        </div>
        <Navbar />
        <ScrollReveal />
        {children}
        <Footer />
        <DelayedAnalytics />
      </body>
    </html>
  );
}
