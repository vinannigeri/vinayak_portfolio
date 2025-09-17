import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Phone, MapPin, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function Portfolio() {
  const projects = [
    {
      title: "Movie Recommendation System",
      description:
        "Content-based recommendation engine using CountVectorizer and Cosine Similarity with NLP for text processing and Streamlit UI.",
      tech: ["Python", "NLP", "Streamlit", "Scikit-learn"],
    },
    {
      title: "Conversational AI Agent",
      description:
        "AI assistant built with LangChain's ReAct framework, OpenAI APIs, and integrated tools for external data access.",
      tech: ["LangChain", "OpenAI", "Python", "APIs"],
    },
    {
      title: "YouTube RAG Assistant",
      description:
        "Question-answering app using RAG architecture over YouTube transcripts with FAISS for semantic search.",
      tech: ["RAG", "FAISS", "LangChain", "GPT"],
    },
    {
      title: "Chili Crop Disease Detection",
      description:
        "CNN model using TensorFlow & Keras for detecting crop diseases with OpenCV preprocessing and Streamlit deployment.",
      tech: ["TensorFlow", "Keras", "OpenCV", "CNN"],
    },
  ]

  const skills = {
    Programming: ["Python", "SQL", "C Programming"],
    "ML & AI": ["PyTorch", "Transformers", "Scikit-learn", "RAG", "NLP"],
    "Web Frameworks": ["Streamlit", "Flask", "FastAPI"],
    Tools: ["Git", "GitHub", "VS Code", "Excel", "Power BI"],
  }

  const companies = [
    { name: "ClickUp", logo: "/clickup-logo.png" },
    { name: "Dropbox", logo: "/dropbox-logo.jpg" },
    { name: "PAYCHEX", logo: "/paychex-logo.jpg" },
    { name: "Elastic", logo: "/elastic-logo.jpg" },
    { name: "Stripe", logo: "/stripe-logo.png" },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex space-x-8">
              <a href="#home" className="text-gray-300 hover:text-white transition-colors">
                Home
              </a>
              <a href="#projects" className="text-gray-300 hover:text-white transition-colors">
                Case Studies
              </a>
              <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">
                Testimonials
              </a>
              <a href="#experience" className="text-gray-300 hover:text-white transition-colors">
                Recent Work
              </a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                Get In Touch
              </a>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/vinayak-annigeri"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/vinannigeri"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
              <a href="mailto:vinayak.1annigeri@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold text-balance">Vinayak Annigeri</h1>
                <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
                  Data Analyst & AI Engineer passionate about building intelligent solutions. Experienced in machine
                  learning, web development, and data analytics with a focus on creating impactful applications.
                </p>
              </div>
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-lg group"
              >
                Let's get started
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-gray-700">
                  <Image
                    src="/IMG_2245 2.jpg"
                    alt="Vinayak Annigeri"
                    width={320}
                    height={320}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Worked With Section */}
      <section className="py-16 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-400 text-sm mb-8">Worked with</p>
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 opacity-60">
            {companies.map((company, index) => (
              <div key={index} className="grayscale hover:grayscale-0 transition-all">
                <Image
                  src={company.logo || "/placeholder.svg"}
                  alt={company.name}
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-8">About Me</h2>
              <div className="space-y-6 text-gray-300">
                <p>
                  I'm a Computer Science Engineering graduate from SDMCET, Dharwad, with a passion for artificial
                  intelligence and data analytics. Currently working as a Data Analyst Intern at HAEGL Technologies,
                  where I focus on data cleaning, analysis, and dashboard creation.
                </p>
                <p>
                  My expertise spans across machine learning, natural language processing, and web development. I enjoy
                  building end-to-end solutions that solve real-world problems, from movie recommendation systems to
                  agricultural disease detection models.
                </p>
                <div className="flex items-center space-x-4 pt-4">
                  <div className="flex items-center text-sm text-gray-400">
                    <MapPin size={16} className="mr-2" />
                    Dharwad, Karnataka
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Phone size={16} className="mr-2" />
                    +91 7406436932
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
              <div className="space-y-6">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category}>
                    <h4 className="text-lg font-semibold mb-3 text-green-400">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-gray-800 text-gray-300">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:border-green-500 transition-colors">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-green-500 text-green-400">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
          <div className="max-w-3xl mx-auto">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">Data Analyst Intern</h3>
                    <p className="text-green-400 font-semibold">HAEGL Technologies Pvt. Ltd.</p>
                  </div>
                  <Badge variant="outline" className="border-green-500 text-green-400">
                    Sep 2024 – Feb 2025
                  </Badge>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li>• Assisted in cleaning and analyzing large datasets to identify patterns and trends</li>
                  <li>• Built interactive dashboards using Excel, SQL, Python, and Power BI</li>
                  <li>• Used BeautifulSoup for real-time web data scraping</li>
                  <li>• Performed exploratory data analysis (EDA) to identify trends, patterns, and outliers</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Education</h2>
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">B.E. in Computer Science and Engineering</h3>
                  <p className="text-green-400 font-semibold mb-2">SDMCET, Dharwad, Karnataka</p>
                  <p className="text-gray-400">2020 – 2024</p>
                </CardContent>
              </Card>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-8">Certifications</h2>
              <div className="space-y-4">
                <Card className="bg-gray-800 border-gray-700">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-white mb-1">C Programming Certification</h3>
                    <p className="text-gray-400">ISCT (Global Infotech)</p>
                  </CardContent>
                </Card>
                <Card className="bg-gray-800 border-gray-700">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-white mb-1">Data Analytics Career Path</h3>
                    <p className="text-gray-400">72 Days of Data Analyst – Udemy</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. Let's connect and discuss how we can work
            together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-6" asChild>
              <a href="mailto:vinayak.1annigeri@gmail.com">
                <Mail className="mr-2" size={20} />
                Send Email
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-600 text-white hover:bg-gray-800 px-8 py-6 bg-transparent"
              asChild
            >
              <a href="https://linkedin.com/in/vinayak-annigeri" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2" size={20} />
                Connect on LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2024 Vinayak Annigeri. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
