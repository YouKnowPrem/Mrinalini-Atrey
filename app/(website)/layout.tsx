import "../globals.css";
import { Inter, Outfit } from "next/font/google";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollReveal from "../../components/ScrollReveal";
import DelayedAnalytics from "@/components/DelayedAnalytics";
import FontAwesomeLoader from "../../components/FontAwesomeLoader";

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

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable}`}>
        <FontAwesomeLoader />
        <div className="bg-orbs"></div>
        <Navbar />
        <ScrollReveal />
        {children}
        <Footer />
        <DelayedAnalytics />
      </body>
    </html>
  );
}
