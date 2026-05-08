import type { Metadata } from "next"
import "./globals.css"
import Navbar from "./components/Navbar"

export const metadata: Metadata = {
  title: "Amani Technologies — Conseil en transformation numérique en Afrique",
  description:
    "Amani Technologies accompagne les banques, institutions publiques et entreprises africaines dans la transformation de leurs systèmes d'information : architecture SI, data & BI, cybersécurité.",
  keywords: ["transformation numérique", "Afrique", "conseil IT", "Business Intelligence", "cybersécurité", "architecture SI"],
  openGraph: {
    title: "Amani Technologies",
    description: "Cabinet de conseil en transformation numérique — Afrique subsaharienne",
    url: "https://amani-technologies.com",
    siteName: "Amani Technologies",
    locale: "fr_FR",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
