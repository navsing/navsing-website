"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

// Work Experience Schema for SEO
const workExperienceSchema = [
  {
    "@context": "https://schema.org",
    "@type": "EmployeeRole",
    roleName: "Sr. Manager, Technical PMs",
    Organization: { name: "Meta", url: "https://www.meta.com" },
    startDate: "2021-01-01",
    description: "Supporting a talented group of Technical PMs leading technical strategy and execution for Facebook Creators and Publishers, Creator Monetization, Facebook Marketplace, Facebook Dating, Gaming, and Events.",
  },
  {
    "@context": "https://schema.org",
    "@type": "EmployeeRole",
    roleName: "Staff Technical PM",
    Organization: { name: "Amazon", url: "https://www.amazon.com" },
    startDate: "2019-01-01",
    endDate: "2021-01-01",
    description: "Managed tech readiness for Amazon events globally including Prime Day and Black Friday, optimizing 200+ services to render customer experience on Amazon.com.",
  },
]

const publications = [
  {
    href: "https://www.forbesindia.com/article/crypto-made-easy/meta-rolls-out-nft-support-on-instagram-to-100-countries/78795/1",
    teamName: "Forbes",
  },
  {
    href: "https://economictimes.indiatimes.com/tech/technology/facebook-starts-testing-nfts-with-select-creators/articleshow/92590231.cms?from=mdr",
    teamName: "The Economic Times",
  },
  {
    href: "https://techcrunch.com/2022/06/30/facebook-testing-nfts-select-creators-us/",
    teamName: "TechCrunch",
  },
  {
    href: "https://www.outlookindia.com/business/facebook-testing-nft-collectibles-page-with-us-creators-bitcoin-rises-news-206159",
    teamName: "Outlook India",
  },
  {
    href: "https://fortune.com/2022/07/01/facebook-nft-integrations-meta-testing",
    teamName: "Fortune",
  },
  {
    href: "https://www.thehindu.com/sci-tech/technology/facebook-users-could-soon-experience-nfts-on-the-platform/article65588727.ece",
    teamName: "The Hindu",
  },
  {
    href: "https://finance.yahoo.com/news/meta-confirms-nft-rollout-across-150814439.html",
    teamName: "Yahoo Finance",
  },
  {
    href: "https://www.google.com/search?q=navdeep+nft+meta",
    teamName: "...among others",
  },
];

const antares = [
  {
    href: 'https://www.slac.stanford.edu/econf/C131113.1/papers/matheson.pdf',
    teamName: 'Stanford University'
  },
  {
    href: 'https://phys.org/news/2013-12-rarest-rare-southern.html',
    teamName: 'Phys.org'
  },
  {
    href: 'https://ui.adsabs.harvard.edu/abs/2021AAS...23742302M/abstract',
    teamName: 'NASA and Harvard University'
  },
  {
    href: 'https://www.cta-observatory.org/wp-content/uploads/2021/07/Narayan_CTA_20210623-compressed.pdf',
    teamName: 'Cherenkov Telescope Array Observatory'
  },
  {
    href: 'https://www.lsstcorporation.org/catalyst-fellowship/content/nsfs-noir-lab',
    teamName: 'LSST Corporation'
  },
  {
    href: 'http://sites.astro.caltech.edu/ztf/csac/Presentations/ANTARES-ZTF2.pdf',
    teamName: 'CalTech'
  },
  {
    href: 'https://tucson.com/news/science/anything-you-can-imagine-happening-in-our-vast-universe-already-has/article_ee32f7d4-e8d2-5363-99ad-fdf8472484ef.html',
    teamName: 'Tucson.com'
  },
  {
    href: 'https://www.google.com/search?q=antares+noirlab&sxsrf=AB5stBimEFzjHEqA-7hIdSpCMDQ5ypVPvg%3A1691446673466&source=hp&ei=kW3RZKPuGf7h0PEP7OKSsAU&iflsig=AD69kcEAAAAAZNF7oRK-vqgETdazs0V4ehNJQAsaf-rA&ved=0ahUKEwjj-oDxycuAAxX-MDQIHWyxBFYQ4dUDCAs&uact=5&oq=antares+noirlab&gs_lp=Egdnd3Mtd2l6Ig9hbnRhcmVzIG5vaXJsYWIyBBAjGCdIuxlQAFieGHACeACQAQCYAVegAdEJqgECMTi4AQPIAQD4AQHCAgcQABiKBRhDwgIIEAAYigUYkQLCAhEQLhiABBixAxiDARjHARjRA8ICCxAAGIAEGLEDGIMBwgILEC4YgAQYxwEY0QPCAggQLhiKBRiRAsICCxAuGIoFGLEDGIMBwgIIEC4YgAQYsQPCAgsQLhjHARjRAxiABMICDhAAGIoFGLEDGIMBGJECwgINEC4YigUYsQMYgwEYQ8ICChAAGIAEGBQYhwLCAggQABiABBixA8ICChAAGIoFGLEDGEPCAg0QLhiDARixAxiKBRhDwgINEAAYgAQYFBiHAhixA8ICCxAAGIoFGLEDGIMBwgIFEAAYgATCAgsQLhiABBjHARivAcICBhAAGBYYHsICCBAAGBYYHhgPwgIIEAAYigUYhgPCAgcQIRigARgKwgIGEAAYHhgNwgIIEAAYBRgeGA0&sclient=gws-wiz#ip=1',
    teamName: '... among others'
  }
]


