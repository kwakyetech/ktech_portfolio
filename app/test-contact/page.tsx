"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { sendEmail } from "@/app/actions/send-email"
import Link from "next/link"

export default function TestContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null)

  const handleTestSubmission = async () => {
    setIsSubmitting(true)
    setResult(null)

    try {
      const formData = new FormData()
      formData.append("name", "Test User")
      formData.append("email", "test@example.com")
      formData.append(
        "message",
        "This is a test message to verify that the contact form is working correctly. If you receive this email, the form submission system is functioning properly!",
      )

      const response = await sendEmail(formData)
      setResult(response)
    } catch (error) {
      setResult({
        success: false,
        message: "An error occurred during testing: " + (error as Error).message,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleCustomTest = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setResult(null)

    const formData = new FormData(e.currentTarget)

    try {
      const response = await sendEmail(formData)
      setResult(response)
    } catch (error) {
      setResult({
        success: false,
        message: "An error occurred: " + (error as Error).message,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 md:px-6 max-w-2xl">
        <div className="mb-8">
          <Link
            href="/"
            className="text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300 inline-flex items-center mb-4"
          >
            ← Back to Home
          </Link>
          <h1 className="text-3xl font-bold mb-4">Contact Form Test</h1>
          <p className="text-muted-foreground">
            Use this page to test the contact form functionality and verify email delivery to kwakye792@gmail.com
          </p>
        </div>

        {/* Quick Test Button */}
        <div className="bg-card border border-border rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Quick Test</h2>
          <p className="text-muted-foreground mb-4">Click the button below to send a pre-filled test message:</p>
          <Button
            onClick={handleTestSubmission}
            disabled={isSubmitting}
            className="bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600"
          >
            {isSubmitting ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending Test...
              </span>
            ) : (
              "Send Test Message"
            )}
          </Button>
        </div>

        {/* Custom Test Form */}
        <div className="bg-card border border-border rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Custom Test Message</h2>
          <p className="text-muted-foreground mb-4">Fill out the form below to send a custom test message:</p>

          <form onSubmit={handleCustomTest} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <Input id="name" name="name" placeholder="Your name" defaultValue="Test User" required />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                defaultValue="test@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Your test message..."
                defaultValue="This is a custom test message to verify the contact form functionality."
                required
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600"
            >
              {isSubmitting ? "Sending..." : "Send Custom Test"}
            </Button>
          </form>
        </div>

        {/* Result Display */}
        {result && (
          <div
            className={`p-4 rounded-lg border ${
              result.success
                ? "bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800"
                : "bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800"
            }`}
          >
            <div className="flex items-center mb-2">
              {result.success ? (
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
              <span className="font-medium">{result.success ? "Test Successful!" : "Test Failed"}</span>
            </div>
            <p className="text-sm">{result.message}</p>

            {result.success && (
              <div className="mt-4 p-3 bg-white/50 dark:bg-black/20 rounded border">
                <h4 className="font-medium mb-2">What to check:</h4>
                <ul className="text-sm space-y-1">
                  <li>• Check your Gmail inbox for the test message</li>
                  <li>• Look for the subject: "Portfolio Contact: New message from Test User"</li>
                  <li>• Verify all form data is included in the email</li>
                  <li>• Check if the auto-response was sent to the test email</li>
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Instructions */}
        <div className="bg-muted rounded-lg p-6 mt-8">
          <h3 className="text-lg font-semibold mb-3">Testing Instructions</h3>
          <div className="space-y-3 text-sm text-muted-foreground">
            <div>
              <strong className="text-foreground">Step 1:</strong> Click "Send Test Message" or fill out the custom form
            </div>
            <div>
              <strong className="text-foreground">Step 2:</strong> Check your Gmail inbox (kwakye792@gmail.com) for the
              test email
            </div>
            <div>
              <strong className="text-foreground">Step 3:</strong> Verify the email contains all the form data in a
              table format
            </div>
            <div>
              <strong className="text-foreground">Step 4:</strong> Check if an auto-response was sent to the test email
              address
            </div>
            <div>
              <strong className="text-foreground">Note:</strong> It may take a few minutes for emails to arrive. Check
              your spam folder if you don't see them in your inbox.
            </div>
          </div>
        </div>

        {/* Troubleshooting */}
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mt-6">
          <h3 className="text-lg font-semibold mb-3 text-yellow-800 dark:text-yellow-200">Troubleshooting</h3>
          <div className="space-y-2 text-sm text-yellow-700 dark:text-yellow-300">
            <p>
              <strong>If emails aren't arriving:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Check your spam/junk folder</li>
              <li>Verify kwakye792@gmail.com is the correct email address</li>
              <li>FormSubmit.co may have rate limits - wait a few minutes between tests</li>
              <li>Try using a different test email address</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
