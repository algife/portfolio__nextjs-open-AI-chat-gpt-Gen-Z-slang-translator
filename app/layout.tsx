import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZLinguist | Gen-Z slang translator for marketing teams.",
  description:
    "Targeting a Gen-Z audience? Flex with your marketing game by matching their talk and vibing with their squad 💬🚀 #YoLo.",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <section className="background-radial-gradient mb-40 overflow-hidden">
          <Navbar />
          {children}
        </section>
      </body>
    </html>
  );
}
