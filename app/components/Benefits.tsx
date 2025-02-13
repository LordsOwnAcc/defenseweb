"use client"
import React from "react"
import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

const benefits = [
  "24/7 Personal Safety",
  "Discreet Design",
  "Water-Resistant",
  "GPS Tracking",
  "Health Monitoring",
  "Easy to Use",
  "Customizable Alerts",
  "Long Battery Life",
]

const Benefits = () => {
  return (
    <section id="benefits" className="w-full py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose DefensIQTech?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="flex items-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CheckCircle className="h-6 w-6 text-primary mr-2" />
              <span>{benefit}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits

