'use client'
import { useState } from 'react'
import OfficerBadge from './OfficerBadge'
import OfficerType from '@/app/models/IOfficerType'

interface CohortSectionProps {
  cohortName: string
  officers: OfficerType[]
  showPosition?: boolean
}

const CohortSection: React.FC<CohortSectionProps> = ({ cohortName, officers, showPosition = false }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="w-full flex flex-col border-t border-duen-gold-300/20">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-6 text-left group"
      >
        <span className="text-2xl md:text-3xl font-light text-duen-gold-100 tracking-tight group-hover:text-duen-gold-300 transition-colors">
          {cohortName}
        </span>
        <svg
          className={`w-7 h-7 text-duen-gold-300 transition-transform duration-300 shrink-0 ml-4 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[10000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-wrap justify-center py-6">
          {officers.map((curr_officer) => (
            <OfficerBadge
              key={curr_officer.name}
              name={curr_officer.name}
              year={curr_officer.year}
              major={curr_officer.major}
              cohort={curr_officer.cohort}
              position={curr_officer.position}
              linkedin={curr_officer.linkedin}
              image={curr_officer.image}
              showPosition={showPosition}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CohortSection