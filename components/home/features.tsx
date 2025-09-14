import { 
  Palette, 
  Laptop, 
  Users, 
  Globe, 
  Award, 
  Heart,
  Lightbulb,
  Target
} from "lucide-react"

const features = [
  {
    icon: Palette,
    title: "Creative Excellence",
    description: "Unleash your creativity with our comprehensive design programs and state-of-the-art facilities.",
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: Laptop,
    title: "Modern Technology",
    description: "Access cutting-edge design software and digital tools used by industry professionals.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Users,
    title: "Expert Faculty",
    description: "Learn from experienced industry professionals and renowned design experts.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "Gain international exposure through exchange programs and global design trends.",
    color: "from-purple-500 to-violet-500"
  },
  {
    icon: Award,
    title: "Industry Recognition",
    description: "Our programs are recognized by leading design organizations and industry bodies.",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Heart,
    title: "Student Support",
    description: "Comprehensive support system including career guidance and personal development.",
    color: "from-teal-500 to-blue-500"
  },
  {
    icon: Lightbulb,
    title: "Innovation Focus",
    description: "Stay ahead with innovative teaching methods and emerging design technologies.",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Target,
    title: "Career Success",
    description: "High placement rates with top design companies and successful alumni network.",
    color: "from-indigo-500 to-purple-500"
  }
]

export default function Features() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-rose-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-rose-600 bg-clip-text text-transparent mb-6">
            Why Choose Sanika College?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            Discover the unique advantages that set us apart in design education and prepare you for a successful career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20 text-center"
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-rose-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
