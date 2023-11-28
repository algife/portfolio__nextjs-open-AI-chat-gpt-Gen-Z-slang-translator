import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Z-Linguist | Gen-Z slang translator for marketing teams.",
  description:
    "Targeting a Gen-Z audience? Flex with your marketing game by matching their talk and vibing with their squad 💬🚀 #YoLo.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
