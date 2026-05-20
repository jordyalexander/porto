"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import {
  FiCode,
  FiServer,
  FiSmartphone,
  FiWifi,
  FiTool,
} from "react-icons/fi"

const skillCategories = [
  {
    title: "Frontend",
    icon: FiCode,
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Bootstrap", level: 80 },
    ],
  },
  {
    title: "Backend",
    icon: FiServer,
    skills: [
      { name: "Laravel", level: 75 },
      { name: "MySQL", level: 80 },
      { name: "REST API", level: 75 },
    ],
  },
  {
    title: "Mobile Development",
    icon: FiSmartphone,
    skills: [
      { name: "Java", level: 80 },
      { name: "Kotlin", level: 75 },
      { name: "Android Studio", level: 80 },
    ],
  },
  {
    title: "Networking",
    icon: FiWifi,
    skills: [
      { name: "Network Configuration", level: 75 },
      { name: "Troubleshooting", level: 80 },
      { name: "Cable Management", level: 85 },
    ],
  },
  {
    title: "Tools",
    icon: FiTool,
    skills: [
      { name: "GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Figma", level: 70 },
    ],
  },
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-20 relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across various domains
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card rounded-2xl p-6 group hover:glow-cyan transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
