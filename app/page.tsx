import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { FAQ } from "@/components/faq"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Scale,
  Shield,
  Users,
  FileText,
  Briefcase,
  Heart,
  CheckCircle,
  Phone,
  Award,
  Clock,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <>
      <Navigation />
      <WhatsAppButton />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-primary py-20 text-primary-foreground md:py-32">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="https://placehold.co/1920x800?text=Professional+law+office+interior+with+modern+furniture+and+legal+books+on+shelves+sophisticated+lighting"
              alt="Professional law office interior with modern furniture and legal books on shelves sophisticated lighting"
              className="h-full w-full object-cover opacity-20"
            />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-serif text-4xl font-bold leading-tight text-balance md:text-5xl lg:text-6xl">
                Defendiendo Sus Derechos con Experiencia y Dedicación
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90 md:text-xl text-pretty">
                Más de 25 años de experiencia legal brindando soluciones efectivas y personalizadas para nuestros
                clientes.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" variant="secondary" className="gap-2">
                  <Link href="/contacto">
                    <Phone className="h-5 w-5" />
                    Consulta Gratuita
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <Link href="/areas-de-practica">Áreas de Práctica</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-muted py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">25+</div>
                <div className="mt-2 text-sm text-muted-foreground">Años de Experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">2,500+</div>
                <div className="mt-2 text-sm text-muted-foreground">Casos Ganados</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">98%</div>
                <div className="mt-2 text-sm text-muted-foreground">Tasa de Éxito</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">15</div>
                <div className="mt-2 text-sm text-muted-foreground">Abogados Expertos</div>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Areas */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="font-serif text-3xl font-bold text-balance md:text-4xl">Áreas de Práctica</h2>
              <p className="mt-4 text-lg text-muted-foreground text-pretty">
                Ofrecemos servicios legales especializados en diversas áreas del derecho
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="border-2 transition-all hover:border-accent hover:shadow-lg">
                <CardContent className="p-6">
                  <Scale className="h-12 w-12 text-accent" />
                  <h3 className="mt-4 font-serif text-xl font-semibold">Derecho Civil</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Contratos, daños y perjuicios, responsabilidad civil y litigios comerciales.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 transition-all hover:border-accent hover:shadow-lg">
                <CardContent className="p-6">
                  <Shield className="h-12 w-12 text-accent" />
                  <h3 className="mt-4 font-serif text-xl font-semibold">Derecho Penal</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Defensa penal, delitos federales y estatales, apelaciones y recursos.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 transition-all hover:border-accent hover:shadow-lg">
                <CardContent className="p-6">
                  <Users className="h-12 w-12 text-accent" />
                  <h3 className="mt-4 font-serif text-xl font-semibold">Derecho Laboral</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Despidos injustificados, acoso laboral, indemnizaciones y conflictos colectivos.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 transition-all hover:border-accent hover:shadow-lg">
                <CardContent className="p-6">
                  <Heart className="h-12 w-12 text-accent" />
                  <h3 className="mt-4 font-serif text-xl font-semibold">Derecho de Familia</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Divorcios, custodia de menores, pensiones alimenticias y adopciones.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 transition-all hover:border-accent hover:shadow-lg">
                <CardContent className="p-6">
                  <Briefcase className="h-12 w-12 text-accent" />
                  <h3 className="mt-4 font-serif text-xl font-semibold">Derecho Corporativo</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Constitución de empresas, fusiones, adquisiciones y cumplimiento normativo.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 transition-all hover:border-accent hover:shadow-lg">
                <CardContent className="p-6">
                  <FileText className="h-12 w-12 text-accent" />
                  <h3 className="mt-4 font-serif text-xl font-semibold">Propiedad Intelectual</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Marcas, patentes, derechos de autor y protección de activos intangibles.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Button asChild size="lg" variant="outline">
                <Link href="/areas-de-practica">Ver Todas las Áreas</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-muted py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="font-serif text-3xl font-bold text-balance md:text-4xl">¿Por Qué Elegirnos?</h2>
              <p className="mt-4 text-lg text-muted-foreground text-pretty">
                Nos distinguimos por nuestro compromiso con la excelencia y resultados
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <h3 className="mt-4 font-semibold">Experiencia Comprobada</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Más de 25 años de trayectoria exitosa defendiendo a nuestros clientes.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                  <CheckCircle className="h-8 w-8 text-accent" />
                </div>
                <h3 className="mt-4 font-semibold">Resultados Efectivos</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  98% de tasa de éxito en casos ganados y acuerdos favorables.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                  <Clock className="h-8 w-8 text-accent" />
                </div>
                <h3 className="mt-4 font-semibold">Atención Personalizada</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Cada caso recibe atención individualizada y seguimiento constante.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                  <TrendingUp className="h-8 w-8 text-accent" />
                </div>
                <h3 className="mt-4 font-semibold">Actualización Continua</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Nuestro equipo se mantiene al día con las últimas reformas legales.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="font-serif text-3xl font-bold text-balance md:text-4xl">Lo Que Dicen Nuestros Clientes</h2>
              <p className="mt-4 text-lg text-muted-foreground text-pretty">
                La satisfacción de nuestros clientes es nuestro mayor logro
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex gap-1 text-accent">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    "Excelente servicio y profesionalismo. Resolvieron mi caso de manera rápida y efectiva. Totalmente
                    recomendados."
                  </p>
                  <div className="mt-4 font-semibold">María González</div>
                  <div className="text-sm text-muted-foreground">Derecho Civil</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex gap-1 text-accent">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    "Me ayudaron en un momento muy difícil. Su experiencia en derecho de familia fue fundamental para
                    lograr un resultado justo."
                  </p>
                  <div className="mt-4 font-semibold">Carlos Ramírez</div>
                  <div className="text-sm text-muted-foreground">Derecho de Familia</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex gap-1 text-accent">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    "Profesionales de primera. Su conocimiento en derecho corporativo nos permitió expandir nuestro
                    negocio con confianza."
                  </p>
                  <div className="mt-4 font-semibold">Ana Martínez</div>
                  <div className="text-sm text-muted-foreground">Derecho Corporativo</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16 text-primary-foreground">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-balance md:text-4xl">¿Necesita Asesoría Legal?</h2>
            <p className="mt-4 text-lg text-primary-foreground/90 text-pretty">
              Contáctenos hoy mismo para una consulta gratuita. Estamos aquí para ayudarle.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" variant="secondary" className="gap-2">
                <Link href="/contacto">
                  <Phone className="h-5 w-5" />
                  Agendar Consulta
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link href="/sobre-nosotros">Conocer Más</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ />
      </main>

      <Footer />
    </>
  )
}
