"use client"

import { Button } from "@/components/ui/button"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "¿Cuánto cuesta la primera consulta?",
      answer:
        "La primera consulta es completamente gratuita y sin compromiso. Durante esta reunión, evaluaremos su caso, le explicaremos las opciones disponibles y le proporcionaremos un presupuesto claro y transparente para nuestros servicios.",
    },
    {
      question: "¿Cuánto tiempo tarda en resolverse un caso legal?",
      answer:
        "El tiempo de resolución varía según la complejidad del caso y el área legal. Algunos asuntos pueden resolverse en semanas mediante negociación, mientras que litigios complejos pueden extenderse varios meses o años. Durante la consulta inicial, le proporcionaremos un estimado basado en su situación específica.",
    },
    {
      question: "¿Qué documentos necesito para la consulta inicial?",
      answer:
        "Le recomendamos traer cualquier documento relacionado con su caso: contratos, notificaciones legales, correspondencia, evidencias, identificación oficial y cualquier otro material relevante. Sin embargo, si no cuenta con documentación, aún podemos realizar la consulta inicial y orientarle sobre qué necesita.",
    },
    {
      question: "¿Ofrecen planes de pago o facilidades?",
      answer:
        "Sí, entendemos que los servicios legales pueden representar una inversión significativa. Ofrecemos diversas opciones de pago y planes flexibles adaptados a sus necesidades. Además, algunos casos pueden manejarse con honorarios contingentes, donde solo cobramos si ganamos su caso.",
    },
    {
      question: "¿Cómo garantizan la confidencialidad de mi información?",
      answer:
        "La confidencialidad es un pilar fundamental de nuestra práctica. Toda la información compartida está protegida por el secreto profesional abogado-cliente, establecido por ley. Implementamos estrictos protocolos de seguridad y nunca compartimos su información sin su consentimiento expreso.",
    },
    {
      question: "¿Qué sucede si mi caso requiere experiencia en múltiples áreas del derecho?",
      answer:
        "Nuestro bufete cuenta con abogados especializados en todas las áreas principales del derecho. Cuando un caso requiere conocimientos multidisciplinarios, formamos un equipo integrado que trabaja de manera coordinada para brindarle la mejor representación posible.",
    },
    {
      question: "¿Pueden representarme si vivo en otra ciudad o estado?",
      answer:
        "Sí, manejamos casos en todo el país. Contamos con la infraestructura tecnológica para realizar consultas virtuales y coordinarnos a distancia. Además, tenemos una red de colaboradores en otras jurisdicciones cuando es necesaria presencia física en tribunales locales.",
    },
    {
      question: "¿Cuál es su tasa de éxito?",
      answer:
        "Mantenemos una tasa de éxito del 98% en casos ganados y acuerdos favorables. Sin embargo, cada caso es único. Durante la consulta inicial, evaluaremos honestamente las probabilidades de éxito en su situación particular y le brindaremos expectativas realistas.",
    },
    {
      question: "¿Puedo cambiar de abogado si ya tengo uno asignado?",
      answer:
        "Sí, tiene el derecho legal de cambiar de representación en cualquier momento. Si no está satisfecho con su abogado actual, podemos revisar su caso, evaluar la situación y, si es apropiado, tomar la representación. Nos encargaremos de todos los trámites de transferencia necesarios.",
    },
    {
      question: "¿Qué debo hacer si recibí una notificación legal?",
      answer:
        "Lo más importante es actuar rápidamente. Las notificaciones legales generalmente tienen plazos estrictos para responder. Contáctenos inmediatamente y traiga la notificación a nuestra oficina. Evaluaremos la situación urgente y tomaremos las medidas necesarias para proteger sus derechos.",
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-balance md:text-4xl">Preguntas Frecuentes</h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Respuestas a las preguntas más comunes sobre nuestros servicios legales
          </p>
        </div>

        <div className="mt-12">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-lg border-2 px-6 transition-colors hover:border-accent/50"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">¿No encuentra la respuesta que busca?</p>
          <Button asChild variant="link" className="mt-2">
            <a href="/contacto">Contáctenos directamente</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
