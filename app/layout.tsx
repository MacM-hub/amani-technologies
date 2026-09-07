import type { Metadata } from "next"
import "./globals.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export const metadata: Metadata = {
  metadataBase: new URL("https://amani-technologies.com"),
  title: "Amani Technologies — IA, cybersécurité & systèmes d'information en Afrique",
  description:
    "Amani Technologies accompagne les institutions publiques, les PME et les organisations financières d'Afrique francophone : formations IA et cybersécurité, diagnostic, POC, intégration et accompagnement des équipes.",
  keywords: ["IA", "intelligence artificielle", "cybersécurité", "Afrique francophone", "Sénégal", "conseil IT", "Business Intelligence", "architecture SI", "formation IA"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Amani Technologies",
    description: "IA, cybersécurité et systèmes d'information — Afrique francophone",
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
        <Footer />
      </body>
    </html>
  )
}
