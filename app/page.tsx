import { ArrowRight, Database, Shield, Smartphone, Cloud, Calendar } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

import { Button } from "@/components/ui/button"
import ByteGame from "@/components/byte-game"

export const metadata: Metadata = {
  title: "Byteworks - Enterprise Cloud-Native Software Solutions | Microservices & Event-Driven Architecture",
  description:
    "Byteworks delivers enterprise-grade cloud-native software solutions. Specializing in microservices architecture, event-driven systems, and scalable applications for healthcare, fintech, and e-commerce industries. Led by expert software engineer with 5+ years experience.",
  keywords: [
    "enterprise software development",
    "cloud native solutions",
    "microservices architecture",
    "event driven systems",
    "software development company",
    "AWS development services",
    "Azure solutions",
    "React development",
    "Java enterprise applications",
    "TypeScript development",
    "healthcare software solutions",
    "fintech development services",
    "PKI security systems",
    "full stack development",
    "software consulting",
    "custom software development",
    "digital transformation",
    "cloud migration services",
    "enterprise application development",
    "Quarkus development",
    "Spring Boot applications",
    "Next.js development",
    "Vue.js applications",
    "Angular development",
    "React Native mobile apps",
  ],
  authors: [{ name: "Simone Squillace", url: "https://thatsimo.github.io/byteworks" }],
  creator: "Simone Squillace",
  publisher: "Byteworks",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thatsimo.github.io/byteworks",
    title: "Byteworks - Enterprise Cloud-Native Software Solutions",
    description:
      "Byteworks delivers enterprise-grade cloud-native software solutions. Specializing in microservices architecture and event-driven systems for healthcare, fintech, and e-commerce.",
    siteName: "Byteworks",
    images: [
      {
        url: "https://thatsimo.github.io/byteworks/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Byteworks - Enterprise Software Development Company specializing in Cloud-Native Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Byteworks - Enterprise Cloud-Native Software Solutions",
    description:
      "Enterprise software development company specializing in microservices architecture, event-driven systems, and scalable cloud-native applications.",
    images: ["https://thatsimo.github.io/byteworks/og-image.jpg"],
  },
  alternates: {
    canonical: "https://thatsimo.github.io/byteworks",
  },
  other: {
    "theme-color": "#000000",
    "color-scheme": "light",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "format-detection": "telephone=no",
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black font-mono">
      {/* Header */}
      <header className="border-b-4 border-black">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src="/byteworks/logo.svg" alt="Byteworks Logo" className="w-12 h-12" />
              <h1 className="text-2xl font-bold tracking-tight">BYTEWORKS</h1>
            </div>
            <nav className="hidden md:flex space-x-8" role="navigation" aria-label="Main navigation">
              <Link
                href="#services"
                className="hover:bg-black hover:text-white px-3 py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-black"
              >
                SERVICES
              </Link>
              <Link
                href="#projects"
                className="hover:bg-black hover:text-white px-3 py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-black"
              >
                PROJECTS
              </Link>
              <Link
                href="#contact"
                className="hover:bg-black hover:text-white px-3 py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-black"
              >
                CONTACT
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 border-b-4 border-black">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-4xl">
              <h2 className="text-6xl md:text-8xl font-bold mb-8 leading-none">
                ENTERPRISE
                <br />
                <span className="bg-black text-white px-4">SOLUTIONS</span>
              </h2>
              <p className="text-xl md:text-2xl mb-12 max-w-2xl">
                {">"} Cloud-native solutions that scale
                <br />
                {">"} Microservices architecture experts
                <br />
                {">"} Building the future of enterprise software
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1LO-I1RjAZe_zjTl68cibgEXSX3aMUfMb3FKL0RwUikhXtb42YRAEq_1IN-EDqxcOyaZZfQBaJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Schedule a meeting with Byteworks"
                >
                  <Button
                    size="lg"
                    className="bg-black text-white hover:bg-white hover:text-black border-4 border-black text-lg px-8 py-4 font-mono focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                  >
                    SCHEDULE MEETING <Calendar className="ml-2 h-5 w-5" aria-hidden="true" />
                  </Button>
                </a>
                <Link href="/projects" aria-label="View our project portfolio">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-4 border-black text-black hover:bg-black hover:text-white text-lg px-8 py-4 font-mono bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                  >
                    VIEW PROJECTS <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <ByteGame />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 border-b-4 border-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-16">
            {"<"} SERVICES {">"}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <article className="border-4 border-black p-8 bg-white hover:bg-black hover:text-white transition-colors group focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-black">
              <Cloud className="h-12 w-12 mb-6" aria-hidden="true" />
              <h3 className="text-2xl font-bold mb-4">CLOUD ARCHITECTURE</h3>
              <p className="text-lg">
                Enterprise-grade microservices with event-driven patterns and CQRS on AWS, Azure, and GCP platforms.
              </p>
            </article>
            <article className="border-4 border-black p-8 bg-white hover:bg-black hover:text-white transition-colors group focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-black">
              <Smartphone className="h-12 w-12 mb-6" aria-hidden="true" />
              <h3 className="text-2xl font-bold mb-4">MOBILE SOLUTIONS</h3>
              <p className="text-lg">
                Cross-platform mobile applications and native iOS/Android development for enterprise clients.
              </p>
            </article>
            <article className="border-4 border-black p-8 bg-white hover:bg-black hover:text-white transition-colors group focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-black">
              <Shield className="h-12 w-12 mb-6" aria-hidden="true" />
              <h3 className="text-2xl font-bold mb-4">SECURITY SYSTEMS</h3>
              <p className="text-lg">
                PKI infrastructure, certificate management, and enterprise cybersecurity solutions.
              </p>
            </article>
            <article className="border-4 border-black p-8 bg-white hover:bg-black hover:text-white transition-colors group focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-black">
              <Database className="h-12 w-12 mb-6" aria-hidden="true" />
              <h3 className="text-2xl font-bold mb-4">DATA PLATFORMS</h3>
              <p className="text-lg">
                Real-time analytics, IoT data processing, and machine learning pipeline development.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Project Highlights */}
      <section id="projects" className="py-20 border-b-4 border-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-16">
            PROJECT
            <br />
            <span className="bg-black text-white px-4">SHOWCASE</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <article className="border-4 border-black p-6 bg-white hover:bg-gray-50 transition-colors h-full flex flex-col">
              <h3 className="text-xl font-bold mb-4">FINTECH TRADING PLATFORM</h3>
              <div className="flex-grow">
                <p className="mb-4">{">"} High-performance ML trading system for European stock exchange</p>
                <p className="mb-4">{">"} Comprehensive testing reduced regression time from 5 to 2 days</p>
              </div>
              <div className="text-sm bg-black text-white p-2 mt-auto">
                TECH: Next.js, TypeScript, Playwright, Event-driven Architecture
              </div>
            </article>

            <article className="border-4 border-black p-6 bg-white hover:bg-gray-50 transition-colors h-full flex flex-col">
              <h3 className="text-xl font-bold mb-4">HEALTHCARE PLATFORM</h3>
              <div className="flex-grow">
                <p className="mb-4">{">"} Patient monitoring system serving 10,000+ healthcare professionals</p>
                <p className="mb-4">{">"} Reduced missed appointments by 35% with real-time notifications</p>
              </div>
              <div className="text-sm bg-black text-white p-2 mt-auto">
                TECH: React Native, Apache Cordova, Healthcare APIs
              </div>
            </article>

            <article className="border-4 border-black p-6 bg-white hover:bg-gray-50 transition-colors h-full flex flex-col">
              <h3 className="text-xl font-bold mb-4">E-COMMERCE INFRASTRUCTURE</h3>
              <div className="flex-grow">
                <p className="mb-4">{">"} Distributed order system handling 100,000+ daily transactions</p>
                <p className="mb-4">{">"} Improved processing efficiency by 30% using AWS serverless architecture</p>
              </div>
              <div className="text-sm bg-black text-white p-2 mt-auto">
                TECH: AWS Lambda, DynamoDB, React Native, Vue.js
              </div>
            </article>

            <article className="border-4 border-black p-6 bg-white hover:bg-gray-50 transition-colors h-full flex flex-col">
              <h3 className="text-xl font-bold mb-4">SECURITY INFRASTRUCTURE</h3>
              <div className="flex-grow">
                <p className="mb-4">{">"} PKI microservices for Europe's largest qualified trust service provider</p>
                <p className="mb-4">{">"} Processing millions of certificate operations with 99.99% reliability</p>
              </div>
              <div className="text-sm bg-black text-white p-2 mt-auto">
                TECH: Quarkus, Go, Angular, PKI, Microservices
              </div>
            </article>
          </div>

          <div className="text-center">
            <Link href="/projects" aria-label="View all Byteworks projects">
              <Button
                size="lg"
                className="bg-black text-white hover:bg-white hover:text-black border-4 border-black text-xl px-12 py-6 font-mono focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              >
                VIEW ALL PROJECTS <ArrowRight className="ml-2 h-6 w-6" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black text-white border-b-4 border-black" aria-labelledby="stats-heading">
        <div className="container mx-auto px-4">
          <h2 id="stats-heading" className="sr-only">
            Company Performance Statistics
          </h2>
          <div className="grid md:grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-6xl font-bold mb-4" aria-label="50 plus">
                50+
              </div>
              <div className="text-xl">PROJECTS DELIVERED</div>
            </div>
            <div>
              <div className="text-6xl font-bold mb-4" aria-label="100 thousand plus">
                100K+
              </div>
              <div className="text-xl">DAILY TRANSACTIONS</div>
            </div>
            <div>
              <div className="text-6xl font-bold mb-4" aria-label="99.9 percent">
                99.9%
              </div>
              <div className="text-xl">SYSTEM UPTIME</div>
            </div>
            <div>
              <div className="text-6xl font-bold mb-4" aria-label="24/7">
                24/7
              </div>
              <div className="text-xl">SUPPORT AVAILABLE</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-b-4 border-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">READY TO INNOVATE?</h2>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
            {">"} Transform your business with enterprise-grade software solutions.
            <br />
            {">"} Let's build something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1LO-I1RjAZe_zjTl68cibgEXSX3aMUfMb3FKL0RwUikhXtb42YRAEq_1IN-EDqxcOyaZZfQBaJ"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Schedule a meeting to discuss your project"
            >
              <Button
                size="lg"
                className="bg-black text-white hover:bg-white hover:text-black border-4 border-black text-xl px-12 py-6 font-mono focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              >
                SCHEDULE MEETING <Calendar className="ml-2 h-6 w-6" aria-hidden="true" />
              </Button>
            </a>
            <Link href="/projects" aria-label="Explore our project portfolio">
              <Button
                variant="outline"
                size="lg"
                className="border-4 border-black text-black hover:bg-black hover:text-white text-xl px-12 py-6 font-mono bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              >
                VIEW PROJECTS <ArrowRight className="ml-2 h-6 w-6" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8">
                {"<"} CONTACT {">"}
              </h2>
              <div className="space-y-6 text-lg">
                <div>
                  <h3 className="font-bold mb-2">CEO & FOUNDER:</h3>
                  <div>Simone Squillace</div>
                </div>
                <div>
                  <h3 className="font-bold mb-2">BUSINESS INQUIRIES:</h3>
                  <a
                    href="mailto:simonewe99@gmail.com"
                    className="hover:underline focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                    aria-label="Send email to Simone Squillace"
                  >
                    simonewe99@gmail.com
                  </a>
                </div>
                <div>
                  <h3 className="font-bold mb-2">SCHEDULE A MEETING:</h3>
                  <a
                    href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1LO-I1RjAZe_zjTl68cibgEXSX3aMUfMb3FKL0RwUikhXtb42YRAEq_1IN-EDqxcOyaZZfQBaJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline inline-flex items-center focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                    aria-label="Schedule a meeting with Simone Squillace"
                  >
                    Schedule consultation <Calendar className="ml-2 h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
                <div>
                  <h3 className="font-bold mb-2">LINKEDIN:</h3>
                  <a
                    href="https://linkedin.com/in/simone-squillace-455abb14b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                    aria-label="Visit Simone Squillace LinkedIn profile"
                  >
                    linkedin.com/in/simone-squillace-455abb14b
                  </a>
                </div>
                <div>
                  <h3 className="font-bold mb-2">GITHUB:</h3>
                  <a
                    href="https://github.com/thatsimo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                    aria-label="Visit Simone Squillace GitHub profile"
                  >
                    github.com/thatsimo
                  </a>
                </div>
                <div>
                  <h3 className="font-bold mb-2">HEADQUARTERS:</h3>
                  <div>
                    Europe
                    <br />
                    Remote-First Company
                  </div>
                </div>
              </div>
            </div>
            <div className="border-4 border-black p-8">
              <h3 className="text-2xl font-bold mb-6">ENTERPRISE SOLUTIONS</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold mb-2">SERVICES WE OFFER:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Cloud-native application development</li>
                    <li>• Microservices architecture consulting</li>
                    <li>• Legacy system modernization</li>
                    <li>• Security infrastructure implementation</li>
                    <li>• Real-time data processing platforms</li>
                    <li>• Mobile application development</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">INDUSTRIES WE SERVE:</h4>
                  <p className="text-sm">
                    Healthcare, Financial Services, E-commerce, Manufacturing, Government, Technology Startups
                  </p>
                </div>
                <div className="bg-black text-white p-4">
                  <p className="text-sm">
                    <strong>Ready to transform your business?</strong>
                    <br />
                    Schedule a consultation to discuss your enterprise software needs and discover how we can accelerate
                    your digital transformation.
                  </p>
                </div>
                <div className="text-center pt-4">
                  <a
                    href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1LO-I1RjAZe_zjTl68cibgEXSX3aMUfMb3FKL0RwUikhXtb42YRAEq_1IN-EDqxcOyaZZfQBaJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Schedule a meeting to discuss your project needs"
                  >
                    <Button
                      size="lg"
                      className="bg-black text-white hover:bg-white hover:text-black border-4 border-black text-lg px-8 py-4 font-mono w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                    >
                      SCHEDULE MEETING <Calendar className="ml-2 h-5 w-5" aria-hidden="true" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-black py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <img src="/byteworks/logo.svg" alt="Byteworks Logo" className="w-8 h-8" />
              <span className="font-bold">BYTEWORKS</span>
            </div>
            <div className="text-sm">© 2024 BYTEWORKS. ALL RIGHTS RESERVED.</div>
          </div>
        </div>
      </footer>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Byteworks",
            description:
              "Enterprise software development company specializing in cloud-native solutions, microservices architecture, and event-driven systems for healthcare, fintech, and e-commerce industries",
            url: "https://thatsimo.github.io/byteworks",
            logo: "https://thatsimo.github.io/byteworks/logo.png",
            image: "https://thatsimo.github.io/byteworks/og-image.jpg",
            founder: {
              "@type": "Person",
              name: "Simone Squillace",
              jobTitle: "CEO & Founder",
              email: "simonewe99@gmail.com",
              sameAs: ["https://linkedin.com/in/simone-squillace-455abb14b", "https://github.com/thatsimo"],
            },
            sameAs: ["https://linkedin.com/in/simone-squillace-455abb14b", "https://github.com/thatsimo"],
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer service",
              email: "simonewe99@gmail.com",
              url: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1LO-I1RjAZe_zjTl68cibgEXSX3aMUfMb3FKL0RwUikhXtb42YRAEq_1IN-EDqxcOyaZZfQBaJ",
              availableLanguage: ["English", "Italian"],
            },
            address: {
              "@type": "PostalAddress",
              addressRegion: "Europe",
              addressCountry: "EU",
            },
            foundingDate: "2019",
            numberOfEmployees: "1-10",
            industry: "Software Development",
            knowsAbout: [
              "Cloud Architecture",
              "Microservices",
              "Event-driven Architecture",
              "React",
              "Java",
              "TypeScript",
              "AWS",
              "Azure",
              "PKI Security",
              "Healthcare Software",
              "Fintech Development",
              "Quarkus",
              "Spring Boot",
              "Next.js",
              "Vue.js",
              "Angular",
              "React Native",
            ],
            makesOffer: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Cloud Architecture Development",
                  description: "Enterprise-grade microservices with event-driven patterns and CQRS",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Mobile Application Development",
                  description: "Cross-platform mobile applications and native iOS/Android development",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Security Systems Implementation",
                  description: "PKI infrastructure, certificate management, and enterprise cybersecurity",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Data Platform Development",
                  description: "Real-time analytics, IoT data processing, and machine learning pipelines",
                },
              },
            ],
          }),
        }}
      />
    </div>
  )
}
