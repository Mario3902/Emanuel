"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, GraduationCap } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Sobre", href: "/sobre" },
  { name: "Oportunidades", href: "/oportunidades" },
  { name: "Bolsas Nacionais", href: "/bolsas-nacionais" },
  { name: "Bolsas Internacionais", href: "/bolsas-internacionais" },
  { name: "Inscrição", href: "/inscricao" },
  { name: "Histórias de Sucesso", href: "/historias-sucesso" },
  { name: "FAQ", href: "/faq" },
  { name: "Contato", href: "/contato" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
              <GraduationCap className="h-8 w-8" />
              <span className="text-xl font-bold hidden sm:block">Bolsa Emanuel Xirimbimbi</span>
              <span className="text-lg font-bold sm:hidden">Emanuel Xirimbimbi</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex lg:items-center">
            <Button
              asChild
              className="bg-green-600 hover:bg-green-700 text-white shadow-md hover:shadow-lg transition-all"
            >
              <Link href="/inscricao">Candidate-se Agora</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-blue-600 p-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="space-y-1 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <Link href="/inscricao" onClick={() => setMobileMenuOpen(false)}>
                    Candidate-se Agora
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