export default function Home() {
  const [isDark, setIsDark] = useState(true)
  const [activeSection, setActiveSection] = useState("")
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <div className="fixed top-6 right-6 z-20">
        <button
          onClick={toggleTheme}
          className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300 bg-background/80 backdrop-blur-sm"
          aria-label="Toggle between light and dark theme"
          title="Toggle theme"
        >
          {isDark ? (
            <svg
              className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </button>
      </div>
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-4">
          {["intro", "work", "research", "press", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })}
              className={`w-2 h-8 rounded-full transition-all duration-500 ${activeSection === section ? "bg-foreground" : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
                }`}
              aria-label={`Navigate to ${section}`}
            />
          ))}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        <header
          id="intro"
          ref={(el) => void (sectionsRef.current[0] = el)}
          className="min-h-screen flex items-center opacity-0"
        >
          <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
            <div className="lg:col-span-2 lg:order-2 flex flex-col justify-end space-y-6 sm:space-y-8">
              <div className="space-y-4">
                <div className="relative group">
                  <div className="aspect-square w-full max-w-[200px] mx-auto lg:mx-0 bg-muted border-2 border-border rounded-lg flex items-center justify-center overflow-hidden">
                    <img
                      src="/nav.jpg"
                      alt="Navdeep Singh - Sr. Manager Technical PM at Meta"
                      className="object-cover w-full h-full"
                      loading="eager"
                      width={200}
                      height={200}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4 hidden lg:block">
                <div className="text-sm text-muted-foreground font-mono">CURRENTLY</div>
                <div className="space-y-2">
                  <div className="text-foreground">Sr. Manager, Technical PMs</div>
                  <div className="text-muted-foreground">@ Meta</div>
                  <div className="text-xs text-muted-foreground">2021 — Present</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 lg:order-1 space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-2">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
                  Navdeep
                  <br />
                  <span className="text-muted-foreground">Singh</span>
                </h1>
              </div>

              <div className="space-y-6 max-w-md">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Sr. Manager at Meta, supporting talented team of PMs, leading technical strategy for
                  <span className="text-foreground"> Facebook Creators</span>,
                  <span className="text-foreground"> Facebook Marketplace, Facebook Groups,</span>
                  <span className="text-foreground"> Facebook Dating, Gaming</span> and
                  <span className="text-foreground"> and Events</span>.
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <div className="text-sm text-muted-foreground font-mono tracking-wider">LEARNING AI BY BUILDING {" "}
                      <a href='https://awardhack.com' target="_blank" className="text-foreground hover:underline">AWARDHACK.COM</a> [100,000 MAU AND GROWING] </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <div className="text-sm text-muted-foreground font-mono tracking-wider">ADVISOR AT {" "}
                      <a href='https://firy.ai' target="_blank" className="text-foreground hover:underline">FIRY.AI</a> [AI-DRIVEN NEUROLOGICAL CARE]</div>

                  </div>
                </div>
                {/* <div className="space-y-3 pt-4">
                  <div className="flex flex-wrap gap-2">
                    {["iOS", "EB1-A", "AI", "Astronomical Computing", "Data Pipelines"].map((tag) => (
                      <div key={tag} className="px-3 py-1 border border-border rounded text-xs text-muted-foreground hover:border-foreground transition-colors duration-300">
                        {tag}
                      </div>
                    ))}
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </header>

        <section
          id="work"
          ref={(el) => void (sectionsRef.current[1] = el)}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light">Work</h2>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {[
                {
                  year: "2021",
                  role: "Sr. Manager, Technical PMs",
                  company: "Meta",
                  description:
                    "Supporting a talented group of Technical PMs leading technical strategy and execution for Facebook Creators and Publishers, Creator Monetization, Facebook Marketplace, Facebook Dating, Gaming, and Events.",
                  tech: ["Leadership", "Technical Strategy", "Product Management"],
                },
                {
                  year: "2019",
                  role: "Staff Technical PM",
                  company: "Amazon",
                  description:
                    "Managed tech readiness for Amazon events globally including Prime Day and Black Friday, optimizing 200+ services to render customer experience on Amazon.com.",
                  tech: ["Event Management", "Systems Optimization", "Scale"],
                },
                {
                  year: "2018",
                  role: "Software Engineer",
                  company: "Audible",
                  description:
                    "Built Content and Publishing Tools that empowered content creators and streamlined publishing workflows across the platform.",
                  tech: ["Software Engineering", "Content Management", "Publishing"],
                },
                {
                  year: "2017",
                  role: "Chief Programmer",
                  company: "NoirLab & NASA",
                  description:
                    "Collaborated with astronomers on the monumental LSST software for the largest telescopic camera on earth at the Rubin Observatory, Chile.",
                  tech: ["Research", "Astronomy Software", "Scientific Computing"],
                },
              ].map((job, index) => (
                <div
                  key={index}
                  className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
                >
                  <div className="lg:col-span-2">
                    <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                      {job.year}
                    </div>
                  </div>

                  <div className="lg:col-span-6 space-y-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-medium">{job.role}</h3>
                      <div className="text-muted-foreground">{job.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="research"
          ref={(el) => void (sectionsRef.current[2] = el)}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-4 sm:space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <h2 className="text-3xl sm:text-4xl font-light">Research Publications</h2>
                <div className="text-muted-foreground mt-2">309 global citations</div>
                <div className="text-muted-foreground leading-rela mt-2">
                  I’ve researched networks meant to survive deep oceans, reimagined what caching looks like if home routers had large storage, and helped design systems that scan the night sky for rare cosmic events in real time. My work lives where distributed systems meet physics, where bandwidth is scarce, latency is brutal, and sometimes the dataset is the universe.
                </div>
                <div className="text-muted-foreground leading-rela mt-2">
                  Read about my research <a className="underline" href="https://scholar.google.com/citations?user=IewhivsAAAAJ&hl=en" target="_blank">here</a>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src="/citations.png"
                alt="Global citation map showing 309 citations from research publications in fields of distributed systems, astronomy, and network optimization"
                className="w-full max-w-4xl border border-border rounded-lg shadow-lg"
                loading="lazy"
                width={1200}
                height={800}
              />
            </div>



          </div>
        </section>

        <section id="press" ref={(el) => void (sectionsRef.current[3] = el)} className="py-20 sm:py-32 opacity-0">
          <div className="space-y-2 sm:space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-light">Press</h2>
            </div>

            <div className="grid gap-8 sm:gap-12">
              <div className="space-y-6">
                <div className="text-sm text-muted-foreground font-mono">My work on NFTs garnered attention from media publications globally including
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {publications.map((publication) => (
                    <a
                      key={publication.teamName}
                      href={publication.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 text-center block hover:shadow-sm"
                    >
                      <div className="text-sm text-foreground">
                        {publication.teamName}
                      </div>
                    </a>
                  ))}
                </div>

              </div>

              <div className="space-y-6">
                <div className="text-sm text-muted-foreground font-mono">My work on ANTARES is also featured in numerous media publications and institutions globally including
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {antares.map((publication) => (
                    <a
                      key={publication.teamName}
                      href={publication.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 text-center block hover:shadow-sm"
                    >
                      <div className="text-sm text-foreground">
                        {publication.teamName}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" ref={(el) => void (sectionsRef.current[4] = el)} className="py-20 sm:py-32 opacity-0">
          <div className="space-y-2 sm:space-y-8">

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl font-light">{"Talk to me about"}</h2>
                <p className="text-md sm:text-lg text-muted-foreground leading-relaxed">
                  building AI-native products, optimizing award travel and credit card rewards, navigating technical accomplishments for EB1-A, and applying research at the intersection of AI and real-world systems

                </p>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "LinkedIn", handle: "navsing", link: "https://www.linkedin.com/in/navsing/" },
                    { name: "Email", handle: "contact@navsing.com", link: "mailto:contact@navsing.com" },
                    { name: "Twitter", handle: "navsing_", link: "https://x.com/navsing_" },
                    { name: "Github", handle: "contact@navsing.com", link: "https://github.com/navsing" },
                  ].map((social) => (
                    <Link
                      key={social.name}
                      href={social.link}
                      target={"_blank"}
                      className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300"
                    >
                      <div className="space-y-2">
                        <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                          {social.name}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  )
}
