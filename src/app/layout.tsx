import './globals.css'
import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'

export const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway',
})


export const metadata: Metadata = {
  title: 'duen',
  description: 'davis undergraduate engineering network',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ `${raleway.className}` }>{children}</body>
    </html>
  )
}