import Hero from "@/components/hero"
import About from "@/components/about"
import Courses from "@/components/courses"
import Products from "@/components/products"
import Team from "@/components/team"
import Stats from "@/components/stats"
import Contact from "@/components/contact"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <Products />
      <Stats />
      <Team />
      <Contact />
      <Footer />
    </div>
  )
}
