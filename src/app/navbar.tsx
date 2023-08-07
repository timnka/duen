import logo from './duen.png'
import Image from 'next/image'

export default function NavBar() {
  /* solid white header       blurry backdrop: bg-transparent backdrop-blur-lg
  <div className="w-11/12 bg-white fixed rounded-b-lg flex justify-center drop-shadow-md ">
     <ul className="h-full w-full flex justify-around items-center text-lg text-black">
  */
  return (
    <div className="w-full bg-slate-100 fixed z-10 flex justify-center drop-shadow-md ">
      <ul className="h-full w-full flex justify-around items-center text-lg text-black font-bold">
        <Image src={logo} alt="duen logo" height={45} className="py-2" />
        <li>about</li>
        <li>officers</li>
        <li>involvement</li>
        <li>contact</li>
      </ul>
    </div>
  )
}
