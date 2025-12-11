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
  const [startY, setStartY] = React.useState(0) // Nuevo: Para detectar scroll vertical
  const [modalOpen, setModalOpen] = React.useState(false)
  
  const longPressTimer = React.useRef<NodeJS.Timeout | null>(null)
  const isLongPress = React.useRef(false)
  const isScrolling = React.useRef(false) // Nuevo: Saber si el usuario está haciendo scroll

  // -- INICIO DEL TOQUE / CLIC --
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true)
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY
    
    setStartX(clientX)
    setStartY(clientY)
    
    isLongPress.current = false
    isScrolling.current = false

    // Iniciamos el temporizador. Si pasa el tiempo, es un Long Press.
    longPressTimer.current = setTimeout(() => {
      // Solo activamos Long Press si NO se está moviendo mucho (scroll/swipe)
      if (!isScrolling.current) {
        isLongPress.current = true
        // Opcional: Vibración en móviles si lo soportan
        if (typeof navigator !== 'undefined' && navigator.vibrate) {
             navigator.vibrate(50); 
        }
      }
    }, 500)
  }

  // -- MOVIMIENTO (Tolerancia a temblores) --
  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return

    const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX
    const clientY = 'touches' in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY
    
    const diffX = Math.abs(startX - clientX)
    const diffY = Math.abs(startY - clientY)

    // Si se mueve más de 10px, ya no es un "click estático" ni un "long press estático"
    if (diffX > 10 || diffY > 10) {
        isScrolling.current = true // Marcamos que hay movimiento
        if (longPressTimer.current) clearTimeout(longPressTimer.current) // Cancelamos el long press
    }
  }

  // -- FIN DEL TOQUE --
  const handleDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(false)
    if (longPressTimer.current) clearTimeout(longPressTimer.current)

    // Si detectamos que fue un Long Press válido, detenemos aquí.
    // La acción de abrir el modal se maneja en el onClick o onTouchEnd específico.
    if (isLongPress.current) return

    const clientX = 'changedTouches' in e ? e.changedTouches[0].clientX : (e as React.MouseEvent).clientX
    const diff = startX - clientX

    // Lógica de Swipe (solo si fue un movimiento horizontal claro)
    if (Math.abs(diff) > 50 && isScrolling.current) {
      if (diff > 0) setActiveIndex((prev) => (prev === children.length - 1 ? 0 : prev + 1))
      else setActiveIndex((prev) => (prev === 0 ? children.length - 1 : prev - 1))
    }
  }

  // -- MANEJADOR DE CLIC / APERTURA --
  // Este evento se dispara al soltar el dedo si no hubo mucho movimiento
  const handleCardInteraction = (index: number) => {
    // Si fue un Long Press sobre la tarjeta activa, abrimos modal
    if (isLongPress.current && index === activeIndex) {
        setModalOpen(true)
        isLongPress.current = false // Reseteamos
        return
    }

    // Si NO fue Long Press y NO fue arrastre (es un tap rápido)
    if (!isLongPress.current && !isScrolling.current) {
        if (index === activeIndex) {
            // Tap en la tarjeta central -> No hace nada (o podrías hacer que abra el modal también si quieres)
        } else {
            // Tap en laterales -> Navega
            setActiveIndex(index)
        }
    }
  }

  return (
    <>
      <div 
        className={cn("relative mx-auto max-w-6xl py-12 overflow-visible select-none touch-pan-y", className)}
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
        <div className="relative flex h-[450px] items-center justify-center perspective-[1200px]">
          {children.map((child, index) => {
            let offset = index - activeIndex
            if (offset > children.length / 2) offset -= children.length
            else if (offset < -children.length / 2) offset += children.length

            const isActive = offset === 0
            const isPrev = offset === -1
            const isNext = offset === 1

            if (!isActive && !isPrev && !isNext) return null

            return (
              <div
                key={index}
                // IMPORTANTE: Prevenir el menú contextual (clic derecho o long press nativo)
                onContextMenu={(e) => { e.preventDefault(); e.stopPropagation(); }}
                onClick={(e) => {
                    e.stopPropagation()
                    handleCardInteraction(index)
                }}
                className={cn(
                  "absolute w-full max-w-sm transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] will-change-transform",
                  isActive ? "z-20 opacity-100 cursor-pointer" : "z-10 opacity-50 blur-[2px] cursor-pointer hover:opacity-75 hover:blur-none"
                )}
                style={{
                  transform: `translateX(${offset * 110}%) scale(${isActive ? 1 : 0.85}) translateZ(${isActive ? 0 : -50}px) rotateY(${offset * 5}deg)`,
                  left: 0, right: 0, margin: 'auto'
                }}
              >
                {child}
                {isActive && (
                    <div className="absolute -bottom-10 left-0 right-0 text-center text-xs text-muted-foreground animate-pulse font-medium pointer-events-none">
                        Mantén presionado para ampliar
                    </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* MODAL */}
      {modalOpen && (
        <div 
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-300 touch-none"
            onClick={() => setModalOpen(false)}
        >
            <div 
                className="expanded-card-modal relative w-full max-w-lg max-h-[85vh] overflow-y-auto rounded-xl bg-card p-1 shadow-2xl animate-in zoom-in-95 duration-300 scrollbar-hide"
                onClick={(e) => e.stopPropagation()}
            >
                <button 
                    onClick={() => setModalOpen(false)}
                    className="absolute top-4 right-4 z-50 rounded-full bg-black/10 p-2 text-foreground hover:bg-black/20 transition-colors"
                >
                    <X className="h-6 w-6" />
                </button>
                
                <div className="h-auto p-2">
                  {children[activeIndex]}
                </div>
            </div>
        </div>
      )}
    </>
  )
}