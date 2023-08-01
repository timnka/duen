"use client"
import Image from 'next/image'
import logo from './duen.png'
import NavBar from './navbar'
import { Typewriter } from 'react-simple-typewriter'

export default function Home() {

  return (
    <>
      <div className="flex justify-center">
        <NavBar></NavBar>
      </div>


      <div className="w-full h-screen bg-cover bg-top bg-[url('./grads1.jpg')] flex  items-center text-[#d787ff] text-6xl">
        <div className="w-6/12 flex justify-end">
          <p className="text-white pr-3">We are... </p>
        </div>
        <div>
          <Typewriter
            words={['lifelong friends.', 'adventurers.', 'engineers!']}
            loop={false}
            cursor
            cursorStyle='|'
            typeSpeed={120}
            deleteSpeed={120}
            delaySpeed={3000}/>
        </div>


      </div>

      <div className="h-96"></div>
    </>
  )
}
