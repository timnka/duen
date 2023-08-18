import Banner from '../components/banner'
import OfficerBadge from '../components/OfficerBadge'
import OfficerType from '@/app/models/IOfficerType'
import Image from 'next/image'
import { eboard } from './eboard'
import { actives } from './actives'
/*

*/

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
                            <div>
                                <OfficerBadge
                                    name={curr_officer.name}
                                    year={curr_officer.year}
                                    major={curr_officer.major}
                                    cohort={curr_officer.cohort}
                                    position={curr_officer.position}
                                    linkedin={curr_officer.linkedin}
                                    image={curr_officer.image}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Active Officers Container */}
            <div className="w-full flex flex-col items-center pb-20">
                <p className="text-4xl md:text-5xl lg:text-6xl pb-20 text-purple font-bold">Active Officers</p>
                <div className="flex flex-wrap justify-center">
                    {actives.map((curr_officer, index) => {
                        return (

                            <OfficerBadge
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