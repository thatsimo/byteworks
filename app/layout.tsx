import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL("https://thatsimo.github.io/byteworks"),
  title: {
    default: "Byteworks - Enterprise Cloud-Native Software Solutions | Microservices Architecture Expert",
    template: "%s | Byteworks - Enterprise Software Development",
  },
  description:
    "Byteworks delivers enterprise-grade cloud-native software solutions. Expert in microservices architecture, event-driven systems, and scalable applications for healthcare, fintech, and e-commerce. Led by Simone Squillace with 5+ years experience in Java, TypeScript, React, AWS, and Azure.",
  keywords: [
    "enterprise software development",
    "cloud native solutions",
    "microservices architecture",
    "event driven systems",
    "software development company",
    "AWS development services",
    "Azure cloud solutions",
    "React development expert",
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
    "Simone Squillace",
    "Italian software engineer",
    "remote software development",
    "European software company",
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
      "Enterprise software development company specializing in microservices architecture, event-driven systems, and scalable cloud-native applications for healthcare, fintech, and e-commerce industries.",
    siteName: "Byteworks",
    images: [
      {
        url: "https://thatsimo.github.io/byteworks/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Byteworks - Enterprise Software Development Company specializing in Cloud-Native Solutions, Microservices Architecture, and Event-Driven Systems",
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
  verification: {
    google: "your-google-verification-code-here",
  },
  other: {
    "theme-color": "#000000",
    "color-scheme": "light",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "format-detection": "telephone=no",
    "msapplication-TileColor": "#000000",
    "msapplication-config": "/browserconfig.xml",
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://thatsimo.github.io/byteworks" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://calendar.google.com" />
        <link rel="dns-prefetch" href="https://linkedin.com" />
        <link rel="dns-prefetch" href="https://github.com" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
