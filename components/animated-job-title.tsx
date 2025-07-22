"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const jobTitles = ["Frontend Developer", "Digital Marketer", "Web Designer", "UI/UX Designer", "Graphic Designer"]

export default function AnimatedJobTitle() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % jobTitles.length)
        setIsVisible(true)
      }, 500) // Wait for exit animation to complete
    }, 3000) // Change every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-[40px] md:h-[48px] flex items-center">
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.span
            key={currentIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-teal-600 dark:text-teal-400 text-4xl md:text-5xl font-bold"
          >
            {jobTitles[currentIndex]}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  )
}
