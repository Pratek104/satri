import { Facebook, Linkedin, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Courses", href: "#courses" },
    { name: "Products", href: "#products" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ]

  const courses = [
    { name: "AI/ML & Data Science", href: "#courses" },
    { name: "Flutter Development", href: "#courses" },
    { name: "MERN Stack", href: "#courses" },
    { name: "Python Programming", href: "#courses" },
    { name: "UI/UX Design", href: "#courses" },
  ]

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/satritech", name: "Facebook" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/samarth-technical-research-and-innovations/",
      name: "LinkedIn",
    },
    { icon: Instagram, href: "https://www.instagram.com/media.satri/", name: "Instagram" },
    { icon: Twitter, href: "https://x.com/media_satri", name: "Twitter" },
  ]

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-foreground mb-4">SATRI</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
              Samarth Technical Research and Innovations - Empowering the future through innovation and technology
              education.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone size={16} />
                <span className="text-sm">+977 9707722844</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail size={16} />
                <span className="text-sm">info.satri@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin size={16} />
                <span className="text-sm">Pokhara, Nepal</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Our Courses</h4>
            <ul className="space-y-2">
              {courses.map((course, index) => (
                <li key={index}>
                  <a
                    href={course.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {course.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-muted hover:bg-accent rounded-lg flex items-center justify-center transition-colors"
                  aria-label={social.name}
                >
                  <social.icon size={16} className="text-foreground" />
                </a>
              ))}
            </div>
            <div className="bg-card rounded-lg p-4 border border-border">
              <h5 className="text-sm font-semibold text-foreground mb-2">Special Offer</h5>
              <p className="text-xs text-muted-foreground mb-3">2-day trial period with money-back guarantee</p>
              <button className="w-full bg-primary text-primary-foreground text-xs py-2 px-4 rounded-md hover:bg-primary/90 transition-colors">
                Start Trial
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-muted-foreground text-sm mb-4 md:mb-0">
              © {currentYear} Samarth Technical Research and Innovations Pvt. Ltd. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
