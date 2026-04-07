import Link from 'next/link'
import Image from 'next/image'
import { projects, semesterShortLabel } from './DATAprojects'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DUEN - Projects',
  description: 'DUEN cohort projects by semester',
}

export default function ProjectsPage() {
  return (
    <main className="bg-ink text-white">

      {/* Hero Section */}
      <section className="bg-ink px-8 md:px-16 pt-24 pb-16 md:pt-32 md:pb-20 relative overflow-hidden">
        {/* Background text */}
        <div className="absolute top-16 -right-8 text-[14rem] font-light text-duen-gold-300/5 tracking-tight italic pointer-events-none whitespace-nowrap select-none">
          PROJECTS
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-baseline gap-8 mb-6">
            <span className="font-mono text-xs tracking-widest text-duen-gold-300">
              01 —
            </span>
            <p className="font-mono text-xs tracking-widest text-white/40 uppercase">
              Cohort Projects
            </p>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-duen-gold-100 tracking-tight leading-tight max-w-2xl">
            Building for Davis
          </h1>
          <p className="text-lg md:text-xl font-light text-[#8A7F72] leading-relaxed max-w-[55ch] mt-6">
            Interdisciplinary cohort projects since 2023. Hardware and software built by DUEN cohorts each quarter.
          </p>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="bg-warm-gray py-16 md:py-20 overflow-hidden">
        <div className="px-8 md:px-16 max-w-7xl mx-auto mb-10 md:mb-14">
          <div className="flex items-baseline gap-8">
            <span className="font-mono text-xs tracking-widest text-duen-gold-300">
              02 —
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-duen-gold-100 tracking-tight">
              Our Work
            </h2>
          </div>
        </div>

        <div
          className="overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth flex gap-6 pl-8 pr-16 md:pl-16 md:pr-24 lg:pl-32 lg:pr-32 pb-8 md:gap-8"
          style={{ scrollbarWidth: 'thin' }}
        >
          {projects.map((project, index) => {
            const isDark = index % 2 === 0
            return (
              <div
                key={project.slug}
                className="flex-shrink-0 w-[88vw] max-w-4xl snap-center rounded-2xl overflow-hidden"
              >
                <article
                  className={`min-h-[380px] md:min-h-[420px] rounded-2xl flex flex-col md:flex-row relative overflow-hidden ${
                    isDark
                      ? 'bg-ink border border-duen-gold-300/20 text-white'
                      : 'bg-duen-gold-300 text-ink'
                  }`}
                >
                  {isDark && (
                    <div
                      className="absolute inset-0 pointer-events-none rounded-2xl"
                      style={{
                        background:
                          'radial-gradient(ellipse 70% 60% at 85% 50%, rgba(199,170,114,0.08) 0%, transparent 55%)',
                      }}
                    />
                  )}
                  {/* Left: tagline, name, button */}
                  <div className="flex-1 flex flex-col justify-end p-8 md:p-10 relative z-10">
                    <p className={`font-mono text-xs tracking-widest uppercase mb-2 ${isDark ? 'text-duen-gold-300' : 'text-ink/50'}`}>
                      {semesterShortLabel(project.semester)}
                    </p>
                    <p className={`text-base mb-3 font-light ${isDark ? 'text-white/70' : 'text-ink/70'}`}>
                      {project.shortDescription}
                    </p>
                    <h2 className={`text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-6 ${isDark ? 'text-duen-gold-100' : 'text-ink'}`}>
                      {project.title}
                    </h2>
                    <Link
                      href={`/projects/${project.slug}`}
                      className={`inline-flex items-center gap-2 w-fit font-mono text-xs tracking-widest uppercase px-6 py-3 border transition-all duration-300 ${
                        isDark
                          ? 'border-duen-gold-300 text-duen-gold-300 hover:bg-duen-gold-300 hover:text-ink'
                          : 'border-ink bg-ink text-duen-gold-300 hover:bg-transparent hover:text-ink'
                      }`}
                    >
                      Learn more
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                  {/* Right: visual */}
                  <div className="w-full md:w-2/5 min-h-[200px] md:min-h-full relative z-10 flex items-center justify-center p-6 md:p-8">
                    {project.imagePath ? (
                      <div className="relative w-full aspect-video md:aspect-square max-w-sm rounded-xl overflow-hidden shadow-lg">
                        <Image
                          src={project.imagePath}
                          alt={project.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 80vw, 320px"
                        />
                      </div>
                    ) : (
                      <div
                        className={`w-full aspect-video md:aspect-square max-w-sm rounded-xl flex items-center justify-center border ${
                          isDark
                            ? 'bg-white/5 border-duen-gold-300/20'
                            : 'bg-ink/5 border-ink/20'
                        }`}
                      >
                        <span className={`font-mono text-xs tracking-widest uppercase ${isDark ? 'text-duen-gold-300/40' : 'text-ink/40'}`}>
                          {semesterShortLabel(project.semester)}
                        </span>
                      </div>
                    )}
                  </div>
                </article>
              </div>
            )
          })}
          {/* Scroll hint arrow */}
          <div className="flex-shrink-0 w-12 flex items-center justify-center self-center opacity-30" aria-hidden>
            <svg className="w-8 h-8 text-duen-gold-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        <div className="px-8 md:px-16 mt-4">
          <p className="font-mono text-xs tracking-widest text-white/30 uppercase">Scroll or swipe for more</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-duen-gold-300 px-8 md:px-16 py-16 md:py-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <p className="font-mono text-xs tracking-widest text-ink/50 uppercase mb-4">
              Get Involved
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-ink leading-tight tracking-tight">
              Have a project idea?<br />Build with DUEN.
            </h2>
            <p className="mt-4 text-ink/70 font-light text-lg max-w-[45ch]">
              Join a cohort and work alongside engineers from every discipline. Recruitment every Fall and Spring.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <a
              href="https://forms.gle/AHsPhLmgBUxxZw2Q7"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs tracking-widest uppercase px-8 py-4 border border-ink bg-ink text-duen-gold-300 hover:bg-transparent hover:text-ink transition-all duration-300 text-center"
            >
              Interest Form
            </a>
            <a
              href="mailto:duen-eboard@ucdavis.edu"
              className="font-mono text-xs tracking-widest uppercase px-8 py-4 border border-ink text-ink hover:bg-ink hover:text-duen-gold-300 transition-all duration-300 text-center"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}