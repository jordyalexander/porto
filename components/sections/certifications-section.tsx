"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { FiAward, FiCloud } from "react-icons/fi"

const certifications = [
  {
    title: "Alibaba Cloud Certified Associate Cloud Engineer",
    issuer: "Alibaba Cloud",
    icon: FiCloud,
    description: "Professional certification demonstrating expertise in cloud computing and Alibaba Cloud services.",
  },
]

export function CertificationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="certifications" className="py-20 relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and achievements
          </p>
        </motion.div>

        {/* Certifications */}
        <div className="flex justify-center">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="max-w-lg w-full"
            >
              <div className="relative">
                {/* Glowing border effect */}
                <div className="absolute -inset-1 gradient-border rounded-2xl opacity-50 blur-sm" />

                <div className="relative glass-card rounded-2xl p-8 overflow-hidden glow-cyan">
                  {/* Cloud decoration */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/20 to-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                  {/* Badge icon */}
                  <div className="flex justify-center mb-6 relative z-10">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <FiAward className="w-10 h-10 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center relative z-10">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <cert.icon className="w-5 h-5 text-primary" />
                      <span className="text-primary font-medium">{cert.issuer}</span>
                    </div>

                    <h3 className="text-xl font-bold mb-4 text-balance">{cert.title}</h3>

                    <p className="text-muted-foreground text-sm">
                      {cert.description}
                    </p>

                    {/* Verified badge */}
                    <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-sm font-medium text-primary">Verified Credential</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
