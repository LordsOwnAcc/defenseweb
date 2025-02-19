"use client"

import { Resend } from "resend"

const resendApiKey = "re_ac9seXdw_DdYYVkBJDiEF8aPTGb1nnFna"

if (!resendApiKey) {
  console.error("RESEND_API_KEY is not set in the environment variables")
}

const resend = new Resend(resendApiKey)

export async function subscribeToNewsletter(formData: FormData) {
  const email = formData.get("email") as string

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, message: "Please enter a valid email address" }
  }

  if (!resendApiKey) {
    console.error("RESEND_API_KEY is not set")
    return { success: false, message: "Server configuration error. Please try again later." }
  }

  try {
    
    const data = await resend.emails.send({
      from: "onboarding@resend.dev", // Using Resend's default verified domain
      to: "defensiqtech@gmail.com",
      subject: "New Newsletter Subscription",
      text: `New subscriber: ${email}`,
      reply_to: email, // Add reply-to header with subscriber's email
    })

    console.log("Email sent successfully:", data)
    return { success: true, message: "Subscription successful!" }
  } catch (error: any) {
    console.error("Subscription error details:", {
      error: error.message,
      code: error.statusCode,
      details: error.details,
    })
    return {
      success: false,
      message: "An error occurred. Please try again.",
    }
  }
}

