import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Target, Heart, Users, Mail, Linkedin } from "lucide-react"
import Image from "next/image"

export const metadata = {
  title: "Sobre Nosotros | GB Legal's",
  description:
    "Conoce nuestra historia, misión, valores y equipo de abogados expertos con más de 10 años de experiencia en el sector legal.",
}

export default function AboutPage() {
  const team = [
    {
      name: "Lic. Roberto Sánchez",
      role: "Socio Fundador",
      specialty: "Derecho Civil y Corporativo",
      image: "https://placehold.co/400x400?text=Professional+portrait+male+lawyer+in+suit+office+background",
      bio: "Más de 30 años de experiencia en litigios civiles y asesoría corporativa. Especializado en contratos complejos y fusiones empresariales.",
    },
    {
      name: "Lic. Patricia López",
      role: "Socia Directora",
      specialty: "Derecho Penal y Constitucional",
      image: "https://placehold.co/400x400?text=Professional+portrait+female+lawyer+in+business+attire+office",
      bio: "Reconocida por su experiencia en defensa penal estratégica. Certificada en derechos humanos y garantías constitucionales.",
    },
    {
      name: "Lic. Miguel Torres",
      role: "Socio",
      specialty: "Derecho Laboral",
      image: "https://placehold.co/400x400?text=Professional+portrait+male+attorney+formal+suit+confident+pose",
      bio: "Experto en conflictos laborales y relaciones colectivas de trabajo. Ha representado a empresas y trabajadores en casos de alto perfil.",
    },
    {
      name: "Lic. Carmen Morales",
      role: "Abogada Senior",
      specialty: "Derecho de Familia",
      image: "https://placehold.co/400x400?text=Professional+portrait+female+attorney+elegant+business+suit",
      bio: "Especialista en mediación familiar y custodia de menores. Su enfoque empático ha ayudado a cientos de familias.",
    },
    {
      name: "Lic. Fernando Díaz",
      role: "Abogado Senior",
      specialty: "Propiedad Intelectual",
      image: "https://placehold.co/400x400?text=Professional+portrait+male+lawyer+glasses+modern+office",
      bio: "Certificado en marcas y patentes internacionales. Protege la innovación y creatividad de emprendedores y empresas.",
    },
    {
      name: "Lic. Ana Vargas",
      role: "Abogada Asociada",
      specialty: "Derecho Fiscal",
      image: "https://placehold.co/400x400?text=Professional+portrait+female+lawyer+professional+attire+smile",
      bio: "Experta en planificación fiscal y controversias tributarias. Ayuda a optimizar la carga fiscal de personas y empresas.",
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
                    Fundado en 2005, GB Legal's nació como respuesta a la necesidad de un servicio jurídico que fuera más allá de la simple asesoría técnica. Nuestra visión fue clara desde el primer día: crear una firma que combinara la rigurosidad de los grandes despachos con la atención cálida y personalizada de una boutique legal. Entendimos que detrás de cada caso hay personas, familias y patrimonios que merecen ser protegidos con la más alta ética y excelencia.
                  </p>
                  <p>
                    A lo largo de dos décadas de trayectoria ininterrumpida, hemos evolucionado hasta consolidarnos como una de las firmas más respetadas del sector. Hemos tenido el privilegio de representar a cientos de individuos y corporaciones en litigios complejos y negociaciones estratégicas. Este crecimiento no ha sido casualidad, sino el resultado de ganar la confianza de nuestros clientes caso tras caso, demostrando que la experiencia especializada y el compromiso genuino son la clave para obtener resultados favorables.
                  </p>
                  <p>
                    Nuestro mayor activo es nuestro capital humano. Contamos con un equipo multidisciplinario de abogados que no solo poseen una formación académica de élite, sino que se mantienen en constante actualización ante las reformas legales y las nuevas dinámicas del mercado. Esta diversidad de especialidades nos permite abordar cada desafío desde una perspectiva integral, diseñando estrategias legales 360° que blindan a nuestros clientes ante cualquier eventualidad.
                  </p>
                  <p>
                     Hoy, aunque nuestra infraestructura y alcance han crecido, la esencia de GB Legal's permanece intacta. Seguimos fieles a los valores fundamentales con los que iniciamos: una integridad a toda prueba, la búsqueda incansable de la excelencia y un compromiso inquebrantable con la justicia. Miramos hacia el futuro invirtiendo en innovación y tecnología, asegurando que nuestros clientes siempre cuenten con una defensa moderna, ágil y eficaz.
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

        {/* Team Section */}
        <section className="bg-muted py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="font-serif text-3xl font-bold text-balance md:text-4xl">Nuestro Equipo</h2>
              <p className="mt-4 text-lg text-muted-foreground text-pretty">
                Profesionales altamente capacitados comprometidos con su éxito
              </p>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((member, index) => (
                <Card key={index} className="overflow-hidden transition-all hover:shadow-lg">
                  {/* AQUÍ ESTÁ EL CAMBIO: Cuadro de privacidad en lugar de imagen */}
                  <div className="aspect-square flex items-center justify-center bg-gray-200 text-center p-4">
                    <span className="text-muted-foreground font-medium italic">
                      Imagen reservada por motivos de privacidad.
                    </span>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-semibold">{member.name}</h3>
                    <div className="mt-1 text-sm font-medium text-accent">{member.role}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{member.specialty}</div>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
                    <div className="mt-4 flex gap-3">
                      <a href="#" className="text-muted-foreground hover:text-accent">
                        <Mail className="h-5 w-5" />
                        <span className="sr-only">Email</span>
                      </a>
                      <a href="#" className="text-muted-foreground hover:text-accent">
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
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
                  <div className="mt-4 font-semibold">Barra de Abogados</div>
                  <div className="mt-2 text-sm text-muted-foreground">Miembro activo certificado</div>
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
                  <div className="mt-4 font-semibold">Asociación Nacional</div>
                  <div className="mt-2 text-sm text-muted-foreground">Abogados certificados</div>
                </CardContent>
              </Card>

              <Card className="border-2 transition-all hover:border-accent">
                <CardContent className="p-6 text-center">
                  <Award className="mx-auto h-12 w-12 text-accent" />
                  <div className="mt-4 font-semibold">Premio Excelencia</div>
                  <div className="mt-2 text-sm text-muted-foreground">Servicios legales 2024</div>
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