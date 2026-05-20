"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { FiUser, FiBook, FiAward, FiTarget } from "react-icons/fi"

const stats = [
  { label: "Years Learning", value: "4+", icon: FiBook },
  { label: "Projects", value: "7+", icon: FiTarget },
  { label: "Internships", value: "2", icon: FiAward },
  { label: "Organizations", value: "2", icon: FiUser },
]

const strengths = [
  "Critical Thinking",
  "Time Management",
  "Teamwork",
  "Problem Solving",
]

const focusAreas = [
  "Web Development",
  "Mobile Development",
  "Network Management",
  "Database Management",
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Main Info Card */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-gradient">Personal Info</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-muted-foreground">Name:</span>
                  <span className="font-medium">Jordy Alexander Barus</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-muted-foreground">Status:</span>
                  <span className="font-medium">Final-Year Informatics Engineering Student</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-muted-foreground">University:</span>
                  <span className="font-medium">Universitas Advent Indonesia</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-muted-foreground">GPA:</span>
                  <span className="font-medium text-primary">3.35/4.00</span>
                </div>
              </div>
            </div>

            {/* Focus Areas */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-gradient">Focus Areas</h3>
              <div className="flex flex-wrap gap-2">
                {focusAreas.map((area) => (
                  <span
                    key={area}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Strengths */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-gradient">Strengths</h3>
              <div className="grid grid-cols-2 gap-3">
                {strengths.map((strength) => (
                  <div
                    key={strength}
                    className="flex items-center gap-2 text-muted-foreground"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span>{strength}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-card rounded-2xl p-6 text-center group hover:glow-cyan transition-all duration-300"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
