"use client"
import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "../../components/card"
import { Avatar, AvatarFallback, AvatarImage } from "../../components/avatar"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Fitness Enthusiast",
    content:
      "The DefensIQTech ring gives me peace of mind during my early morning runs. It's comfortable and the emergency features are reassuring.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Michael Chen",
    role: "Tech Reviewer",
    content:
      "I've tested many wearable safety devices, but the DefensIQTech ring stands out for its sleek design and powerful features.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Emily Rodriguez",
    role: "College Student",
    content:
      "As a student who often walks home late at night, this ring has become an essential part of my daily life. It's discreet yet effective.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

const Testimonials = () => {
  return (
    <section className="w-full py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Survey Says</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <p className="mb-4">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-4">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

