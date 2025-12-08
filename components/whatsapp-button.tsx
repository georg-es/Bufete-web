"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppButton() {
  const handleClick = () => {
    // Replace with actual WhatsApp number
    const phoneNumber = "68178670"
    const message = "Hola, me gustaría solicitar una consulta legal."
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <Button
      onClick={handleClick}
      size="lg"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-green-500 p-0 shadow-lg hover:bg-green-600"
    >
      <MessageCircle className="h-6 w-6 text-white" />
      <span className="sr-only">Contactar por WhatsApp</span>
    </Button>
  )
}
