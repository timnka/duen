import Image from 'next/image'
import Link from 'next/link'
import Banner from '@/app/components/banner'
import TabComponent from '@/app/join/TabComponent'
import { recruitment } from './DATArecruitment'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'DUEN - Join',
  description: '',
}

export default function Join() {

    let recruiting = false

    return (
        <>
            <div className="bg-ink text-white">
                {/* Hero Section */}
                <section className="bg-ink px-8 md:px-16 pt-24 pb-16 md:pt-32 md:pb-20 relative overflow-hidden">
                    {/* Background text */}
                    <div className="absolute top-16 right-8 text-[14rem] font-light text-duen-gold-300/5 tracking-tight italic pointer-events-none whitespace-nowrap select-none">
                    JOIN
                    </div>
                    <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex items-baseline gap-8 mb-6">
                        <p className="font-mono text-xs tracking-widest text-white/40 uppercase">
                            Recruitment
                        </p>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-duen-gold-100 tracking-tight leading-tight max-w-2xl">
                        Become an Officer
                    </h1>
                    <p className="text-lg md:text-xl font-light text-[#8A7F72] leading-relaxed max-w-[55ch] mt-6">
                        Interested in becoming an officer? Learn more about DUEN and get to know our officers through recruitment!
                    </p>
                    </div>
                </section>

                <section className="bg-warm-gray py-10 md:py-30 overflow-hidden">
                    <div className="w-full flex flex-col items-center pt-10">
                        {
                            recruitment.isActive ?
                                <div className="flex flex-col items-center">
                                    <div className="flex flex-col items-center py-10">
                                        <p className="font-bold text-2xl">{recruitment.activeRecruitment.title}</p>
                                        <p className="pt-5">{recruitment.activeRecruitment.activeDescription}</p>
                                    </div>

                                    <Image src={recruitment.activeRecruitment.flyer} width={400} height={400} alt="flyer"></Image>
                                </div>
                                :
                                <div className="w-full max-w-5xl px-8 md:px-16">
                                    <div className="rounded-2xl border border-duen-gold-300/20 bg-ink p-8 md:p-10 relative overflow-hidden">
                                        <div
                                            className="absolute inset-0 pointer-events-none rounded-2xl"
                                            style={{
                                                background:
                                                    "radial-gradient(ellipse 70% 60% at 85% 50%, rgba(199,170,114,0.08) 0%, transparent 55%)",
                                            }}
                                        />
                                        <div className="relative z-10">
                                            <p className="font-mono text-xs tracking-widest text-duen-gold-300 uppercase mb-4">
                                                Recruitment Closed
                                            </p>
                                            <p className="text-lg md:text-xl font-light text-duen-gold-100 leading-relaxed max-w-[60ch]">
                                                {recruitment.inactiveRecruitment}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                        }
                    </div>
                    <TabComponent></TabComponent>
                </section>
            </div>
        </>
    )
}
