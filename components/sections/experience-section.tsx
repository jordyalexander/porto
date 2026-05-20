"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { FiBriefcase, FiCalendar, FiMapPin } from "react-icons/fi"

const experiences = [
  {
    title: "Website Development Intern",
    company: "Seventh-day Adventist Church West Indonesia Union Mission",
    period: "June 2025 – August 2025",
    location: "Indonesia",
    responsibilities: [
      "Assisted in developing and maintaining organizational websites",
      "Improved website functionality and digital services",
      "Managed website content and interface improvements",
    ],
  },
  {
    title: "Installation Engineer Assistant",
    company: "PT. Berca Hardayaperkasa",
    period: "January 2026 – February 2026",
    location: "Indonesia",
    responsibilities: [
      "Assisted engineers in network installation and configuration",
      "Handled cable management and troubleshooting",
      "Ensured proper network implementation during projects",
    ],
  },
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Professional internship experiences that shaped my career
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 mt-8 glow-cyan z-10" />

                {/* Content */}
                <div className={`md:w-1/2 pl-20 md:pl-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass-card rounded-2xl p-6 hover:glow-cyan transition-all duration-300"
                  >
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <FiBriefcase className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                    </div>

                    <p className="text-primary font-medium mb-2">{exp.company}</p>

                    <div className={`flex flex-wrap gap-4 text-sm text-muted-foreground mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <span className="flex items-center gap-1">
                        <FiCalendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <FiMapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>

                    <ul className={`space-y-2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0 ${index % 2 === 0 ? "md:order-last" : ""}`} />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
