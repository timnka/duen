import logo from './duen.png'
import Image from 'next/image'

export default function NavBar() {
    return (
      <div className="w-full bg-white flex justify-center drop-shadow-md">
        <ul className="h-full w-full flex justify-around items-center text-lg">
          <li>About</li>
          <li>Officers</li>
          <Image src={logo} alt="duen logo" height={70} className="py-3" />
          <li>Join</li>
          <li>Contact</li>
        </ul>
        
      </div>
    )
  }
  