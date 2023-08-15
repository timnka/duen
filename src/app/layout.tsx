import './globals.css'
import type { Metadata } from 'next'
import { Poppins, Raleway, Abel, Teko } from 'next/font/google'
import NavBar from './components/navbar'
import Footer from './components/footer'

export const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway',
})

export const poppins = Poppins({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})

export const abel = Abel({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-abel',
})

export const teko = Teko({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-teko',
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
      <body className={`${poppins.variable} ${raleway.variable} ${abel.variable} ${teko.variable}`}>

        <div className="font-poppins">
          <NavBar></NavBar>
          {children}
          <Footer />
        </div>

      </body>
    </html>
  )
}