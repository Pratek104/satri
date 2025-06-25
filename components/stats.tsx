import { Users, Briefcase, Award, Code } from "lucide-react"

export default function Stats() {
  const stats = [
    {
      icon: Users,
      number: "20+",
      label: "Internships Offered",
    },
    {
      icon: Briefcase,
      number: "13+",
      label: "Projects Completed",
    },
    {
      icon: Award,
      number: "6",
      label: "Course Programs",
    },
    {
      icon: Code,
      number: "4",
      label: "Innovative Products",
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Our Impact</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Numbers that showcase our commitment to excellence and student success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-muted flex items-center justify-center">
                <stat.icon size={28} className="text-foreground" />
              </div>
              <div className="mb-2">
                <span className="text-3xl md:text-4xl font-bold text-foreground">{stat.number}</span>
              </div>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-lg p-8 border border-border">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4 text-foreground">Join Our Growing Community</h3>
            <p className="text-muted-foreground mb-6">
              Be part of a vibrant community of tech enthusiasts, innovators, and future leaders in technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-muted text-muted-foreground px-4 py-2 rounded-full">Expert Mentorship</span>
              <span className="bg-muted text-muted-foreground px-4 py-2 rounded-full">Hands-on Projects</span>
              <span className="bg-muted text-muted-foreground px-4 py-2 rounded-full">Industry Connections</span>
              <span className="bg-muted text-muted-foreground px-4 py-2 rounded-full">Career Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
