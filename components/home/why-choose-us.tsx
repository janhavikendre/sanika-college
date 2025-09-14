import Image from "next/image"
import { CheckCircle } from "lucide-react"

const reasons = [
  "Industry-relevant curriculum updated regularly",
  "Hands-on practical training in state-of-the-art facilities",
  "Experienced faculty with industry background",
  "Strong industry connections for internships and placements",
  "Regular workshops and masterclasses by industry experts",
  "Opportunities to showcase work at fashion shows and exhibitions",
  "Comprehensive library with latest fashion resources",
  "Supportive learning environment fostering creativity",
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
            <Image
              src="/image1.png"
              alt="Fashion design students working"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-rose-600 bg-clip-text text-transparent mb-8">Why Choose Us?</h2>
            <p className="text-xl text-gray-600 mb-10 font-light leading-relaxed">
              At Sanika College Of B.Design, we are committed to providing a comprehensive education
              that prepares students for successful careers in the design industry.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start group">
                  <CheckCircle className="h-6 w-6 text-rose-600 mr-3 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-700 font-medium leading-relaxed">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
