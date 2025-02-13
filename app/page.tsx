"use client"

import Header from "./components/Header"
import Hero from "./components/Hero"
import Features from "./components/Features"
import HowItWorks from "./components/HowItWorks"
import Benefits from "./components/Benefits"
import Testimonials from "./components/Testimonials"
import FAQ from "./components/FAQ"
import Newsletter from "./components/Newsletter"
import Footer from "./components/Footer"
import TechSpecs from "./components/TechSpecs"
import SafetyTips from "./components/SafetyTips"
import InteractiveDemo from "./components/InteractiveDemo"
import React from "react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Benefits />
      <TechSpecs />
      <InteractiveDemo />
      <Testimonials />
      <SafetyTips />
      <FAQ />
      <Newsletter />
      <Footer />
    </main>
  )
}

