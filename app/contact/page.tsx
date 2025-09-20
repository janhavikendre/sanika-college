import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Clock, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 to-rose-600 bg-clip-text text-transparent">Contact Us</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-rose-50/30">
          <CardContent className="p-8 flex flex-col items-center text-center">
            <div className="bg-gradient-to-br from-rose-100 to-pink-100 p-4 rounded-2xl mb-6 shadow-lg">
              <Mail className="h-8 w-8 text-rose-600" />
            </div>
            <h3 className="font-semibold mb-2">Email</h3>
            <a href="mailto:Sanikacollege493@gmail.com" className="text-rose-600 hover:underline">
              Sanikacollege493@gmail.com
            </a>
          </CardContent>
        </Card>

        <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-rose-50/30">
          <CardContent className="p-8 flex flex-col items-center text-center">
            <div className="bg-gradient-to-br from-rose-100 to-pink-100 p-4 rounded-2xl mb-6 shadow-lg">
              <Phone className="h-8 w-8 text-rose-600" />
            </div>
            <h3 className="font-semibold mb-2">Phone</h3>
            <a href="tel:+917888155999" className="text-rose-600 hover:underline">
              +91 7888155999
            </a>
          </CardContent>
        </Card>

        <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-rose-50/30">
          <CardContent className="p-8 flex flex-col items-center text-center">
            <div className="bg-gradient-to-br from-rose-100 to-pink-100 p-4 rounded-2xl mb-6 shadow-lg">
              <Clock className="h-8 w-8 text-rose-600" />
            </div>
            <h3 className="font-semibold mb-2">Working Hours</h3>
            <p className="text-gray-700">Monday - Saturday</p>
            <p className="text-gray-700">9:00 AM - 5:00 PM</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input id="name" placeholder="Enter your name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="Enter your email" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Enter subject" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Enter your message" rows={5} required />
              </div>

              <Button type="submit" className="bg-rose-600 hover:bg-rose-700 w-full md:w-auto">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-0">
            <div className="h-full min-h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15186.013811134044!2d76.74156135!3d17.937091199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcf4166f8287605%3A0xec1001da3d0dfc40!2sDESHMUKH%20COLLEGE%20OF%20PHARMACY%20KASAR%20SIRSI!5e0!3m2!1sen!2sin!4v1701840230740!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "300px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sanika College Of B.Design, Mitmita Chhan"
              ></iframe>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-start">
            <MapPin className="h-5 w-5 text-rose-600 mr-3 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Our Address</h3>
              <p className="text-gray-700">
                Sanika College Of B.Design,
                <br />
                Mitmita Chhan, Sambhaji Nagar,
                <br />
                pincode: 431001
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
