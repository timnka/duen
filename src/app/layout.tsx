import './globals.css'
import type { Metadata } from 'next'
import { Poppins, Raleway, Abel, Teko } from 'next/font/google'
import NavBar from './components/navbar'
import Footer from './components/footer'


const poppins = Poppins({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})

const abel = Abel({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-abel',
})

const teko = Teko({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-teko',
})

export const metadata: Metadata = {
  title: 'DUEN',
  description: 'Davis Undergraduate Engineering Network',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${abel.variable} ${teko.variable}`}>

        <div className="font-poppins">
          <NavBar></NavBar>
          {children}
          <Footer />
        </div>

      </body>
    </html>
  )
}