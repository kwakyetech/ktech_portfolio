"use client"

import type React from "react"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { cn } from "@/lib/utils"
import { type ReactNode, useRef, useState, useEffect } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  animation?: "fade-up" | "fade-in" | "slide-in-right" | "slide-in-left"
}

export default function AnimatedSection({
  children,
  className,
  delay = 0,
  animation = "fade-up",
}: AnimatedSectionProps) {
  const { ref, isIntersecting } = useIntersectionObserver()
  const [hasAnimated, setHasAnimated] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (isIntersecting && !hasAnimated) {
      timeoutRef.current = setTimeout(() => {
        setHasAnimated(true)
      }, delay)
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [isIntersecting, delay, hasAnimated])

  const getAnimationClasses = () => {
    switch (animation) {
      case "fade-up":
        return "opacity-0 translate-y-8 transition-all duration-700 ease-out"
      case "fade-in":
        return "opacity-0 transition-opacity duration-700 ease-out"
      case "slide-in-right":
        return "opacity-0 translate-x-8 transition-all duration-700 ease-out"
      case "slide-in-left":
        return "opacity-0 -translate-x-8 transition-all duration-700 ease-out"
      default:
        return "opacity-0 transition-opacity duration-700 ease-out"
    }
  }

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={cn(getAnimationClasses(), hasAnimated && "opacity-100 translate-y-0 translate-x-0", className)}
    >
      {children}
    </section>
  )
}
