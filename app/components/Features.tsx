"use client"
import React from "react"

import { motion, AnimatePresence } from "framer-motion"
import { Shield, Bell, Zap, Heart, Smartphone, Lock } from "lucide-react"
import { useState, useCallback } from "react"

const initialFeatures = [
  {
    icon: Shield,
    title: "Advanced Protection",
    description: "State-of-the-art sensors detect potential threats and alert you instantly.",
    details:
      "Our advanced protection system uses a combination of accelerometers, gyroscopes, and AI-powered algorithms to detect unusual movements or situations that may indicate a threat. The ring continuously monitors your surroundings and can differentiate between normal activities and potential danger scenarios.",
  },
  {
    icon: Bell,
    title: "Emergency Alerts",
    description: "One-touch activation sends your location to emergency contacts and authorities.",
    details:
      "In case of an emergency, a simple gesture activates the alert system. It immediately sends your real-time GPS location to pre-selected emergency contacts and local authorities. The alert includes a distress signal and your medical information if you've chosen to include it.",
  },
  {
    icon: Zap,
    title: "Long Battery Life",
    description: "Our innovative design ensures your ring stays powered for weeks on a single charge.",
    details:
      "Using advanced power management techniques and low-power components, the DefensIQTech ring can operate for up to two weeks on a single charge. The ring also features quick-charging capabilities, reaching 80% battery capacity in just 20 minutes.",
  },
  {
    icon: Heart,
    title: "Health Monitoring",
    description: "Track your heart rate and activity levels throughout the day.",
    details:
      "The built-in heart rate monitor uses photoplethysmography (PPG) technology to accurately measure your heart rate. It can detect irregular heartbeats and provide continuous monitoring during workouts. The activity tracker counts steps, estimates calories burned, and monitors sleep patterns.",
  },
  {
    icon: Smartphone,
    title: "Smartphone Integration",
    description: "Seamlessly connects with your smartphone for notifications and updates.",
    details:
      "The DefensIQTech ring pairs with your smartphone via Bluetooth 5.0, allowing for real-time data syncing and notifications. You can receive call, text, and app notifications directly on your ring through subtle vibrations and LED indicators.",
  },
  {
    icon: Lock,
    title: "Data Encryption",
    description: "Your personal data is protected with military-grade encryption.",
    details:
      "We use AES-256 encryption to secure all data stored on the ring and during transmission to your smartphone or our secure servers. Your personal information and location data are protected with the same level of security used by financial institutions and government agencies.",
  },
]

const Features = () => {
  const [features, setFeatures] = useState(initialFeatures)
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null)

  const handleFeatureClick = useCallback((index: number) => {
    setExpandedFeature((prev) => {
      if (prev === index) {
        setFeatures(initialFeatures)
        return null
      } else {
        const newFeatures = [...initialFeatures]
        const [selected] = newFeatures.splice(index, 1)
        newFeatures.unshift(selected)
        setFeatures(newFeatures)
        return 0
      }
    })
  }, [])

  return (
    <section id="features" className="w-full py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-primary">Cutting-Edge Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                layout
                className={`bg-secondary p-6 rounded-lg shadow-lg hover:shadow-primary/50 transition-all duration-300 cursor-pointer ${
                  expandedFeature === index ? "sm:col-span-2 lg:col-span-3" : ""
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => handleFeatureClick(index)}
              >
                {expandedFeature === index ? (
                  <>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-foreground">{feature.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-4">{feature.description}</p>
                    <p className="text-sm sm:text-base text-foreground">{feature.details}</p>
                    <button
                      className="mt-4 text-primary text-sm sm:text-base"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleFeatureClick(index)
                      }}
                    >
                      Close
                    </button>
                  </>
                ) : (
                  <>
                    <feature.icon className="h-10 w-10 sm:h-12 sm:w-12 mb-4 text-primary" />
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">{feature.description}</p>
                  </>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default Features

