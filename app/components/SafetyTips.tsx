"use client"

import React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight } from "lucide-react"

const safetyTips = [
  {
    tip: "Always be aware of your surroundings",
    details: "Stay alert to people and activities around you. Avoid distractions like looking at your phone while walking alone."
  },
  {
    tip: "Trust your instincts if you feel uncomfortable",
    details: "If something doesn’t feel right, remove yourself from the situation immediately and seek help."
  },
  {
    tip: "Keep your DefensIQTech ring charged and ready",
    details: "Regularly check your device’s battery level and ensure it is functioning properly for emergencies."
  },
  {
    tip: "Share your location with trusted contacts",
    details: "Enable location sharing with close friends or family when traveling alone, especially at night."
  },
  {
    tip: "Learn basic self-defense techniques",
    details: "Enroll in a self-defense class to build confidence and improve your ability to protect yourself if needed."
  },
  {
    tip: "Avoid walking alone in poorly lit areas",
    details: "Stick to well-lit and populated areas whenever possible, and avoid isolated shortcuts."
  },
  {
    tip: "Keep emergency numbers easily accessible",
    details: "Save important emergency contacts, such as police and family members, on speed dial for quick access."
  },
  {
    tip: "Regularly update your emergency contacts in the app",
    details: "Ensure that your emergency contact list is current so the right people are notified in case of an emergency."
  }
]

const SafetyTips = () => {
  const [expandedTip, setExpandedTip] = useState<number | null>(null)

  return (
    <section className="w-full py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">Safety Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {safetyTips.map((item, index) => (
            <motion.div
              key={index}
              className="bg-background p-4 rounded-lg shadow-md cursor-pointer flex flex-col w-full"
              whileHover={{ scale: 1.05 }}
              onClick={() => setExpandedTip(expandedTip === index ? null : index)}
            >
              <div className="flex justify-between items-center w-full">
                <h3 className="text-lg font-semibold text-foreground">{item.tip}</h3>
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
                    {item.details}
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
