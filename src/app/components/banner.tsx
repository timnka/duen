import { Typewriter } from '../components/csc'

export default function Banner({ word }: { word: string }) {

   
    return (
        <div className="w-full h-[25rem] bg-duen-purple-400 flex items-center justify-center text-duen-gold-300 text-5xl font-abel">
            <Typewriter
                words={[word]}
                loop={1}
                cursor
                cursorStyle='|'
                typeSpeed={150}
            />
        </div>
    )
}