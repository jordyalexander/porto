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
  { icon: FiGithub, href: "https://github.com/jordyalexanderbarus", label: "GitHub" },
  { icon: FiLinkedin, href: "https://linkedin.com/in/jordyalexanderbarus", label: "LinkedIn" },
  { icon: FiInstagram, href: "https://instagram.com/jordyalexanderbarus", label: "Instagram" },
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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 glow-cyan"
                >
                  <FiSend className="w-5 h-5" />
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>

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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="glass-card rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="glass-card rounded-xl p-1 h-48 overflow-hidden"
            >
              <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center grid-pattern">
                <div className="text-center">
                  <FiMapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-muted-foreground">Indonesia</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
