"use server"

export async function sendEmail(formData: FormData) {
  try {
    // Get form data
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const message = formData.get("message") as string

    // Validate form data
    if (!name || !email || !message) {
      return {
        success: false,
        message: "Please fill out all fields",
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return {
        success: false,
        message: "Please enter a valid email address",
      }
    }

    // Use FormSubmit.co to send email to your Gmail
    const response = await fetch("https://formsubmit.co/kwakye792@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
        _subject: `Portfolio Contact: New message from ${name}`,
        _template: "table",
        _captcha: "false", // Disable captcha for better UX
        _autoresponse: `Hi ${name},

Thank you for reaching out through my portfolio website! I've received your message and will get back to you as soon as possible.

Here's a copy of what you sent:
Name: ${name}
Email: ${email}
Message: ${message}

Best regards,
Prince Kwakye Ofori
Frontend Developer & Digital Marketer

---
This is an automated response. Please do not reply to this email.`,
        _next: "https://your-portfolio-domain.com/thank-you", // Optional: redirect after submission
      }),
    })

    if (response.ok) {
      return {
        success: true,
        message:
          "Thank you for your message! I'll get back to you soon. You should also receive a confirmation email shortly.",
      }
    } else {
      const errorText = await response.text()
      console.error("FormSubmit error:", errorText)

      // If FormSubmit fails, try alternative approach
      return {
        success: false,
        message:
          "There was an issue sending your message. Please try again or contact me directly at kwakye792@gmail.com",
      }
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: false,
      message: "Failed to send message. Please try again later or contact me directly at kwakye792@gmail.com",
    }
  }
}
