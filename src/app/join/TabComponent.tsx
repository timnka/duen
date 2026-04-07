"use client"
import React, { useState } from 'react';
import GeneralMember from '@/app/join/GeneralMember'
import Internship from '@/app/join/Internship'


export default function TabComponent() {
    
    const [isInternshipTab, setIsInternshipTab] = useState(true);
    const toggleTabs = () => {
        setIsInternshipTab(!isInternshipTab)
    }

    return (
  <section className="bg-warm-gray py-16 md:py-20">
    <div className="max-w-5xl mx-auto px-8 md:px-16">

      {/* Tab Labels */}
      <div className="flex justify-center gap-6 mb-8">

        <div className="flex border border-duen-gold-300/20 rounded-xl overflow-hidden">
          {/* Internship Tab */}
          <button
            onClick={isInternshipTab ? undefined : toggleTabs}
            className={`px-6 py-3 font-mono text-xs tracking-widest uppercase transition-all duration-300
            ${
              isInternshipTab
                ? "bg-ink text-duen-gold-300"
                : "text-black hover:bg-ink/5"
            }`}
          >
            Internship
          </button>

          {/* General Member Tab */}
          <button
            onClick={isInternshipTab ? toggleTabs : undefined}
            className={`px-6 py-3 font-mono text-xs tracking-widest uppercase transition-all duration-300
            ${
              !isInternshipTab
                ? "bg-ink text-duen-gold-300"
                : "text-black hover:bg-ink/5"
            }`}
          >
            General Member
          </button>
        </div>
      </div>

      {/* Content Card */}
      <div className="rounded-2xl border border-duen-gold-300/20 bg-ink text-white p-8 md:p-10 relative overflow-hidden">

        {/* subtle gradient accent like project cards */}
        <div
          className="absolute inset-0 pointer-events-none rounded-2xl"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 85% 50%, rgba(199,170,114,0.08) 0%, transparent 55%)",
          }}
        />

        <div className="relative z-10">
          {isInternshipTab ? (
            <Internship />
          ) : (
            <GeneralMember />
          )}
        </div>
      </div>

    </div>
  </section>
);
}