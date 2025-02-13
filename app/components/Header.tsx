"use client"
import React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "../../components/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`w-full backdrop-blur-md z-50 fixed top-0 left-0 transition-all duration-300 ${
        isScrolled ? "bg-background/80 shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          <motion.img
            src="https://i.ibb.co/zhkmyG18/main-wordmark-white-1.png"
            alt="DefensIQTech Smart Ring"
            className="w-32 sm:w-40 md:w-48 h-auto rounded-lg"
          />
        </Link>
        <div className="hidden md:flex space-x-4 lg:space-x-6">
          <Link href="#features" className="text-sm lg:text-base text-foreground hover:text-primary transition-colors">
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-sm lg:text-base text-foreground hover:text-primary transition-colors"
          >
            How It Works
          </Link>
          <Link href="#benefits" className="text-sm lg:text-base text-foreground hover:text-primary transition-colors">
            Benefits
          </Link>
          <Link
            href="#tech-specs"
            className="text-sm lg:text-base text-foreground hover:text-primary transition-colors"
          >
            Tech Specs
          </Link>
          <Link href="#faq" className="text-sm lg:text-base text-foreground hover:text-primary transition-colors">
            FAQ
          </Link>
        </div>
        <Button className="hidden md:inline-flex text-sm lg:text-base">
          <Link href="#newsletter" className="text-black hover:text-black transition-colors">
            Upcoming
          </Link>
        </Button>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6 text-black" /> : <Menu className="h-6 w-6 text-primary" />}
        </button>
      </nav>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 right-0 bg-background shadow-lg"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link href="#features" className="text-foreground hover:text-primary transition-colors">
                Features
              </Link>
              <Link href="#how-it-works" className="text-foreground hover:text-primary transition-colors">
                How It Works
              </Link>
              <Link href="#benefits" className="text-foreground hover:text-primary transition-colors">
                Benefits
              </Link>
              <Link href="#tech-specs" className="text-foreground hover:text-primary transition-colors">
                Tech Specs
              </Link>
              <Link href="#faq" className="text-foreground hover:text-primary transition-colors">
                FAQ
              </Link>
              <Button className="w-full">
                <Link href="#newsletter" className="text-black hover:text-black transition-colors">
                  Upcoming
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header

