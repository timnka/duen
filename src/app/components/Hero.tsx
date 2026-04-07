'use client'

import Image from 'next/image'

interface HeroProps {
  eyebrow: string
  title: string
  titleEmphasis?: string
  description: string
  imagePath: string
  imageAlt: string
}

export default function Hero({ 
  eyebrow, 
  title, 
  titleEmphasis, 
  description, 
  imagePath, 
  imageAlt 
}: HeroProps) {
  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 relative overflow-hidden bg-black">
      {/* Hero Text */}
      <div className="flex flex-col justify-center px-8 md:px-16 pt-24 lg:pt-32 pb-12 lg:pb-0 relative z-10">
        <p className="font-mono text-xs md:text-sm tracking-widest text-duen-gold-300 uppercase mb-8 opacity-0 animate-fade-up animation-delay-200">
          {eyebrow}
        </p>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-[0.95] tracking-tight text-duen-gold-100 mb-8 opacity-0 animate-fade-up animation-delay-400">
          Engineering<br />
          <em className="italic text-duen-gold-200 font-normal">futures,</em><br />
          together.
        </h1>
        <p className="text-lg md:text-xl font-light leading-relaxed text-gray-400 max-w-[38ch] mb-8 opacity-0 animate-fade-up animation-delay-600">
          {description}
        </p>
        <div className="flex items-center gap-6 mt-4 opacity-0 animate-fade-up animation-delay-800">
          <div className="flex-1 max-w-[60px] h-px bg-duen-gold-300"></div>
          <span className="font-mono text-xs tracking-widest text-gray-400 uppercase">
            Est. UC Davis
          </span>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative overflow-hidden h-[50vw] lg:h-auto">
        <Image 
          src={imagePath} 
          alt={imageAlt}
          width={1920}
          height={1080}
          className="w-full h-full object-cover grayscale-[30%] sepia-[20%] scale-105 transition-transform duration-[8s] hover:scale-100"
        />
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(13,13,13,1) 0%, transparent 40%), linear-gradient(to top, rgba(13,13,13,1) 0%, transparent 30%)'
          }}
        ></div>
      </div>
    </section>
  )
}
