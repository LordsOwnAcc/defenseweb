"use client"

import React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight } from "lucide-react"

const safetyTips = [
  "Always be aware of your surroundings",
  "Trust your instincts if you feel uncomfortable",
  "Keep your DefensIQTech ring charged and ready",
  "Share your location with trusted contacts",
  "Learn basic self-defense techniques",
  "Avoid walking alone in poorly lit areas",
  "Keep emergency numbers easily accessible",
  "Regularly update your emergency contacts in the app",
]

const SafetyTips = () => {
  const [expandedTip, setExpandedTip] = useState<number | null>(null)

  return (
    <section className="w-full py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">Safety Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {safetyTips.map((tip, index) => (
            <motion.div
              key={index}
              className="bg-background p-4 rounded-lg shadow-md cursor-pointer flex flex-col w-full"
              whileHover={{ scale: 1.05 }}
              onClick={() => setExpandedTip(expandedTip === index ? null : index)}
            >
              <div className="flex justify-between items-center w-full">
                <h3 className="text-lg font-semibold text-foreground">{tip}</h3>
                <ChevronRight
                  className={`transform transition-transform text-primary ${expandedTip === index ? "rotate-90" : ""}`}
                />
              </div>
              <AnimatePresence>
                {expandedTip === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 text-muted-foreground overflow-hidden"
                  >
                    This is an expanded explanation of the safety tip. It provides more detailed information and
                    guidance on how to implement this tip in your daily life.
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SafetyTips

