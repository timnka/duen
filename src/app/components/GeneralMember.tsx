import Image from 'next/image'
import BulletPoint from '@/app/components/BulletPoint'

export default function GeneralMember() {
    return (
        <div className="flex flex-col justify-center items-center">
            <p className="text-5xl pt-20">Join us as a General Member!</p>
            <div className="flex flex-col lg:flex-row items-center px-10 py-10">
                {/* Image Container */}
                < div className="w-full lg:w-1/2 flex flex-col items-center py-20 px-10" >
                    <div className="min-h-fit">
                        <div className="h-full flex justify-center items-center object-scale-down overflow-hidden relative group rounded-lg">
                            <p className="absolute text-2xl text-white z-10 invisible group-hover:visible">DUEN Officers at the state fair!</p>
                            <Image src="/duen-group.jpg" alt="duen group photo" width={600} height={600} objectFit={'contain'} className="group-hover:brightness-50 group-hover:scale-110 transition duration-500 cursor-pointer z-0"></Image>
                        </div>
                    </div>
                </div >

                {/* BulletPoints Container */}
                <div className="w-full lg:w-1/2">
                    <BulletPoint sample="Come make new friends with like-minded students at our social events!"></BulletPoint>
                    <BulletPoint sample="Strengthen your abilities by attending our professional development workshops."></BulletPoint>
                    <BulletPoint sample="Leverage full benefits from our events such as company info panels, professional photoshoots, and study sessions."></BulletPoint>
                </div>
            </div>

        </div>

    )
}