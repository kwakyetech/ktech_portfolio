"use client"

import { useState } from "react"
import AnimatedSection from "./animated-section"
import { motion } from "framer-motion"

type SkillCategory = "technical" | "soft"

interface Skill {
  name: string
  icon: JSX.Element
  category: SkillCategory
  proficiency: number
  color: string
  description: string
}

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("technical")
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const skills: Skill[] = [
    // Technical Skills
    {
      name: "HTML",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
          <path d="M13 2v7h7"></path>
        </svg>
      ),
      category: "technical",
      proficiency: 90,
      color: "from-orange-500 to-red-500",
      description: "Proficient in semantic HTML5, accessibility best practices, and SEO-friendly markup.",
    },
    {
      name: "CSS",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"></path>
          <path d="M4 13h16"></path>
          <path d="M15 2v20"></path>
        </svg>
      ),
      category: "technical",
      proficiency: 85,
      color: "from-blue-500 to-cyan-500",
      description: "Strong knowledge of CSS3, Flexbox, Grid, animations, and responsive design principles.",
    },
    {
      name: "JavaScript",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path>
          <line x1="8" y1="16" x2="8.01" y2="16"></line>
          <line x1="8" y1="20" x2="8.01" y2="20"></line>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
          <line x1="12" y1="22" x2="12.01" y2="22"></line>
          <line x1="16" y1="16" x2="16.01" y2="16"></line>
          <line x1="16" y1="20" x2="16.01" y2="20"></line>
        </svg>
      ),
      category: "technical",
      proficiency: 75,
      color: "from-yellow-400 to-amber-500",
      description: "Comfortable with ES6+ features, DOM manipulation, and asynchronous programming.",
    },
    {
      name: "Git",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
          <path d="M9 18c-4.51 2-5-2-7-2"></path>
        </svg>
      ),
      category: "technical",
      proficiency: 80,
      color: "from-red-500 to-rose-600",
      description: "Experienced with version control, branching, merging, and collaborative workflows.",
    },
    {
      name: "GitHub",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
          <path d="M9 18c-4.51 2-5-2-7-2"></path>
        </svg>
      ),
      category: "technical",
      proficiency: 85,
      color: "from-purple-600 to-indigo-600",
      description: "Familiar with GitHub workflows, pull requests, issues, and project management.",
    },
    {
      name: "WordPress",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 13.381h20M8.66 19.05V22m6.84-2.95V22m-8.955-8.022L3.687 2.9l.24-.24 10.5 3.5"></path>
          <path d="M8.486 13.8c-.887-1.182-.887-3.222 0-4.405l6.514 4.405-6.514 4.405z"></path>
          <path d="M18.544 11.088c.887 1.182.887 3.222 0 4.405l-6.514-4.405 6.514-4.405z"></path>
          <path d="M15.5 6.5l.308-.815c.496-1.313 1.944-1.85 3.215-1.185s1.732 2.148.93 3.334l-.232.333"></path>
        </svg>
      ),
      category: "technical",
      proficiency: 70,
      color: "from-blue-500 to-sky-500",
      description: "Experience with theme customization, plugin integration, and content management.",
    },
    {
      name: "Figma",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path>
          <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path>
          <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path>
          <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path>
          <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>
        </svg>
      ),
      category: "technical",
      proficiency: 65,
      color: "from-pink-500 to-fuchsia-500",
      description: "Skilled in UI design, prototyping, and translating designs into code.",
    },
    {
      name: "Photoshop",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 2h12l3 3-9 13-9-13 3-3Z"></path>
          <path d="M12 22v-4"></path>
          <path d="m19 7-7 7-7-7"></path>
        </svg>
      ),
      category: "technical",
      proficiency: 60,
      color: "from-blue-600 to-cyan-600",
      description: "Basic image editing, optimization, and asset preparation for web projects.",
    },

    // Soft Skills
    {
      name: "Communication",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M8 9h8" />
          <path d="M8 13h6" />
          <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-6l-6 3v-3H3a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h15Z" />
        </svg>
      ),
      category: "soft",
      proficiency: 85,
      color: "from-green-500 to-emerald-500",
      description: "Clear and effective communication with clients, team members, and stakeholders.",
    },
    {
      name: "Teamwork",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      category: "soft",
      proficiency: 90,
      color: "from-indigo-500 to-violet-500",
      description: "Collaborative approach to problem-solving and project execution.",
    },
    {
      name: "Problem Solving",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 9.5V4a2 2 0 0 1 2-2h3.5" />
          <path d="M2 14.5V20a2 2 0 0 0 2 2h3.5" />
          <path d="M22 9.5V4a2 2 0 0 0-2-2h-3.5" />
          <path d="M22 14.5V20a2 2 0 0 1-2 2h-3.5" />
          <path d="M9.5 2h5" />
          <path d="M9.5 22h5" />
          <path d="M14.5 13a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
          <path d="m13.75 9.25 3.5-3.5" />
          <path d="m13.75 13.75 3.5 3.5" />
          <path d="m10.25 13.75-3.5 3.5" />
          <path d="m10.25 9.25-3.5-3.5" />
        </svg>
      ),
      category: "soft",
      proficiency: 80,
      color: "from-amber-500 to-orange-500",
      description: "Analytical thinking and creative approaches to technical challenges.",
    },
    {
      name: "Time Management",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      category: "soft",
      proficiency: 75,
      color: "from-cyan-500 to-teal-500",
      description: "Efficient prioritization of tasks and meeting deadlines consistently.",
    },
    {
      name: "Adaptability",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
        </svg>
      ),
      category: "soft",
      proficiency: 85,
      color: "from-rose-500 to-pink-500",
      description: "Quick to learn new technologies and adjust to changing project requirements.",
    },
    {
      name: "Creativity",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 12h5" />
          <path d="M17 12h5" />
          <path d="M12 2v5" />
          <path d="M12 17v5" />
          <path d="M12 12 2 2" />
          <path d="m12 12 10 10" />
          <path d="m12 12 10-10" />
          <path d="m12 12-10 10" />
        </svg>
      ),
      category: "soft",
      proficiency: 80,
      color: "from-violet-500 to-purple-500",
      description: "Innovative approach to design and problem-solving in web development.",
    },
    {
      name: "Attention to Detail",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
      ),
      category: "soft",
      proficiency: 90,
      color: "from-emerald-500 to-green-500",
      description: "Meticulous focus on code quality, UI consistency, and user experience.",
    },
    {
      name: "Self-Motivation",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
      category: "soft",
      proficiency: 85,
      color: "from-fuchsia-500 to-pink-500",
      description: "Self-directed learner with a passion for continuous improvement.",
    },
  ]

  const filteredSkills = skills.filter((skill) => skill.category === activeCategory)

  return (
    <div className="max-w-5xl mx-auto">
      {/* Category Tabs */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex p-1 rounded-lg bg-muted-foreground/10">
          <button
            onClick={() => setActiveCategory("technical")}
            className={`px-6 py-2.5 rounded-md text-sm font-medium transition-all duration-300 ${
              activeCategory === "technical"
                ? "bg-white dark:bg-gray-800 text-teal-600 dark:text-teal-400 shadow-sm"
                : "text-foreground/70 hover:text-foreground"
            }`}
          >
            Technical Skills
          </button>
          <button
            onClick={() => setActiveCategory("soft")}
            className={`px-6 py-2.5 rounded-md text-sm font-medium transition-all duration-300 ${
              activeCategory === "soft"
                ? "bg-white dark:bg-gray-800 text-teal-600 dark:text-teal-400 shadow-sm"
                : "text-foreground/70 hover:text-foreground"
            }`}
          >
            Soft Skills
          </button>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill, index) => (
          <AnimatedSection key={skill.name} animation="fade-up" delay={index * 100} className="relative">
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden h-full relative group"
              onHoverStart={() => setHoveredSkill(skill.name)}
              onHoverEnd={() => setHoveredSkill(null)}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <div className={`h-2 bg-gradient-to-r ${skill.color}`}></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${skill.color} text-white mr-3`}>{skill.icon}</div>
                  <h3 className="text-lg font-semibold">{skill.name}</h3>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-foreground/70">Proficiency</span>
                    <span className="font-medium">{skill.proficiency}%</span>
                  </div>
                  <div className="h-2 bg-muted-foreground/10 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${skill.color}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.proficiency}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    ></motion.div>
                  </div>
                </div>

                <div className="text-sm text-foreground/70 h-16 overflow-hidden">
                  {hoveredSkill === skill.name ? (
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                      {skill.description}
                    </motion.p>
                  ) : (
                    <p className="line-clamp-2">{skill.description}</p>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  )
}
