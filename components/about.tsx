import { Target, Users, Lightbulb, Award } from "lucide-react"

export default function About() {
  const features = [
    {
      icon: Target,
      title: "Mission-Driven",
      description:
        "Empowering individuals with cutting-edge technology skills and insights needed to succeed in the digital world.",
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description:
        "Learn from experienced industry professionals who provide practical insights and mentor you through hands-on projects.",
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description:
        "Equipping you with cutting-edge tools and techniques, helping you develop innovative solutions for the future.",
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "20+ internships offered and 13+ projects completed, showcasing our commitment to student success.",
    },
  ]

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">About SATRI</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Welcome to SATRI, your premier destination for exploring the limitless possibilities of technology. We are
            dedicated to offering comprehensive courses and expert guidance in programming, robotics, mobile app
            development, web development, mechatronics, and more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-card p-6 rounded-lg border border-border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mb-4">
                <feature.icon size={24} className="text-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-lg p-8 border border-border">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold mb-4 text-foreground">Why Choose SATRI?</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-muted-foreground text-sm">Comprehensive tech coverage across multiple domains</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-muted-foreground text-sm">Hands-on learning with real-world projects</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-muted-foreground text-sm">Active community of tech enthusiasts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
