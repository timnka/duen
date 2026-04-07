import BulletPoint from '@/app/components/BulletPoint'
import Image from 'next/image'
import { internship } from './DATAinternship'

export default function Internship() {
    return (
        <div className="flex flex-col items-center text-center">

        {/* Title */}
        <div className="pt-16 md:pt-20 mb-6">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-duen-gold-100">
            {internship.title}
            </h3>
        </div>

        {/* Content */}
        <div className="w-full max-w-3xl flex flex-col items-center">
            {/* Subtitle */}
            <p className="text-base md:text-lg text-white/70 font-light mb-8">
            {internship.subtitle}
            </p>
            {/* Bullet Points */}
            <div className="w-full flex flex-col gap-4 text-left">
            {internship.bulletPoints.map((curr, index) => (
                <BulletPoint sample={curr} key={index} />
            ))}
            </div>
        </div>
        </div>

    )
}