import Image from 'next/image'
import PillarType from '@/app/models/IPillarType'

const Pillar: React.FC<PillarType> = ({ num, name, description, imagePath, imageDesc, isReversed }) => {
    return (
        // Pillar Container
        <div className={isReversed ? "w-full xl:w-3/4 min-h-fit xl:flex xl:flex-row-reverse" : "w-full xl:w-3/4 xl:min-h-fit xl:flex"}>
            {/* Photo Container */}
            <div className="w-full px-20 xl:px-0 xl:w-1/2 min-h-fit flex flex-col">
                {/* Decsription and Photo Container */}
                <div className="h-full w-full flex justify-center items-center object-scale-down overflow-hidden relative group">
                    <p className="flex justify-center absolute text-xl text-white z-10 invisible group-hover:visible">{imageDesc}</p>
                    <img src={imagePath} alt="duen group photo" className="group-hover:brightness-50 group-hover:scale-110 transition duration-500 cursor-pointer z-0"></img>
                </div>
            </div>

            {/* Pillar Description Container */}
            <div className="w-full xl:w-1/2 flex flex-col py-20 lg:py-10 justify-center">
                <div className="px-28 xl:px-12">
                    <div className="text-3xl xl:text-4xl flex pb-8 md:pb-3 lg:pb-8 items-center">
                        <p className="max-h-min min-w-[55px] text-duen-gold-300 font-bold bg-duen-purple-200 px-4 py-1.5 rounded-md flex justify-center">{num}</p>
                        <p className="text-duen-purple-300 font-bold pl-5">{name}</p>
                    </div>
                    <p className="text-base">{description}</p>
                </div>


            </div>
        </div>
    )
}

export default Pillar

