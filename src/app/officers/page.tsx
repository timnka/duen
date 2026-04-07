import Banner from '../components/banner'
import OfficerBadge from './OfficerBadge'
import CohortSection from './CohortSection'
import { eboard } from './DATAeboard'
import { careerdev } from './DATAcareerdev'
import { finance } from './DATAfinance'
import { internal } from './DATAinternal'
import { profrel } from './DATAprofrel'
import { marketing } from './DATAmarketing'
import { cohorts } from './Datacohorts'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DUEN - Officers',
  description: '',
}

const committees = [
  { label: 'Career Development Committee', number: '02', data: careerdev },
  { label: 'Finance Committee', number: '03', data: finance },
  { label: 'Internal Affairs Committee', number: '04', data: internal },
  { label: 'Marketing Committee', number: '05', data: marketing },
  { label: 'Professional Relations Committee', number: '06', data: profrel },
]

export default function Officers() {
  return (
    <main className="bg-ink text-white">

      {/* Hero Section */}
      <section className="bg-ink px-8 md:px-16 pt-24 pb-16 md:pt-32 md:pb-20 relative overflow-hidden">
        <div className="absolute top-16 -right-8 text-[14rem] font-light text-duen-gold-300/5 tracking-tight italic pointer-events-none whitespace-nowrap select-none">
          OFFICERS
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-baseline gap-8 mb-6">
            <span className="font-mono text-xs tracking-widest text-duen-gold-300">
              01 —
            </span>
            <p className="font-mono text-xs tracking-widest text-white/40 uppercase">
              The Team
            </p>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-duen-gold-100 tracking-tight leading-tight max-w-2xl">
            Meet our officers
          </h1>
          <p className="text-lg md:text-xl font-light text-[#8A7F72] leading-relaxed max-w-[55ch] mt-6">
            Reach out to any of these officers to learn more about DUEN.
          </p>
        </div>
      </section>

      {/* Executive Board — position 0 → bg-warm-gray */}
      <section className="bg-warm-gray px-8 md:px-16 py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-baseline gap-8 mb-12 md:mb-16">
            <span className="font-mono text-xs tracking-widest text-duen-gold-300">
              01 —
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-duen-gold-100 tracking-tight">
              Executive Board
            </h2>
          </div>
          <div className="flex flex-wrap justify-center">
            {eboard.map((curr_officer) => (
              <OfficerBadge
                key={curr_officer.name}
                name={curr_officer.name}
                year={curr_officer.year}
                major={curr_officer.major}
                cohort={curr_officer.cohort}
                position={curr_officer.position}
                linkedin={curr_officer.linkedin}
                image={curr_officer.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Committees — even index (0,2,4) → bg-ink, odd index (1,3) → bg-warm-gray */}
      {committees.map(({ label, number, data }, index) => (
        <section
          key={label}
          className={`${index % 2 === 0 ? 'bg-ink' : 'bg-warm-gray'} px-8 md:px-16 py-16 md:py-20 border-t border-duen-gold-300/10`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex items-baseline gap-8 mb-12 md:mb-16">
              <span className="font-mono text-xs tracking-widest text-duen-gold-300">
                {number} —
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-duen-gold-100 tracking-tight">
                {label}
              </h2>
            </div>
            <div className="flex flex-wrap justify-center">
              {data.map((curr_officer) => (
                <OfficerBadge
                  key={curr_officer.name}
                  name={curr_officer.name}
                  year={curr_officer.year}
                  major={curr_officer.major}
                  cohort={curr_officer.cohort}
                  position={curr_officer.position}
                  linkedin={curr_officer.linkedin}
                  image={curr_officer.image}
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Previous Cohorts — 5 committees means last was index 4 (bg-ink), so this is bg-warm-gray */}
      <section className="bg-warm-gray px-8 md:px-16 py-16 md:py-20 border-t border-duen-gold-300/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-baseline gap-8 mb-12 md:mb-16">
            <span className="font-mono text-xs tracking-widest text-duen-gold-300">
              07 —
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-duen-gold-100 tracking-tight">
              Previous Cohorts
            </h2>
          </div>
          <div className="w-full">
            {cohorts.map((cohort) => (
              <CohortSection
                key={cohort.name}
                cohortName={cohort.name}
                officers={cohort.officers}
              />
            ))}
          </div>
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
              Ready to become<br />part of DUEN?
            </h2>
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