"use client"

import { useState, useEffect } from "react"
import { Menu, X, Moon, Sun, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    // Check for stored preference or system preference
    const stored = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const shouldBeDark = stored === "dark" || (stored === null && prefersDark)
    setIsDarkMode(shouldBeDark)
    if (shouldBeDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])

  const toggleDarkMode = () => {
    const newMode = !isDarkMode
    setIsDarkMode(newMode)
    localStorage.setItem("theme", newMode ? "dark" : "light")
    if (newMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/1234567890?text=Hi%20Carevo", "_blank")
  }

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <img src="/images/design-mode/carevo_logo.jpg" alt="Carevo" className="w-10 h-10 rounded-lg" />
              <span className="font-bold text-lg hidden sm:inline">Carevo</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm hover:text-[#009057] transition">
                Features
              </a>
              <a href="#how-it-works" className="text-sm hover:text-[#009057] transition">
                How It Works
              </a>
              <a href="#about" className="text-sm hover:text-[#009057] transition">
                About
              </a>
              <div className="flex items-center gap-3">
                <button
                  onClick={toggleDarkMode}
                  className="p-2 hover:bg-muted rounded-lg transition"
                  aria-label="Toggle dark mode"
                >
                  {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <Button onClick={handleWhatsAppClick} className="bg-[#009057] hover:bg-[#007543] text-white">
                  Message on WhatsApp
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={toggleDarkMode}
                className="p-2 hover:bg-muted rounded-lg transition"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 hover:bg-muted rounded-lg transition">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-3">
              <a href="#features" className="block text-sm hover:text-[#009057] transition">
                Features
              </a>
              <a href="#how-it-works" className="block text-sm hover:text-[#009057] transition">
                How It Works
              </a>
              <a href="#about" className="block text-sm hover:text-[#009057] transition">
                About
              </a>
              <Button onClick={handleWhatsAppClick} className="w-full bg-[#009057] hover:bg-[#007543] text-white">
                Message on WhatsApp
              </Button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#009057]/10 to-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div>
              <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-balance">Your WhatsApp Health Assistant</h1>
              <p className="text-xl text-muted-foreground mb-8 text-balance">
                Carevo delivers life-saving health education through voice messages on WhatsApp, breaking barriers of
                literacy and accessibility in underserved communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={handleWhatsAppClick} size="lg" className="bg-[#009057] hover:bg-[#007543] text-white">
                  <MessageCircle size={20} className="mr-2" />
                  Start on WhatsApp
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#009057] text-[#009057] hover:bg-[#009057]/10 bg-transparent"
                >
                  Learn More
                </Button>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <svg viewBox="0 0 400 400" className="w-full max-w-sm h-auto text-[#009057]">
                {/* Phone outline */}
                <rect
                  x="40"
                  y="20"
                  width="320"
                  height="360"
                  rx="30"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                />

                {/* Screen background */}
                <rect x="55" y="40" width="290" height="320" rx="24" fill="#f0f0f0" />

                {/* Chat bubble 1 - Incoming message */}
                <g>
                  <rect x="70" y="80" width="200" height="60" rx="15" fill="#009057" />
                  <text x="170" y="105" textAnchor="middle" fontSize="18" fill="white" fontWeight="bold">
                    Welcome to
                  </text>
                  <text x="170" y="128" textAnchor="middle" fontSize="18" fill="white" fontWeight="bold">
                    Carevo
                  </text>
                </g>

                {/* Chat bubble 2 - Voice message with waveform */}
                <g>
                  <rect x="70" y="160" width="240" height="80" rx="15" fill="white" stroke="#009057" strokeWidth="2" />

                  {/* Play button */}
                  <circle cx="100" cy="200" r="20" fill="#009057" />
                  <polygon points="95,190 95,210 115,200" fill="white" />

                  {/* Waveform */}
                  <g stroke="#009057" strokeWidth="3" fill="none">
                    <line x1="140" y1="185" x2="140" y2="215" />
                    <line x1="155" y1="175" x2="155" y2="225" />
                    <line x1="170" y1="180" x2="170" y2="220" />
                    <line x1="185" y1="170" x2="185" y2="230" />
                    <line x1="200" y1="185" x2="200" y2="215" />
                    <line x1="215" y1="175" x2="215" y2="225" />
                    <line x1="230" y1="190" x2="230" y2="210" />
                  </g>

                  {/* Time indicator */}
                  <text x="270" y="210" fontSize="14" fill="#999">
                    1:23
                  </text>
                </g>

                {/* Chat bubble 3 - Outgoing message */}
                <g>
                  <rect x="170" y="265" width="130" height="50" rx="15" fill="#e8f5e9" />
                  <text x="235" y="298" textAnchor="middle" fontSize="16" fill="#009057" fontWeight="bold">
                    Learning...
                  </text>
                </g>

                {/* Home indicator */}
                <rect x="170" y="370" width="60" height="3" rx="1.5" fill="currentColor" opacity="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Carevo?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎤",
                title: "Voice-First Design",
                description:
                  "Audio messages bypass literacy barriers, making health information accessible to everyone.",
              },
              {
                icon: "📱",
                title: "WhatsApp Integration",
                description: "Reach users where they already are. No app downloads needed, just WhatsApp.",
              },
              {
                icon: "🌍",
                title: "Culturally Relevant",
                description:
                  "Health guidance tailored to African communities, covering hygiene, disease prevention, and childcare.",
              },
              {
                icon: "🔒",
                title: "Privacy First",
                description: "We never store personal data. Phone numbers are hashed and protected.",
              },
              {
                icon: "🆓",
                title: "Open Source",
                description: "Built for NGOs, health ministries, and community organizations. Scalable and replicable.",
              },
              {
                icon: "⚡",
                title: "Always Available",
                description: "Get instant health guidance 24/7 without waiting for an appointment.",
              },
            ].map((feature, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-card border border-border hover:border-[#009057] transition">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Send a Message",
                description: 'Message "Hi" or "Start" to our WhatsApp bot.',
                svg: (
                  <svg viewBox="0 0 200 200" className="w-24 h-24 mx-auto mb-4">
                    {/* Phone outline */}
                    <rect
                      x="50"
                      y="20"
                      width="100"
                      height="160"
                      rx="12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    />
                    {/* Screen */}
                    <rect
                      x="58"
                      y="32"
                      width="84"
                      height="110"
                      rx="6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      opacity="0.3"
                    />
                    {/* Message bubble */}
                    <g transform="translate(80, 70)">
                      <ellipse cx="0" cy="0" rx="25" ry="18" fill="#009057" opacity="0.2" />
                      <text x="0" y="6" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#009057">
                        Hi
                      </text>
                    </g>
                    {/* Home button */}
                    <circle cx="100" cy="156" r="4" fill="currentColor" />
                  </svg>
                ),
              },
              {
                step: "2",
                title: "Choose a Topic",
                description: "Receive a list of health topics and select by number (1, 2, 3...).",
                svg: (
                  <svg viewBox="0 0 200 200" className="w-24 h-24 mx-auto mb-4">
                    {/* List items */}
                    <g>
                      <rect x="40" y="30" width="120" height="16" rx="3" fill="#009057" opacity="0.2" />
                      <circle cx="50" cy="38" r="3" fill="#009057" />
                      <text x="60" y="42" fontSize="10" fill="currentColor">
                        Hygiene & Sanitation
                      </text>
                    </g>
                    <g>
                      <rect x="40" y="55" width="120" height="16" rx="3" fill="#009057" opacity="0.2" />
                      <circle cx="50" cy="63" r="3" fill="#009057" />
                      <text x="60" y="67" fontSize="10" fill="currentColor">
                        Malaria Prevention
                      </text>
                    </g>
                    <g>
                      <rect x="40" y="80" width="120" height="16" rx="3" fill="#009057" opacity="0.2" />
                      <circle cx="50" cy="88" r="3" fill="#009057" />
                      <text x="60" y="92" fontSize="10" fill="currentColor">
                        Breastfeeding
                      </text>
                    </g>
                    {/* Selection indicator */}
                    <circle cx="50" cy="63" r="8" fill="none" stroke="#009057" strokeWidth="2" />
                  </svg>
                ),
              },
              {
                step: "3",
                title: "Get Guidance",
                description: "Listen to 1-3 minute audio messages with practical health advice.",
                svg: (
                  <svg viewBox="0 0 200 200" className="w-24 h-24 mx-auto mb-4">
                    {/* Speaker */}
                    <path
                      d="M 100 40 L 140 70 L 140 130 L 100 160 Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    />
                    {/* Sound waves */}
                    <circle cx="100" cy="100" r="30" fill="none" stroke="#009057" strokeWidth="2" opacity="0.3" />
                    <circle cx="100" cy="100" r="45" fill="none" stroke="#009057" strokeWidth="2" opacity="0.2" />
                    <circle cx="100" cy="100" r="60" fill="none" stroke="#009057" strokeWidth="2" opacity="0.1" />
                    {/* Play indicator */}
                    <circle cx="100" cy="100" r="12" fill="#009057" />
                    <polygon points="95,95 95,105 105,100" fill="white" />
                  </svg>
                ),
              },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                {/* SVG Icon */}
                <div className="w-28 h-28 rounded-full bg-[#009057]/10 flex items-center justify-center text-[#009057] mb-6">
                  {item.svg}
                </div>

                <div className="absolute top-0 left-0 w-8 h-8 rounded-full bg-[#009057] text-white flex items-center justify-center font-bold text-sm">
                  {item.step}
                </div>

                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground max-w-xs">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Health Topics Covered</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Hygiene & Sanitation",
              "Malaria Prevention",
              "Breastfeeding",
              "Childcare",
              "Maternal Health",
              "Disease Prevention",
            ].map((topic, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg bg-[#009057]/10 border border-[#009057]/20 hover:border-[#009057]/50 transition"
              >
                <p className="text-center font-medium text-[#009057]">{topic}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4">About Carevo</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Carevo is an open-source, voice-based chatbot designed to close the health information gap in
                underserved African communities.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                By leveraging WhatsApp's ubiquity and familiarity, we bypass literacy barriers and ensure accessibility
                for everyone—from expecting mothers to community health workers.
              </p>
              <p className="text-lg text-muted-foreground">
                Our mission is to empower millions with accurate, culturally relevant health guidance that saves lives.
              </p>
            </div>
            <div className="bg-card rounded-xl p-8 border border-border">
              <h3 className="text-2xl font-bold mb-6">Trusted by</h3>
              <p className="text-sm text-muted-foreground mb-4 font-semibold">
                Powered by <span className="text-[#009057]">TernTribe</span>
              </p>
              <p className="text-sm text-muted-foreground">
                Part of TernTribe's initiative to democratize access to essential services through technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#009057]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg opacity-90 mb-8">
            Join thousands receiving life-saving health guidance through WhatsApp.
          </p>
          <Button onClick={handleWhatsAppClick} size="lg" className="bg-white text-[#009057] hover:bg-gray-100">
            <MessageCircle size={20} className="mr-2" />
            Message Carevo Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Carevo</h4>
              <p className="text-sm text-muted-foreground">Your WhatsApp health assistant.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#features" className="hover:text-[#009057] transition">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-[#009057] transition">
                    How It Works
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#about" className="hover:text-[#009057] transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="https://terntribe.com" className="hover:text-[#009057] transition">
                    TernTribe
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="/privacy" className="hover:text-[#009057] transition">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Carevo. Part of TernTribe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
