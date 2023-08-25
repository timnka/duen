import Image from 'next/image'

export default function BulletPoint({ sample }: { sample: string }) {
    return (
        <div className = "flex items-center min-h-fit py-5">
            <Image src="/icons-logos/gearwheel.png" alt="wheel" height={20} width={20}></Image>
            <div className="pl-3">{sample}</div>
        </div>

    )
}