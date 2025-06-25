import type React from "react"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

export const metadata: Metadata = {
  title: "SATRI - Samarth Technical Research and Innovations",
  description:
    "Empowering the Future Through Innovation and Technology. Master cutting-edge skills in AI/ML, Flutter, MERN Stack, Python, Django, and UI/UX Design.",
  keywords:
    "SATRI, technology education, programming courses, AI ML, Flutter, MERN Stack, Python, Django, UI UX, Nepal, Pokhara",
  authors: [{ name: "SATRI Team" }],
  openGraph: {
    title: "SATRI - Samarth Technical Research and Innovations",
    description: "Empowering the Future Through Innovation and Technology",
    type: "website",
    locale: "en_US",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
