"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import {
  FiAward,
  FiCloud,
  FiCheckCircle,
  FiDownload,
  FiExternalLink,
} from "react-icons/fi"

const certifications = [
  {
    title: "Alibaba Cloud Certified Associate Cloud Engineer",
    issuer: "Alibaba Cloud",
    icon: FiCloud,
    credentialId: "IACA 13260400241026L",
    validUntil: "April 9, 2028",
    description:
      "Professional certification demonstrating expertise in cloud computing, infrastructure deployment, networking, security, and Alibaba Cloud services.",
    image: "/IACA.png.jpeg",
    file: "/IACA.png.jpeg",
  },
]

export function CertificationsSection() {
  const ref = useRef(null)

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  })

  return (
    <section
      id="certifications"
      className="py-24 relative overflow-hidden"
      ref={ref}
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Professional{" "}
            <span className="text-gradient">
              Certifications
            </span>
          </h2>

          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />

          <p className="mt-5 text-muted-foreground max-w-2xl mx-auto text-lg">
            Industry-recognized certifications validating my
            expertise in cloud engineering and modern technology
            solutions.
          </p>
        </motion.div>

        {/* Certification Cards */}
        <div className="flex justify-center">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              whileHover={{
                y: -8,
              }}
              className="max-w-5xl w-full"
            >
              <div className="relative">
                {/* Border Glow */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 opacity-30 blur-lg" />

                <div className="relative glass-card rounded-3xl overflow-hidden border border-white/10">
                  <div className="grid lg:grid-cols-2">
                    {/* Left Content */}
                    <div className="p-8 sm:p-10 flex flex-col justify-between">
                      <div>
                        {/* Top Badge */}
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg">
                            <FiAward className="w-7 h-7 text-white" />
                          </div>

                          <div>
                            <div className="flex items-center gap-2">
                              <cert.icon className="w-5 h-5 text-cyan-400" />

                              <span className="text-cyan-400 font-semibold">
                                {cert.issuer}
                              </span>
                            </div>

                            <div className="flex items-center gap-2 mt-1">
                              <FiCheckCircle className="w-4 h-4 text-green-400" />

                              <span className="text-sm text-green-400">
                                Verified Credential
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl sm:text-3xl font-bold leading-tight mb-5">
                          {cert.title}
                        </h3>

                        {/* Description */}
                        <p className="text-muted-foreground leading-relaxed mb-8">
                          {cert.description}
                        </p>

                        {/* Info */}
                        <div className="space-y-4">
                          <div className="glass-card rounded-xl p-4 border border-white/10">
                            <p className="text-sm text-muted-foreground mb-1">
                              Credential ID
                            </p>

                            <p className="font-mono text-sm sm:text-base text-cyan-400">
                              {cert.credentialId}
                            </p>
                          </div>

                          <div className="glass-card rounded-xl p-4 border border-white/10">
                            <p className="text-sm text-muted-foreground mb-1">
                              Valid Until
                            </p>

                            <p className="font-semibold">
                              {cert.validUntil}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4 mt-8">
                        <a
                          href={cert.file}
                          download
                          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all duration-300 glow-cyan"
                        >
                          <FiDownload />
                          Download Certificate
                        </a>

                        <a
                          href={cert.image}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl glass-card border border-white/10 hover:bg-white/5 transition-all duration-300"
                        >
                          <FiExternalLink />
                          Preview Certificate
                        </a>
                      </div>
                    </div>

                    {/* Right Preview */}
                    <div className="relative p-6 sm:p-8 flex items-center justify-center bg-gradient-to-br from-cyan-500/5 to-blue-500/5">
                      {/* Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent" />

                      {/* Certificate Image */}
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className="relative w-full max-w-lg"
                      >
                        <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 opacity-30 blur-xl" />

                        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                          <img
                            src={cert.image}
                            alt={cert.title}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      </motion.div>
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