"use client"

import type React from "react"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { useState, useEffect } from "react"

interface SkillBarProps {
  name: string
  percentage: number
}

export default function SkillBar({ name, percentage }: SkillBarProps) {
  const { ref, isIntersecting } = useIntersectionObserver()
  const [width, setWidth] = useState(0)

  useEffect(() => {
    if (isIntersecting) {
      const timer = setTimeout(() => {
        setWidth(percentage)
      }, 200)
      return () => clearTimeout(timer)
    }
    return undefined
  }, [isIntersecting, percentage])

  return (
    <div className="space-y-2" ref={ref as React.RefObject<HTMLDivElement>}>
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-sm font-medium text-foreground/70">{width}%</span>
      </div>
      <div className="h-2 bg-muted-foreground/20 rounded-full overflow-hidden dark:bg-muted-foreground/10">
        <div
          className="h-full bg-teal-600 dark:bg-teal-500 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  )
}
