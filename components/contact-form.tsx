"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2 } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Recolectar datos
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())

    try {
      // Llamada a NUESTRA propia API interna
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setIsSubmitted(true)
        // Opcional: e.currentTarget.reset()
      } else {
        alert("Hubo un error al enviar el mensaje. Intente nuevamente.")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Error de conexión.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="rounded-lg bg-accent/10 p-8 text-center animate-in fade-in zoom-in duration-300">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
          <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-4 font-serif text-xl font-semibold">Mensaje Enviado</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Su consulta ha sido enviada directamente a nuestro equipo legal. Le responderemos a la brevedad.
        </p>
        <Button variant="outline" className="mt-6" onClick={() => setIsSubmitted(false)}>
          Enviar otro mensaje
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Campos del formulario (Igual que antes) */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="nombre">Nombre Completo *</Label>
          <Input id="nombre" name="nombre" placeholder="Juan Pérez" required disabled={isSubmitting} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Correo Electrónico *</Label>
          <Input id="email" name="email" type="email" placeholder="juan@ejemplo.com" required disabled={isSubmitting} />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="telefono">Teléfono *</Label>
          <Input id="telefono" name="telefono" type="tel" placeholder="+52 55 1234 5678" required disabled={isSubmitting} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="area">Área de Interés *</Label>
          <Select name="area" required disabled={isSubmitting}>
            <SelectTrigger>
              <SelectValue placeholder="Seleccione un área" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="civil">Derecho Civil</SelectItem>
              <SelectItem value="penal">Derecho Penal</SelectItem>
              <SelectItem value="laboral">Derecho Laboral</SelectItem>
              <SelectItem value="familia">Derecho de Familia</SelectItem>
              <SelectItem value="corporativo">Derecho Corporativo</SelectItem>
              <SelectItem value="otro">Otro</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="asunto">Asunto *</Label>
        <Input id="asunto" name="asunto" placeholder="Breve descripción del asunto" required disabled={isSubmitting} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="mensaje">Mensaje *</Label>
        <Textarea
          id="mensaje"
          name="mensaje"
          placeholder="Describa su situación..."
          className="min-h-[150px]"
          required
          disabled={isSubmitting}
        />
      </div>

       <div className="space-y-2">
        <Label htmlFor="preferencia">Preferencia de Contacto</Label>
        <Select name="preferencia" disabled={isSubmitting}>
          <SelectTrigger>
            <SelectValue placeholder="¿Cómo prefiere que le contactemos?" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="telefono">Teléfono</SelectItem>
            <SelectItem value="email">Email</SelectItem>
            <SelectItem value="whatsapp">WhatsApp</SelectItem>
            <SelectItem value="cualquiera">Cualquiera</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-start gap-2">
        <input type="checkbox" id="privacidad" name="privacidad" required className="mt-1 accent-primary" disabled={isSubmitting} />
        <a href="/privacidad" className="text-accent hover:underline font-medium" target="_blank">
          política de privacidad
        </a>
      </div>

      <Button type="submit" size="lg" className="w-full gap-2" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Enviando...
          </>
        ) : (
          "Enviar Consulta"
        )}
      </Button>
    </form>
  )
}