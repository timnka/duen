import Banner from '@/app/components/banner'
import BulletPoint from '@/app/components/BulletPoint'


export default function FAQ () {
    return (
        <div className="flex flex-col">
            <Banner word="faq"></Banner>

            <div className="w-full h-96 flex flex-col">
                <BulletPoint sample="This is a bullet point."></BulletPoint>
            </div>
        </div>
    )
}