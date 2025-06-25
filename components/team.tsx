import { Linkedin, Github, Mail } from "lucide-react"

export default function Team() {
  const teamMembers = [
    {
      name: "Mr. Sangam Giri",
      role: "Founder, CEO & Head of the Company",
      avatar: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Gursewak Singh",
      role: "Flutter Developer",
      avatar: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Sujan Poudel",
      role: "Flutter Developer",
      avatar: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Simran Giri",
      role: "HR Intern",
      avatar: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Bishnu Ghimire",
      role: "Next.js Intern",
      avatar: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Manish Shrestha",
      role: "UI/UX Design Intern",
      avatar: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Shakila Shrestha",
      role: "UI/UX Design Intern",
      avatar: "/placeholder.svg?height=200&width=200",
    },
  ]

  return (
    <section id="team" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Meet Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The innovators and experts who drive SATRI's success and guide our students towards excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-card rounded-lg border border-border p-6 text-center hover:shadow-md transition-shadow"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-muted overflow-hidden">
                <img
                  src={member.avatar || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="font-bold text-foreground mb-2">{member.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">{member.role}</p>

              <div className="flex justify-center space-x-3">
                <button className="w-8 h-8 bg-muted hover:bg-accent rounded-full flex items-center justify-center transition-colors">
                  <Linkedin size={16} className="text-muted-foreground" />
                </button>
                <button className="w-8 h-8 bg-muted hover:bg-accent rounded-full flex items-center justify-center transition-colors">
                  <Github size={16} className="text-muted-foreground" />
                </button>
                <button className="w-8 h-8 bg-muted hover:bg-accent rounded-full flex items-center justify-center transition-colors">
                  <Mail size={16} className="text-muted-foreground" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-lg p-8 border border-border">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4 text-foreground">Join Our Team</h3>
            <p className="text-muted-foreground mb-6">
              We're always looking for passionate individuals to join our mission of empowering the next generation of
              tech innovators.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-muted text-muted-foreground px-4 py-2 rounded-full text-sm">
                Remote Opportunities
              </span>
              <span className="bg-muted text-muted-foreground px-4 py-2 rounded-full text-sm">Flexible Hours</span>
              <span className="bg-muted text-muted-foreground px-4 py-2 rounded-full text-sm">Growth Focused</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
