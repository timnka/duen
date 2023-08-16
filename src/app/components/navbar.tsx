import logo from '../photos/duen-gold.png'
import Image from 'next/image'
import Link from 'next/link'

export default function NavBar() {
  /* solid white header       blurry backdrop: bg-transparent backdrop-blur-lgbg-slate-100 
  <div className="w-11/12 bg-white fixed rounded-b-lg flex justify-center drop-shadow-md ">
     <ul className="h-full w-full flex justify-around items-center text-lg text-black">
  */
  return (
    <div className="w-full bg-duen-purple-500 text-duen-gold-300 fixed z-10 flex justify-center drop-shadow-md font-teko">
      <ul className="h-full w-full flex justify-around items-center text-2xl text-black">
        <Link href="/">
          <Image src={logo} alt="duen logo" height={45} className="py-2 transition duration-150 ease-out hover:ease-in" />
        </Link>
        <Link href="/about" className="transition duration-150 ease-out hover:ease-in hover:scale-110">ABOUT</Link>
        <Link href="/officers" className="transition duration-150 ease-out hover:ease-in hover:scale-110">OFFICERS</Link>
        <Link href="/join" className="transition duration-150 ease-out hover:ease-in hover:scale-110">JOIN</Link>
        <Link href="/faq" className="transition duration-150 ease-out hover:ease-in hover:scale-110">FAQ</Link>
      </ul>
    </div>
  
  )
}
