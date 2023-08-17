import logo from '../photos/duen-gold.png'
import Image from 'next/image'
import Link from 'next/link'

export default function NavBar() {
  /* solid white header       blurry backdrop: bg-transparent backdrop-blur-lgbg-slate-100 
  <div className="w-11/12 bg-white fixed rounded-b-lg flex justify-center drop-shadow-md ">
     <ul className="h-full w-full flex justify-around items-center text-lg text-black">
  */
  return (
    <div className="w-full bg-duen-purple-500 text-duen-gold-300 fixed z-50 flex justify-center drop-shadow-md">
      <ul className="h-full w-full flex justify-around items-center text-lg">
        <Link href="/">
          <Image src={logo} alt="duen logo" height={45} className="py-2 transition duration-150 ease-out hover:ease-in" />
        </Link>
        <Link href="/about" >About</Link>
        <Link href="/officers" >Officers</Link>
        <Link href="/join" >Join</Link>
        <Link href="/faq">FAQ</Link>
      </ul>
    </div>
  
  )
}
