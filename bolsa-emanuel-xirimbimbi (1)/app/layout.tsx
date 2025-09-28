import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Bolsa de Estudos Emanuel Xirimbimbi",
  description:
    "Uma iniciativa filantrópica que visa apoiar jovens angolanos talentosos em sua jornada educacional, oferecendo oportunidades de ensino superior de qualidade.",
  keywords: "bolsa de estudos, Angola, educação, ensino superior, jovens angolanos",
  authors: [{ name: "Emanuel Xirimbimbi" }],
  openGraph: {
    title: "Bolsa de Estudos Emanuel Xirimbimbi",
    description: "Transforme seu futuro com oportunidades educacionais de qualidade para jovens angolanos.",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" className={`${inter.className} antialiased`}>
      <body className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
