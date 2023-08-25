import Banner from '@/app/components/banner'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from '@/app/components/Accordion'
import 'react-accessible-accordion/dist/fancy-example.css';
import { faqlist } from './DATAfaq'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'DUEN - FAQ',
  description: '',
}


export default function FAQ() {
    return (
        <div className="flex flex-col items-center">
            <Banner word="faq"></Banner>

            <div className="w-full md:w-2/3 py-20 px-5 md:px-20 font-bold">
                <Accordion allowZeroExpanded={true}>
                    {
                        faqlist.map((item) => {
                            return (
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            {item.question}
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p className="font-normal">
                                            {item.answer}
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            )
                        })
                    }
                </Accordion>
            </div>

        </div>
    )
}