"use client"

import { useState, useEffect } from "react"
import Testimonial from "./testimonial"
import AnimatedSection from "./animated-section"
import AnimatedText from "./animated-text"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    content:
      "Prince is an exceptional frontend developer who delivered our website ahead of schedule. His attention to detail and ability to translate our vision into a beautiful, functional site exceeded our expectations.",
    author: "Sarah Johnson",
    position: "Marketing Director",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    content:
      "Working with Prince was a pleasure. He's not only technically skilled but also communicates clearly throughout the project. The responsive design he created works flawlessly across all devices.",
    author: "Michael Chen",
    position: "Startup Founder",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    content:
      "Prince helped us modernize our outdated website with a fresh, clean design. His knowledge of current web standards and best practices was evident in the final product. Highly recommended!",
    author: "Amara Okafor",
    position: "Small Business Owner",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayCount, setDisplayCount] = useState(1)
  const [autoplay, setAutoplay] = useState(true)

  // Determine how many testimonials to show based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setDisplayCount(3)
      } else if (window.innerWidth >= 640) {
        setDisplayCount(2)
      } else {
        setDisplayCount(1)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex, autoplay])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (testimonials.length - displayCount + 1))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - displayCount : prevIndex - 1))
  }

  // Pause autoplay when user interacts with controls
  const handleControlClick = (callback: () => void) => {
    setAutoplay(false)
    callback()
    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => setAutoplay(true), 10000)
  }

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedText as="h2" className="text-3xl font-bold text-center mb-4">
          What People Say
        </AnimatedText>
        <AnimatedText className="text-foreground/80 text-center max-w-2xl mx-auto mb-12" delay={200}>
          Feedback from clients and colleagues I've had the pleasure to work with.
        </AnimatedText>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / displayCount)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full shrink-0 px-4" style={{ width: `${100 / displayCount}%` }}>
                  <AnimatedSection animation="fade-up" delay={index * 100}>
                    <Testimonial
                      content={testimonial.content}
                      author={testimonial.author}
                      position={testimonial.position}
                      image={testimonial.image}
                    />
                  </AnimatedSection>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation controls */}
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={() => handleControlClick(prevTestimonial)}
              className="p-2 rounded-full bg-background border border-border hover:bg-accent transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2 items-center">
              {Array.from({ length: testimonials.length - displayCount + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleControlClick(() => setCurrentIndex(index))}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index ? "w-6 bg-teal-600 dark:bg-teal-400" : "w-2 bg-border"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => handleControlClick(nextTestimonial)}
              className="p-2 rounded-full bg-background border border-border hover:bg-accent transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
