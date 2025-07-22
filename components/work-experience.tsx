"use client"

import { useState } from "react"
import AnimatedSection from "./animated-section"
import { cn } from "@/lib/utils"
import { Calendar, MapPin } from "lucide-react"

interface WorkExperience {
  id: string
  company: string
  position: string
  period: string
  location: string
  description: string[]
  current?: boolean
}

export default function WorkExperience() {
  const [activeExperience, setActiveExperience] = useState<string | null>(null)

  const experiences: WorkExperience[] = [
    {
      id: "exp1",
      company: "Freelance Web Developer",
      position: "Frontend Developer",
      period: "Jan 2023 - Present",
      location: "Remote",
      description: [
        "Developed responsive websites for small businesses and individuals using HTML, CSS, and JavaScript",
        "Implemented WordPress customizations and theme modifications for clients",
        "Collaborated with designers to transform mockups into functional websites",
        "Optimized website performance and ensured cross-browser compatibility",
      ],
      current: true,
    },
    {
      id: "exp2",
      company: "Tech Solutions Inc.",
      position: "Web Development Intern",
      period: "Jun 2022 - Dec 2022",
      location: "Accra, Ghana",
      description: [
        "Assisted senior developers in building and maintaining client websites",
        "Participated in UI/UX design discussions and implementation",
        "Learned and applied best practices in web development and version control",
        "Contributed to team projects and gained experience in collaborative development",
      ],
    },
    {
      id: "exp3",
      company: "Digital Marketing Agency",
      position: "Website Maintenance Assistant",
      period: "Jan 2022 - May 2022",
      location: "Part-time, Remote",
      description: [
        "Updated content and maintained websites for agency clients",
        "Implemented minor design changes and bug fixes",
        "Assisted with website performance optimization",
        "Gained experience with content management systems and client communication",
      ],
    },
  ]

  const handleExperienceClick = (id: string) => {
    setActiveExperience(activeExperience === id ? null : id)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <AnimatedSection
            key={exp.id}
            animation="fade-up"
            delay={index * 100}
            className="border-l-2 border-teal-600 dark:border-teal-400 pl-6 relative"
          >
            <div
              className={cn(
                "absolute w-4 h-4 rounded-full bg-teal-600 dark:bg-teal-400 -left-[9px] top-1.5",
                "transition-all duration-300",
                activeExperience === exp.id && "scale-125",
              )}
            />
            <div
              className={cn(
                "bg-card border border-border rounded-lg p-5 shadow-sm hover:shadow-md transition-all duration-300",
                "cursor-pointer",
                activeExperience === exp.id && "border-teal-600 dark:border-teal-400",
              )}
              onClick={() => handleExperienceClick(exp.id)}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                <h3 className="text-lg font-semibold flex items-center">
                  {exp.position}
                  {exp.current && (
                    <span className="ml-2 text-xs bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300 px-2 py-0.5 rounded-full">
                      Current
                    </span>
                  )}
                </h3>
                <h4 className="text-teal-600 dark:text-teal-400 font-medium">{exp.company}</h4>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center text-sm text-muted-foreground mb-3 gap-y-1 sm:gap-y-0">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{exp.period}</span>
                </div>
                <span className="hidden sm:block mx-2">•</span>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{exp.location}</span>
                </div>
              </div>

              <div
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  activeExperience === exp.id ? "max-h-96" : "max-h-0 sm:max-h-none",
                )}
              >
                <ul className="list-disc list-inside space-y-1 text-foreground/80 mt-2 text-sm sm:text-base">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="text-xs text-teal-600 dark:text-teal-400 mt-2 sm:hidden">
                {activeExperience === exp.id ? "Click to collapse" : "Click to expand"}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  )
}
