import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["700", "600", "400"],
  subsets: ["latin"],
  style: ["normal"],
});

export const metadata: Metadata = {
  title: "Movies",
  description: "List movies from tvmaze.api",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen bg-grey-900 bg-repeat bg-default bg-[length:100%_auto] font-poppins selection:bg-grey-50 selection:text-black pb-9 ${poppins.className}`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
