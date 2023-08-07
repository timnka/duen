"use client"
import Image from 'next/image'
import group1 from './cover1.jpg'
import NavBar from './navbar'
import { Typewriter } from 'react-simple-typewriter'
import { Abel } from 'next/font/google'

export const abel = Abel({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway',
})


export default function Home() {

  return (
    <>
      <div className="flex justify-center">
        <NavBar></NavBar>
      </div>

      <div className="w-full h-screen bg-cover bg-top bg-[url('./grads1.jpg')] flex items-center text-amber-400 text-6xl font-bold">
        <div className="w-6/12 flex justify-end">
          <p className="text-white pr-3 font-normal">We are... </p>
        </div>
        <div>
          <Typewriter
            words={['lifelong friends.', 'toe-lovers.', 'academic weapons.', 'chegg users.', 'creative.', 'sexy.']}
            loop={false}
            cursor
            cursorStyle='|'
            typeSpeed={120}
            deleteSpeed={80}
            delaySpeed={3000} />
        </div>
      </div>

      <div className="text-black text-5xl flex-col justify-center items-center w-full">
        <div className="h-[15rem] w-full flex justify-center items-center bg-purple-950 w-full text-white text-5xl">
          <div>
            <h1 className={`${abel.className}`}>DAVIS UNDERGRADUATE ENGINEERING NETWORK</h1>
            <p className="text-base text-amber-400 font-normal text-2xl pt-3">// a professional engineering club at UC Davis.</p>
          </div>

        </div>

        <div className="min-h-min w-full flex justify-center bg-slate-100 ">
          <div className="w-2/5 h-full bg-slate-100 flex flex-col justify-center">
            <div className="px-32 py-16">
              <div className="flex pb-3">
                <p className="font-bold text-purple-800 pr-3">Engineers</p>
                <p>by title,</p>
              </div>

              <div className="flex pb-14">
                <p className="font-bold text-purple-800 pr-3">Family</p>
                <p>by choice.</p>
              </div>
              <p className="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nisl diam. Etiam eu dictum neque. Integer eu tellus id erat euismod malesuada. Maecenas id nunc ac arcu venenatis viverra. Vestibulum quis bibendum arcu. Vivamus sed mauris eget purus mollis suscipit. Nunc eleifend consequat elit, ac feugiat nulla blandit in. Proin sed leo at ex tristique tempus. Sed ac quam a nisi laoreet semper. Fusce varius, eros a consequat fringilla, quam velit consequat augue, at tincidunt erat tortor vitae ipsum. Etiam in nibh velit.</p>
            </div>
          </div>
          <div className="w-96 rounded-md flex items-center ">
            <Image src={group1} objectFit={'contain'} alt="duen group photo" className="border-4 border-purple-400 shadow-[7px_7px_3px_0px_rgba(251,191,36)] rounded-lg"></Image>
          </div>
          
        </div>


      </div>
    </>
  )
}
