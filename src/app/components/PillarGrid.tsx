import Image from 'next/image'

interface Pillar {
  num: number
  name: string
  description: string
  imagePath: string
  imageDesc: string
}

interface PillarGridProps {
  pillars: Pillar[]
}

export default function PillarGrid({ pillars }: PillarGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
      {pillars.map((pillar, index) => (
        <div 
          key={pillar.num}
          className="bg-warm-gray p-8 md:p-12 lg:p-14 relative overflow-hidden group hover:bg-[rgba(201,168,76,0.05)] transition-colors duration-400"
        >
          {/* Top border on hover */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-duen-gold-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left"></div>
          
          <p className="font-mono text-xs tracking-widest text-duen-gold-300 mb-6">
            {String(pillar.num).padStart(2, '0')} / {String(pillars.length).padStart(2, '0')}
          </p>
          
          <div className="w-full h-48 mb-8 relative overflow-hidden">
            <Image
              src={pillar.imagePath}
              alt={pillar.imageDesc}
              width={800}
              height={600}
              className="w-full h-full object-cover grayscale-[40%] sepia-[10%]"
            />
          </div>
          
          <h3 className="text-2xl md:text-3xl font-light italic text-duen-gold-100 mb-4">
            {pillar.name}
          </h3>
          
          <p className="text-base font-light leading-relaxed text-gray-400">
            {pillar.description}
          </p>
        </div>
      ))}
    </div>
  )
}
