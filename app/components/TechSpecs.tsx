"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import React from "react"
const specs = [
  {
    name: "Battery Life",
    value: "Up to 2 weeks",
    details: "The battery can last up to 2 weeks on a single charge, ensuring long usage without frequent recharging.",
  },
  {
    name: "Water Resistance",
    value: "5 ATM (50 meters)",
    details:
      "With a 5 ATM water resistance rating, the ring can withstand pressures equivalent to a depth of 50 meters, suitable for swimming and showering.",
  },
  {
    name: "Connectivity",
    value: "Bluetooth 5.0 / E-SIM",
    details:
      "Uses Bluetooth 5.0 for energy-efficient, high-speed communication with your smartphone. E-SIM allows emergency alerts and location tracking without a phone nearby.",
  },
  {
    name: "Sensors",
    value: "Accelerometer, Gyroscope, Heart Rate",
    details:
      "The accelerometer and gyroscope detect motion and orientation, crucial for fall detection and activity tracking. The heart rate sensor uses PPG technology.",
  },
]

const TechSpecs = () => {
  const [expandedSpec, setExpandedSpec] = useState<number | null>(null)

  return (
    <section id="tech-specs" className="w-full py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-primary">Technical Specifications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {specs.map((spec, index) => (
            <motion.div
              key={index}
              className="relative bg-background p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-primary/50 transition-all duration-300 cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={() => setExpandedSpec(expandedSpec === index ? null : index)}
              style={{
                height: expandedSpec === index ? "auto" : "150px",
                transition: "height 0.3s ease-in-out",
              }}
            >
              <h3 className="text-base sm:text-lg font-semibold mb-2 text-foreground">{spec.name}</h3>
              <p className="text-sm sm:text-base text-primary">{spec.value}</p>

              {expandedSpec === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                  className="mt-2"
                >
                  <p className="text-sm sm:text-base text-muted-foreground">{spec.details}</p>
                  <button
                    className="mt-4 text-primary text-sm sm:text-base"
                    onClick={(e) => {
                      e.stopPropagation()
                      setExpandedSpec(null)
                    }}
                  >
                    Close
                  </button>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechSpecs

