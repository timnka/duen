"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)


  const links = [{ 'name': 'About', 'path': '/about' }, { 'name': 'Projects', 'path': '/projects' }, { 'name': 'Officers', 'path': '/officers' }, { 'name': 'Merch', 'path': '/merch' }, { 'name': 'Join', 'path': '/join' }, { 'name': 'FAQ', 'path': '/faq' }]

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-50">
      <div className="md:flex items-center justify-between h-16 bg-duen-purple-500 py-2 md:px-10 px-7">
        {/* Logo */}
        <div className="font-bold text-2xl cursor-pointer flex items-center pl-1 md:pl-8">
          <Link href="/">
            <Image
              src="/icons-logos/duen-gold.png"
              alt="duen logo"
              height={45}
              width={140}
            />
          </Link>
        </div>

        {/* Burger icon */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <svg viewBox="0 0 100 100" width="25" height="25" fill="white">
            <rect width="100" height="7" />
            <rect y="30" width="100" height="7" />
            <rect y="60" width="100" height="7" />
          </svg>
        </div>

        {/* Nav links */}
        <ul
          className={`
            md:flex md:items-center md:pb-0 
            absolute md:static bg-duen-purple-500 left-0 w-full md:w-auto 
            transition-all duration-300 ease-in z-[-1] md:z-0
            ${isOpen 
              ? "top-16 opacity-100" 
              : "top-[-400px] md:top-0 opacity-0 md:opacity-100 pointer-events-none md:pointer-events-auto"
            }
          `}
        >
          {links.map((link) => (
            <li className="md:ml-8 text-xl md:my-0 my-7 pl-9 md:pl-0" key={link.name}>
              <Link
                href={link.path}
                onClick={() => setIsOpen(false)} // Closes menu when link is clicked
                className="text-white hover:text-[#D4AF37] duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
