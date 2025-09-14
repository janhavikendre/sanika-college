import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-br from-rose-600 via-pink-600 to-rose-700 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-white rounded-full animate-pulse delay-500"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Ready to Start Your Design Journey?</h2>
        <p className="text-xl mb-10 max-w-4xl mx-auto font-light leading-relaxed">
          Applications are now open for the upcoming academic year. Take the first step towards your creative career in
          design with our comprehensive B.Design programs.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Button asChild size="lg" className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/30 hover:border-white/50 transition-all duration-300 hover:scale-105 shadow-xl">
            <Link href="/academics/programs">Explore Programs</Link>
          </Button>
          <Button asChild size="lg" className="bg-white text-rose-600 hover:bg-gray-100 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 font-semibold">
            <Link href="/academics/admission">Apply Now</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
