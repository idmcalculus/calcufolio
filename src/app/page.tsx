'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Mail, Briefcase, GraduationCap, Award } from "lucide-react"
import { XLogo } from '@/components/icons/xLogo'
import { GitHubLogo } from '@/components/icons/githubLogo'
import Navbar from '@/components/Navbar'
import SkillsCloud from '@/components/SkillsCloud'

const featuredProjects = [
  {
    title: "Aeeiee's Website",
    description: "A professional, modern and responsive website for my company, Aeeiee, showcasing our products, services and more.",
    link: "https://aeeiee.com",
    tags: ["React", "PHP", "jQuery", "MySQL", "AWS", "WordPress", "Gutenberg", "Sass", "Bootstrap", "HTML", "CSS"]
  },
  {
    title: "Task Management App",
    description: "A productivity app built with React Native and Firebase.",
    link: "https://github.com/yourusername/task-management-app",
    tags: ["React Native", "Firebase"]
  }
]

const skills = [
  "Swift", "SwiftUI", "UIKit", "iOS Development", "JavaScript", "TypeScript", "React", "NestJS",
  "Next.js", "Node.js", "Python", "Flask", "Django", "Express", "PostgreSQL", "MongoDB", "GraphQL",
  "HTML", "CSS", "Git", "RESTful APIs", "AWS", "MySQL", "PHP", "jQuery", "Sass", "Bootstrap",
  "Tailwind CSS", "Material UI", "Pulumi", "Github Actions", "Jest", "Mocha", "Pytest", "Docker",
  "Kubernetes", "Terraform", "Ansible", "AWS CDK"
]

const experiences = [
  { title: "Software Engineer II", company: "Aeeiee Inc.", period: "September 2020 - Present" },
  { title: "Senior FullStack Developer", company: "RCCG ICT Unit", period: "December 2020 - December 2022" },
  { title: "Senior FullStack Developer", company: "Versa Nigeria", period: "February 2020 - July 2020" }
]

const education = [
  { degree: "Master of Science, Petroleum Engineering", school: "University of Ibadan, Ibadan", year: "2015" },
  { degree: "Bachelor of Science, Petroleum Engineering", school: "University of Ibadan, Ibadan", year: "2010" }
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
    <div className={`min-h-screen ${darkMode ? 'dark' : ''} bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 dark:from-purple-900 dark:via-pink-900 dark:to-blue-900 transition-colors duration-500`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} avatarUrl="https://res.cloudinary.com/idmcalculus/image/upload/v1566493677/IMG-20190804-WA0002_to0bl3.jpg"/>
      <main className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <section className="text-center mb-16 animate-fade-in relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
            <Image
              src="https://res.cloudinary.com/idmcalculus/image/upload/v1726244553/DSC00676_zphxta.jpg"
              alt="Damilola Michael Ige"
              width={256}
              height={256}
              className="object-cover"
            />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 pt-16">Damilola Michael Ige</h1>
          <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-8">Software Engineer</p>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Passionate about creating robust and user-friendly web and mobile applications. Experienced in both front-end and back-end technologies, with proficiency in Node.js, Python, React, PHP and iOS development using Swift and SwiftUI.
          </p>
          <div className="flex justify-center space-x-4">
            <Button asChild variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
              <a href="https://github.com/idmcalculus" target="_blank" rel="noopener noreferrer">
                <GitHubLogo />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button asChild variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
              <a href="https://linkedin.com/in/idmcalculus" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button asChild variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
              <a href="https://twitter.com/calculus_codes" target="_blank" rel="noopener noreferrer">
                <XLogo />
                <span className="sr-only">Twitter</span>
              </a>
            </Button>
            <Button asChild variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
              <a href="mailto:damilola.ige@hey.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
          </div>
        </section>

        <section className="mb-16 animate-slide-in-right">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">Skills</h2>
          <SkillsCloud skills={skills} />
        </section>

        <section className="mb-16 animate-slide-in-left">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-red-500">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="dark:bg-gray-800 dark:text-white transform transition duration-300 hover:scale-105 hover:shadow-xl flex flex-col">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="dark:text-gray-300">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button asChild className="w-full hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild>
              <Link href="/projects">See All Projects</Link>
            </Button>
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
                <a href="mailto:damilola.ige@hey.com">Contact Me</a>
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="mt-16 text-center text-gray-600 dark:text-gray-400 animate-fade-in">
        <p> © {new Date().getFullYear()} </p>
        <p> <span>Damilola Michael Ige</span> | <span>damilola.ige@hey.com</span> | <span>+447771095357</span> </p>
      </footer>
    </div>
  )
}