import Image from 'next/image'
import BulletPoint from '@/app/components/BulletPoint'
import { generalMember } from './DATAgeneralMember'

export default function GeneralMember() {
    return (
        <div className="flex flex-col items-center text-center">
            {/* Title */}
            <div className="pt-16 md:pt-20 mb-8">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-duen-gold-100">
                {generalMember.title}
                </h3>
            </div>

            {/* Bullet Points */}
            <div className="w-full max-w-3xl flex flex-col gap-4 text-left">
                {generalMember.bulletPoints.map((curr, index) => (
                <BulletPoint sample={curr} key={index} />
                ))}
            </div>
        </div>
    )
}