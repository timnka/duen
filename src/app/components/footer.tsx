import Image from 'next/image'
import logo from '../photos/duen-gold.png'
import Link from 'next/link'

export default function Footer() {
    return (
        <div className="min-h-full w-full bg-duen-purple-500 text-duen-gold-200">
            <div className="flex flex-col items-center justify-center text-base py-8">
                <p className="font-bold text-duen-gold-500">Any questions not listed in our FAQ? Send us an email at [***insert duen email here***]</p>
                <div className="text-lg flex justify-center items-center">
                    <p className="font-bold px-5 py-7">Follow US</p>
                    <div className="px-5 text-sm flex flex-col">
                        <Link href="https://www.instagram.com/duen_ucd/" target="_blank" className="text-lg">Instagram</Link>
                        <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" className="text-lg">Discord</Link>
                    </div>
                </div>
                <div className="text-base flex flex-row items-center">
                    <p>Delivered to you by</p>
                    <Image src={logo} alt="duen logo" height={35} className="px-1" />
                </div>
            </div>

        </div>
    )
}