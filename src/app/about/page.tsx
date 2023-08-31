import Banner from '../components/banner'
import Image from 'next/image'
import Pillar from '@/app/about/pillar'
import { companies } from './DATAcompanies'
import { pillars } from './DATApillars'
import { mission } from './DATAmissionStatement'
import { alumniNetwork } from './DATAalumniNetwork'
import CompanyBadge from '@/app/about/CompanyBadge'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'DUEN - About',
  description: '',
}

export default function About() {

    return (
        <main className="flex flex-col items-center">
            {/* 'about' Banner */}
            <Banner word="about"></Banner>

            {/* DUEN Mission Panel */}
            <div className="w-full min-h-fit flex flex-col md:px-16 lg:px-32 bg-duen-white py-20">
                <div className="flex flex-col lg:flex-row items-center">
                    {/* Mission Photo */}
                    <div className="w-full lg:w-1/2 min-h-fit px-5">
                        <div className="h-full flex justify-center items-center object-scale-down overflow-hidden relative group rounded-lg">
                            <p className="absolute text-2xl text-white z-10 invisible group-hover:visible">{mission.imageDesc}</p>
                            <Image src={mission.path} width={800} height={800} alt="duen group photo" objectFit={'contain'} className="group-hover:brightness-50 group-hover:scale-110 transition duration-500 cursor-pointer z-0"></Image>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 px-5">
                        <p className="font-bold text-purple pt-16 pb-8 text-4xl md:text-5xl lg:text-6xl">{mission.title}</p>
                        <p className="py-5">{mission.statement}</p>
                    </div>
                </div>
            </div>

            {/* DUEN Pillars Panel */}
            <p className="text-purple text-4xl md:text-5xl lg:text-6xl font-bold py-24">Our Core Values</p>
            <div className="flex flex-col items-center bg-gray-200">
                {
                    pillars.map((curr) => {
                        return <Pillar
                            key={curr.name}
                            num={curr.num}
                            name={curr.name}
                            description={curr.description}
                            imagePath={curr.imagePath}
                            imageDesc={curr.imageDesc}
                            isReversed={curr.isReversed}
                        ></Pillar>
                    })
                }
            </div>

            {/* Alumni Network */}
            <p className="text-purple text-4xl md:text-5xl lg:text-6xl font-bold py-24">Alumni Network</p>
            <div className="w-full flex flex-col items-center pb-20">
                <div className="flex flex-col justify-center items-center px-16 md:px-32 lg:px-64">
                    <p className="pb-20">{alumniNetwork}</p>
                </div>
                <div className="flex flex-wrap justify-center px-20">
                    {
                        companies.map((item, index) => {
                                return <div key={item.name} className="px-3 py-3"><CompanyBadge  name={item.name} path={item.path}></CompanyBadge></div>
                            }
                        )
                    }
                </div>
            </div>
        </main>
    )
}