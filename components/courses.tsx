import { Button } from "@/components/ui/button"
import { Clock, Users, Award, ArrowRight } from "lucide-react"

export default function Courses() {
  const courses = [
    {
      title: "AI/ML & Data Science",
      duration: "2 Months",
      description: "Master machine learning, deep learning, neural networks, and data science with hands-on projects.",
      modules: [
        "Python for Data Science",
        "Machine Learning Algorithms",
        "Deep Learning with TensorFlow",
        "NLP & Computer Vision",
      ],
    },
    {
      title: "Flutter Development",
      duration: "2 Months",
      description: "Build cross-platform mobile apps with Dart and Flutter, including Firebase integration.",
      modules: ["Dart Programming", "Flutter Widgets", "State Management", "Firebase Integration"],
    },
    {
      title: "MERN Stack",
      duration: "2 Months",
      description: "Full-stack web development with MongoDB, Express.js, React.js, and Node.js.",
      modules: ["React.js Fundamentals", "Node.js & Express", "MongoDB Integration", "Deployment & DevOps"],
    },
    {
      title: "Python Programming",
      duration: "2 Months",
      description: "Comprehensive Python programming from basics to advanced concepts and automation.",
      modules: ["Python Fundamentals", "OOP in Python", "Web Scraping & APIs", "Automation Scripts"],
    },
    {
      title: "Python Django",
      duration: "2 Months",
      description: "Build robust web applications with Django framework and REST APIs.",
      modules: ["Django Fundamentals", "Models & ORM", "Django REST Framework", "Deployment"],
    },
    {
      title: "UI/UX Design",
      duration: "2 Months",
      description: "Create user-centered designs with modern tools and design thinking principles.",
      modules: ["Design Principles", "User Research", "Figma & Adobe XD", "Usability Testing"],
    },
  ]

  return (
    <section id="courses" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Our Courses</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Expert-led courses designed to equip you with cutting-edge skills in technology and innovation.
          </p>
          <div className="flex justify-center items-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Clock size={16} />
              <span>2 Months Duration</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users size={16} />
              <span>Expert Mentorship</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award size={16} />
              <span>2 Days Trial Period</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {courses.map((course, index) => (
            <div key={index} className="bg-card rounded-lg border border-border p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-foreground">{course.title}</h3>
                <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">{course.duration}</span>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed text-sm">{course.description}</p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-3">Key Modules:</h4>
                <ul className="space-y-2">
                  {course.modules.map((module, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-foreground mr-3 flex-shrink-0"></div>
                      {module}
                    </li>
                  ))}
                </ul>
              </div>

              <Button className="w-full" variant="outline">
                Learn More <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-card rounded-lg p-8 border border-border">
            <h3 className="text-xl font-bold mb-4 text-foreground">Special Offer</h3>
            <p className="text-muted-foreground mb-6">
              Start with our <span className="font-semibold text-foreground">2-day trial period</span> with{" "}
              <span className="font-semibold text-foreground">money-back guarantee</span>
            </p>
            <Button size="lg" className="px-8 py-3">
              Start Your Trial
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
