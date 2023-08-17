import Banner from '../components/banner'
import Image from 'next/image'
import pits from '../photos/pitvipers.jpg'
import Pillar from '../components/pillar'
import { companies } from './companies'
import CompanyBadge from '../components/CompanyBadge'
import PillarType from '@/app/models/IPillarType'

export default function About() {

    const cam: PillarType = {
        num: 1,
        name: 'Camaraderie.',
        description: 'description',
        imagePath: 'https://i.imgur.com/b3pRCjq.jpg',
        imageDesc: 'Selfie time at our 2023 grad shoot!',
        isReversed: false,
    }
    const prof: PillarType = {
        num: 2,
        name: 'Professionalism.',
        description: 'description',
        imagePath: 'https://i.imgur.com/ury8RAa.jpg',
        imageDesc: 'Officers at DUEN formal 2023!',
        isReversed: true,
    }
    const cs: PillarType = {
        num: 3,
        name: 'Philanthropy.',
        description: 'description',
        imagePath: 'https://i.imgur.com/igmqQrr.jpg',
        imageDesc: 'DUEN officer feeding the hungry!',
        isReversed: false,
    }

    return (
        <div className="flex flex-col items-center">
            <Banner word="about"></Banner>

            <div className="w-full min-h-fit flex flex-col md:px-16 lg:px-32 bg-duen-white py-20">
                <div className="flex flex-col lg:flex-row items-center">
                    {/* Mission Photo */}
                    <div className="w-full lg:w-1/2 min-h-fit px-5">
                        <div className="h-full flex justify-center items-center object-scale-down overflow-hidden relative group rounded-lg">
                            <p className="absolute text-2xl text-white z-10 invisible group-hover:visible">Cool guy taking selife before school</p>
                            <Image src={pits} alt="duen group photo" objectFit={'contain'} className="group-hover:brightness-50 group-hover:scale-110 transition duration-500 cursor-pointer z-0"></Image>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 px-5">
                        <p className="text-7xl font-bold text-purple py-5">Our Mission.</p>
                        <p className="py-5">To develop and maintain a high standard of professional interest among its members and to unite them in a strong bond of fraternal fellowship. Ecclesiastes 9:10</p>
                    </div>
                </div>
            </div>
            <p className="text-purple text-7xl font-bold py-24">DUEN Pillars</p>
            {/* 
            <div className="w-full min-h-min flex items-center justify-center bg-gradient-to-r from-duen-purple-300 to-purple">
                <p className="text-duen-gold-200 text-5xl font-bold py-24">DUEN Pillars</p>
            </div>
            
            Pillars */}
            <div className="flex flex-col items-center bg-gray-200">
                <Pillar
                    num={cam.num}
                    name={cam.name}
                    description={cam.description}
                    imagePath={cam.imagePath}
                    imageDesc={cam.imageDesc}
                    isReversed={cam.isReversed}
                />
                <Pillar
                    num={prof.num}
                    name={prof.name}
                    description={prof.description}
                    imagePath={prof.imagePath}
                    imageDesc={prof.imageDesc}
                    isReversed={prof.isReversed}
                />
                <Pillar
                    num={cs.num}
                    name={cs.name}
                    description={cs.description}
                    imagePath={cs.imagePath}
                    imageDesc={cs.imageDesc}
                    isReversed={cs.isReversed}
                />
            </div>
            <p className="text-purple text-7xl font-bold py-24">Alumni Network</p>
            {/* alumni network */}
            <div className="w-full flex flex-col items-center pb-20">
                <div className="flex flex-col justify-center items-center px-16 md:px-32 lg:px-64">
                    <p className="pb-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="flex flex-wrap justify-center px-20">
                    {
                        companies.map((item, index) => {
                            return <div className="px-3 py-3"><CompanyBadge name={item.name} source={item.link}></CompanyBadge></div>
                        }
                        )
                    }
                </div>


            </div>



        </div>
    )
}