"use client"

import { useState, useEffect } from "react"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "B.Design Graduate 2023",
    company: "Fashion Designer at Zara",
    content: "Sanika College Of B.Design provided me with the perfect foundation for my career. The faculty's industry experience and hands-on approach helped me secure my dream job at Zara.",
    rating: 5,
    image: "/placeholder-user.jpg"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "B.Design Graduate 2022",
    company: "Creative Director at Design Studio",
    content: "The comprehensive curriculum and modern facilities at Sanika College gave me the skills and confidence to start my own design studio. Highly recommended!",
    rating: 5,
    image: "/placeholder-user.jpg"
  },
  {
    id: 3,
    name: "Anita Patel",
    role: "B.Design Graduate 2023",
    company: "Textile Designer at FabIndia",
    content: "The practical approach to learning and industry connections at Sanika College opened doors I never thought possible. The faculty truly cares about student success.",
    rating: 5,
    image: "/placeholder-user.jpg"
  }
]

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ))
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-rose-600 bg-clip-text text-transparent mb-6">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Hear from our successful graduates who have made their mark in the design industry.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-rose-200/30 to-pink-200/30 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-rose-200/30 to-pink-200/30 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <Quote className="h-12 w-12 text-rose-400" />
              </div>
              
              <blockquote className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed mb-8 text-center">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              
              <div className="flex justify-center mb-6">
                <div className="flex space-x-1">
                  {renderStars(testimonials[currentTestimonial].rating)}
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <Image
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center md:text-left">
                  <div className="font-bold text-lg text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-rose-600 font-medium">
                    {testimonials[currentTestimonial].role}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonial indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? "bg-rose-600 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
