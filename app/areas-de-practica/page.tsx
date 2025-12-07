import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Scale, Shield, Users, Heart, Briefcase, FileText, Building2, Home, Landmark, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Áreas de Práctica | GB Legal's",
  description:
    "Servicios legales especializados en derecho civil, penal, laboral, familiar, corporativo y más. Expertos en todas las áreas del derecho.",
}

export default function PracticeAreasPage() {
  const practiceAreas = [
    {
      icon: Scale,
      title: "Derecho Civil",
      description: "Asesoría integral en asuntos civiles y patrimoniales",
      services: [
        "Contratos y obligaciones",
        "Daños y perjuicios",
        "Responsabilidad civil",
        "Arrendamientos",
        "Sucesiones y testamentos",
        "Litigios civiles",
      ],
      image: "/images/CIVIL LAW.jpg",
    },
    {
      icon: Shield,
      title: "Derecho Penal",
      description: "Defensa penal especializada y asesoría en materia criminal",
      services: [
        "Defensa penal en delitos federales y estatales",
        "Amparos y recursos de apelación",
        "Procedimientos penales acusatorios",
        "Delitos patrimoniales",
        "Delitos contra la salud",
        "Asesoría preventiva",
      ],
      image: "/images/CRIMINAL DEFENSE.jpg",
    },
    {
      icon: Users,
      title: "Derecho Laboral",
      description: "Representación en conflictos laborales y relaciones de trabajo",
      services: [
        "Despidos injustificados",
        "Reclamación de prestaciones",
        "Acoso laboral (mobbing)",
        "Conflictos colectivos",
        "Auditorías laborales",
        "Contratos de trabajo",
      ],
      image:
        "/images/EMPLOYMENT LAW.jpg",
    },
    {
      icon: Heart,
      title: "Derecho de Familia",
      description: "Soluciones sensibles y efectivas en asuntos familiares",
      services: [
        "Divorcios y separaciones",
        "Custodia y convivencia de menores",
        "Pensiones alimenticias",
        "Adopciones",
        "Violencia familiar",
        "Mediación familiar",
      ],
      image: "/images/FAMILY LAW.jpg",
    },
    {
      icon: Briefcase,
      title: "Derecho Corporativo",
      description: "Asesoría legal empresarial y corporativa integral",
      services: [
        "Constitución de empresas",
        "Fusiones y adquisiciones",
        "Contratos mercantiles",
        "Cumplimiento normativo (compliance)",
        "Gobierno corporativo",
        "Resolución de conflictos empresariales",
      ],
      image:
        "/images/CORPORATE LAW.jpg",
    },
    {
      icon: FileText,
      title: "Propiedad Intelectual",
      description: "Protección de activos intangibles y derechos de autor",
      services: [
        "Registro de marcas y patentes",
        "Derechos de autor",
        "Licencias y franquicias",
        "Competencia desleal",
        "Secretos industriales",
        "Litigios de PI",
      ],
      image:
        "/images/INTELLECTUAL PROPERTY.jpg",
    },
    {
      icon: Building2,
      title: "Derecho Inmobiliario",
      description: "Transacciones inmobiliarias y resolución de conflictos",
      services: [
        "Compraventa de inmuebles",
        "Arrendamientos comerciales",
        "Desarrollo inmobiliario",
        "Títulos de propiedad",
        "Condominios y fraccionamientos",
        "Litigios inmobiliarios",
      ],
      image: "/images/LAW PROPERTY.jpg",
    },
    {
      icon: Landmark,
      title: "Derecho Fiscal",
      description: "Planificación fiscal y controversias tributarias",
      services: [
        "Planificación y optimización fiscal",
        "Controversias fiscales",
        "Auditorías del SAT",
        "Devoluciones de impuestos",
        "Consultoría tributaria",
        "Juicios fiscales",
      ],
      image: "/images/FISCAL LAW.jpg",
    },
    {
      icon: Home,
      title: "Derecho Migratorio",
      description: "Servicios legales en materia migratoria",
      services: [
        "Visas y permisos de trabajo",
        "Residencias permanentes y temporales",
        "Naturalizaciones",
        "Deportaciones y amparos",
        "Reunificación familiar",
        "Consultoría migratoria",
      ],
      image: "/images/IMMIGRATION LAW.jpg",
    },
  ]

  return (
    <>
      <Navigation />
      <WhatsAppButton />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-primary py-16 text-primary-foreground md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-serif text-4xl font-bold leading-tight text-balance md:text-5xl">
                Áreas de Práctica
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90 text-pretty">
                Servicios legales especializados en todas las áreas del derecho, respaldados por décadas de experiencia
                y un equipo de abogados expertos.
              </p>
            </div>
          </div>
        </section>

        {/* Practice Areas Grid */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {practiceAreas.map((area, index) => {
                const Icon = area.icon
                const isEven = index % 2 === 0

                return (
                  <div
                    key={index}
                    className={`grid gap-8 lg:grid-cols-2 lg:items-center ${!isEven ? "lg:flex-row-reverse" : ""}`}
                  >
                    <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                      <Card className="h-full border-2 border-accent/20">
                        <CardHeader>
                          <div className="flex items-center gap-4">
                            <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-accent/10">
                              <Icon className="h-8 w-8 text-accent" />
                            </div>
                            <CardTitle className="font-serif text-2xl md:text-3xl">{area.title}</CardTitle>
                          </div>
                          <p className="mt-4 text-muted-foreground">{area.description}</p>
                        </CardHeader>
                        <CardContent>
                          <h4 className="mb-3 font-semibold">Servicios Incluidos:</h4>
                          <ul className="space-y-2">
                            {area.services.map((service, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <ArrowRight className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                                <span className="text-sm text-muted-foreground">{service}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-6">
                            <Button asChild variant="outline" className="w-full gap-2 bg-transparent">
                              <Link href="/contacto">
                                Consultar Ahora
                                <ArrowRight className="h-4 w-4" />
                              </Link>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <div className={isEven ? "lg:order-2" : "lg:order-1"}>
                      <div className="overflow-hidden rounded-lg shadow-xl">
                        <img
                          src={area.image || "/placeholder.svg"}
                          alt={`${area.title} legal services illustration`}
                          className="h-full w-full object-cover transition-transform hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16 text-primary-foreground md:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-balance md:text-4xl">
              ¿No encuentra el Servicio que Necesita?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/90 text-pretty">
              Contamos con una amplia red de abogados especializados en todas las áreas del derecho. Contáctenos y le
              ayudaremos a encontrar la solución legal que necesita.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contacto">Contactar Ahora</Link>
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

        {/* Why Choose Us */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="font-serif text-3xl font-bold text-balance md:text-4xl">Nuestro Enfoque</h2>
              <p className="mt-4 text-lg text-muted-foreground text-pretty">
                Lo que nos diferencia en cada área de práctica
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold">Análisis Profundo</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Estudiamos cada caso a fondo, identificando todas las opciones legales disponibles para lograr el
                    mejor resultado posible.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold">Estrategia Personalizada</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Desarrollamos estrategias a medida para cada cliente, adaptándonos a sus necesidades específicas y
                    objetivos particulares.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold">Comunicación Constante</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Mantenemos a nuestros clientes informados en cada etapa del proceso, garantizando transparencia y
                    confianza.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
