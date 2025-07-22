"use client"

import Image from "next/image"
import { useState } from "react"

interface ResponsiveImageProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
  containerClassName?: string
}

export default function ResponsiveImage({
  src,
  alt,
  className = "",
  priority = false,
  containerClassName = "",
}: ResponsiveImageProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className={`relative w-full h-full ${containerClassName}`}>
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        fill
        priority={priority}
        className={`duration-700 ease-in-out ${isLoading ? "scale-110 blur-sm" : "scale-100 blur-0"} ${className}`}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  )
}
