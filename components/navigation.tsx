"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/sobre-nosotros", label: "Sobre Nosotros" },
    { href: "/areas-de-practica", label: "Áreas de Práctica" },
    { href: "/contacto", label: "Contacto" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-accent">
              <span className="font-serif text-2xl font-bold text-accent-foreground">J</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-serif text-xl font-bold">Bufete Jurídico</div>
              <div className="text-xs text-primary-foreground/80">Expertos en Derecho</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild variant="secondary" size="sm" className="gap-2">
              <Link href="/contacto">
                <Phone className="h-4 w-4" />
                Consulta Gratuita
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-primary-foreground/10 md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-md px-3 py-2 text-base font-medium hover:bg-primary-foreground/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild variant="secondary" className="mt-2 w-full gap-2">
              <Link href="/contacto" onClick={() => setMobileMenuOpen(false)}>
                <Phone className="h-4 w-4" />
                Consulta Gratuita
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
