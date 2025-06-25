import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram, Twitter } from "lucide-react"

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+977 9707722844", "+977 9827128881"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info.satri@gmail.com"],
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["Santinagar Chowk-7, Pokhara", "Kaski, Nepal - 33700"],
    },
  ]

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/satritech" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/samarth-technical-research-and-innovations/",
    },
    { icon: Instagram, href: "https://www.instagram.com/media.satri/" },
    { icon: Twitter, href: "https://x.com/media_satri" },
  ]

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to start your tech journey? Contact us today and take the first step towards mastering cutting-edge
            technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-muted flex-shrink-0">
                      <info.icon size={20} className="text-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-foreground mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-muted hover:bg-accent rounded-lg flex items-center justify-center transition-colors"
                  >
                    <social.icon size={18} className="text-foreground" />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-lg font-bold text-foreground mb-3">Special Offer</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Start with our 2-day trial period with money-back guarantee. Experience our teaching methodology
                risk-free!
              </p>
              <Button>Claim Your Trial</Button>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-card rounded-lg border border-border p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                    <Input type="text" placeholder="Your first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                    <Input type="text" placeholder="Your last name" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <Input type="email" placeholder="your.email@example.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                  <Input type="tel" placeholder="+977 98XXXXXXXX" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Course Interest</label>
                  <select className="w-full p-3 bg-input border border-border rounded-md text-foreground focus:border-ring focus:outline-none">
                    <option value="">Select a course</option>
                    <option value="ai-ml">AI/ML & Data Science</option>
                    <option value="flutter">Flutter Development</option>
                    <option value="mern">MERN Stack</option>
                    <option value="python">Python Programming</option>
                    <option value="django">Python Django</option>
                    <option value="uiux">UI/UX Design</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <Textarea placeholder="Tell us about your goals and how we can help you..." rows={4} />
                </div>

                <Button type="submit" className="w-full py-3">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
