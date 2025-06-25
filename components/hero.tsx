import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Cpu, Smartphone } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
            Samarth Technical Research & Innovations
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Empowering the Future Through Innovation and Technology. Master cutting-edge skills in AI/ML, Flutter, MERN
            Stack, and more with expert guidance and hands-on learning.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="px-8 py-3">
              Explore Courses <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3">
              Contact Us
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Code size={32} className="text-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Programming</h3>
              <p className="text-sm text-muted-foreground">Master multiple programming languages and frameworks</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Cpu size={32} className="text-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">AI & ML</h3>
              <p className="text-sm text-muted-foreground">Learn artificial intelligence and machine learning</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Smartphone size={32} className="text-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Mobile Dev</h3>
              <p className="text-sm text-muted-foreground">Build cross-platform mobile applications</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
