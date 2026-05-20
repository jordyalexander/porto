"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { FiGithub, FiExternalLink, FiImage } from "react-icons/fi"

const projects = [
  {
    title: "NexaStore",
    subtitle: "Game Top Up Website",
    description:
      "A responsive and modern game top-up platform designed with a clean user interface and smooth user experience. The system focuses on fast navigation, secure transaction flow, and optimized layout for both desktop and mobile users.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "FlickTicketPro",
    subtitle: "Movie Ticket Booking App",
    description:
      "A full-stack movie ticket booking platform that allows users to browse movies, check schedules, and book tickets seamlessly. Built with a focus on usability, dynamic content management, and responsive UI for an enhanced booking experience.",
    tech: ["Laravel", "Tailwind CSS", "JavaScript"],
  },
  {
    title: "Student Data Management",
    subtitle: "Desktop Application",
    description:
      "A CRUD-based desktop application for managing student data efficiently, integrated with a relational database system. It supports data creation, reading, updating, and deletion with structured data handling and simple interface design.",
    tech: ["Java", "MySQL"],
  },
  {
    title: "Calcify",
    subtitle: "Calculator App",
    description:
      "A lightweight and responsive mobile calculator application featuring clean UI design and smooth interaction. Built to provide fast calculations with an intuitive user experience suitable for daily use.",
    tech: ["Java", "Kotlin"],
  },
  {
    title: "SecureAuth",
    subtitle: "Registration App",
    description:
      "A secure mobile registration application with form validation, authentication flow, and structured input handling. Designed to ensure user data integrity and a smooth onboarding experience.",
    tech: ["Java", "Kotlin"],
  },
  {
    title: "NoteSphere",
    subtitle: "Notes App",
    description:
      "A simple yet efficient note-taking mobile application focused on fast note creation, editing, and storage. Designed with user-friendly navigation and optimized for daily productivity.",
    tech: ["Java", "Kotlin"],
  },
  {
  title: "Rinso Website Clone",
  subtitle: "Frontend Project",
  description:
    "A modern front-end website clone inspired by the official Rinso website, developed to improve responsive web design skills and modern UI/UX implementation. This project focuses on creating a clean, interactive, and fully responsive user interface using contemporary styling frameworks and layout techniques. The website includes responsive navigation, promotional sections, product showcases, smooth user interactions, and optimized visual components to deliver a professional and engaging user experience across desktop, tablet, and mobile devices.",
  tech: ["HTML", "CSS", "Bootstrap", "Tailwind CSS"],
},
  {
  title: "IoT-Based Food Stock Monitoring System",
  subtitle: "IoT & Embedded System Project",
  description:
    "An intelligent food stock monitoring and control system using Load Cell sensors, DHT22, and Mini Dehumidifier integrated with IoT technology, database systems, and automatic Telegram notifications for real-time monitoring and environmental control.",
  tech: [
    "Arduino",
    "ESP32",
    "IoT",
    "Load Cell",
    "DHT22",
    "Telegram Bot",
    "Firebase",
    "MySQL",
    "C++",
  ],
},
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-20 relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work across web, mobile, and desktop applications
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="glass-card rounded-2xl overflow-hidden h-full flex flex-col hover:glow-purple transition-all duration-300">
                {/* Project Image Placeholder - Clean Gradient with Glassmorphism */}
                <div className="h-48 relative overflow-hidden">
                  {/* Animated gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-accent/20 via-transparent to-primary/20"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  
                  {/* Grid pattern overlay */}
                  <div className="absolute inset-0 grid-pattern opacity-20" />
                  
                  {/* Glassmorphism center element */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="glass-card p-4 rounded-xl flex flex-col items-center gap-2 backdrop-blur-md bg-background/30 border border-white/10">
                      <FiImage className="w-6 h-6 text-muted-foreground/60" />
                      <span className="text-xs text-muted-foreground/60 font-medium">
                        Preview Coming Soon
                      </span>
                    </div>
                  </div>

                  {/* Subtle glow effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-primary/10 via-transparent to-accent/10" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                  <p className="text-primary text-sm mb-3">{project.subtitle}</p>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
