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
              En GB Legal's, recopilamos únicamente la información estrictamente necesaria para brindarle una atención legal completa, profesional y personalizada. Estos datos pueden obtenerse a través de nuestros formularios web, correos electrónicos, reuniones (presenciales o virtuales), llamadas telefónicas o cualquier otro canal de comunicación oficial.            
              La información personal que podemos recopilar incluye:
              </p>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>1. Datos de Identificación: Nombre completo, número de cédula o pasaporte y nacionalidad.</li>
                <li>2. Datos de Contacto: Número de teléfono (móvil y fijo), dirección de correo electrónico y domicilio físico o fiscal.</li>
                <li>3. Información del Caso: Detalles específicos sobre su consulta jurídica, antecedentes, contrapartes y objetivos legales.</li>
                <li>4. Documentación de Soporte: Evidencias, contratos, notificaciones judiciales y cualquier otro documento entregado para el análisis o gestión de su expediente.</li>
                <li>5. Datos de Facturación: Información necesaria para el procesamiento de pagos y cumplimiento fiscal.</li>
              </ul>

              <h2 className="mt-8 font-serif text-2xl font-bold">2. Uso de la Información</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                La información recopilada será utilizada exclusivamente para fines legítimos vinculados a la prestación de nuestros servicios legales. Los usos principales incluyen:
              </p>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>1. Proveer asesoría jurídica, representación y defensa técnica en las áreas contratadas.</li>
                <li>2. Evaluar la viabilidad de sus asuntos legales y diseñar estrategias personalizadas.</li>
                <li>3. Redactar documentos legales, contratos y preparar expedientes para instancias judiciales o administrativas.</li>
                <li>4. Mantener una comunicación fluida sobre el estado y avances de sus procesos.</li>
                <li>5. Cumplir con las normativas de "Conozca a su Cliente", prevención de blanqueo de capitales y otras obligaciones regulatorias.</li>
                <li>6. Mejorar nuestros procesos internos y la calidad de atención al cliente.</li>
              </ul>

              <h2 className="mt-8 font-serif text-2xl font-bold">3. Confidencialidad y Secreto Profesional</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Entendemos que la confianza es la base de nuestra relación. Toda la información que usted comparte con GB Legal's está protegida por el Secreto Profesional Abogado-Cliente, amparado por las leyes vigentes.
              </p>  
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>1. Protección Absoluta: No divulgamos, vendemos ni alquilamos su información a terceros sin su consentimiento expreso y por escrito.</li>
                <li>2. Excepciones Necesarias: Solo compartiremos datos estrictamente necesarios con terceros colaboradores (como peritos, notarios o procuradores) cuando sea indispensable para la gestión de su caso, y siempre bajo estrictos acuerdos de confidencialidad.</li>
                <li>3. Mandato Legal: Únicamente revelaremos información si existe una orden judicial directa o una obligación legal ineludible que así lo exija.</li>
              </ul>
              
              <h2 className="mt-8 font-serif text-2xl font-bold">4. Seguridad de Datos y Protección Técnica</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
              Nos tomamos muy en serio la custodia de su información. Hemos implementado medidas de seguridad técnicas, administrativas y físicas robustas para proteger sus datos personales contra pérdida, robo, acceso no autorizado, divulgación, alteración o destrucción.
              </p>  
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>1. Tecnología Segura: Utilizamos sistemas de almacenamiento encriptados y protocolos de seguridad (SSL) en nuestras comunicaciones digitales.</li>
                <li>2. Acceso Restringido: El acceso a su expediente está limitado exclusivamente al personal autorizado que necesita conocer dicha información para trabajar en su caso.</li>
                <li>3. Respaldo de Información: Mantenemos copias de seguridad periódicas para prevenir la pérdida de datos críticos.</li>
                <li>4. Vigilancia Continua: Revisamos y actualizamos regularmente nuestros procedimientos de seguridad para adaptarnos a nuevas amenazas tecnológicas.</li>
              </ul>

              <h2 className="mt-8 font-serif text-2xl font-bold">5. Derechos del Titular de Datos</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed"> Usted mantiene el control total sobre su información personal. Conforme a la ley, tiene derecho a:</p>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>1. Acceso: Solicitar confirmación sobre si estamos tratando sus datos y obtener una copia de los mismos.</li>
                <li>2. Rectificación: Solicitar la corrección de datos inexactos, desactualizados o incompletos.</li>
                <li>3. Cancelación (Eliminación): Solicitar la supresión de sus datos de nuestros registros cuando ya no sean necesarios para los fines contratados o cuando la ley lo permita.</li>
                <li>4. Oposición: Oponerse al tratamiento de sus datos por motivos legítimos.</li>
                <li>5. Revocación: Retirar su consentimiento para el uso de sus datos en cualquier momento (sin carácter retroactivo).</li>
              </ul>

              <h2 className="mt-8 font-serif text-2xl font-bold">6. Uso de Cookies y Tecnologías Similares</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
              Nuestro sitio web emplea cookies y tecnologías similares para facilitar la navegación, analizar el tráfico del sitio y mejorar la experiencia del usuario. Estas herramientas no recolectan información confidencial del usuario. Usted puede configurar su navegador para rechazar las cookies, aunque esto podría limitar la funcionalidad de ciertas secciones de nuestra web.
              </p>

              <h2 className="mt-8 font-serif text-2xl font-bold">7. Actualizaciones de esta Política</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
              GB Legal's se reserva el derecho de modificar esta Política de Privacidad periódicamente para reflejar cambios legislativos, tecnológicos o en nuestras prácticas internas. La versión más reciente estará siempre disponible en este sitio web, indicando la fecha de la última actualización.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
