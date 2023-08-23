import Image from 'next/image'
import Banner from '@/app/components/banner'
import TabComponent from '@/app/join/TabComponent'
import { recruitment } from './DATArecruitment'

export default function Join() {

    let recruiting = false

    return (
        <div className="flex flex-col min-h-fit">
            <Banner word="join"></Banner>
            <div className="w-full flex flex-col items-center px-16 md:px-32 lg:px-64">
                <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-purple py-20">{recruitment.title}</p>
                <p className="pb-20">{recruitment.description}</p>
                <div className="w-full flex flex-col items-center">
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
                            <div className="w-2/3 font-bold bg-gray-300 rounded-lg py-5 px-3">
                                {recruitment.inactiveRecruitment}
                            </div>
                    }
                </div>

                <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-purple py-20">Join us through either of these programs...</p>
                <TabComponent></TabComponent>

            </div>
        </div>
    )
}