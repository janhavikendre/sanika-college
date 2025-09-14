import Link from "next/link"
import { Mail, Phone, Clock, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <h3 className="text-xl font-bold mb-6 text-rose-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-rose-400 transition-all duration-300 hover:translate-x-1">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-rose-400 transition-all duration-300 hover:translate-x-1">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/academics" className="text-gray-300 hover:text-rose-400 transition-all duration-300 hover:translate-x-1">
                  Academics
                </Link>
              </li>
              <li>
                <Link href="/academics/admission" className="text-gray-300 hover:text-rose-400 transition-all duration-300 hover:translate-x-1">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-rose-400 transition-all duration-300 hover:translate-x-1">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-rose-400">Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/academics/programs" className="text-gray-300 hover:text-white transition-colors">
                  B.A. Fashion Design
                </Link>
              </li>
              <li>
           
              </li>
              <li>
                <Link href="/academics/syllabus" className="text-gray-300 hover:text-white transition-colors">
                  Syllabus
                </Link>
              </li>
              <li>
                <Link href="/academics/faculty" className="text-gray-300 hover:text-white transition-colors">
                  Faculty
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-rose-400">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/library" className="text-gray-300 hover:text-white transition-colors">
                  Library
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="text-gray-300 hover:text-white transition-colors">
                  Facilities
                </Link>
              </li>
              <li>
                <Link href="/academics/calendar" className="text-gray-300 hover:text-white transition-colors">
                  Academic Calendar
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-rose-400">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-rose-400 mr-2 mt-0.5" />
                <span className="text-gray-300">Sanika College Of B.Design, Mitmita Chhan, Sambhaji Nagar, pincode: 431001</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-rose-400 mr-2" />
                <a
                  href="mailto:Sanikacpllege493@gmail.com"
                  className="text-gray-300 hover:text-rose-400 transition-all duration-300 hover:translate-x-1"
                >
                  Sanikacpllege493@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-rose-400 mr-2" />
                <a href="tel:+917888155999" className="text-gray-300 hover:text-white transition-colors">
                  +91 7888155999
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-rose-400 mr-2" />
                <a href="tel:+917888155999" className="text-gray-300 hover:text-white transition-colors">
                  +91 7888155999
                </a>
              </li>
              <li className="flex items-center">
                <Clock className="h-5 w-5 text-rose-400 mr-2" />
                <span className="text-gray-300">Mon-Sat: 9:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 font-medium">
              &copy; {new Date().getFullYear()} Sanika College Of B.Design, Mitmita Chhan. All rights reserved.
            </div>
            <div className="text-gray-400 text-center md:text-right">
              <div className="flex items-center justify-center md:justify-end space-x-1 mb-1">
                <span>Website Engineered with</span>
                <span className="text-rose-400">❤️</span>
              </div>
              <div className="text-sm">
                by SOS STATISTICAL ANALYSIS AND IT SOLUTIONS pvt ltd
              </div>
              <div className="text-sm">
                <span>contact here </span>
                <a 
                  href="mailto:sosresearch.it5601@gmail.com" 
                  className="text-rose-400 hover:text-rose-300 transition-colors duration-300"
                >
                  sosresearch.it5601@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
