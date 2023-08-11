import Banner from '../components/banner'
import { Teko } from 'next/font/google'
import Image from 'next/image'
import pits from '../photos/pitvipers.jpg'
import cam from '../photos/cam.jpg'
import Pillar from '../components/pillar'

interface pillarType {
    num: number,
    name: string,
    description: string,
    imagePath: string,
    imageDesc: string,
    isReversed: boolean,
}
/*
<Pillar
                num={prof.num}
                name={prof.name}
                description={prof.description}
                imagePath={prof.imagePath}
                imageDesc={prof.imageDesc}
            />

            <Pillar
                num={cs.num}
                name={cs.name}
                description={cs.description}
                imagePath={cs.imagePath}
                imageDesc={cs.imageDesc}
            />
*/
export default function About() {

    const cam: pillarType = {
        num: 1,
        name: 'Camaraderie',
        description: 'description',
        imagePath: 'https://i.imgur.com/b3pRCjq.jpg',
        imageDesc: 'Selfie time at our 2023 grad shoot!',
        isReversed: false,
    }
    const prof: pillarType = {
        num: 2,
        name: 'Professionalism',
        description: 'description',
        imagePath: 'https://i.imgur.com/ury8RAa.jpg',
        imageDesc: 'Officers at DUEN formal 2023!',
        isReversed: true,
    }
    const cs: pillarType = {
        num: 3,
        name: 'Philanthropy',
        description: 'description',
        imagePath: 'https://i.imgur.com/igmqQrr.jpg',
        imageDesc: 'DUEN officer feeding the hungry!',
        isReversed: false,
    }
    return (
        <div className="flex flex-col items-center bg-white">
            <Banner word="ABOUT"></Banner>

            <div className="w-full min-h-fit flex flex-col items-center px-16 md:px-32 lg:px-64 py-20">
                <p className="font-teko text-5xl py-7 text-purple-800">OUR MISSION</p>

                {/* Mission Photo */}
                <div className="w-96 min-h-fit py-7">
                    <div className="h-full flex justify-center items-center object-scale-down overflow-hidden relative group rounded-lg">
                        <p className="absolute text-2xl text-white z-10 invisible group-hover:visible">Cool guy with pit vipers on his way to school</p>
                        <Image src={pits} alt="duen group photo" objectFit={'contain'} className="group-hover:brightness-50 group-hover:scale-110 transition duration-500 cursor-pointer z-0"></Image>
                    </div>
                </div>

                <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

            <div className="flex flex-col items-center pb-10">
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



        </div>
    )
}