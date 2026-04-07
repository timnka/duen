import Banner from '../../components/banner'
import Link from 'next/link'
import Image from 'next/image'
import { getProjectBySlug, projects, semesterShortLabel } from '../DATAprojects'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return { title: 'DUEN - Project' }
  return {
    title: `DUEN - ${project.title}`,
    description: project.shortDescription,
  }
}

function Section({ id, title, number, children }: { id: string; title: string; number: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28">
      <div className="flex items-baseline gap-6 mb-6">
        <span className="font-mono text-xs tracking-widest text-duen-gold-300 shrink-0">
          {number} —
        </span>
        <h2 className="text-2xl md:text-3xl font-light text-duen-gold-100 tracking-tight">
          {title}
        </h2>
      </div>
      <div className="text-[#8A7F72] leading-relaxed">{children}</div>
    </section>
  )
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  const hasTeam = project.teamMembers?.length || project.teamImagePath
  const hasSoftware = project.softwareUsed?.length
  const hasTimeline = project.timeline?.length
  const hasDesign = project.designProcess?.length
  const hasChallenges = project.challenges?.length
  const hasMaterials = (project.materials?.length || project.cost)
  const hasLinks = project.links?.length
  const hasUserGuide = project.userGuide?.length
  const hasMaintenance = project.maintenance?.length

  const sidebarSections = [
    { id: 'overview', label: 'Overview', show: true },
    { id: 'team', label: 'Team', show: hasTeam },
    { id: 'software', label: 'Software used', show: hasSoftware },
    { id: 'timeline', label: 'Timeline', show: hasTimeline },
    { id: 'design', label: 'Design & manufacturing', show: hasDesign },
    { id: 'challenges', label: 'Challenges & resolutions', show: hasChallenges },
    { id: 'materials', label: 'Materials & cost', show: hasMaterials },
    { id: 'user-guide', label: 'User guide', show: hasUserGuide },
    { id: 'maintenance', label: 'Maintenance', show: hasMaintenance },
    { id: 'links', label: 'Links & documents', show: hasLinks },
  ].filter(s => s.show)

  const numberedSections = sidebarSections.map((s, i) => ({
    ...s,
    number: String(i + 1).padStart(2, '0'),
  }))

  return (
    <main className="flex flex-col items-center min-h-screen bg-ink text-white">

      {/* Hero */}
      <section className="w-full bg-ink px-8 md:px-16 lg:px-20 xl:px-32 pt-24 pb-16 md:pt-32 md:pb-20 relative overflow-hidden">
        <div className="absolute top-16 -right-8 text-[14rem] font-light text-duen-gold-300/5 tracking-tight italic pointer-events-none whitespace-nowrap select-none">
          {project.title}
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-duen-gold-300 hover:text-duen-gold-100 transition-colors mb-10"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>
          <p className="font-mono text-xs tracking-widest text-duen-gold-300 uppercase mb-3">
            {semesterShortLabel(project.semester)} · {project.semester}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-duen-gold-100 tracking-tight leading-tight max-w-3xl">
            {project.title}
          </h1>
          {project.cohortName && (
            <p className="text-[#8A7F72] font-light mt-4 text-lg">
              Cohort: {project.cohortName}
            </p>
          )}
        </div>
      </section>

      {/* Body */}
      <div className="w-full flex flex-col lg:flex-row lg:items-start px-8 md:px-16 lg:px-20 xl:px-32 py-16 gap-12 max-w-[1600px]">

        {/* Sidebar */}
        <aside className="lg:w-56 xl:w-64 flex-shrink-0 lg:sticky lg:top-24 order-2 lg:order-1">
          <div className="border border-duen-gold-300/20 rounded-xl p-5 bg-white/5">
            <p className="font-mono text-xs tracking-widest text-duen-gold-300 uppercase mb-4">
              On this page
            </p>
            <nav className="flex flex-col gap-1">
              {numberedSections.map(({ id, label, number }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="flex items-baseline gap-3 text-[#8A7F72] hover:text-duen-gold-100 text-sm py-1.5 transition-colors group"
                >
                  <span className="font-mono text-xs text-duen-gold-300/50 group-hover:text-duen-gold-300 transition-colors shrink-0">
                    {number}
                  </span>
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1 min-w-0 order-1 lg:order-2 space-y-16">

          {/* Overview */}
          <Section id="overview" title="Overview" number="01">
            <p className="text-lg text-[#8A7F72] font-light leading-relaxed">{project.description}</p>
            {project.highlights && project.highlights.length > 0 && (
              <ul className="mt-6 space-y-2">
                {project.highlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-duen-gold-300 mt-1 shrink-0">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </Section>

          {hasTeam && (
            <Section id="team" title="Team" number={numberedSections.find(s => s.id === 'team')!.number}>
              <div className="mb-6">
                {project.teamImagePath ? (
                  <div className="relative w-full max-w-xl aspect-video rounded-xl overflow-hidden border border-duen-gold-300/20">
                    <Image
                      src={project.teamImagePath}
                      alt={`${project.title} team`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 640px"
                    />
                  </div>
                ) : (
                  <div className="w-full max-w-xl aspect-video rounded-xl bg-white/5 flex items-center justify-center border border-dashed border-duen-gold-300/20">
                    <span className="font-mono text-xs tracking-widest text-duen-gold-300/40 uppercase">Team photo</span>
                  </div>
                )}
              </div>
              {project.teamMembers && project.teamMembers.length > 0 && (
                <p>
                  <span className="text-duen-gold-100 font-light">Team members: </span>
                  {project.teamMembers.join(', ')}
                </p>
              )}
            </Section>
          )}

          {hasSoftware && (
            <Section id="software" title="Software used" number={numberedSections.find(s => s.id === 'software')!.number}>
              <ul className="space-y-2">
                {project.softwareUsed!.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-duen-gold-300 mt-1 shrink-0">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {hasTimeline && (
            <Section id="timeline" title="Timeline" number={numberedSections.find(s => s.id === 'timeline')!.number}>
              <ul className="space-y-4">
                {project.timeline!.map((entry, i) => (
                  <li key={i} className="flex gap-6">
                    <span className="font-mono text-xs tracking-widest text-duen-gold-300 shrink-0 pt-0.5 uppercase">
                      {entry.date}
                    </span>
                    <span>{entry.description}</span>
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {hasDesign && (
            <Section id="design" title="Design & manufacturing" number={numberedSections.find(s => s.id === 'design')!.number}>
              <ul className="space-y-3">
                {project.designProcess!.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-duen-gold-300 mt-1 shrink-0">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {hasChallenges && (
            <Section id="challenges" title="Challenges & resolutions" number={numberedSections.find(s => s.id === 'challenges')!.number}>
              <ul className="space-y-6">
                {project.challenges!.map((c, i) => (
                  <li key={i} className="pl-5 border-l border-duen-gold-300/40">
                    <p className="text-duen-gold-100 font-light mb-1">Problem: {c.problem}</p>
                    <p>Solution: {c.solution}</p>
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {hasMaterials && (
            <Section id="materials" title="Materials & cost" number={numberedSections.find(s => s.id === 'materials')!.number}>
              {project.materials && project.materials.length > 0 && (
                <ul className="space-y-2 mb-6">
                  {project.materials.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-duen-gold-300 mt-1 shrink-0">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              {project.cost && (
                <p className="font-mono text-xs tracking-widest uppercase text-duen-gold-300 border-t border-duen-gold-300/20 pt-4 mt-4">
                  Total cost: <span className="text-duen-gold-100">{project.cost}</span>
                </p>
              )}
            </Section>
          )}

          {hasUserGuide && (
            <Section id="user-guide" title="User guide" number={numberedSections.find(s => s.id === 'user-guide')!.number}>
              <ul className="space-y-3">
                {project.userGuide!.map((step, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="font-mono text-xs text-duen-gold-300 shrink-0 pt-0.5">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {hasMaintenance && (
            <Section id="maintenance" title="Maintenance" number={numberedSections.find(s => s.id === 'maintenance')!.number}>
              <ul className="space-y-2">
                {project.maintenance!.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-duen-gold-300 mt-1 shrink-0">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {hasLinks && (
            <Section id="links" title="Links & documents" number={numberedSections.find(s => s.id === 'links')!.number}>
              <ul className="space-y-3">
                {project.links!.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.url.startsWith('/') ? encodeURI(link.url) : link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-duen-gold-300 hover:text-duen-gold-100 transition-colors border-b border-duen-gold-300/30 hover:border-duen-gold-100 pb-0.5"
                    >
                      {link.label}
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </Section>
          )}

        </div>
      </div>

      {/* CTA Footer */}
      <section className="w-full bg-duen-gold-300 px-8 md:px-16 py-16 md:py-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <p className="font-mono text-xs tracking-widest text-ink/50 uppercase mb-4">
              Get Involved
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-ink leading-tight tracking-tight">
              Want to build something<br />like this?
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
            <Link
              href="/projects"
              className="font-mono text-xs tracking-widest uppercase px-8 py-4 border border-ink text-ink hover:bg-ink hover:text-duen-gold-300 transition-all duration-300 text-center"
            >
              All Projects
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}