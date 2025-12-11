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
  
  const longPressTimer = React.useRef<NodeJS.Timeout | null>(null)
  const isLongPress = React.useRef(false)

  // -- Lógica de Arrastre (Swipe) --
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true)
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    setStartX(clientX)
    isLongPress.current = false

    longPressTimer.current = setTimeout(() => {
      isLongPress.current = true
    }, 400) // Reduje un poco el tiempo para que sea más responsivo
  }

  const handleDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(false)
    if (longPressTimer.current) clearTimeout(longPressTimer.current)
    if (isLongPress.current) return

    const clientX = 'changedTouches' in e ? e.changedTouches[0].clientX : (e as React.MouseEvent).clientX
    const diff = startX - clientX

    if (Math.abs(diff) > 50) {
      if (diff > 0) setActiveIndex((prev) => (prev === children.length - 1 ? 0 : prev + 1))
      else setActiveIndex((prev) => (prev === 0 ? children.length - 1 : prev - 1))
    }
  }

  const handleCardClick = (index: number) => {
    if (Math.abs(startX - (startX)) > 5 || isLongPress.current) return
    setActiveIndex(index)
  }

  const handleActiveCardInteraction = () => {
    if (isLongPress.current) setModalOpen(true)
  }

  const handleMove = () => {
    if (longPressTimer.current) { /* cancelar si se mueve mucho */ }
  }

  return (
    <>
      <div 
        className={cn("relative mx-auto max-w-6xl py-12 overflow-hidden select-none cursor-grab active:cursor-grabbing", className)}
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
                onClick={() => { if (isActive) handleActiveCardInteraction(); else handleCardClick(index) }}
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
                    <div className="absolute -bottom-10 left-0 right-0 text-center text-xs text-muted-foreground animate-pulse font-medium">
                        Mantén presionado para leer más
                    </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* MODAL AMPLIADO */}
      {modalOpen && (
        <div 
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-300"
            onClick={() => setModalOpen(false)}
        >
            <div 
                // Añadimos una clase 'expanded-card-modal' para controlar estilos hijos
                className="expanded-card-modal relative w-full max-w-lg max-h-[85vh] overflow-y-auto rounded-xl bg-card p-1 shadow-2xl animate-in zoom-in-95 duration-300 scrollbar-hide"
                onClick={(e) => e.stopPropagation()}
            >
                <button 
                    onClick={() => setModalOpen(false)}
                    className="absolute top-4 right-4 z-50 rounded-full bg-black/10 p-2 text-foreground hover:bg-black/20 transition-colors"
                >
                    <X className="h-6 w-6" />
                </button>
                
                {/* Renderizamos el hijo. 
                   IMPORTANTE: El CSS en page.tsx usará la clase .expanded-card-modal 
                   para quitar el line-clamp.
                */}
                <div className="h-auto p-2">
                  {children[activeIndex]}
                </div>
            </div>
        </div>
      )}
    </>
  )
}