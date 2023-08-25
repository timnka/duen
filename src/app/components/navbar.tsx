"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const links = [{ 'name': 'About', 'path': '/about' }, { 'name': 'Officers', 'path': '/officers' }, { 'name': 'Join', 'path': '/join' }, { 'name': 'FAQ', 'path': '/faq' }]

  return (
    <div className='shadow-md w-full fixed top-0 left-0 z-50'>
      <div className='md:flex items-center justify-between h-16 bg-duen-purple-500 py-2 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center pl-1 md:pl-8'>
          <Link href="/">
            <Image src='/icons-logos/duen-gold.png' alt="duen logo" height={45} width={140} />
          </Link>
        </div>

        {/* burger icon */}
        <div onClick={() => setIsOpen(!isOpen)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
          {
            <svg viewBox="0 0 100 100" width="25" height="25" fill="white">
              <rect width="100" height="7"></rect>
              <rect y="30" width="100" height="7"></rect>
              <rect y="60" width="100" height="7"></rect>
            </svg>
          }
        </div>

        <ul className={`md:flex md:items-center md:pb-0 absolute md:static left-0 w-full md:w-auto md:pl-0 shadow-md transition-all duration-500 ease-in z-[-1] md:z-0 ${isOpen ? 'top-16' : 'top-[-490px]'}`}>
          {
            links.map((link) => (
              <Link href={link.path} key={link.name} onClick={() => setIsOpen(!isOpen)} className="pl-16 block bg-duen-purple-300 md:bg-duen-purple-500 text-white py-2">{link.name}</Link>
            ))
          }
        </ul>
      </div>
    </div>
  )
}
