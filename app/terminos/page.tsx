import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata = {
  title: "Términos de Servicio | Bufete Jurídico Profesional",
  description: "Términos y condiciones de uso de los servicios legales de nuestro bufete.",
}

export default function TermsPage() {
  return (
    <>
      <Navigation />
      <WhatsAppButton />

      <main className="pt-20">
        <section className="bg-primary py-16 text-primary-foreground md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl font-bold leading-tight text-balance md:text-5xl">
              Términos de Servicio
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/90">Última actualización: Enero 2025</p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="font-serif text-2xl font-bold">1. Aceptación de Términos</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Al acceder y utilizar los servicios de nuestro bufete jurídico, usted acepta estar sujeto a estos
                términos de servicio. Si no está de acuerdo con alguno de estos términos, por favor no utilice nuestros
                servicios.
              </p>

              <h2 className="mt-8 font-serif text-2xl font-bold">2. Servicios Legales</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Nuestro bufete proporciona servicios legales profesionales en diversas áreas del derecho. La prestación
                de servicios está sujeta a:
              </p>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>Evaluación y aceptación del caso por parte del bufete</li>
                <li>Firma de contrato de prestación de servicios legales</li>
                <li>Pago de honorarios según lo acordado</li>
                <li>Cooperación del cliente en la provisión de información y documentación</li>
              </ul>

              <h2 className="mt-8 font-serif text-2xl font-bold">3. Relación Abogado-Cliente</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                La relación abogado-cliente se establece formalmente mediante la firma de un contrato de servicios. La
                consulta inicial no crea automáticamente una relación abogado-cliente, y el bufete se reserva el derecho
                de aceptar o declinar casos.
              </p>

              <h2 className="mt-8 font-serif text-2xl font-bold">4. Honorarios y Pagos</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Los honorarios profesionales se establecen de manera clara y transparente en el contrato de servicios.
                Las modalidades pueden incluir:
              </p>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>Honorarios por hora</li>
                <li>Cuota fija por servicio</li>
                <li>Honorarios contingentes (porcentaje del resultado)</li>
                <li>Igualas mensuales para asesoría continua</li>
              </ul>

              <h2 className="mt-8 font-serif text-2xl font-bold">5. Responsabilidades del Cliente</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">El cliente se compromete a:</p>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>Proporcionar información veraz y completa</li>
                <li>Entregar documentación necesaria de manera oportuna</li>
                <li>Cumplir con los pagos acordados</li>
                <li>Mantener comunicación efectiva con el bufete</li>
                <li>Seguir las recomendaciones legales proporcionadas</li>
              </ul>

              <h2 className="mt-8 font-serif text-2xl font-bold">6. Confidencialidad</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Toda la información compartida está protegida por el secreto profesional establecido en las leyes
                aplicables. El bufete mantiene estricta confidencialidad sobre todos los asuntos del cliente.
              </p>

              <h2 className="mt-8 font-serif text-2xl font-bold">7. Limitación de Responsabilidad</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Si bien nos esforzamos por lograr los mejores resultados, no podemos garantizar resultados específicos
                en procedimientos legales. Los resultados dependen de múltiples factores incluyendo hechos, evidencia, y
                decisiones de tribunales o autoridades.
              </p>

              <h2 className="mt-8 font-serif text-2xl font-bold">8. Terminación de Servicios</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Cualquiera de las partes puede terminar la relación profesional siguiendo los procedimientos
                establecidos en el contrato de servicios y respetando las obligaciones éticas y legales aplicables.
              </p>

              <h2 className="mt-8 font-serif text-2xl font-bold">9. Jurisdicción</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Estos términos se rigen por las leyes aplicables en la jurisdicción donde opera el bufete. Cualquier
                disputa será resuelta en los tribunales competentes de dicha jurisdicción.
              </p>

              <h2 className="mt-8 font-serif text-2xl font-bold">10. Contacto</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Para preguntas sobre estos términos de servicio:
              </p>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>Email: info@bufetejuridico.com</li>
                <li>Teléfono: +52 (55) 1234-5678</li>
                <li>Dirección: Av. Reforma 123, Piso 5, Col. Juárez, Ciudad de México</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
