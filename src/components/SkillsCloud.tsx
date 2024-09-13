'use client'

import { useState, useEffect } from 'react'
import { Badge } from "@/components/ui/badge"

interface SkillsCloudProps {
  skills: string[]
}

const SkillsCloud: React.FC<SkillsCloudProps> = ({ skills }) => {
  const [animatedSkills, setAnimatedSkills] = useState<string[]>([])

  useEffect(() => {
    const animationInterval = setInterval(() => {
      if (animatedSkills.length < skills.length) {
        setAnimatedSkills(prevSkills => [...prevSkills, skills[prevSkills.length]])
      } else {
        clearInterval(animationInterval)
      }
    }, 100)

    return () => clearInterval(animationInterval)
  }, [skills, animatedSkills])

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {animatedSkills.map((skill, index) => (
        <Badge
          key={index}
          variant="secondary"
          className="text-sm bg-opacity-80 hover:bg-opacity-100 transition-all duration-200 transform hover:scale-110 animate-fade-in"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          {skill}
        </Badge>
      ))}
    </div>
  )
}

export default SkillsCloud