import { LibraryTabs } from "@/components/library/library-tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import clientPromise from "@/lib/mongodb"

async function getLibraryContent() {
  try {
    const client = await clientPromise
    const db = client.db("fashion_institute")

    const content = await db.collection("content").findOne({ section: "library" })
    const resources = await db.collection("library_resources").find({}).sort({ category: 1 }).toArray()

    return {
      content: content || {},
      resources: resources || [],
    }
  } catch (error) {
    console.error("Error fetching library content:", error)
    return {
      content: {},
      resources: [],
    }
  }
}

export default async function LibraryPage() {
  const { content, resources } = await getLibraryContent()

  // Group resources by category
  const groupedResources = {
    books: resources.filter((r) => r.category === "books"),
    journals: resources.filter((r) => r.category === "journals"),
    digital: resources.filter((r) => r.category === "digital"),
    archives: resources.filter((r) => r.category === "archives"),
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-12">Library & Resources</h1>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-rose-800">About Our Library</h2>
          <div className="prose max-w-none">
            {content.about ? (
              <div dangerouslySetInnerHTML={{ __html: content.about }} />
            ) : (
              <>
                <p>
                  The Sanika College Of B.Design library is a comprehensive resource center for design
                  students and faculty. Our library houses an extensive collection of books, journals, magazines,
                  digital resources, and archives related to design, textile science, design history, and
                  industry practices.
                </p>
                <p>
                  Our mission is to provide students with access to quality resources that enhance their learning
                  experience and support their academic and creative endeavors. The library is continuously updated with
                  the latest publications and digital resources to keep pace with the evolving fashion industry.
                </p>
              </>
            )}
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2 text-rose-700">Library Hours</h3>
            <ul className="space-y-1">
              {content.hours ? (
                <div dangerouslySetInnerHTML={{ __html: content.hours }} />
              ) : (
                <>
                  <li className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>

     
      </div>

      <Card className="mb-12 overflow-hidden border-rose-100 hover:shadow-lg transition-shadow">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0 bg-rose-100 p-4 rounded-full">
              <Search className="h-8 w-8 text-rose-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2 text-rose-800">Online Catalog</h2>
              <p className="text-gray-700 mb-4">
                Search our online catalog to find books, journals, and other resources available in our library. You can
                check availability, place holds, and renew borrowed items through our online system.
              </p>
              <Button className="bg-rose-600 hover:bg-rose-700">Access Online Catalog</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <h2 className="text-2xl font-bold mb-6 text-rose-800">Library Resources</h2>

      <LibraryTabs resources={groupedResources} />
    </div>
  )
}
