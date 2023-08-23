import BulletPoint from '@/app/components/BulletPoint'
import Image from 'next/image'
import { internship } from './DATAinternship'

export default function Internship() {
    return (
        <div className="flex flex-col items-center">
            {/* Title Container */}
            <div className="pt-20">
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold">{ internship.title }</p>
            </div>

            {/* Data Container */}
            <div className="flex flex-col lg:flex-row items-center">
                {/* Image Container */}
                <div className="w-full lg:w-1/2 flex flex-col items-center py-20 px-10">
                    <div className="min-h-fit">
                        <div className="h-full flex justify-center items-center object-scale-down overflow-hidden relative group rounded-lg">
                            <p className="absolute text-2xl text-white z-10 invisible group-hover:visible">{ internship.imageDesc }</p>
                            <Image src={ internship.imagePath } alt="duen group photo" width={600} height={600} objectFit={'contain'} className="group-hover:brightness-50 group-hover:scale-110 transition duration-500 cursor-pointer z-0"></Image>
                        </div>
                    </div>
                </div>

                {/* Bullets Container */}
                <div className="w-full lg:w-1/2 px-10 py-10 flex flex-col">
                    <p className="text-xl lg:text-2xl pb-8">{ internship.subtitle }</p>
                    <div className="px-2">
                        {internship.bulletPoints.map((curr)=>{
                            return <BulletPoint sample={curr}></BulletPoint>
                        })}
                    </div>
                </div>


            </div>
        </div>

    )
}