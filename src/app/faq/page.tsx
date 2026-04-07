import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from '@/app/components/Accordion'
import { faqlist } from './DATAfaq'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DUEN - FAQ',
  description: '',
}

function ChevronDown() {
  return (
    <svg
      className="faq-accordion-icon w-7 h-7 text-duen-gold-300 transition-transform duration-300 shrink-0 ml-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
    </svg>
  )
}

export default function FAQ() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-ink">
      <section className="w-full bg-ink px-6 md:px-16 lg:px-24 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-baseline gap-8 mb-12 md:mb-16">
            <span className="font-mono text-xs tracking-widest text-duen-gold-300">
              01 —
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-duen-gold-100 tracking-tight">
              Frequently asked questions
            </h2>
          </div>

          {/* Same box style as Officers CohortSection: border-t, full-width rows, chevron */}
          <div className="faq-accordion w-full flex flex-col">
            <Accordion allowZeroExpanded>
              {faqlist.map((item, index) => (
                <div key={index} className="border-t border-duen-gold-300/20">
                  <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton className="flex items-center justify-between w-full py-6 text-left group">
                      <span className="text-2xl md:text-3xl font-light text-duen-gold-100 tracking-tight group-hover:text-duen-gold-300 transition-colors pr-4">
                        {item.question}
                      </span>
                      <ChevronDown />
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div className="pb-6 pt-0">
                      <p className="text-duen-gold-200/90 font-normal text-lg leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </AccordionItemPanel>
                  </AccordionItem>
                </div>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </main>
  )
}
