import { GraduationCap, Users, Award, BookOpen } from "lucide-react"

const highlights = [
  {
    icon: GraduationCap,
    title: "Expert Faculty",
    description: "Learn from industry professionals with years of experience in fashion design.",
  },
  {
    icon: Users,
    title: "Industry Connections",
    description: "Build your network with our strong industry partnerships and placement opportunities.",
  },
  {
    icon: Award,
    title: "Recognized Programs",
    description: "Our programs are designed to meet industry standards, ensuring quality education.",
  },
  {
    icon: BookOpen,
    title: "Comprehensive Curriculum",
    description: "Our curriculum combines theoretical knowledge with practical skills for a well-rounded education.",
  },
]

export default function InstituteHighlights() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-rose-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-rose-600 bg-clip-text text-transparent mb-6">Institute Highlights</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            Discover what makes Sanika College Of B.Design a premier choice for aspiring
            designers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20 group"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl group-hover:from-rose-200 group-hover:to-pink-200 transition-all duration-300 shadow-lg">
                  <highlight.icon className="h-10 w-10 text-rose-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center group-hover:text-rose-600 transition-colors duration-300">{highlight.title}</h3>
              <p className="text-gray-600 text-center leading-relaxed">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
