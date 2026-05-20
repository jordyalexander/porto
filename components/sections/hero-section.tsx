"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiDownload, FiArrowRight } from "react-icons/fi"
import Link from "next/link"

const roles = [
  "Web Developer",
  "Mobile Developer",
  "Network Enthusiast",
  "Problem Solver",
]

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const role = roles[currentRole]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < role.length) {
          setDisplayText(role.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentRole((prev) => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole])

  const socialLinks = [
    { icon: FiGithub, href: "https://github.com/jordyalexanderbarus", label: "GitHub" },
    { icon: FiLinkedin, href: "https://linkedin.com/in/jordyalexanderbarus", label: "LinkedIn" },
    { icon: FiInstagram, href: "https://instagram.com/jordyalexanderbarus", label: "Instagram" },
    { icon: FiMail, href: "mailto:jordyalexanderbarus@gmail.com", label: "Email" },
  ]

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-medium mb-4"
            >
              Welcome to my portfolio
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance"
            >
              {"Hi, I'm "}
              <span className="text-gradient">Jordy Alexander Barus</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl sm:text-2xl text-muted-foreground mb-6 h-8"
            >
              <span className="text-foreground">{displayText}</span>
              <span className="animate-pulse text-primary">|</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              I am an Informatics Engineering student passionate about web development, 
              mobile applications, and network systems. I enjoy building modern digital 
              solutions and continuously improving my technical skills to grow in the IT industry.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-all duration-200 glow-cyan"
              >
                Contact Me
                <FiArrowRight />
              </Link>
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-6 py-3 glass-card text-foreground font-medium rounded-lg hover:bg-secondary/50 transition-all duration-200"
              >
                <FiDownload />
                Download CV
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-3 glass-card rounded-lg text-muted-foreground hover:text-primary hover:glow-cyan transition-all duration-300"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Animated gradient border */}
              <div className="absolute -inset-1 gradient-border rounded-full opacity-75 blur-sm" />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden glass-card p-1">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <span className="text-6xl sm:text-7xl font-bold text-gradient">JAB</span>
                </div>
              </div>
              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-12 h-12 glass-card rounded-lg flex items-center justify-center"
              >
                <span className="text-xl">💻</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -left-4 w-12 h-12 glass-card rounded-lg flex items-center justify-center"
              >
                <span className="text-xl">📱</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/2 -left-8 w-12 h-12 glass-card rounded-lg flex items-center justify-center"
              >
                <span className="text-xl">🌐</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex justify-center pt-2"
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
