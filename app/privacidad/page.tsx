import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata = {
  title: "Política de Privacidad | Bufete Jurídico Profesional",
  description: "Política de privacidad y tratamiento de datos personales de nuestro bufete jurídico.",
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
            <div className="prose prose-lg max-w-none">
              <h2 className="font-serif text-2xl font-bold">1. Información que Recopilamos</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Recopilamos información personal que usted nos proporciona voluntariamente al contactarnos, solicitar
                servicios o comunicarse con nuestro bufete. Esto incluye:
              </p>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>Nombre completo</li>
                <li>Información de contacto (email, teléfono, dirección)</li>
                <li>Información relacionada con su consulta o caso legal</li>
                <li>Documentos e información proporcionada para evaluación legal</li>
              </ul>

              <h2 className="mt-8 font-serif text-2xl font-bold">2. Uso de la Información</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Utilizamos su información personal exclusivamente para:
              </p>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>Proporcionar servicios legales y asesoría profesional</li>
                <li>Responder a sus consultas y comunicarnos con usted</li>
                <li>Gestionar casos y representación legal</li>
                <li>Cumplir con obligaciones legales y profesionales</li>
                <li>Mejorar nuestros servicios</li>
              </ul>

              <h2 className="mt-8 font-serif text-2xl font-bold">3. Secreto Profesional</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Toda la información compartida con nuestro bufete está protegida por el secreto profesional
                abogado-cliente establecido por ley. No compartiremos su información con terceros sin su consentimiento
                expreso, excepto cuando sea requerido por ley o necesario para la representación legal.
              </p>

              <h2 className="mt-8 font-serif text-2xl font-bold">4. Seguridad de Datos</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Implementamos medidas de seguridad técnicas, administrativas y físicas para proteger su información
                personal contra acceso no autorizado, pérdida o alteración. Sin embargo, ningún método de transmisión
                por internet es 100% seguro.
              </p>

              <h2 className="mt-8 font-serif text-2xl font-bold">5. Sus Derechos</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">Usted tiene derecho a:</p>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>Acceder a su información personal</li>
                <li>Rectificar datos inexactos</li>
                <li>Solicitar la eliminación de sus datos</li>
                <li>Oponerse al tratamiento de su información</li>
                <li>Revocar su consentimiento en cualquier momento</li>
              </ul>

              <h2 className="mt-8 font-serif text-2xl font-bold">6. Cookies y Tecnologías Similares</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Nuestro sitio web puede utilizar cookies para mejorar la experiencia del usuario. Puede configurar su
                navegador para rechazar cookies, aunque esto puede afectar la funcionalidad del sitio.
              </p>

              <h2 className="mt-8 font-serif text-2xl font-bold">7. Cambios a esta Política</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Nos reservamos el derecho de actualizar esta política de privacidad periódicamente. Los cambios serán
                publicados en esta página con la fecha de actualización correspondiente.
              </p>

              <h2 className="mt-8 font-serif text-2xl font-bold">8. Contacto</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Si tiene preguntas sobre esta política de privacidad o el tratamiento de sus datos personales, puede
                contactarnos en:
              </p>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>Email: privacidad@bufetejuridico.com</li>
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
