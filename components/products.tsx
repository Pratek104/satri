import { Button } from "@/components/ui/button"
import { Server, Smartphone, Wrench, Database, ArrowRight } from "lucide-react"

export default function Products() {
  const products = [
    {
      name: "Samrachana",
      description:
        "A headless backend generator for efficient and scalable development. Build robust APIs and backend services with minimal configuration.",
      icon: Server,
      features: ["Headless Architecture", "Scalable Backend", "API Generation", "Minimal Configuration"],
    },
    {
      name: "MOSE",
      description:
        "A mobile-based server that powers mobile computing solutions. Transform your mobile device into a powerful server.",
      icon: Smartphone,
      features: ["Mobile Server", "Computing Solutions", "Cross-Platform", "Real-time Processing"],
    },
    {
      name: "Fluttero",
      description:
        "A comprehensive set of tools designed to simplify and accelerate Flutter development with pre-built components.",
      icon: Wrench,
      features: ["Flutter Tools", "Pre-built Components", "Development Acceleration", "Code Generation"],
    },
    {
      name: "UMA",
      description:
        "A Dart backend framework for seamless integration and robust performance. Build scalable backend services with Dart.",
      icon: Database,
      features: ["Dart Framework", "Backend Services", "Seamless Integration", "High Performance"],
    },
  ]

  return (
    <section id="products" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Our Products</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Innovative products designed to simplify and revolutionize the tech development process.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {products.map((product, index) => (
            <div key={index} className="bg-card rounded-lg border border-border p-8 hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-6">
                <div className="p-4 rounded-lg bg-muted flex-shrink-0">
                  <product.icon size={32} className="text-foreground" />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 text-foreground">{product.name}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm">{product.description}</p>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-foreground flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button variant="outline">
                    Learn More <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-card rounded-lg p-8 border border-border">
            <h3 className="text-xl font-bold mb-4 text-foreground">Ready to Transform Your Development Process?</h3>
            <p className="text-muted-foreground mb-6">
              Discover how our innovative products can accelerate your development workflow and boost productivity.
            </p>
            <Button size="lg" className="px-8 py-3">
              Get Started Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
