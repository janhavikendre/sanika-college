"use client"

import { useState, useEffect } from "react"
import { Users, Award, BookOpen, TrendingUp } from "lucide-react"

const stats = [
  {
    icon: Users,
    number: 500,
    suffix: "+",
    label: "Students Enrolled",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Award,
    number: 95,
    suffix: "%",
    label: "Placement Rate",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: BookOpen,
    number: 15,
    suffix: "+",
    label: "Years Experience",
    color: "from-purple-500 to-violet-500"
  },
  {
    icon: TrendingUp,
    number: 200,
    suffix: "+",
    label: "Industry Partners",
    color: "from-orange-500 to-red-500"
  }
]

export default function Statistics() {
  const [counters, setCounters] = useState(stats.map(() => 0))

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps

    const intervals = stats.map((stat, index) => {
      const increment = stat.number / steps
      let current = 0

      return setInterval(() => {
        current += increment
        if (current >= stat.number) {
          current = stat.number
          clearInterval(intervals[index])
        }
        setCounters(prev => {
          const newCounters = [...prev]
          newCounters[index] = Math.floor(current)
          return newCounters
        })
      }, stepDuration)
    })

    return () => {
      intervals.forEach(clearInterval)
    }
  }, [])

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent mb-6">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Discover the success stories and achievements that make Sanika College Of B.Design a premier choice for design education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20 group text-center"
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${stat.color} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">
                {counters[index]}{stat.suffix}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
