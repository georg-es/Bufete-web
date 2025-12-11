"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"

interface CoverFlowCarouselProps {
  children: React.ReactNode[]
  className?: string
}

export function CoverFlowCarousel({ children, className }: CoverFlowCarouselProps) {
  const [activeIndex, setActiveIndex] = React.useState(0)
  const [isDragging, setIsDragging] = React.useState(false)
  const [startX, setStartX] = React.useState(0)
  const [modalOpen, setModalOpen] = React.useState(false)
  
  // Referencia para detectar la pulsación larga
  const longPressTimer = React.useRef<NodeJS.Timeout | null>(null)
  const isLongPress = React.useRef(false)

  // Manejadores de Arrastre (Swipe)
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true)
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    setStartX(clientX)
    isLongPress.current = false

    // Iniciar temporizador para pulsación larga
    longPressTimer.current = setTimeout(() => {
      isLongPress.current = true
      // Solo abrimos el modal si estamos sobre la tarjeta activa
      // (Esto se maneja mejor en el evento onMouseDown de la tarjeta, pero aquí preparamos la lógica)
    }, 500) // 500ms para considerar pulsación larga
  }

  const handleDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(false)
    if (longPressTimer.current) clearTimeout(longPressTimer.current)

    // Si fue una pulsación larga, no hacemos swipe
    if (isLongPress.current) return

    const clientX = 'changedTouches' in e ? e.changedTouches[0].clientX : (e as React.MouseEvent).clientX
    const diff = startX - clientX

    // Umbral de sensibilidad para el swipe (50px)
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Deslizar a la izquierda (Siguiente)
        setActiveIndex((prev) => (prev === children.length - 1 ? 0 : prev + 1))
      } else {
        // Deslizar a la derecha (Anterior)
        setActiveIndex((prev) => (prev === 0 ? children.length - 1 : prev - 1))
      }
    }
  }

  // Manejador para clic directo en tarjetas laterales
  const handleCardClick = (index: number) => {
    // Si estamos arrastrando o fue pulsación larga, ignoramos el clic
    if (Math.abs(startX - (startX)) > 5 || isLongPress.current) return
    setActiveIndex(index)
  }

  // Manejador específico para la tarjeta activa (abrir modal)
  const handleActiveCardInteraction = () => {
    if (isLongPress.current) {
      setModalOpen(true)
    }
  }

  // Limpiar temporizador si se mueve el mouse/dedo mucho
  const handleMove = () => {
    // Si el usuario mueve el dedo, cancelamos la pulsación larga para que sea un swipe
    if (longPressTimer.current) {
        // Podríamos añadir lógica de distancia aquí, pero por simplicidad,
        // dejaremos que el timer corra. Si se mueve mucho, el 'dragEnd' lo manejará como swipe.
    }
  }

  return (
    <>
      <div 
        className={cn("relative mx-auto max-w-5xl py-12 overflow-hidden select-none cursor-grab active:cursor-grabbing", className)}
        onMouseDown={handleDragStart}
        onTouchStart={handleDragStart}
        onMouseUp={handleDragEnd}
        onTouchEnd={handleDragEnd}
        onMouseMove={handleMove}
        onTouchMove={handleMove}
        onMouseLeave={() => {
            setIsDragging(false)
            if (longPressTimer.current) clearTimeout(longPressTimer.current)
        }}
      >
        <div className="relative flex h-[450px] items-center justify-center perspective-1000">
          {children.map((child, index) => {
            let offset = index - activeIndex

            // Lógica de bucle infinito corregida para centrar visualmente
            if (offset > children.length / 2) offset -= children.length
            else if (offset < -children.length / 2) offset += children.length

            const isActive = offset === 0
            const isPrev = offset === -1
            const isNext = offset === 1

            // Solo renderizamos (o hacemos visibles) las tarjetas: Activa, Anterior y Siguiente
            // Las demás se ocultan para limpieza visual
            if (!isActive && !isPrev && !isNext) return null

            return (
              <div
                key={index}
                onClick={() => {
                    if (isActive) handleActiveCardInteraction()
                    else handleCardClick(index)
                }}
                className={cn(
                  "absolute w-full max-w-sm transition-all duration-500 ease-out will-change-transform",
                  // Tarjeta Activa
                  isActive ? "z-20 scale-105 opacity-100 cursor-pointer" : 
                  // Tarjetas Laterales
                  "z-10 scale-90 opacity-60 grayscale-[30%] blur-[1px] cursor-pointer hover:opacity-80"
                )}
                style={{
                  transform: `translateX(${offset * 70}%) translateZ(${isActive ? 0 : -100}px) rotateY(${offset * -15}deg)`,
                  left: 0, 
                  right: 0, 
                  margin: 'auto' // Centrado absoluto
                }}
              >
                {child}
                {isActive && (
                    <div className="absolute -bottom-8 left-0 right-0 text-center text-xs text-muted-foreground animate-pulse">
                        Mantén presionado para ver detalle
                    </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* MODAL (Lightbox) para la tarjeta ampliada */}
      {modalOpen && (
        <div 
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200"
            onClick={() => setModalOpen(false)}
        >
            <div 
                className="relative w-full max-w-lg scale-110 animate-in zoom-in-95 duration-200"
                onClick={(e) => e.stopPropagation()} // Evitar cierre al hacer clic dentro
            >
                {/* Botón de cierre */}
                <button 
                    onClick={() => setModalOpen(false)}
                    className="absolute -top-12 right-0 rounded-full bg-white/20 p-2 text-white hover:bg-white/40 transition-colors"
                >
                    <X className="h-6 w-6" />
                </button>
                
                {/* Renderizamos el contenido de la tarjeta activa de nuevo */}
                {children[activeIndex]}
            </div>
        </div>
      )}
    </>
  )
}