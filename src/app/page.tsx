import Image from 'next/image'
import group1 from './photos/cover1.jpg'
import {Typewriter} from './components/csc'
import { Abel } from 'next/font/google'
import suye from './photos/suye showercap.jpg'

export default function Home() {

  return (
    <div className="font-raleway">
      {/* Grad cover photo and typewriter. */}
      <div className="w-full h-screen bg-cover bg-top bg-[url('./photos/grads1.jpg')] flex items-center text-amber-400 text-6xl font-bold">
        <div className="w-6/12 flex justify-end">
          <p className="text-white pr-3 font-normal">We are </p>
        </div>
        <div>
          <Typewriter
            words={['lifelong friends.', 'adventurers.', 'collaborative.', 'toe-lovers.']}
            loop={false}
            cursor
            cursorStyle='|'
            typeSpeed={120}
            deleteSpeed={80}
            delaySpeed={3000} />

        </div>
      </div>

      {/* Parent component for duen banner, general panel, and message from president. */}
      <div className="text-black flex-col justify-center items-center w-full">
        {/* Purple DUEN Banner */}
        <div className="h-[18rem] w-full flex justify-center items-center bg-purple-950 w-full">
          <div className="text-white text-5xl">
            <h1 className="font-abel">DAVIS UNDERGRADUATE ENGINEERING NETWORK</h1>
            <p className="text-amber-400 font-normal text-2xl pt-3">// a professional engineering club at UC Davis.</p>
          </div>
        </div>

        {/* About Panel Container 
          sm - 640
          md - 768
          lg - 1024
          xl - 1280
          2xl - 1536
        */}
        <div className="min-h-min w-full flex flex-col lg:flex-row items-center bg-white">
          
          {/* About Text*/}
          <div className="w-full lg:w-1/2 h-full text-4xl 2xl:text-5xl">
            {/* About Text Container */}
            <div className="px-36 lg:px-24 xl:px-48 py-16">
              <div className="flex pb-3">
                <p className="font-bold text-purple-800 pr-3">Engineers</p>
                <p>by title,</p>
              </div>

              <div className="flex pb-14">
                <p className="font-bold text-purple-800 pr-3">Family</p>
                <p>by choice.</p>
              </div>
              <p className="text-base">DUEN is a close-knit group of ambitious engineers, and we strive to foster friendships that will last a lifetime. We are constantly learning, growing, and bonding as friends and as professionals.</p>
            </div>
          </div>

          {/* Group Photo*/}
          <div className="w-full lg:w-1/2">
            <div className="h-full flex justify-center items-center object-scale-down overflow-hidden relative group">
              <p className="absolute text-2xl text-white z-10 invisible group-hover:visible">DUEN @ Illenium in Lake Tahoe!</p>
              <Image src={group1} alt="duen group photo" className="group-hover:brightness-50 group-hover:scale-110 transition duration-500 cursor-pointer z-0"></Image>
            </div>
          </div>


        </div>

        {/* Message from Our President */}
        <div className="w-full h-min text-5xl flex flex-col justify-center items-center bg-slate-100 py-20">
          {/* Title */}
          <p className="font-teko text-purple-800">MESSAGE FROM OUR PRESIDENT</p>

          {/* photo and message */}
          <div className="flex w-full pt-20 flex justify-center">
            {/* President Portrait Photo */}
            <div className="w-64 max-h-min">
              <Image src={suye} objectFit={'contain'} alt="duen group photo" className="rounded-[18px] px-1 py-1"></Image>
            </div>

            {/* President Message and Signature */}
            <div className="w-96 px-10">
              <p className="text-lg pb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu dictum neque. Integer eu tellus id erat euismod malesuada. Maecenas id nunc ac arcu venenatis viverra. Vestibulum quis bibendum arcu.
                Vivamus sed mauris eget purus mollis suscipit. Nunc eleifend consequat elit, ac feugiat nulla blandit in. Proin sed leo at ex tristique tempus. Sed ac quam a nisi laoreet semper. </p>

              <div className="flex">
                <p className="text-lg pr-1">Best,</p>
                <p className="text-lg font-bold text-purple-800">Matthew Suyetani</p>
              </div>
              <p className="text-base pb-8">Fall 2021 Cohort</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
