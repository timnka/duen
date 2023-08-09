
import { Typewriter } from 'react-simple-typewriter'

export default function TypeWriter() {
    
    return (
        <>
        <Typewriter
            words={['lifelong friends.', 'adventurers.', 'creative.', 'toe-lovers.']}
            loop={false}
            cursor
            cursorStyle='|'
            typeSpeed={120}
            deleteSpeed={80}
            delaySpeed={3000} />
        </>
        
    )
}