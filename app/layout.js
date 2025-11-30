import { Inter, Amiri, Pacifico } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin"],
  weight: "400",
});
const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title:
    "Equity Edge | Independent Equity Research for Small & Micro-Cap Stocks",
  description:
    "Gain a competitive edge with Equity Edge. We provide in-depth, unbiased equity research, focusing on small-cap and micro-cap companies to help serious investors make smarter decisions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${amiri.variable}  ${pacifico.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
