import "../lib/react-polyfill" // Import the polyfill first
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"
import { Providers } from "./providers"
import Footer from "@/components/layout/footer"
import PageLayout from "@/components/layout/page-layout"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Sanika College Of B.Design, Mitmita Chhan",
  description: "Premier B.Design College in Sambhaji Nagar",
  keywords: "B.Design, college, education, design courses, Sambhaji Nagar",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="flex min-h-screen flex-col">
            <PageLayout>
              <main className="flex-1">{children}</main>
            </PageLayout>
            <Footer />
          </div>
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}