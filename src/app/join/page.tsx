import Image from 'next/image'
import Link from 'next/link'
import Banner from '@/app/components/banner'
import TabComponent from '@/app/join/TabComponent'
import { recruitment } from './DATArecruitment'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'DUEN - Join',
  description: '',
}

export default function Join() {

    let recruiting = false

    return (
        <div className="flex flex-col min-h-fit">
            <Banner word="join"></Banner>
            <div className="w-full flex flex-col items-center px-2 md:px-32 lg:px-64">
                <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-purple py-20">{recruitment.title}</p>
                <p className="pb-20">{recruitment.description}</p>

                <Link href='https://forms.gle/SVeMU3Jdzg65MTQX8' target="_blank" className='bg-purple text-white px-8 py-2 rounded-lg border-2 border-purple transition duration-300 hover:border-duen-purple-500 hover:cursor-pointer hover:text-duen-gold-300'>
                    Interest Form
                </Link>

                <div className="w-full flex flex-col items-center pt-10">
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
