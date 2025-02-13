"use client"
import React from "react"

import { useState } from "react"
import { Button } from "../../components/button"
import { Input } from "../../components/input"
import { toast } from "../../components/use-toast"
import { subscribeToNewsletter } from "../actions/subscribe"

const Newsletter = () => {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData()
    formData.append("email", email)

    const result = await subscribeToNewsletter(formData)

    if (result.success) {
      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      })
      setEmail("")
    } else {
      toast({
        title: "Error",
        description: result.message,
        variant: "destructive",
      })
    }

    setIsSubmitting(false)
  }

  return (
    <section id="newsletter" className="w-full py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">Stay Updated</h2>
        <p className="text-center mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter for the latest updates, exclusive offers, and safety tips.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-grow"
          />
          <Button type="submit" variant="secondary" disabled={isSubmitting}>
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
      </div>
    </section>
  )
}

export default Newsletter

