import Image from 'next/image'
import Banner from '@/app/components/banner'
import TabComponent from '@/app/components/TabComponent'

export default function Join() {

    let recruiting = false

    return (
        <div className="flex flex-col min-h-fit">
            <Banner word="JOIN"></Banner>
            <div className="w-full flex flex-col items-center px-5 md:px-16 lg:px-32">
                <p className="font-teko text-5xl py-20">RECRUITMENT</p>
                <p className="pb-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                <div>
                    {
                        recruiting ?
                            <div className="flex flex-col items-center">
                                <div className="flex flex-col items-center py-10">
                                    <p className="font-bold text-2xl">We are actively recruiting new officers for Fall 2023!</p>
                                    <p className="pt-5">Come meet and hang out with DUEN officers at our recruitment events. Date, time, and location can be seen below.</p>
                                </div>

                                <Image src="/fall23flyer.png" width={400} height={400} alt="flyer"></Image>
                            </div>
                            :
                            <div className="font-bold">We are not currently recruiting new officers. We open up recruitment every fall and spring quarters. Please come back in September or follow our instagram page for updates!</div>
                    }
                </div>

                <p className="font-teko text-4xl py-20">We welcome you to join us through either of these programs...</p>
                <TabComponent></TabComponent>

            </div>
        </div>
    )
}