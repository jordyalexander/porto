"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiHeart } from "react-icons/fi"

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

const socialLinks = [
  { icon: FiGithub, href: "https://github.com/jordyalexanderbarus", label: "GitHub" },
  { icon: FiLinkedin, href: "https://linkedin.com/in/jordyalexanderbarus", label: "LinkedIn" },
  { icon: FiInstagram, href: "https://instagram.com/jordyalexanderbarus", label: "Instagram" },
  { icon: FiMail, href: "mailto:jordyalexanderbarus@gmail.com", label: "Email" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 border-t border-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <Link href="#" className="text-2xl font-bold text-gradient inline-block mb-4">
              JAB
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Final-Year Informatics Engineering Student passionate about building modern digital solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            © {currentYear} Jordy Alexander Barus. Made with{" "}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FiHeart className="w-4 h-4 text-red-500 inline" />
            </motion.span>
          </p>

          <p className="text-muted-foreground text-sm">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
