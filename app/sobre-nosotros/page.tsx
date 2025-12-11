import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Target, Heart, Users, Briefcase, FileSearch, Scale, CheckCircle } from "lucide-react"
import Image from "next/image"
import { CoverFlowCarousel } from "@/components/ui/cover-flow-carousel"

export const metadata = {
  title: "Sobre Nosotros | GB Legal's",
  description:
    "Conoce nuestra historia, misión, valores y nuestra trayectoria de más de 20 años en el sector legal en Panamá.",
}

export default function AboutPage() {
  const process = [
    {
      icon: Briefcase,
      title: "1. Consulta Inicial y Diagnóstico",
      description: "Nuestra primera interacción es fundamental. En esta etapa, realizamos una entrevista exhaustiva para escuchar su relato, entender sus objetivos y recopilar los antecedentes básicos. Evaluamos la situación para determinar si existe un caso legal viable, verificamos la ausencia de conflictos de interés y le ofrecemos un diagnóstico preliminar honesto sobre las posibilidades de éxito y los riesgos involucrados.",
    },
    {
      icon: FileSearch,
      title: "2. Investigación, Estrategia y Propuesta",
      description: "Una vez aceptado el caso, nuestro equipo realiza un estudio técnico profundo de la documentación y la normativa aplicable. Diseñamos una Hoja de Ruta Legal personalizada que define la estrategia a seguir. En esta fase, le presentamos una propuesta formal de servicios que detalla transparentemente los honorarios, los costos procesales y los tiempos estimados.",
    },
    {
      icon: Scale,
      title: "3. Ejecución Legal y Gestión Activa",
      description: "Ponemos la estrategia en marcha. Ya sea redactando demandas, negociando contratos o representándolo en audiencias, nuestro equipo actúa con diligencia y firmeza. Durante esta etapa, mantenemos una política de comunicación proactiva: usted recibirá actualizaciones periódicas sobre el avance de su expediente, asegurando que nunca se sienta desinformado.",
    },
    {
      icon: CheckCircle,
      title: "4. Resolución, Resultados y Cierre",
      description: "Nuestro objetivo es alcanzar la resolución más favorable posible, ya sea mediante una sentencia judicial, un acuerdo extrajudicial o la finalización de un trámite administrativo. Al concluir, le entregamos un informe final detallado, explicamos las implicaciones legales del resultado y le asesoramos sobre los pasos futuros necesarios.",
    },
  ]

  const values = [
    {
      icon: Target,
      title: "Integridad",
      description: "Actuamos con honestidad y ética en cada caso, manteniendo los más altos estándares profesionales.",
    },
    {
      icon: Award,
      title: "Excelencia",
      description:
        "Buscamos la excelencia en cada servicio, manteniéndonos actualizados con las últimas reformas legales.",
    },
    {
      icon: Heart,
      title: "Compromiso",
      description:
        "Nos comprometemos con cada cliente, dedicando tiempo y recursos para lograr los mejores resultados.",
    },
    {
      icon: Users,
      title: "Trabajo en Equipo",
      description:
        "Colaboramos estrechamente para ofrecer soluciones integrales que abarquen todas las áreas necesarias.",
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
              <h1 className="font-serif text-4xl font-bold leading-tight text-balance md:text-5xl">Sobre Nosotros</h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90 text-pretty">
                Una firma legal con tradición, experiencia y compromiso con la justicia
              </p>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="font-serif text-3xl font-bold text-balance md:text-4xl">Nuestra Historia</h2>
                <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed text-justify">
                  <p>
                    Fundado en 2005, <strong>GB Legal's</strong> nació como respuesta a la necesidad de un servicio jurídico que
                    fuera más allá de la simple asesoría técnica. Nuestra visión fue clara desde el primer día: crear una firma
                    que combinara la rigurosidad de los grandes despachos con la atención cálida y personalizada de una boutique legal.
                  </p>
                  <p>
                    A lo largo de <strong>dos décadas de trayectoria</strong>, hemos evolucionado hasta consolidarnos como una de
                    las firmas más respetadas del sector. Hemos tenido el privilegio de representar a cientos de individuos y
                    corporaciones en litigios complejos, demostrando que la experiencia especializada es la clave para obtener
                    resultados favorables.
                  </p>
                  <p>
                    Nuestro equipo multidisciplinario se mantiene en constante actualización ante las reformas legales y las
                    nuevas dinámicas del mercado. Esta diversidad de especialidades nos permite abordar cada desafío desde una
                    perspectiva integral, diseñando estrategias legales que blindan a nuestros clientes ante cualquier eventualidad.
                  </p>
                  <p>
                    Hoy, seguimos fieles a los valores fundamentales con los que iniciamos: integridad a toda prueba, excelencia
                    y un compromiso inquebrantable con la justicia. Miramos hacia el futuro invirtiendo en innovación, asegurando
                    una defensa moderna, ágil y eficaz.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/images/LAW FIRM.jpg"
                  className="rounded-lg shadow-xl"
                  alt="Historia del Bufete"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="bg-muted py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="border-2 border-accent/20">
                <CardContent className="p-8">
                  <Target className="h-12 w-12 text-accent" />
                  <h3 className="mt-4 font-serif text-2xl font-bold">Nuestra Misión</h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    Brindar servicios legales de excelencia, defendiendo los derechos e intereses de nuestros clientes
                    con ética, profesionalismo y dedicación. Nos esforzamos por ser aliados confiables en la resolución
                    de conflictos y la protección de intereses legales, siempre buscando soluciones efectivas y justas.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-accent/20">
                <CardContent className="p-8">
                  <Award className="h-12 w-12 text-accent" />
                  <h3 className="mt-4 font-serif text-2xl font-bold">Nuestra Visión</h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    Ser reconocidos como la firma legal de referencia en nuestro sector, distinguiéndonos por la calidad
                    de nuestros servicios, la satisfacción de nuestros clientes y nuestro compromiso con la justicia.
                    Aspiramos a expandir nuestra presencia y continuar siendo líderes en innovación legal.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="font-serif text-3xl font-bold text-balance md:text-4xl">Nuestros Valores</h2>
              <p className="mt-4 text-lg text-muted-foreground text-pretty">
                Los principios que guían nuestro trabajo diario
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <div key={index} className="text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="mt-4 font-semibold">{value.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* PROCESO DE TRABAJO */}
        <section className="bg-muted py-16 md:py-24 overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="font-serif text-3xl font-bold text-balance md:text-4xl">Nuestro Proceso de Trabajo</h2>
              <p className="mt-4 text-lg text-muted-foreground text-pretty">
                Cómo le acompañamos paso a paso en su defensa legal
              </p>
            </div>

            <CoverFlowCarousel>
              {process.map((step, index) => {
                const Icon = step.icon
                return (
                  // AQUÍ ESTÁ EL CAMBIO CLAVE 1:
                  // [.expanded-card-modal_&]:h-auto  -> Permite que la tarjeta crezca en el modal
                  <Card key={index} className="h-[400px] [.expanded-card-modal_&]:h-auto border-t-4 border-t-accent shadow-lg transition-all select-none bg-card overflow-hidden [.expanded-card-modal_&]:overflow-visible">
                    <CardContent className="flex h-full flex-col p-8 text-center [.expanded-card-modal_&]:h-auto">
                      <div className="mb-4 inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground mx-auto">
                        <Icon className="h-8 w-8" />
                      </div>
                      <h3 className="font-serif text-2xl font-bold mb-4 shrink-0">{step.title}</h3>
                      
                      {/* AQUÍ ESTÁ EL CAMBIO CLAVE 2: */}
                      {/* [.expanded-card-modal_&]:overflow-visible -> Permite que el texto se vea completo en el modal */}
                      <div className="relative overflow-hidden flex-1 [.expanded-card-modal_&]:overflow-visible [.expanded-card-modal_&]:flex-none">
                         <div className="h-full overflow-y-auto md:overflow-hidden scrollbar-hide [.expanded-card-modal_&]:h-auto [.expanded-card-modal_&]:overflow-visible">
                            <p className="text-base leading-relaxed text-muted-foreground line-clamp-none md:line-clamp-6 [.expanded-card-modal_&]:line-clamp-none [.expanded-card-modal_&]:text-lg">
                              {step.description}
                            </p>
                         </div>
                         
                         {/* Degradado solo visible en PC y cuando NO es modal */}
                         <div className="hidden md:block absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-card to-transparent [.expanded-card-modal_&]:hidden" />
                      </div>

                      {/* Indicador solo en móvil */}
                      <div className="mt-2 md:hidden text-xs text-muted-foreground/50 animate-pulse font-medium [.expanded-card-modal_&]:hidden">
                        Desliza texto para leer ↓
                      </div>

                    </CardContent>
                  </Card>
                )})}
            </CoverFlowCarousel>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="font-serif text-3xl font-bold text-balance md:text-4xl">Certificaciones y Membresías</h2>
              <p className="mt-4 text-lg text-muted-foreground text-pretty">
                Reconocimientos que avalan nuestra experiencia y profesionalismo
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="border-2 transition-all hover:border-accent">
                <CardContent className="p-6 text-center">
                  <Award className="mx-auto h-12 w-12 text-accent" />
                  <div className="mt-4 font-semibold">Colegio Nacional de Abogados</div>
                  <div className="mt-2 text-sm text-muted-foreground">Miembros activos del CNA</div>
                </CardContent>
              </Card>

              <Card className="border-2 transition-all hover:border-accent">
                <CardContent className="p-6 text-center">
                  <Award className="mx-auto h-12 w-12 text-accent" />
                  <div className="mt-4 font-semibold">ISO 9001:2015</div>
                  <div className="mt-2 text-sm text-muted-foreground">Calidad certificada</div>
                </CardContent>
              </Card>

              <Card className="border-2 transition-all hover:border-accent">
                <CardContent className="p-6 text-center">
                  <Award className="mx-auto h-12 w-12 text-accent" />
                  <div className="mt-4 font-semibold">Protección de Datos (ANTAI)</div>
                  <div className="mt-2 text-sm text-muted-foreground">Cumplimiento Ley 81</div>
                </CardContent>
              </Card>

              <Card className="border-2 transition-all hover:border-accent">
                <CardContent className="p-6 text-center">
                  <Award className="mx-auto h-12 w-12 text-accent" />
                  <div className="mt-4 font-semibold">Cámara de Comercio</div>
                  <div className="mt-2 text-sm text-muted-foreground">Sector Legal</div>
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