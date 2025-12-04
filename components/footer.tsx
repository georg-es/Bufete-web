import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-accent">
                <span className="font-serif text-xl font-bold text-accent-foreground">J</span>
              </div>
              <div className="font-serif text-lg font-bold">Bufete Jurídico</div>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Defendiendo sus derechos con experiencia, integridad y dedicación desde 1995.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-primary-foreground/80 hover:text-accent">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/sobre-nosotros" className="text-primary-foreground/80 hover:text-accent">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/areas-de-practica" className="text-primary-foreground/80 hover:text-accent">
                  Áreas de Práctica
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-primary-foreground/80 hover:text-accent">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 font-semibold">Contacto</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Av. Principal 123, Centro, Ciudad</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+52 (55) 1234-5678</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <span>info@bufetejuridico.com</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="mb-4 font-semibold">Síguenos</h3>
            <div className="flex gap-4">
              <a href="#" className="text-primary-foreground/80 hover:text-accent">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
            <div className="mt-6">
              <p className="text-xs text-primary-foreground/60">Horario: Lun-Vie 9:00-18:00</p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-primary-foreground/60 sm:flex-row">
            <p>&copy; 2025 Bufete Jurídico. Todos los derechos reservados.</p>
            <div className="flex gap-4">
              <Link href="/privacidad" className="hover:text-accent">
                Política de Privacidad
              </Link>
              <Link href="/terminos" className="hover:text-accent">
                Términos de Servicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
