"use client"
import React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "How long does the battery last?",
    answer: "The DefensIQTech ring's battery lasts up to 2 weeks on a single charge, depending on usage.",
  },
  {
    question: "Is the ring water-resistant?",
    answer: "Yes, the ring is water-resistant up to 50 meters, making it suitable for swimming and showering.",
  },
  {
    question: "How does the emergency alert feature work?",
    answer:
      "In case of an emergency, you can activate the alert by tapping the ring in a specific pattern. This sends your location to pre-set emergency contacts and local authorities if configured.",
  },
  {
    question: "Can I customize the ring's features?",
    answer:
      "You can customize various features of the DefensIQTech ring through our mobile app, including alert sensitivity, notification preferences, and emergency contact settings.",
  },
  {
    question: "Is the ring compatible with both Android and iOS devices?",
    answer:
      "Yes, our mobile app is available for both Android and iOS, ensuring compatibility with a wide range of smartphones.",
  },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="w-full py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-border rounded-lg overflow-hidden"
            >
              <button
                className="w-full p-4 text-left flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                {openIndex === index ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="p-4 bg-secondary/20">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ

