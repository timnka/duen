"use client"
import Image from 'next/image'
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

      <div className="w-full h-screen bg-cover bg-top bg-[url('./grads1.jpg')] flex items-center text-violet-400 text-6xl font-bold">
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

      <div className="text-black text-5xl flex flex-col justify-center items-center w-full">
        <div className="h-[12rem] w-full  text-white text-5xl flex justify-center items-center">
          <div className={`${abel.className}`}>
            <h1 className="font-bold text-black">DAVIS UNDERGRADUATE ENGINEERING NETWORK</h1>
          </div>
        </div>

        <div className="h-[32rem] w-full flex">
          <div className="w-6/12 h-full bg-white flex flex-col justify-center">
            <div className="px-52">
              <div className="flex pb-3">
                <p className="font-bold text-purple-600 pr-3">Engineers</p>
                <p>by title,</p>
              </div>

              <div className="flex pb-14">
                <p className="font-bold text-purple-600 pr-3">Family</p>
                <p>by choice.</p>
              </div>
              <p className="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nisl diam. Etiam eu dictum neque. Integer eu tellus id erat euismod malesuada. Maecenas id nunc ac arcu venenatis viverra. Vestibulum quis bibendum arcu. Vivamus sed mauris eget purus mollis suscipit. Nunc eleifend consequat elit, ac feugiat nulla blandit in. Proin sed leo at ex tristique tempus. Sed ac quam a nisi laoreet semper. Fusce varius, eros a consequat fringilla, quam velit consequat augue, at tincidunt erat tortor vitae ipsum. Etiam in nibh velit.</p>

            </div>
          </div>

          <div className="w-6/12 h-full">

          </div>
        </div>


      </div>
    </>
  )
}
