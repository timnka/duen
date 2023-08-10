import Banner from '../components/banner'
import { Teko } from 'next/font/google'
import Image from 'next/image'
import pits from '../photos/pitvipers.jpg'



export default function About() {

    // <p className={`${teko.className}`} >123</p>
    return (
        <div className="flex flex-col items-center bg-slate-100">
            <Banner word="ABOUT"></Banner>

            <div className="w-full min-h-fit flex flex-col items-center px-96 py-20">
                <p className="font-teko text-5xl py-10 text-purple-800"> OUR MISSION</p>

                {/* Mission Photo */}
                <div className="w-96 min-h-fit py-10">
                    <div className="h-full flex justify-center items-center object-scale-down overflow-hidden relative group rounded-lg">
                        <p className="absolute text-2xl text-white z-10 invisible group-hover:visible">Cool guy with pit vipers on his way to school</p>
                        <Image src={pits} alt="duen group photo" objectFit={'contain'} className="group-hover:brightness-50 group-hover:scale-110 transition duration-500 cursor-pointer z-0"></Image>
                    </div>
                </div>


                <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

            <div className="w-2/3 min-h-fit flex bg-purple-100">

                <div className="w-2/5 h-[23rem] bg-purple-200 flex">
                    <div className="flex">
                        <p className="text-5xl text-purple-800 font-bold font-teko pr-3">1</p>
                        <p className="text-4xl text-black">Camaraderie</p>
                    </div>

                </div>
                <div>

                </div>
            </div>
        </div>
    )
}