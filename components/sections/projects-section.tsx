"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { FiGithub, FiExternalLink, FiImage } from "react-icons/fi"

const projects = [
  {
    title: "NexaStore",
    subtitle: "Game Top Up Website",
    description: "A responsive game top-up website focused on clean UI and secure transaction flow.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "#",
    demo: "#",
  },
  {
    title: "FlickTicketPro",
    subtitle: "Movie Ticket Booking App",
    description: "A full-stack movie ticket booking platform with movie schedules and ticket booking features.",
    tech: ["Laravel", "Tailwind CSS", "JavaScript"],
    github: "#",
    demo: "#",
  },
  {
    title: "Student Data Management",
    subtitle: "Desktop Application",
    description: "CRUD-based student management application integrated with relational database systems.",
    tech: ["Java", "MySQL"],
    github: "#",
    demo: "#",
  },
  {
    title: "Calcify",
    subtitle: "Calculator App",
    description: "A mobile calculator application with responsive interactions and clean UI.",
    tech: ["Java", "Kotlin"],
    github: "#",
    demo: "#",
  },
  {
    title: "SecureAuth",
    subtitle: "Registration App",
    description: "A mobile registration application with form validation and authentication features.",
    tech: ["Java", "Kotlin"],
    github: "#",
    demo: "#",
  },
  {
    title: "NoteSphere",
    subtitle: "Notes App",
    description: "A note-taking mobile application focused on efficient data storage and user-friendly experience.",
    tech: ["Java", "Kotlin"],
    github: "#",
    demo: "#",
  },
  {
    title: "Rinso Website Clone",
    subtitle: "Frontend Project",
    description: "A front-end clone project focused on responsive layouts and modern styling techniques.",
    tech: ["HTML", "CSS", "Bootstrap", "Tailwind CSS"],
    github: "#",
    demo: "#",
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
                  <div className="flex gap-3 mt-auto">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 px-4 py-2 glass-card rounded-lg text-sm font-medium text-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                      aria-label="View GitHub repository"
                    >
                      <FiGithub size={16} />
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 px-4 py-2 glass-card rounded-lg text-sm font-medium text-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                      aria-label="View live demo"
                    >
                      <FiExternalLink size={16} />
                      Live Demo
                    </a>
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
