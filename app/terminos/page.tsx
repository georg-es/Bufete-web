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
              <h2 className="font-serif text-2xl font-bold">1. Aceptación de los Términos de Servicio</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed text-justify">
              Al acceder, consultar o contratar los servicios jurídicos ofrecidos por el Bufete Jurídico, el usuario o potencial cliente manifiesta su aceptación plena e incondicional de los presentes Términos de Servicio. Estos términos constituyen el marco regulatorio preliminar que guía la relación profesional. Si el usuario no se encuentra en total acuerdo con alguna de las estipulaciones contenidas en este documento, se le insta a abstenerse de utilizar o solicitar nuestros servicios. La confianza depositada en nuestro bufete es el cimiento de nuestra operación, y esta se inicia con la comprensión y aceptación mutua de estas bases.
              </p>

              <h2 className="mt-8 font-serif text-2xl font-bold">2. Alcance y Formalización de los Servicios Legales</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed text-justify">
              Nuestro bufete proporciona una gama exhaustiva de servicios de asesoría, representación y litigio en diversas áreas del derecho, siempre bajo los más altos estándares de diligencia y ética profesional. La prestación efectiva y vinculante de los servicios está sujeta a una serie de procedimientos indispensables que garantizan la viabilidad y el rigor del encargo profesional:
              </p>
              <ul className="mt-4 space-y-2 text-muted-foreground text-justify">
                <li>1. Evaluación y Aceptación del Caso: Todo asunto requiere un análisis preliminar por parte de nuestro equipo para determinar su mérito legal, la ausencia de conflictos de interés y la capacidad técnica del bufete para asumir su representación. El bufete se reserva el derecho absoluto de aceptar o declinar cualquier caso.</li>
                <li>2. Formalización Contractual: La relación de servicios se perfecciona y se hace obligatoria para ambas partes únicamente mediante la firma de un Contrato de Prestación de Servicios Legales detallado.</li>
                <li>3. Cumplimiento Financiero: El inicio de la ejecución del encargo está supeditado al pago de los honorarios o anticipos acordados, conforme a las cláusulas estipuladas.</li>
                <li>4. Obligación de Cooperación: El cliente debe comprometerse a una colaboración activa, completa y oportuna en la provisión de toda la información, documentación y acceso a fuentes de prueba necesarias para la defensa exitosa de sus intereses.</li>
              </ul>

              <h2 className="mt-8 font-serif text-2xl font-bold">3. Establecimiento Formal de la Relación Abogado-Cliente y Confianza</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed text-justify">
                Reconocemos que la necesidad de asistencia legal a menudo surge en momentos de gran vulnerabilidad o complejidad vital. Por ello, la formalización de la relación es un acto de seguridad jurídica.

                La relación profesional, con todas las protecciones inherentes al secreto profesional y la confidencialidad, se establece de manera estricta y formal en el momento de la firma del Contrato de Servicios Legales.
              </p>
              <ul className="mt-4 space-y-2 text-muted-foreground text-justify">
                <li>1. Consulta Inicial (Pro-Bono o Retribuida): Es importante destacar que la consulta inicial, la recepción de información preliminar o la discusión de una potencial causa no constituyen, por sí mismas, el establecimiento automático de la relación abogado-cliente.</li>
                <li>2. Derecho de Reserva: Nuestro bufete, actuando siempre bajo las directrices éticas que rigen la profesión, se reserva la potestad discrecional de aceptar o declinar la asunción de cualquier encargo, incluso después de la consulta inicial, si se identifica algún impedimento ético, legal o de capacidad. Solo una vez firmado el contrato, asumimos plenamente la responsabilidad fiduciaria.</li>
              </ul>

              <h2 className="mt-8 font-serif text-2xl font-bold">4. Honorarios, Transparencia Financiera y Modalidades de Pago</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed text-justify">
                La transparencia en la gestión económica es un pilar de nuestra confianza profesional. Los honorarios se determinarán de forma clara, precisa y por escrito en el Contrato de Servicios.              </p>
              <ul className="mt-4 space-y-2 text-muted-foreground text-justify">
                <li>1. Detalle en el Contrato: El contrato especificará el método de cálculo, los costos directos asociados al caso (tales como tasas judiciales, peritajes, etc.) y la periodicidad de los pagos.</li>
                <li>2. Modalidades Profesionales: Nuestras estructuras de honorarios están diseñadas para adaptarse a la naturaleza y complejidad de cada asunto, incluyendo:</li>
                <li>Honorarios por Hora: Cálculo basado en el tiempo efectivo dedicado por los profesionales del bufete.</li>
                <li>Cuota Fija (Flat Fee): Un precio preacordado para servicios definidos y acotados.</li>
                <li>Honorarios Contingentes: Un porcentaje del resultado obtenido, aplicable solo a ciertos tipos de litigios y conforme a las regulaciones jurisdiccionales.</li>
                <li>Igualas de Asesoría Mensual: Una tarifa periódica para la consultoría legal continua de empresas o particulares.</li>
              </ul>

              <h2 className="mt-8 font-serif text-2xl font-bold">5. Compromisos Ineludibles del Cliente</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed text-justify">El éxito en cualquier procedimiento legal es una responsabilidad compartida. El cliente se compromete a cumplir rigurosamente con las siguientes obligaciones, entendiendo que su falta de cumplimiento puede comprometer la estrategia legal:</p>
              <ul className="mt-4 space-y-2 text-muted-foreground text-justify">
                <li>1. Veracidad Total y Completa: El cliente debe proporcionar al bufete información que sea veraz, completa y exacta en todos los aspectos relevantes para el caso. La omisión o falsedad de datos puede ser causa de terminación del servicio.</li>
                <li>2. Provisión Oportuna de Documentación: Entregar toda la documentación, evidencia, comunicaciones y antecedentes necesarios en los plazos requeridos por el bufete para cumplir con los términos procesales.</li>
                <li>3. Cumplimiento Económico: Abonar los honorarios, costas y gastos de manera puntual según lo estipulado en el contrato.</li>
                <li>4. Comunicación Constante: Mantener una comunicación fluida y efectiva con el abogado asignado y responder diligentemente a todos los requerimientos.</li>
                <li>5. Acogimiento de Estrategia: Seguir las recomendaciones y directrices legales proporcionadas por el bufete, reconociendo la experticia del profesional en la materia.</li>
              </ul>

              <h2 className="mt-8 font-serif text-2xl font-bold">6. Compromiso Inquebrantable de Confidencialidad y Secreto Profesional</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed text-justify">
                La protección de los datos y la información de nuestros clientes es una obligación ética, legal y la máxima prioridad de nuestro bufete, especialmente dado el carácter sensible y personal de los asuntos jurídicos.</p>
              <ul className="mt-4 space-y-2 text-muted-foreground text-justify">
                <li>1. Aplicación Estricta: Toda comunicación, documento, dato personal y hecho revelado por el cliente al bufete, o descubierto durante la prestación del servicio, está protegido por el Secreto Profesional y la normativa de protección de datos aplicable en la jurisdicción.</li>
                <li>2. Garantía: El bufete se compromete a mantener la más estricta reserva y confidencialidad sobre todos los asuntos del cliente, empleando medidas de seguridad técnica y organizativa rigurosas para prevenir cualquier acceso o divulgación no autorizada. Esta obligación se mantiene indefinidamente, incluso después de la terminación de la relación profesional.</li>
              </ul>

              <h2 className="mt-8 font-serif text-2xl font-bold">7. Limitación de Responsabilidad y Naturaleza Incierta del Resultado</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed text-justify">
                El ejercicio de la abogacía es una obligación de medios, no de resultados. Si bien nuestro equipo dedica toda su experiencia, conocimiento y diligencia para obtener el resultado más favorable posible, es fundamental que el cliente comprenda que:
              </p>
              <ul className="mt-4 space-y-2 text-muted-foreground text-justify">
                <li>1. Imposibilidad de Garantía: No podemos emitir ni emitiremos ninguna garantía sobre el resultado final de un procedimiento legal, arbitraje o negociación.</li>
                <li>2. Factores Externos: El resultado de cualquier disputa depende de variables múltiples e incontrolables por el bufete, incluyendo la interpretación legal de los hechos por parte de terceros (jueces, árbitros, autoridades), la aparición de nuevas evidencias y la conducta de la contraparte..</li>
                <li>3. Exclusividad del Asesoramiento: La responsabilidad del bufete se limita estrictamente a la prestación del servicio legal profesional conforme a la lex artis (el estándar de práctica profesional) y a los términos acordados en el contrato.</li>
              </ul>

              <h2 className="mt-8 font-serif text-2xl font-bold">8. Procedimiento de Terminación Formal de los Servicios</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed text-justify">
                La relación profesional es revocable, pero su terminación debe seguir un protocolo formal que proteja los intereses de ambas partes.
              </p>
              <ul className="mt-4 space-y-2 text-muted-foreground text-justify">
                <li>1. Base Contractual: Los procedimientos detallados para la terminación, incluyendo el cálculo de honorarios pendientes, la entrega de documentación y las notificaciones requeridas, se establecerán en el Contrato de Servicios Legales.</li>
                <li>2. Deberes Éticos: La terminación de los servicios se efectuará respetando siempre las obligaciones éticas y legales vigentes, asegurando que el cliente no quede en estado de indefensión legal.</li>
                <li>3. Retención de Documentos: El bufete se reserva el derecho de retener documentos de trabajo hasta que se hayan liquidado los honorarios pendientes, conforme a la normativa aplicable en la jurisdicción.</li>
              </ul>

              <h2 className="mt-8 font-serif text-2xl font-bold">9. Jurisdicción Competente y Ley Aplicable</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed text-justify">
                Estos Términos de Servicio y, consecuentemente, el Contrato de Servicios Legales se interpretarán y regirán exclusivamente bajo las leyes sustantivas y procesales aplicables en la jurisdicción donde el bufete tiene su sede principal y donde se prestaron los servicios. Toda disputa, controversia o reclamo que surja de la interpretación o ejecución de estos términos será sometida a la competencia exclusiva de los tribunales competentes de dicha jurisdicción, renunciando expresamente las partes a cualquier otro fuero que pudiera corresponderles por razón de su domicilio presente o futuro.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
