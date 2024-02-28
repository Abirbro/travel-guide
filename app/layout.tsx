import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "TravelApp",
  description: "Travel UI/UX App for Camping",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {" "}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
