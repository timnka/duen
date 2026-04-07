'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface LogoLoopProps {
  children: ReactNode[]
  speed?: number
  direction?: 'left' | 'right'
  className?: string
  gap?: string
}

export default function LogoLoop({ 
  children, 
  speed = 100, 
  direction = 'left',
  className = '',
  gap = 'gap-6'
}: LogoLoopProps) {
  // Duplicate children to create seamless loop
  const duplicatedChildren = [...children, ...children]

  return (
    <div className={`overflow-hidden w-full ${className}`}>
      <motion.div
        className={`flex ${gap}`}
        animate={{
          x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: speed,
            ease: 'linear',
          },
        }}
      >
        {duplicatedChildren.map((child, index) => (
          <div key={index} className="flex-shrink-0">
            {child}
          </div>
        ))}
      </motion.div>
    </div>
  )
}
