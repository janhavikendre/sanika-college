"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

interface AboutTabsProps {
  about: {
    vision: string
    mission: any
    institute: string
    society: string
  }
  directors: any[]
  leadership: any[]
}

export function AboutTabs({ about, directors, leadership }: AboutTabsProps) {
  const [activeTab, setActiveTab] = useState("institute")

  const renderTabContent = () => {
    switch (activeTab) {
      case "institute":
        return (
          <div className="grid md:grid-cols-2 gap-8 items-center">
           
            <div>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-rose-800 to-pink-600 bg-clip-text text-transparent">Sanika College Of B.Design</h2>
              <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: about.institute || "Content coming soon..." }}
              />
            </div>
          </div>
        )
      case "society":
        return (
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-rose-800 to-pink-600 bg-clip-text text-transparent">About Our Society</h2>
              <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: about.society || "Content coming soon..." }}
              />
            </div>
         
          </div>
        )
      case "vision":
        return (
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-rose-50/30">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-6 text-rose-800">Our Vision</h3>
                <p className="text-gray-700">
                  {about.vision ||
                    "To be a premier institute for fashion design education, fostering creativity, innovation, and excellence in the fashion industry."}
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-rose-50/30">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-6 text-rose-800">Our Mission</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {about.mission ? (
                    <div dangerouslySetInnerHTML={{ __html: about.mission }} />
                  ) : (
                    <>
                      <li>Provide quality education in fashion design with industry-relevant curriculum</li>
                      <li>Foster creativity and innovation through hands-on practical training</li>
                      <li>Develop professional skills and ethical values in students</li>
                      <li>Establish strong industry connections for better placement opportunities</li>
                      <li>Promote research and development in the field of fashion design</li>
                    </>
                  )}
                </ul>
              </CardContent>
            </Card>
          </div>
        )
      case "directors":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {directors && directors.length > 0 ? (
              directors.map((director) => (
                <Card key={director._id} className="overflow-hidden hover:shadow-lg transition-shadow border-rose-100">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-rose-200">
                        <Image
                          src={
                            director.imageId
                              ? `/api/files/${director.imageId}`
                              : "/placeholder.svg?height=128&width=128"
                          }
                          alt={director.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-rose-800">{director.name}</h3>
                      <p className="text-rose-600">{director.role}</p>
                      {director.qualification && <p className="text-sm text-gray-500 mt-1">{director.qualification}</p>}
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500"></p>
            )}
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="border-rose-300 bg-gradient-to-r from-rose-50 to-pink-50 hover:from-rose-100 hover:to-pink-100 shadow-lg hover:shadow-xl transition-all duration-300">
              {activeTab === "institute" && "About Institute"}
              {activeTab === "society" && "About Society"}
              {activeTab === "vision" && "Vision & Mission"}
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center" className="w-56">
            <DropdownMenuItem onClick={() => setActiveTab("institute")}>About Institute</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setActiveTab("society")}>About Society</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setActiveTab("vision")}>Vision & Mission</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="mt-6">{renderTabContent()}</div>
    </div>
  )
}
