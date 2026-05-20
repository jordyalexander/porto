"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { FiUsers, FiCalendar } from "react-icons/fi"

const organizations = [
  {
    name: "Student Executive Board",
    institution: "Universitas Advent Indonesia",
    role: "Minister of Foreign Affairs",
    period: "Aug 2024 – May 2026",
    description: "Leading international relations and external partnerships for the student body.",
  },
  {
    name: "Student Association for Disaster Management",
    institution: "Universitas Advent Indonesia",
    role: "Vice Commander",
    period: "Aug 2023 – Aug 2024",
    description: "Coordinated disaster preparedness initiatives and led training programs.",
  },
  {
    name: "Student Association for Disaster Management",
    institution: "Universitas Advent Indonesia",
    role: "Logistics Staff",
    period: "Aug 2023 – May 2024",
    description: "Managed logistics and supplies for disaster response operations.",
  },
]

export function OrganizationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="organizations" className="py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Organization <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Leadership roles and contributions to student organizations
          </p>
        </motion.div>

        {/* Organizations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {organizations.map((org, index) => (
            <motion.div
              key={`${org.name}-${org.role}`}
              initial={{ opacity: 0, y: 30, rotateX: -10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="perspective-1000"
            >
              <div className="glass-card rounded-2xl p-6 h-full hover:glow-cyan transition-all duration-300 relative overflow-hidden group">
                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 relative z-10 group-hover:bg-primary/20 transition-colors">
                  <FiUsers className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold mb-1 relative z-10">{org.name}</h3>
                <p className="text-muted-foreground text-sm mb-3 relative z-10">{org.institution}</p>

                <div className="flex flex-col gap-2 relative z-10">
                  <span className="text-primary font-medium">{org.role}</span>
                  <span className="flex items-center gap-2 text-sm text-muted-foreground">
                    <FiCalendar className="w-4 h-4" />
                    {org.period}
                  </span>
                </div>

                <p className="mt-4 text-muted-foreground text-sm relative z-10">
                  {org.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
