import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata = {
  title: "Política de Privacidad | GB Legal's",
  description: "Política de privacidad y tratamiento de datos personales en GB Legal's.",
}

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      <WhatsAppButton />

      <main className="pt-20">
        <section className="bg-primary py-16 text-primary-foreground md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl font-bold leading-tight text-balance md:text-5xl">
              Política de Privacidad
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/90">Última actualización: Enero 2025</p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none text-muted-foreground text-justify">
              <h2 className="font-serif text-2xl font-bold">1. Información que Recopilamos</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Recopilamos únicamente la información necesaria para poder brindarle una atención legal completa, profesional y personalizada. La información puede obtenerse a través de nuestros formularios, comunicaciones por correo electrónico, reuniones presenciales o virtuales, llamadas telefónicas o cualquier vía en la que usted decida contactarnos.
                La información personal que podemos recopilar incluye, sin limitarse a:
              </p>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>Nombre completo y datos de identificación</li>
                <li>Información de contacto: número de teléfono, dirección de correo electrónico y dirección física</li>
                <li>Detalles relacionados con su consulta o situación legal</li>
                <li>Documentos, evidencias y cualquier información entregada como parte del análisis o gestión del caso</li>
                <li>Datos necesarios para confirmar su identidad y cumplir con requisitos profesionales o legales</li>
              </ul>

              <h2 className="mt-8 font-serif text-2xl font-bold">2. Uso de la Información</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                La información recopilada será utilizada exclusivamente para fines legales y administrativos vinculados a los servicios que ofrecemos. Entre ellos:
              </p>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>Brindar asesoría jurídica profesional</li>
                <li>Evaluar la viabilidad de su caso y ofrecer soluciones legales precisas</li>
                <li>Gestionar procesos legales, documentación, preparación de expedientes o representación ante autoridades</li>
                <li>Responder a consultas, solicitudes o requerimientos de información</li>
                <li>Cumplir con obligaciones legales, regulatorias o éticas que rigen la profesión</li>
                <li>Mejorar la calidad de nuestros servicios, procesos internos y experiencia del cliente</li>
              </ul>

              <h2 className="mt-8 font-serif text-2xl font-bold">3. Confidencialidad y Secreto Profesional</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Toda la información que usted comparta con nosotros está protegida bajo el secreto profesional abogado-cliente, amparado por las leyes vigentes.
                Este deber de confidencialidad es absoluto y constituye uno de los pilares de la profesión jurídica.
                Por ello:
                No divulgamos información sin su consentimiento expreso y documentado.
                No compartimos datos con terceros salvo que sea estrictamente necesario para la gestión de su caso (por ejemplo, peritos, notarios, o entidades judiciales) y siempre bajo acuerdos de confidencialidad.
                Solo revelaremos información cuando exista una obligación legal que lo requiera.
                Nuestra prioridad es que usted se sienta seguro, protegido y con plena confianza para compartir los detalles de su situación.
              </p>

              <h2 className="mt-8 font-serif text-2xl font-bold">4. Seguridad de Datos</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Toda la información que usted comparta con nosotros está protegida bajo el secreto profesional abogado-cliente, amparado por las leyes vigentes.
                Este deber de confidencialidad es absoluto y constituye uno de los pilares de la profesión jurídica.
                Por ello:
                No divulgamos información sin su consentimiento expreso y documentado.
                No compartimos datos con terceros salvo que sea estrictamente necesario para la gestión de su caso (por ejemplo, peritos, notarios, o entidades judiciales) y siempre bajo acuerdos de confidencialidad.
                Solo revelaremos información cuando exista una obligación legal que lo requiera.
                Nuestra prioridad es que usted se sienta seguro, protegido y con plena confianza para compartir los detalles de su situación.
              </p>

              <h2 className="mt-8 font-serif text-2xl font-bold">5. Derechos del Titular de Datos</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed"> Usted tiene pleno control sobre su información personal. En cualquier momento, puede ejercer los siguientes derechos:</p>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>Acceso: Solicitar copia de la información que tenemos sobre usted.</li>
                <li>Rectificación: Corregir o actualizar datos que sean inexactos o incompletos.</li>
                <li>Eliminación: Solicitar la supresión de sus datos cuando sea legalmente procedente.</li>
                <li>Oposición: Negarse al tratamiento de su información en casos autorizados por ley.</li>
                <li>Revocación del consentimiento: Retirar la autorización otorgada para el tratamiento de sus datos (sin afectar la legalidad del procesamiento previo).</li>
              </ul>

              <h2 className="mt-8 font-serif text-2xl font-bold">6. Uso de Cookies y Tecnologías Similares</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Nuestro sitio web puede utilizar cookies para mejorar la experiencia del usuario, optimizar el rendimiento del sitio y personalizar la navegación.
                Usted puede configurar su navegador para limitar o bloquear el uso de cookies; sin embargo, algunas funciones del sitio podrían verse afectadas.
              </p>

              <h2 className="mt-8 font-serif text-2xl font-bold">7. Actualizaciones de esta Política</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Nos reservamos el derecho de modificar o actualizar esta Política de Privacidad en cualquier momento, con el fin de adaptarnos a cambios normativos, tecnológicos o internos.
                Cualquier actualización se publicará en esta misma página con la fecha de modificación correspondiente.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
