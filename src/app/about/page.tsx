import Hero from '../components/Hero'
import Image from 'next/image'
import PillarGrid from '../components/PillarGrid'
import { companies } from './DATAcompanies'
import { pillars } from './DATApillars'
import { mission } from './DATAmissionStatement'
import { alumniNetwork } from './DATAalumniNetwork'
import CompanyBadge from '@/app/about/CompanyBadge'
import LogoLoop from '../components/LogoLoop'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'DUEN - About',
    description: '',
}

export default function About() {
    return (
        <main className="bg-ink text-white">
            {/* Hero Section */}
            <Hero
                eyebrow="Davis Undergraduate Engineering Network"
                title="Engineering futures together"
                description="An interdisciplinary community connecting UC Davis engineers with the people, skills, and opportunities that shape careers."
                imagePath={mission.path}
                imageAlt={mission.imageDesc}
            />

            {/* Mission Section - Gold Strip */}
            <section className="bg-duen-gold-300 px-8 md:px-16 py-12 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto">
                    <div>
                        <p className="font-mono text-xs tracking-widest text-ink/50 uppercase mb-2">
                            Our Purpose
                        </p>
                        <p className="text-base font-semibold text-ink tracking-wide">
                            Mission Statement
                        </p>
                    </div>
                    <div className="md:col-span-2">
                        <p className="text-xl md:text-2xl font-light leading-relaxed text-ink italic">
                            {mission.statement}
                        </p>
                    </div>
                </div>
            </section>

            {/* Pillars Section */}
            <section className="bg-warm-gray px-8 md:px-16 py-16 md:py-20">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-baseline gap-8 mb-12 md:mb-16">
                        <span className="font-mono text-xs tracking-widest text-duen-gold-300">
                            02 —
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-duen-gold-100 tracking-tight">
                            Our Core Values
                        </h2>
                    </div>
                    <PillarGrid pillars={pillars} />
                </div>
            </section>

            {/* Alumni Network Section */}
            <section className="bg-ink px-8 md:px-16 py-16 md:py-20 relative overflow-hidden">
                {/* Background text */}
                <div className="absolute top-16 -right-8 text-[14rem] font-light text-duen-gold-300/5 tracking-tight italic pointer-events-none whitespace-nowrap select-none">
                    ALUMNI
                </div>
                
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex items-baseline gap-8 mb-6">
                        <span className="font-mono text-xs tracking-widest text-duen-gold-300">
                            03 —
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-duen-gold-100 tracking-tight">
                            Alumni Network
                        </h2>
                    </div>
                    
                    <p className="text-lg md:text-xl font-light text-[#8A7F72] leading-relaxed max-w-[55ch] mb-12 md:mb-16">
                        {alumniNetwork}
                    </p>

                    {/* Logo Ticker */}
                    <div className="w-full overflow-hidden mask-gradient">
                        <LogoLoop 
                            speed={8}
                            direction="left"
                            gap="gap-12 md:gap-16"
                            className="py-4"
                        >
                            {companies.map((item) => (
                                <div key={item.name} className="px-2">
                                    <CompanyBadge name={item.name} path={item.path}></CompanyBadge>
                                </div>
                            ))}
                        </LogoLoop>
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