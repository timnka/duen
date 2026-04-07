import Image from 'next/image'
import Link from 'next/link'
import Banner from '@/app/components/banner'
import TabComponent from '@/app/join/TabComponent'
import type { Metadata } from 'next'
export default function merch() {
    return (
        <div className="bg-ink text-white">
            {/* Hero Section */}
            <section className="bg-ink px-8 md:px-16 pt-24 pb-16 md:pt-32 md:pb-20 relative overflow-hidden">
                {/* Background text */}
                <div className="absolute top-16 right-8 text-[14rem] font-light text-duen-gold-300/5 tracking-tight italic pointer-events-none whitespace-nowrap select-none">
                MERCH
                </div>
                <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex items-baseline gap-8 mb-6">
                    <p className="font-mono text-xs tracking-widest text-white/40 uppercase">
                    
                    </p>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-duen-gold-100 tracking-tight leading-tight max-w-2xl">
                    Coming Soon
                </h1>
                <p className="text-lg md:text-xl font-light text-[#8A7F72] leading-relaxed max-w-[55ch] mt-6">
                    Stay tuned for updates.
                </p>
                </div>
            </section>

      <section className="bg-warm-gray py-30 md:py-40 overflow-hidden">
        <div className="px-8 md:px-16 max-w-7xl mx-auto mb-10 md:mb-14">
          <div className="flex items-baseline gap-8">
            <span className="font-mono text-xs tracking-widest text-duen-gold-300">
              
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-duen-gold-100 tracking-tight">
              ...
            </h2>
          </div>
        </div>
        <div className="px-8 md:px-16 max-w-7xl mx-auto">
          <p className="text-lg md:text-xl font-light text-[#8A7F72] leading-relaxed max-w-[55ch] mt-6">
            
          </p>
        </div>
      </section>
    </div>
  )
}