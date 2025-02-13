"use client"
import React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts"

const crimeData = [
  { year: 2016, cases: 338954 },
  { year: 2017, cases: 359849 },
  { year: 2018, cases: 378236 },
  { year: 2019, cases: 405861 },
  { year: 2020, cases: 371503 },
]

const safetyPerceptionData = [
  { category: "Very Safe", percentage: 12 },
  { category: "Somewhat Safe", percentage: 38 },
  { category: "Somewhat Unsafe", percentage: 35 },
  { category: "Very Unsafe", percentage: 15 },
]

const crimeTypeData = [
  { name: "Domestic Violence", value: 30.9 },
  { name: "Assault", value: 21.8 },
  { name: "Kidnapping", value: 17.9 },
  { name: "Rape", value: 7.9 },
  { name: "Other", value: 21.5 },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"]

const slides = [
  {
    title: "Reported Crimes Against Women (2016-2020)",
    chart: (
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={crimeData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="cases" stroke="#ff7300" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    ),
  },
  {
    title: "Women's Perception of Safety in Public Spaces",
    chart: (
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={safetyPerceptionData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="percentage" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    ),
  },
  {
    title: "Types of Crimes Against Women",
    chart: (
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={crimeTypeData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {crimeTypeData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    ),
  },
]

const InteractiveDemo = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length)
  }

  return (
    <section className="w-full py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-primary">
          Women's Safety in India: Key Statistics
        </h2>
        <div className="relative bg-secondary p-4 sm:p-6 rounded-lg shadow-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-foreground">{slides[currentSlide].title}</h3>
              {slides[currentSlide].chart}
            </motion.div>
          </AnimatePresence>
          <button
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-primary text-primary-foreground rounded-full p-2"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
          </button>
          <button
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-primary text-primary-foreground rounded-full p-2"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default InteractiveDemo

