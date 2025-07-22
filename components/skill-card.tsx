import type { ReactNode } from "react"

interface SkillCardProps {
  name: string
  icon: ReactNode
  colorClass: string
}

export default function SkillCard({ name, icon, colorClass }: SkillCardProps) {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 text-center h-full">
      <div className={`mb-3 ${colorClass}`}>{icon}</div>
      <h3 className="font-medium text-card-foreground">{name}</h3>
    </div>
  )
}
