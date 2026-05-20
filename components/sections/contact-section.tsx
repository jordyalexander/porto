"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi"

const contactInfo = [
  {
    icon: FiMail,
    label: "Email",
    value: "jordyalexanderbarus@gmail.com",
    href: "mailto:jordyalexanderbarus@gmail.com",
  },
  {
    icon: FiPhone,
    label: "Phone",
    value: "+6285260778001",
    href: "tel:+6285260778001",
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: "Indonesia",
    href: "#",
  },
]

const socialLinks = [
  { icon: FiGithub, href: "https://github.com/jordyalexander", label: "GitHub" },
  { icon: FiLinkedin, href: "https://id.linkedin.com/in/jordy-alexander-barus-153b42364", label: "LinkedIn" },
  { icon: FiInstagram, href: "https://instagram.com/joalbar_", label: "Instagram" },
]

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 relative" ref={ref}>
      {/* Background accents */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            {"Feel free to reach out for collaborations, opportunities, or just to say hello!"}
          </p>
        </motion.div>

<div className="flex justify-center">          

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.label}
                href={info.href}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ x: 10 }}
                className="glass-card rounded-xl p-5 flex items-center gap-4 hover:glow-cyan transition-all duration-300 block"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">{info.label}</p>
                  <p className="font-medium">{info.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Social Links */}
            

            
          </motion.div>
        </div>
      </div>
    </section>
  )
}
