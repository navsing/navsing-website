import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist } from "next/font/google"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://navsing.com"),
  title: "Navdeep Singh",
  description: "Sr. Manager at Meta leading technical strategy for Facebook Creators, Marketplace, Groups, Dating, Gaming and Events. AI researcher and advisor at Firy.ai. 309 cited research publications.",
  keywords: ["Navdeep Singh", "Product Manager", "Meta", "Technical PM", "AI Research", "Astronomy", "LSST", "ANTARES"],
  authors: [{ name: "Navdeep Singh", url: "https://navsing.com" }],
  creator: "Navdeep Singh",
  publisher: "Navdeep Singh",

  // Open Graph Tags
  openGraph: {
    type: "website",
    url: "https://navsing.com",
    title: "Navdeep Singh",
    description: "Sr. Manager at Meta leading technical strategy for Facebook Creators, Marketplace, Groups, Dating, Gaming and Events. AI researcher and advisor at Firy.ai.",
    siteName: "Navdeep Singh",
    images: [
      {
        url: "https://navsing.com/nav.jpg",
        width: 1200,
        height: 630,
        alt: "Navdeep Singh - Senior Manager at Meta",
        type: "image/svg+xml",
      },
      {
        url: "https://navsing.com/nav.jpg",
        width: 200,
        height: 200,
        alt: "Navdeep Singh",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
  },

  // Twitter Card Tags
  twitter: {
    card: "summary_large_image",
    title: "Navdeep Singh",
    description: "Sr. Manager at Meta leading technical strategy for Facebook Creators, Marketplace, Groups, Dating, Gaming and Events. AI researcher and advisor at Firy.ai.",
    images: ["https://navsing.com/nav.jpg"],
    creator: "@navsing_",
  },

  // Additional Meta Tags
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  // Canonical URL
  alternates: {
    canonical: "https://navsing.com",
  },

  // Icons/Favicons
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      { rel: "android-chrome-192x192", url: "/android-chrome-192x192.png" },
      { rel: "android-chrome-512x512", url: "/android-chrome-512x512.png" },
    ],
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Navdeep Singh",
  url: "https://navsing.com",
  image: "https://navsing.com/nav.jpg",
  description: "Sr. Manager, Technical PMs at Meta",
  jobTitle: "Sr. Manager, Technical PMs",
  worksFor: {
    "@type": "Organization",
    name: "Meta",
    url: "https://www.meta.com",
  },
  sameAs: [
    "https://www.linkedin.com/in/navsing/",
    "https://x.com/navsing_",
    "https://github.com/navsing",
  ],
  knowsAbout: [
    "Product Management",
    "Technical Leadership",
    "AI/ML",
    "Astronomy Software",
    "Distributed Systems",
    "Marketplace Technology",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <head>
        {/* Preconnect Links */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.linkedin.com" />
        <link rel="preconnect" href="https://x.com" />
        <link rel="preconnect" href="https://github.com" />

        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="https://www.linkedin.com" />
        <link rel="dns-prefetch" href="https://x.com" />
        <link rel="dns-prefetch" href="https://github.com" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
