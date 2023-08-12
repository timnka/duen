import Image from 'next/image'

interface pillarType {
    num: number,
    name: string,
    description: string,
    imagePath: string,
    imageDesc: string,
    isReversed: boolean,
}

const Pillar: React.FC<pillarType> = ({ num, name, description, imagePath, imageDesc, isReversed }) => {
    return (
        // Pillar Container
        <div className={isReversed ? "w-full min-h-fit md:flex md:flex-row-reverse" : "w-full md:min-h-fit md:flex"}>
            {/* Photo Container */}
            <div className="w-full md:w-1/2 min-h-fit flex flex-col">
                {/* Decsription and Photo Container */}
                <div className="h-full w-full flex justify-center items-center object-scale-down overflow-hidden relative group">
                    <p className="flex justify-center absolute text-xl text-white z-10 invisible group-hover:visible">{imageDesc}</p>
                    <img src={imagePath} alt="duen group photo" className="group-hover:brightness-50 group-hover:scale-110 transition duration-500 cursor-pointer z-0"></img>
                </div>
            </div>

            {/* Pillar Description Container */}
            <div className="w-full md:w-1/2 flex flex-col py-20 md:py-5 px-14 md:px-18 justify-center">
                <div className="flex pb-8">
                    <p className="text-5xl max-h-min text-purple-800 font-bold font-teko">{num}</p>
                    <p className="text-4xl text-black font-bold pl-5 font-abel">{name}</p>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
        </div>
    )
}

export default Pillar

