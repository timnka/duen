"use client"
import Image from 'next/image'
import group1 from './photos/cover1.jpg'
import TypeWriter from './components/typewriter'
import { Abel } from 'next/font/google'

export const abel = Abel({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-abel',
})


export default function Home() {
  
  return (
    <>
      <div className="w-full h-screen bg-cover bg-top bg-[url('./grads1.jpg')] flex items-center text-amber-400 text-6xl font-bold">
        <div className="w-6/12 flex justify-end">
          <p className="text-white pr-3 font-normal">We are... </p>
        </div>
        <div>
          <TypeWriter/>
        </div>
      </div>

      <div className="text-black flex-col justify-center items-center w-full">
        <div className="h-[15rem] w-full flex justify-center items-center bg-purple-950 w-full text-white text-5xl">
          <div>
            <h1 className={`${abel.className}`}>DAVIS UNDERGRADUATE ENGINEERING NETWORK</h1>
            <p className="text-base text-amber-400 font-normal text-2xl pt-3">// a professional engineering club at UC Davis.</p>
          </div>
        </div>

        <div className="min-h-min w-full flex justify-center items-center bg-slate-100 ">
          
          <div className="w-2/5 h-full text-5xl bg-slate-100 flex flex-col justify-center">
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

          <div className="h-full">
            <div className="w-96 h-fit rounded-[18px] flex items-center bg-gradient-to-r from-amber-400 via-purple-300 to-purple-500">
              <Image src={group1} objectFit={'contain'} alt="duen group photo" className="rounded-[18px] px-1 py-1"></Image>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
