import Image from 'next/image'
import Link from 'next/link'
import group1 from './photos/cover1.jpg'
import { Typewriter } from './components/Typewriter'
import { messageFromPresident } from './DATAmessageFromPresident'
import { groupPhoto } from './DATAgroupPhoto'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Davis Undergraduate Engineering Network',
  description: '',
}

export default function Home() {

  return (
    <div>
      {/* Grad cover photo and typewriter. */}
      <div className="w-full h-screen bg-cover bg-top bg-[url('/landing-content/grads1.jpg')] flex items-center  text-xl sm:text-5xl relative">
        <div className="w-6/12 flex justify-end">
          <p className="text-white pr-3 font-normal">We are </p>
        </div>
        <div className='text-duen-gold-300 font-bold'>
          <Typewriter
            words={['lifelong friends.','passionate.','adventurers.','engineers!']}
            loop={false}
            cursor
            cursorStyle='|'
            typeSpeed={120}
            deleteSpeed={80}
            delaySpeed={3000} />
        </div>

        <div className='absolute w-full h-screen flex items-center justify-center pt-36'>
          <Link href='/join' className='bg-purple  text-white text-base md:text-2xl px-8 py-2 rounded-lg border-2 border-purple transition duration-300 hover:border-duen-purple-500 hover:cursor-pointer hover:text-duen-gold-300'>
            LEARN MORE
          </Link>
        </div>
      </div>

      {/* Parent component for duen banner, general panel, and message from president. */}
      <div className="text-black flex-col justify-center items-center w-full">
        {/* Purple DUEN Banner font-abel*/}
        <div className="h-[18rem] w-full flex justify-center items-center bg-duen-purple-400 to-purple">
          <div className="text-white text-2xl md:text-4xl lg:text-5xl">
            <h1 className="font-abel text-duen-gold-300">DAVIS UNDERGRADUATE ENGINEERING NETWORK</h1>
            <p className="text-duen-gold-500 font-normal text-lg lg:text-3xl pt-3">{'//'} a professional engineering club at UC Davis.</p>
          </div>
        </div>

        {/* About Panel Container */}
        <div className="min-h-min w-full flex flex-col lg:flex-row items-center bg-white">
          {/* General Text*/}
          <div className="w-full lg:w-1/2 h-full text-4xl 2xl:text-5xl">
            {/* General Text Container */}
            <div className="px-5 lg:px-22 xl:px-36 py-32 lg:py-14">
              <div className="flex pb-3">
                <p className="font-bold text-purple pr-3">Engineers</p>
                <p>by title,</p>
              </div>

              <div className="flex pb-14">
                <p className="font-bold text-purple pr-3">Family</p>
                <p>by choice.</p>
              </div>
              <p className="text-base">DUEN is a close-knit group of ambitious engineers, and we strive to foster friendships that will last a lifetime. We are constantly learning, growing, and bonding as friends and as professionals.</p>
            </div>
          </div>

          {/* Group Photo*/}
          <div className="w-full lg:w-1/2">
            <div className="h-full flex justify-center items-center object-scale-down overflow-hidden relative group">
              <p className="absolute text-2xl text-white z-10 invisible group-hover:visible">{groupPhoto.imageDesc}</p>
              <Image src={groupPhoto.path} width={1100} height={900} alt="duen group photo" className="group-hover:brightness-50 group-hover:scale-110 transition duration-500 cursor-pointer z-0"></Image>
            </div>
          </div>
        </div>

        {/* Message from Our President */}
        <div className="w-full h-min  flex flex-col justify-center items-center text-black bg-gray-200 py-20">
          {/* Title */}
          <p className="text-purple font-bold text-3xl lg:text-5xl">{messageFromPresident.title}</p>

          {/* photo and message */}
          <div className="flex flex-col lg:flex-row w-full pt-20 flex justify-center items-center">
            {/* President Portrait Photo */}
            <div className="w-64 max-h-min">
              <Image src={messageFromPresident.imagePath} width={700} height={600} alt="duen group photo" className="rounded-[18px] px-1 py-1"></Image>
            </div>

            {/* President Message and Signature */}
            <div className="w-full px-3 md:px-16 lg:w-1/3 py-12 lg:py-0">
              <p className="text-lg pb-8">{messageFromPresident.message}</p>
              <div className="flex">
                <p className="text-lg pr-1">Best,</p>
                <p className="text-lg font-bold text-purple">{messageFromPresident.presidentName}</p>
              </div>
              <p className="text-sm">{messageFromPresident.presidentCohort} Cohort</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
