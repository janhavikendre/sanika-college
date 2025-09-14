"use client"

import { useEffect, useRef } from "react"
import { Megaphone } from "lucide-react"

interface Announcement {
  _id: string
  text: string
  link?: string
  isActive: boolean
}

interface AnnouncementsProps {
  announcements: Announcement[]
}

export default function Announcements({ announcements }: AnnouncementsProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!scrollRef.current || announcements.length === 0) return

    const scrollElement = scrollRef.current
    let animationId: number
    let position = 0

    const scroll = () => {
      if (!scrollElement) return

      position -= 1
      scrollElement.style.transform = `translateX(${position}px)`

      // Reset position when the first announcement is completely out of view
      if (Math.abs(position) >= scrollElement.children[0].clientWidth) {
        position = 0
        // Move the first child to the end
        scrollElement.appendChild(scrollElement.children[0])
        scrollElement.style.transform = `translateX(${position}px)`
      }

      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [announcements])

  if (!announcements || announcements.length === 0) {
    return null
  }

  const activeAnnouncements = announcements.filter((a) => a.isActive)

  if (activeAnnouncements.length === 0) {
    return null
  }

  return (
    <div className="bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 text-white py-4 overflow-hidden relative">
      <div className="container mx-auto px-4 flex items-center relative z-10">
        <div className="flex-shrink-0 flex items-center mr-6 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
          <Megaphone className="h-5 w-5 mr-2 animate-pulse" />
          <span className="font-bold text-sm uppercase tracking-wide">Latest News</span>
        </div>
        <div className="overflow-hidden relative flex-1">
          <div ref={scrollRef} className="flex whitespace-nowrap" style={{ willChange: "transform" }}>
            {activeAnnouncements.map((announcement, index) => (
              <div key={announcement._id} className="inline-block px-6 whitespace-nowrap">
                {announcement.link ? (
                  <a href={announcement.link} target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-yellow-200 transition-colors duration-300 font-medium">
                    {announcement.text}
                  </a>
                ) : (
                  <span className="font-medium">{announcement.text}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
