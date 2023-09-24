import Banner from '../components/banner'
import OfficerBadge from './OfficerBadge'
import { eboard } from './DATAeboard'
import { careerdev } from './DATAcareerdev'
import { finance } from './DATAfinance'
import { internal } from './DATAinternal'
import { profrel } from './DATAprofrel'
import { marketing } from './DATAmarketing'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'DUEN - Officers',
  description: '',
}

export default function Officers() {
    return (
        <div className="flex flex-col min-h-fit">
            <Banner word="officers"></Banner>

            {/* Executive Board Container */}
            <div className="w-full flex flex-col items-center py-20">
                <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-purple pb-20">Executive Board</p>
                <div className="flex flex-wrap justify-center">
                    {eboard.map((curr_officer, index) => {
                        return (
                            
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
                            
                        )
                    })}
                </div>
            </div>

            {/* Career Dev Officers Container */}
            <div className="w-full flex flex-col items-center pb-20">
                <p className="text-4xl md:text-5xl lg:text-6xl pb-20 text-purple font-bold">Career Development Committee</p>
                <div className="flex flex-wrap justify-center">
                    {careerdev.map((curr_officer, index) => {
                        return (

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

                        )
                    })}
                </div>
            </div>


            {/* Finance Officers Container */}
            <div className="w-full flex flex-col items-center pb-20">
                <p className="text-4xl md:text-5xl lg:text-6xl pb-20 text-purple font-bold">Finance Committee</p>
                <div className="flex flex-wrap justify-center">
                    {finance.map((curr_officer, index) => {
                        return (
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

                        )
                    })}
                </div>
            </div>

            {/* Internal Affairs Officers Container */}
            <div className="w-full flex flex-col items-center pb-20">
                <p className="text-4xl md:text-5xl lg:text-6xl pb-20 text-purple font-bold">Internal Affairs Committee</p>
                <div className="flex flex-wrap justify-center">
                    {internal.map((curr_officer, index) => {
                        return (
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

                        )
                    })}
                </div>
            </div>

             {/* Marketing Officers Container */}
             <div className="w-full flex flex-col items-center pb-20">
                <p className="text-4xl md:text-5xl lg:text-6xl pb-20 text-purple font-bold">Marketing Committee</p>
                <div className="flex flex-wrap justify-center">
                    {marketing.map((curr_officer, index) => {
                        return (
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

                        )
                    })}
                </div>
            </div>
            {/* Professional Relations Officers Container */}
            <div className="w-full flex flex-col items-center pb-20">
                <p className="text-4xl md:text-5xl lg:text-6xl pb-20 text-purple font-bold">Professional Relations Committee</p>
                <div className="flex flex-wrap justify-center">
                    {profrel.map((curr_officer, index) => {
                        return (
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

                        )
                    })}
                </div>
            </div>
        </div>
    )
}