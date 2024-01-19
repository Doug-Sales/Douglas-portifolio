import type { Metadata } from 'next'
import './globals.css'
import HeaderNav from './ui/components/header';
import Particles from './ui/components/particles';
import { inter } from './ui/fonts';


export const metadata: Metadata = {
  title: 'Portifolio Douglas Medeiros',
  description: 'Portifolio Developer Douglas Medeiros',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    shortcut: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} container  overflow-y-scroll overflow-x-hidden antialiased h-screen `}>
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={250}
        />
        <div className=" fixed w-full ">
          <HeaderNav />
          {children}
        </div>
      </body>
    </html>
  )
}
