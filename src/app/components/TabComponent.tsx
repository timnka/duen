"use client"
import React, { useState } from 'react';
import GeneralMember from '@/app/components/GeneralMember'
import Internship from '@/app/components/Internship'


export default function TabComponent() {
    
    const [isInternshipTab, setIsInternshipTab] = useState(true);
    const toggleTabs = () => {
        setIsInternshipTab(!isInternshipTab)
    }

    return (
        <div className="w-full min-h-fit pb-20">
            {/* Tab Labels Container */}
            <div className="w-full flex">
                <div className={`w-1/2 text-2xl py-5 flex justify-center rounded-t-lg 
                ${isInternshipTab ? "bg-duen-gold-100" : "bg-gray-300 hover:cursor-pointer"}`} onClick={isInternshipTab ? undefined : toggleTabs }>
                    Internship
                </div>
                <div className={`w-1/2 text-2xl py-5 flex justify-center rounded-t-lg 
                 ${isInternshipTab ? "hover:cursor-pointer bg-gray-300" : "bg-duen-gold-100"}`} onClick={isInternshipTab ? toggleTabs : undefined }>
                    General Member
                </div>
            </div>
            {/* Data Container */}
            <div className="min-h-fit bg-duen-gold-100 rounded-b-[30px] text-xl">
                {
                    isInternshipTab ?
                        <Internship></Internship>
                        :
                        <GeneralMember></GeneralMember>
                }
            </div>
        </div>
    )
}