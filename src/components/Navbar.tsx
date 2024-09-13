import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

interface NavbarProps {
  darkMode: boolean
  toggleDarkMode: () => void
  avatarUrl?: string
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode, avatarUrl }) => {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              {
                avatarUrl ?
                <Image
                  src={avatarUrl}
                  alt="Damilola Ige's avatar"
                  width={40}
                  height={40}
                  className="rounded-full"
                /> : <span className="ml-2 text-xl font-bold text-gray-800 dark:text-white">IDM</span>
              }
            </Link>
          </div>
          <div className="flex items-center">
            <Link href="/projects" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Projects
            </Link>
            <Button
              variant="outline"
              size="icon"
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
              className="ml-4 hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar