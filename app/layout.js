import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollButton";

const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const DM = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-DM",
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | Blackmeetsworld",
    default: "Home | Blackmeetsworld",
  },
  description: "Blackmeetsworld Landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${DM.variable}`}>
      <body className="inter bg-black text-white scroll-smooth">
        <Navbar />
        {children}
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
