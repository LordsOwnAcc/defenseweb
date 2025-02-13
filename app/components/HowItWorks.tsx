"use client"
import React from "react"

import { motion } from "framer-motion"

const steps = [
  {
    title: "Wear",
    description: "Put on your DefensIQTech ring and feel instantly protected.",
  },
  {
    title: "Connect",
    description: "Pair your ring with our mobile app for seamless integration.",
  },
  {
    title: "Customize",
    description: "Set up your emergency contacts and personalize alert settings.",
  },
  {
    title: "Activate",
    description: "In case of emergency, activate alerts with a simple gesture.",
  },
]

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="w-full py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground mb-4">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks

