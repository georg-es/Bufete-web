import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export const metadata = {
  title: "Contacto | Bufete Jurídico Profesional",
  description:
    "Contáctenos para una consulta gratuita. Oficinas en el centro de la ciudad. Teléfono, email y horarios de atención.",
}

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <WhatsAppButton />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-primary py-16 text-primary-foreground md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-serif text-4xl font-bold leading-tight text-balance md:text-5xl">Contáctenos</h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90 text-pretty">
                Estamos aquí para ayudarle. Solicite una consulta gratuita y permítanos asesorarle en su situación
                legal.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info and Form */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-5">
              {/* Contact Information */}
              <div className="lg:col-span-2">
                <div className="sticky top-24">
                  <h2 className="font-serif text-2xl font-bold md:text-3xl">Información de Contacto</h2>
                  <p className="mt-4 text-muted-foreground">
                    No dude en ponerse en contacto con nosotros. Estamos disponibles para atender sus consultas.
                  </p>

                  <div className="mt-8 space-y-6">
                    <Card>
                      <CardContent className="flex items-start gap-4 p-6">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                          <MapPin className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-semibold">Dirección</h3>
                          <p className="mt-1 text-sm text-muted-foreground">
                            Av. Reforma 123, Piso 5<br />
                            Parque Industrial, Ciudad de Panamá
                            <br />
                            C.P. 06600
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="flex items-start gap-4 p-6">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                          <Phone className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-semibold">Teléfonos</h3>
                          <p className="mt-1 text-sm text-muted-foreground">
                            Oficina: +52 (55) 1234-5678
                            <br />
                            WhatsApp: +52 (55) 8765-4321
                            <br />
                            Emergencias: +52 (55) 9999-0000
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="flex items-start gap-4 p-6">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                          <Mail className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-semibold">Correo Electrónico</h3>
                          <p className="mt-1 text-sm text-muted-foreground">
                            info@bufetejuridico.com
                            <br />
                            contacto@bufetejuridico.com
                            <br />
                            consultas@bufetejuridico.com
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="flex items-start gap-4 p-6">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                          <Clock className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-semibold">Horario de Atención</h3>
                          <p className="mt-1 text-sm text-muted-foreground">
                            Lunes a Viernes: 9:00 - 18:00
                            <br />
                            Sábados: 10:00 - 14:00
                            <br />
                            Domingos: Cerrado
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3">
                <Card className="border-2">
                  <CardContent className="p-6 md:p-8">
                    <h2 className="font-serif text-2xl font-bold md:text-3xl">Solicitar Consulta</h2>
                    <p className="mt-2 text-muted-foreground">
                      Complete el formulario y nos pondremos en contacto con usted lo antes posible.
                    </p>
                    <div className="mt-8">
                      <ContactForm />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="bg-muted py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="font-serif text-3xl font-bold text-balance md:text-4xl">Encuéntrenos</h2>
              <p className="mt-4 text-lg text-muted-foreground text-pretty">
                Nuestras oficinas están ubicadas en el corazón de la ciudad
              </p>
            </div>

            <div className="mt-8 overflow-hidden rounded-lg shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.6158193087856!2d-99.16558492463698!3d19.426854981865846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f8d7d7d7d7d7%3A0x0!2zMTnCsDI1JzM2LjciTiA5OcKwMDknNDguMCJX!5e0!3m2!1ses!2smx!4v1234567890123!5m2!1ses!2smx"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Bufete Jurídico"
              />
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold">Consulta Gratuita</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    La primera consulta es completamente gratuita y sin compromiso. Evaluaremos su caso y le
                    orientaremos sobre las mejores opciones.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold">Respuesta Rápida</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Nos comprometemos a responder todas las consultas en menos de 24 horas durante días hábiles.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold">Confidencialidad</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Toda la información compartida está protegida por el secreto profesional y se trata con absoluta
                    confidencialidad.
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
