'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface ProjectPreviewProps {
  url: string
}

const ProjectPreview: React.FC<ProjectPreviewProps> = ({ url }) => {
  const [previewData, setPreviewData] = useState<{ title: string; description: string; image: string } | null>(null)
  const [imageError, setImageError] = useState(false)

  useEffect(() => {
    const fetchPreviewData = async () => {
      try {
        const response = await fetch(`/api/unfurl?url=${encodeURIComponent(url)}`)
        const data = await response.json()
        setPreviewData(data)
      } catch (error) {
        console.error('Error fetching preview data:', error)
      }
    }

    fetchPreviewData()
  }, [url])

  if (!previewData) {
    return null
  }

  return (
    <div className="w-full border rounded-md overflow-hidden">
      {previewData.image && !imageError ? (
        <Image
          src={previewData.image}
          alt={previewData.title}
          width={300}
          height={200}
          className="w-full h-40 object-cover"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="w-full h-40 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
          <span className="text-gray-500 dark:text-gray-400">No image available</span>
        </div>
      )}
      <div className="p-4">
        <h3 className="font-semibold">{previewData.title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{previewData.description}</p>
      </div>
    </div>
  )
}

export default ProjectPreview