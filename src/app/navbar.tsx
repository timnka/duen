import logo from './duen.png'
import Image from 'next/image'

export default function NavBar() {
 /* solid white header       blurry backdrop: bg-transparent backdrop-blur-lg
 <div className="w-11/12 bg-white fixed rounded-b-lg flex justify-center drop-shadow-md ">
    <ul className="h-full w-full flex justify-around items-center text-lg text-black">
 */
  return (
    <div className="w-full bg-white fixed z-10 flex justify-center drop-shadow-md ">
    <ul className="h-full w-full flex justify-around items-center text-lg text-black">
        <li>About</li>
        <li>Officers</li>
        <Image src={logo} alt="duen logo" height={55} className="py-2" />
        <li>Join</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}
