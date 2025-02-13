"use client"

import { Button } from "../../components/button"
import { motion } from "framer-motion"
import { useState } from "react"
import React from "react"

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false)

  function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
      id: i,
      d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position} -${189 + i * 6} -${
        312 - i * 5 * position
      } ${216 - i * 6} ${152 - i * 5 * position} ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
        684 - i * 5 * position
      } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
      color: `rgba(255, 255, 255, ${0.1 + i * 0.03})`,
      width: 0.5 + i * 0.03,
    }))

    return (
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full text-slate-950 dark:text-white" viewBox="0 0 696 316" fill="none">
          <title>Background Paths</title>
          {paths.map((path) => (
            <motion.path
              key={path.id}
              d={path.d}
              stroke="white"
              strokeWidth={path.width}
              strokeOpacity={0.1 + path.id * 0.03}
              initial={{ pathLength: 0.3, opacity: 0.6 }}
              animate={{
                pathLength: 1,
                opacity: [0.3, 0.6, 0.3],
                pathOffset: [0, 1, 0],
              }}
              transition={{
                duration: 20 + Math.random() * 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          ))}
        </svg>
      </div>
    )
  }

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-background via-background to-secondary pt-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />

        <motion.div
          className="md:w-1/2 mb-10 md:mb-0 relative z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight text-foreground">
            The World's First <span className="text-primary">Smart Safety Ring</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8">
            Protect yourself with cutting-edge technology at your fingertips.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </motion.div>
        <motion.div
          className="md:w-1/2 relative flex justify-center items-center relative z-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.0, delay: 0.2 }}
        >
          <motion.img
            src="https://i.ibb.co/Df9KqwBF/38-PM-unscreen.gif"
            alt="DefensIQTech Smart Ring"
            className="w-full max-w-md h-auto rounded-lg shadow-1xl animate-float"
            animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
            transition={{ duration: 0.3 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

