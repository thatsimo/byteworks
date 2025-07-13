import Link from "next/link"
import type { Metadata } from "next"

import { Button } from "@/components/ui/button"
import ByteGame from "@/components/byte-game"
import PongGame from "@/components/pong-game"

export const metadata: Metadata = {
  title: "Projects Portfolio - Real-World Software Solutions",
  description:
    "Explore my portfolio of cloud-native projects including healthcare platforms, fintech trading systems, e-commerce solutions, and PKI security infrastructure. Built with modern technologies like React, Java, AWS, and microservices.",
  keywords: [
    "software projects",
    "portfolio",
    "healthcare software",
    "fintech trading platform",
    "e-commerce solutions",
    "PKI security",
    "microservices projects",
    "React projects",
    "AWS projects",
    "cloud native applications",
  ],
  openGraph: {
    title: "Projects Portfolio - Real-World Software Solutions | Byteworks",
    description:
      "Explore my portfolio of cloud-native projects including healthcare platforms, fintech trading systems, e-commerce solutions, and PKI security infrastructure.",
    url: "https://thatsimo.github.io/byteworks/projects",
  },
  alternates: {
    canonical: "https://thatsimo.github.io/byteworks/projects",
  },
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white text-black font-mono">
      {/* Header */}
      <header className="border-b-4 border-black">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Link href="/" className="flex items-center space-x-2">
                <img src="/byteworks/logo.svg" alt="Byteworks Logo" className="w-12 h-12" />
                <span className="text-2xl font-bold tracking-tight">BYTEWORKS</span>
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8" role="navigation" aria-label="Main navigation">
              <Link href="/#contact" className="hover:bg-black hover:text-white px-3 py-2 transition-colors">
                CONTACT
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 border-b-4 border-black">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                PROJECT
                <br />
                <span className="bg-black text-white px-4">PORTFOLIO</span>
              </h1>
              <p className="text-xl mb-8 max-w-3xl">
                {">"} Real-world solutions built with modern technologies and best practices.
                <br />
                {">"} From healthcare platforms to fintech systems and security infrastructure.
                <br />
                {">"} Play the T-Rex game while you explore our projects!
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <PongGame />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12">
            {/* Healthcare Patient Monitoring */}
            <article className="border-4 border-black p-8">
              <div className="grid lg:grid-cols-3 gap-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4">HEALTHCARE PATIENT MONITORING</h2>
                  <div className="text-sm bg-black text-white p-2 mb-4 inline-block">HEALTHCARE • MOBILE</div>
                </div>
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">SITUATION & TASK</h3>
                    <p>
                      Major healthcare SaaS provider needed cross-platform mobile applications for real-time patient
                      monitoring and visit scheduling to improve clinical workflow efficiency and reduce missed
                      appointments.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">ACTION</h3>
                    <p>
                      Built native mobile applications for Android and iOS using Apache Cordova for cross-platform
                      deployment. Implemented real-time patient data synchronization, push notifications for
                      appointments, and offline-first architecture for reliable healthcare environments.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">RESULT</h3>
                    <p>
                      Delivered applications serving 10,000+ healthcare professionals with 99.9% uptime. Reduced missed
                      appointments by 35% and improved patient engagement through real-time monitoring capabilities.
                    </p>
                  </div>
                  <div className="border-t-4 border-black pt-4">
                    <h4 className="font-bold mb-2">TECH STACK:</h4>
                    <p className="text-sm">
                      Apache Cordova, JavaScript, REST APIs, Push Notifications, SQLite, Healthcare APIs
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* ML Trading Platform */}
            <article className="border-4 border-black p-8">
              <div className="grid lg:grid-cols-3 gap-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4">ML TRADING PLATFORM</h2>
                  <div className="text-sm bg-black text-white p-2 mb-4 inline-block">FINTECH • WEB</div>
                </div>
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">SITUATION & TASK</h3>
                    <p>
                      Pan-European stock exchange required a high-performance frontend for ML-powered automatic trading
                      application with strict SEO requirements and comprehensive testing to ensure financial compliance
                      and reduce regression time.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">ACTION</h3>
                    <p>
                      Designed and implemented Next.js frontend from scratch with server-side rendering (SSR) for
                      optimal SEO. Built event-driven backend modules and established comprehensive testing strategy
                      using Playwright and Vitest with 85% integration and 90% unit test coverage.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">RESULT</h3>
                    <p>
                      Reduced regression testing time from 5 days to 2 days while maintaining 99.99% uptime for critical
                      trading operations. Achieved perfect SEO scores and enabled real-time trading decisions for
                      institutional clients.
                    </p>
                  </div>
                  <div className="border-t-4 border-black pt-4">
                    <h4 className="font-bold mb-2">TECH STACK:</h4>
                    <p className="text-sm">
                      Next.js, TypeScript, Playwright, Vitest, Event-driven Architecture, SSR, Financial APIs
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* E-commerce Order System */}
            <article className="border-4 border-black p-8">
              <div className="grid lg:grid-cols-3 gap-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4">SCALABLE ORDER DISPATCHING</h2>
                  <div className="text-sm bg-black text-white p-2 mb-4 inline-block">E-COMMERCE • CLOUD</div>
                </div>
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">SITUATION & TASK</h3>
                    <p>
                      Global D2C platform needed a distributed order dispatching system to handle high transaction
                      volumes across multiple sales channels (Shopify, Amazon FBA/FBM) with seamless third-party
                      integrations.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">ACTION</h3>
                    <p>
                      Architected event-driven system using AWS EventBridge, Lambda, and DynamoDB. Built React Native
                      mobile app for order tracking and Vue.js backoffice with Quasar UI. Integrated Stripe payments,
                      logistics providers, and ERP systems with fault-tolerant event processing.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">RESULT</h3>
                    <p>
                      Improved processing efficiency by 30% and reduced system latency by 50%. Successfully handled
                      100,000+ daily orders with 99.9% reliability and seamless cross-platform order tracking for end
                      users.
                    </p>
                  </div>
                  <div className="border-t-4 border-black pt-4">
                    <h4 className="font-bold mb-2">TECH STACK:</h4>
                    <p className="text-sm">
                      AWS EventBridge, Lambda, DynamoDB, React Native, Vue.js, Quasar, Stripe, Shopify APIs
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* PKI Security System */}
            <article className="border-4 border-black p-8">
              <div className="grid lg:grid-cols-3 gap-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4">PKI SECURITY INFRASTRUCTURE</h2>
                  <div className="text-sm bg-black text-white p-2 mb-4 inline-block">SECURITY • ENTERPRISE</div>
                </div>
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">SITUATION & TASK</h3>
                    <p>
                      Europe's largest Qualified Trust Service Provider required robust PKI microservices for
                      certificate management, signature verification, and a certificate blacklist provisioning system
                      with comprehensive testing.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">ACTION</h3>
                    <p>
                      Developed Quarkus microservice architecture for PKI operations including certificate issuance,
                      revocation, and OCSP responses. Built Golang Lambda backend with Angular frontend for blacklist
                      management. Implemented 300+ unit and integration tests with trust engine for compliance
                      enforcement.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">RESULT</h3>
                    <p>
                      Achieved 99.99% system reliability with comprehensive test coverage. Successfully processed
                      millions of certificate operations while maintaining strict security compliance and enabling
                      real-time certificate validation.
                    </p>
                  </div>
                  <div className="border-t-4 border-black pt-4">
                    <h4 className="font-bold mb-2">TECH STACK:</h4>
                    <p className="text-sm">
                      Quarkus, Go, Angular, AWS Lambda, PKI, OCSP, Microservices, Security Compliance
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Healthcare Prevention Platform */}
            <article className="border-4 border-black p-8">
              <div className="grid lg:grid-cols-3 gap-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4">HEALTHCARE PREVENTION PLATFORM</h2>
                  <div className="text-sm bg-black text-white p-2 mb-4 inline-block">HEALTHCARE • FULL-STACK</div>
                </div>
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">SITUATION & TASK</h3>
                    <p>
                      Healthcare company needed a complete prevention application from scratch, including doctor
                      backoffice for patient management and patient frontend for health surveys and prevention path
                      tracking.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">ACTION</h3>
                    <p>
                      Built full-stack application using NestJS with Moleculer for microservices communication and
                      Vue.js for responsive frontend. Implemented secure patient data handling, survey engine,
                      prevention algorithms, and real-time doctor-patient communication features.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">RESULT</h3>
                    <p>
                      Delivered GDPR-compliant platform serving 5,000+ patients with personalized prevention paths.
                      Improved patient engagement by 60% and enabled doctors to manage prevention programs efficiently.
                    </p>
                  </div>
                  <div className="border-t-4 border-black pt-4">
                    <h4 className="font-bold mb-2">TECH STACK:</h4>
                    <p className="text-sm">
                      NestJS, Moleculer, Vue.js, PostgreSQL, GDPR Compliance, Healthcare APIs, Microservices
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* IoT Analytics Platform */}
            <article className="border-4 border-black p-8">
              <div className="grid lg:grid-cols-3 gap-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4">IOT ANALYTICS PLATFORM</h2>
                  <div className="text-sm bg-black text-white p-2 mb-4 inline-block">IOT • DATA</div>
                </div>
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">SITUATION & TASK</h3>
                    <p>
                      Healthcare startup required IoT platform for Industry 4.0 medical devices with real-time data
                      analysis, certification workflows, and interactive data visualizations for medical professionals.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">ACTION</h3>
                    <p>
                      Developed React frontend with Redux and RxJS for real-time data streams. Built NestJS backend with
                      PostgreSQL for data persistence, Elasticsearch for search, and InfluxDB for time-series data.
                      Implemented Apache Kafka for event streaming and D3.js for interactive visualizations.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">RESULT</h3>
                    <p>
                      Successfully processed 1M+ IoT data points daily with sub-second latency. Enabled real-time
                      monitoring of medical devices and provided actionable insights through interactive dashboards for
                      healthcare providers.
                    </p>
                  </div>
                  <div className="border-t-4 border-black pt-4">
                    <h4 className="font-bold mb-2">TECH STACK:</h4>
                    <p className="text-sm">
                      React, Redux, RxJS, NestJS, PostgreSQL, Elasticsearch, InfluxDB, Kafka, D3.js, Docker
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 border-t-4 border-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">INTERESTED IN SIMILAR SOLUTIONS?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            {">"} Let{"'"}s discuss how we can build scalable, secure solutions for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/#contact">
              <Button
                size="lg"
                className="bg-black text-white hover:bg-white hover:text-black border-4 border-black text-lg px-8 py-4 font-mono"
              >
                CONTACT US
              </Button>
            </Link>
            <Link href="/">
              <Button
                variant="outline"
                size="lg"
                className="border-4 border-black text-black hover:bg-black hover:text-white text-lg px-8 py-4 font-mono bg-transparent"
              >
                BACK TO HOME
              </Button>
            </Link>
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

      {/* Structured Data for Projects */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Software Development Projects Portfolio",
            description:
              "Portfolio of cloud-native software projects including healthcare platforms, fintech systems, and security infrastructure",
            itemListElement: [
              {
                "@type": "SoftwareApplication",
                name: "Healthcare Patient Monitoring Platform",
                description: "Cross-platform mobile applications for real-time patient monitoring and visit scheduling",
                applicationCategory: "HealthApplication",
                operatingSystem: "iOS, Android",
              },
              {
                "@type": "SoftwareApplication",
                name: "ML Trading Platform",
                description: "High-performance frontend for ML-powered automatic trading application",
                applicationCategory: "FinanceApplication",
                operatingSystem: "Web",
              },
              {
                "@type": "SoftwareApplication",
                name: "E-commerce Order Dispatching System",
                description: "Distributed order dispatching system for global D2C platform",
                applicationCategory: "BusinessApplication",
                operatingSystem: "Cloud",
              },
            ],
          }),
        }}
      />
    </div>
  )
}
