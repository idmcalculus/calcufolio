'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from '@/components/Navbar'
import ProjectPreview from '@/components/ProjectPreview'

const allProjects = [
  {
    title: "Aeeiee's Website",
    description: "A professional, modern and responsive website for my company, Aeeiee, showcasing our products, services and more. I led the development of the custom WordPress theme and implemented various interactive features using React and PHP.",
    link: "https://aeeiee.com",
    tags: ["React", "PHP", "jQuery", "MySQL", "AWS", "WordPress", "Gutenberg", "Sass", "Bootstrap", "HTML", "CSS"]
  },
  {
    title: "Catch The Ghost App",
    description: "A productivity app built with React Native and Firebase. I designed the user interface and implemented the real-time data synchronization feature using Firebase.",
    link: "https://www.aeeiee.com/catch-the-ghost/",
    tags: ["React Native", "Firebase"]
  },
  {
    title: "Dress Measurement App",
    description: "A content management system for blogs using Next.js and GraphQL. I developed the GraphQL API and integrated it with the Next.js frontend, ensuring efficient data fetching and management.",
    link: "https://www.aeeiee.com/dress-measurement/",
    tags: ["Next.js", "GraphQL"]
  },
  {
    title: "Iridium Go Exec Product Page",
    description: "An iOS app for tracking workouts and nutrition using Swift and HealthKit. I implemented the HealthKit integration and designed the workout tracking algorithms to provide accurate fitness data.",
    link: "https://www.iridium.com/go-exec/",
    tags: ["iOS", "Swift", "HealthKit"]
  }
]

export default function Projects() {
  const [darkMode, setDarkMode] = useState(false)
  const [visibleProjects, setVisibleProjects] = useState(6)

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true'
    setDarkMode(isDarkMode)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('darkMode', darkMode.toString())
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const loadMoreProjects = () => {
    setVisibleProjects(prevVisible => prevVisible + 6)
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''} bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 dark:from-purple-900 dark:via-pink-900 dark:to-blue-900 transition-colors duration-500`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {allProjects.slice(0, visibleProjects).map((project, index) => (
            <Card key={index} className="dark:bg-gray-800 dark:text-white transform transition duration-300 hover:scale-105 hover:shadow-xl animate-fade-in flex flex-col" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="dark:text-gray-300 flex-grow">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Link href={project.link} target="_blank" rel="noopener noreferrer" className="mt-auto">
                  <ProjectPreview url={project.link} />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        {visibleProjects < allProjects.length && (
          <div className="text-center mt-8">
            <Button onClick={loadMoreProjects}>Load More</Button>
          </div>
        )}
      </main>
    </div>
  )
}