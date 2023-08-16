import BulletPoint from '@/app/components/BulletPoint'
import Image from 'next/image'

export default function Internship() {
    return (
        <div className="flex flex-col items-center">
            {/* Title Container */}
            <div className="pt-20">
                <p className="font-teko text-5xl">Want to become a DUEN Officer?</p>
            </div>

            {/* Data Container */}
            <div className="flex flex-col lg:flex-row items-center">
                {/* Image Container */}
                <div className="w-full lg:w-1/2 flex flex-col items-center py-20 px-10">
                    <div className="min-h-fit">
                        <div className="h-full flex justify-center items-center object-scale-down overflow-hidden relative group rounded-lg">
                            <p className="absolute text-2xl text-white z-10 invisible group-hover:visible">Our Spring '23 Cohort & their hockey table project!</p>
                            <Image src="/sp23-cohort.jpg" alt="duen group photo" width={600} height={600} objectFit={'contain'} className="group-hover:brightness-50 group-hover:scale-110 transition duration-500 cursor-pointer z-0"></Image>
                        </div>
                    </div>
                </div>

                {/* Bullets Container */}
                <div className="w-full lg:w-1/2 px-10 py-10 flex flex-col">
                    <p className="font-teko text-3xl pb-8">Go through our internship program to...</p>
                    <BulletPoint sample="Join a fun, welcoming group of engineers at UC Davis!"></BulletPoint>
                    <BulletPoint sample="Take on high impact leadership roles to keep serving the Davis engineering community."></BulletPoint>
                    <BulletPoint sample="Acquire invaluable professional development through our simulated internship program."></BulletPoint>
                    <BulletPoint sample="Get hands on engineering experience by contributing to a group construction project."></BulletPoint>
                    <BulletPoint sample="Gain access to an extensive alumni network with deep roots in industry."></BulletPoint>
                </div>


            </div>
        </div>

    )
}