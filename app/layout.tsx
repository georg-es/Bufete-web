import type React from "react"
import type { Metadata } from "next"
// <CHANGE> Added Playfair Display serif font for elegant headings
import { Geist, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geistSans = Geist({ subsets: ["latin"] })
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  // <CHANGE> Updated metadata for law firm
  title: "Bufete Jurídico Profesional | Abogados Expertos",
  description:
    "Firma de abogados con amplia experiencia en derecho civil, penal, laboral, familiar y corporativo. Consulta gratuita disponible.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
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
