"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { FileIcon as FileHtml, FileCode, Braces, Github, GitBranch, Figma, Globe, Layers } from "lucide-react"

interface Logo {
  name: string
  icon: React.ReactNode
  size: number
  rotationSpeed: number
  color: string
}

export default function FloatingLogos() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Define the logos with their icons
  const logos: Logo[] = [
    {
      name: "HTML",
      icon: <FileHtml />,
      size: 36,
      rotationSpeed: 120,
      color: "text-orange-500 dark:text-orange-400",
    },
    {
      name: "CSS",
      icon: <FileCode />,
      size: 36,
      rotationSpeed: 120,
      color: "text-blue-500 dark:text-blue-400",
    },
    {
      name: "JavaScript",
      icon: <Braces />,
      size: 36,
      rotationSpeed: 120,
      color: "text-yellow-500 dark:text-yellow-400",
    },
    {
      name: "WordPress",
      icon: <Globe />,
      size: 36,
      rotationSpeed: 120,
      color: "text-blue-500 dark:text-blue-400",
    },
    {
      name: "Figma",
      icon: <Figma />,
      size: 36,
      rotationSpeed: 120,
      color: "text-pink-500 dark:text-pink-400",
    },
    {
      name: "GitHub",
      icon: <Github />,
      size: 36,
      rotationSpeed: 120,
      color: "text-gray-700 dark:text-gray-300",
    },
    {
      name: "Git",
      icon: <GitBranch />,
      size: 36,
      rotationSpeed: 120,
      color: "text-red-500 dark:text-red-400",
    },
    {
      name: "Photoshop",
      icon: <Layers />,
      size: 36,
      rotationSpeed: 120,
      color: "text-blue-500 dark:text-blue-400",
    },
  ]

  if (!mounted) return null

  // Hide the floating logos completely
  return null
}
