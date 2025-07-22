"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { sendEmail } from "@/app/actions/send-email"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const validateForm = () => {
    let valid = true
    const newErrors = { name: "", email: "", message: "" }

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
      valid = false
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters"
      valid = false
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
      valid = false
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
      valid = false
    }

    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
      valid = false
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      setIsSubmitting(true)
      setSubmitSuccess(false)
      setSubmitMessage("")

      try {
        const formDataToSend = new FormData()
        formDataToSend.append("name", formData.name.trim())
        formDataToSend.append("email", formData.email.trim())
        formDataToSend.append("message", formData.message.trim())

        const result = await sendEmail(formDataToSend)

        setIsSubmitting(false)

        if (result.success) {
          setSubmitSuccess(true)
          setSubmitMessage(result.message)
          setFormData({ name: "", email: "", message: "" })

          // Reset success message after 10 seconds
          setTimeout(() => {
            setSubmitSuccess(false)
            setSubmitMessage("")
          }, 10000)
        } else {
          setSubmitSuccess(false)
          setSubmitMessage(result.message)

          // Clear error message after 8 seconds
          setTimeout(() => {
            setSubmitMessage("")
          }, 8000)
        }
      } catch (error) {
        console.error("Error sending message:", error)
        setIsSubmitting(false)
        setSubmitSuccess(false)
        setSubmitMessage(
          "An unexpected error occurred. Please try again later or contact me directly at kwakye792@gmail.com",
        )

        // Clear error message after 8 seconds
        setTimeout(() => {
          setSubmitMessage("")
        }, 8000)
      }
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="transition-all duration-300 hover:translate-y-[-2px]">
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
            Name *
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`${errors.name ? "border-red-300 dark:border-red-700" : ""} focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 bg-background`}
            placeholder="Your full name"
            maxLength={100}
          />
          {errors.name && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>}
        </div>

        <div className="transition-all duration-300 hover:translate-y-[-2px]">
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
            Email *
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className={`${errors.email ? "border-red-300 dark:border-red-700" : ""} focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 bg-background`}
            placeholder="your.email@example.com"
            maxLength={100}
          />
          {errors.email && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>}
        </div>

        <div className="transition-all duration-300 hover:translate-y-[-2px]">
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
            Message *
          </label>
          <Textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className={`${errors.message ? "border-red-300 dark:border-red-700" : ""} focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 bg-background resize-vertical`}
            placeholder="Tell me about your project, questions, or how I can help you..."
            maxLength={1000}
          />
          <div className="flex justify-between items-center mt-1">
            {errors.message && <p className="text-sm text-red-600 dark:text-red-400">{errors.message}</p>}
            <p className="text-xs text-muted-foreground ml-auto">{formData.message.length}/1000 characters</p>
          </div>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 transition-all duration-300 hover:shadow-md transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isSubmitting ? (
            <span className="flex items-center">
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Sending Message...
            </span>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>

      {/* Success/Error Messages */}
      {submitMessage && (
        <div
          className={`mt-6 p-4 rounded-lg text-center animate-fadeIn ${
            submitSuccess
              ? "bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800"
              : "bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800"
          }`}
        >
          <div className="flex items-center justify-center mb-2">
            {submitSuccess ? (
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            ) : (
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            )}
            <span className="font-medium">
              {submitSuccess ? "Message Sent Successfully!" : "Message Failed to Send"}
            </span>
          </div>
          <p className="text-sm">{submitMessage}</p>
        </div>
      )}

      {/* Contact Info */}
      <div className="mt-8 p-4 bg-muted rounded-lg">
        <p className="text-sm text-muted-foreground text-center">
          <strong>Alternative:</strong> You can also reach me directly at{" "}
          <a href="mailto:kwakye792@gmail.com" className="text-teal-600 dark:text-teal-400 hover:underline">
            kwakye792@gmail.com
          </a>
        </p>
      </div>
    </div>
  )
}
