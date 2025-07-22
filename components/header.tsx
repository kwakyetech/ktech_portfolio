"use client"

import { useState } from "react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import MobileMenu from "@/components/mobile-menu"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      <nav className="sticky top-0 z-10 bg-background/90 backdrop-blur-sm border-b border-border py-4">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            <Link
              href="/"
              className="text-xl font-bold text-teal-600 dark:text-teal-400 transition-all duration-300 hover:scale-105"
            >
              PKO
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/#about"
                className="text-foreground/80 hover:text-teal-600 dark:hover:text-teal-400 transition-colors hover:scale-105 duration-300"
              >
                About
              </Link>
              <Link
                href="/#skills"
                className="text-foreground/80 hover:text-teal-600 dark:hover:text-teal-400 transition-colors hover:scale-105 duration-300"
              >
                Skills
              </Link>
              <Link
                href="/#experience"
                className="text-foreground/80 hover:text-teal-600 dark:hover:text-teal-400 transition-colors hover:scale-105 duration-300"
              >
                Experience
              </Link>
              <Link
                href="/#journey"
                className="text-foreground/80 hover:text-teal-600 dark:hover:text-teal-400 transition-colors hover:scale-105 duration-300"
              >
                Journey
              </Link>
              <Link
                href="/#contact"
                className="text-foreground/80 hover:text-teal-600 dark:hover:text-teal-400 transition-colors hover:scale-105 duration-300"
              >
                Contact
              </Link>
              <Link
                href="/blog"
                className="text-foreground/80 hover:text-teal-600 dark:hover:text-teal-400 transition-colors hover:scale-105 duration-300"
              >
                Blog
              </Link>
              <ThemeToggle />
            </div>
            <div className="md:hidden flex items-center space-x-4">
              <ThemeToggle />
              <button
                className="text-foreground/80 transition-transform duration-300 hover:scale-110"
                aria-label="Toggle menu"
                onClick={toggleMobileMenu}
                aria-expanded={isMobileMenuOpen}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-menu"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  )
}
