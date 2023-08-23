import Image from 'next/image'
import BulletPoint from '@/app/components/BulletPoint'
import { generalMember } from './DATAgeneralMember'

export default function GeneralMember() {
    return (
        <div className="flex flex-col justify-center items-center">
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold pt-20">{generalMember.title}</p>
            <div className="flex flex-col lg:flex-row items-center px-10 py-10">
                {/* Image Container */}
                < div className="w-full lg:w-1/2 flex flex-col items-center py-20 px-10" >
                    <div className="min-h-fit">
                        <div className="h-full flex justify-center items-center object-scale-down overflow-hidden relative group rounded-lg">
                            <p className="absolute text-2xl text-white z-10 invisible group-hover:visible">{generalMember.imageDesc}</p>
                            <Image src={generalMember.imagePath} alt="duen group photo" width={600} height={600} objectFit={'contain'} className="group-hover:brightness-50 group-hover:scale-110 transition duration-500 cursor-pointer z-0"></Image>
                        </div>
                    </div>
                </div >

                {/* BulletPoints Container */}
                <div className="w-full lg:w-1/2">
                    {
                        generalMember.bulletPoints.map((curr)=>{
                            return <BulletPoint sample={curr}></BulletPoint>
                        })
                    }
                </div>
            </div>

        </div>

    )
}