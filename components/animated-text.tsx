"use client"

import type React from "react"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { cn } from "@/lib/utils"
import { type ReactNode, useRef, useState, useEffect } from "react"

interface AnimatedTextProps {
  children: ReactNode
  className?: string
  delay?: number
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"
}

export default function AnimatedText({ children, className, delay = 0, as: Component = "p" }: AnimatedTextProps) {
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

  return (
    <Component
      ref={ref as React.RefObject<HTMLElement>}
      className={cn(
        "opacity-0 translate-y-4 transition-all duration-700 ease-out",
        hasAnimated && "opacity-100 translate-y-0",
        className,
      )}
    >
      {children}
    </Component>
  )
}
