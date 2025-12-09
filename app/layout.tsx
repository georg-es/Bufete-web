import type React from "react"
import type { Metadata } from "next"
// <CHANGE> Added Playfair Display serif font for elegant headings
import { Geist, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Image from "next/image"

const geistSans = Geist({ subsets: ["latin"] })
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  // <CHANGE> Updated metadata for law firm
  title: "GB Legal's | Abogados Expertos",
  description:
    "Firma de abogados con amplia experiencia en derecho civil, penal, laboral, familiar y corporativo. Consulta gratuita disponible.",
  generator: "v0.app",
  icons: {
    icon: "/images/logo1.png", 
    apple: "/images/LOGO.png", 
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // <CHANGE> Added serif font variable
    <html lang="es">
      <body className={`${geistSans.className} ${playfair.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
