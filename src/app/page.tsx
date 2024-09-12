'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Mail, Moon, Sun, Briefcase, GraduationCap, Award } from "lucide-react"
import { XLogo } from '@/components/icons/xLogo'
import { GitHubLogo } from '@/components/icons/githubLogo'

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and MongoDB.",
    link: "https://github.com/yourusername/ecommerce-platform",
    tags: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "Task Management App",
    description: "A productivity app built with React Native and Firebase.",
    link: "https://github.com/yourusername/task-management-app",
    tags: ["React Native", "Firebase"]
  },
  {
    title: "Blog CMS",
    description: "A content management system for blogs using Next.js and GraphQL.",
    link: "https://github.com/yourusername/blog-cms",
    tags: ["Next.js", "GraphQL"]
  },
  {
    title: "iOS Fitness Tracker",
    description: "An iOS app for tracking workouts and nutrition using Swift and HealthKit.",
    link: "https://github.com/yourusername/ios-fitness-tracker",
    tags: ["iOS", "Swift", "HealthKit"]
  }
]

const skills = [
  "JavaScript", "TypeScript", "React", "Next.js", "Node.js", 
  "Express", "MongoDB", "GraphQL", "Swift", "iOS Development",
  "React Native", "HTML", "CSS", "Git", "RESTful APIs"
]

const experiences = [
  { title: "Senior Full-Stack Developer", company: "Tech Innovators Inc.", period: "2020 - Present" },
  { title: "iOS Developer", company: "Mobile Solutions Ltd.", period: "2018 - 2020" },
  { title: "Junior Web Developer", company: "Web Crafters Co.", period: "2016 - 2018" }
]

const education = [
  { degree: "Master of Computer Science", school: "Tech University", year: "2016" },
  { degree: "Bachelor of Software Engineering", school: "Code College", year: "2014" }
]

const awards = [
  { title: "Best Mobile App Award", organization: "App Developers Conference", year: "2021" },
  { title: "Outstanding Contribution to Open Source", organization: "GitHub", year: "2020" }
]

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

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

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''} bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 dark:from-purple-900 dark:via-pink-900 dark:to-blue-900 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-500`}>
      <main className="max-w-6xl mx-auto">
        <div className="flex justify-end mb-4">
          <Button
            variant="outline"
            size="icon"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>

        <section className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">John Doe</h1>
          <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-8">Full-Stack & iOS Developer</p>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Passionate about creating robust and user-friendly web and mobile applications. Experienced in both front-end and back-end technologies, with a focus on React, Node.js, and iOS development using Swift.
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
              <GitHubLogo />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
            <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
              <XLogo />
              <span className="sr-only">Twitter</span>
            </Button>
            <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Button>
          </div>
        </section>

        <section className="mb-16 animate-slide-in-right">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">Skills</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-sm bg-opacity-80 hover:bg-opacity-100 transition-all duration-200 transform hover:scale-110">
                {skill}
              </Badge>
            ))}
          </div>
        </section>

        <section className="mb-16 animate-slide-in-left">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-red-500">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="dark:bg-gray-800 dark:text-white transform transition duration-300 hover:scale-105 hover:shadow-xl">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="dark:text-gray-300">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500">Experience</h2>
          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <Card key={index} className="dark:bg-gray-800 dark:text-white transform transition duration-300 hover:scale-102 hover:shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center text-base sm:text-lg">
                    <Briefcase className="mr-2 h-5 w-5" />
                    {exp.title}
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base">{exp.company} | {exp.period}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">Education</h2>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <Card key={index} className="dark:bg-gray-800 dark:text-white transform transition duration-300 hover:scale-102 hover:shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center text-base sm:text-lg">
                    <GraduationCap className="mr-2 h-5 w-5" />
                    {edu.degree}
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base">{edu.school} | {edu.year}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500">Awards & Recognitions</h2>
          <div className="space-y-4">
            {awards.map((award, index) => (
              <Card key={index} className="dark:bg-gray-800 dark:text-white transform transition duration-300 hover:scale-102 hover:shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center text-base sm:text-lg">
                    <Award className="mr-2 h-5 w-5" />
                    {award.title}
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base">{award.organization} | {award.year}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="text-center mb-16 animate-slide-in-bottom">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500">Get in Touch</h2>
          <Card className="dark:bg-gray-800 dark:text-white transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <CardContent className="pt-6">
              <p className="text-base sm:text-lg mb-4 dark:text-gray-300">
                I&apos;m always open to new opportunities and collaborations. Feel free to reach out!
              </p>
              <Button asChild className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
                <a href="mailto:johndoe@example.com">Contact Me</a>
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="mt-16 text-center text-gray-600 dark:text-gray-400 animate-fade-in">
        <p>John Doe</p>
        <p>Phone: (123) 456-7890</p>
      </footer>
    </div>
  )
}