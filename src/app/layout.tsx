import { Inter } from 'next/font/google'
import LocalFont from 'next/font/local'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s - Convoice',
    default: 'Convoice - Automated calling agent made simple for small businesses',
  },
  description:
    'Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited.',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const generalSans = LocalFont({
  src: [
    {
      path: '../fonts/GeneralSans-Extralight.otf',
      weight: '200',
      style: 'extralight',
    },
    {
      path: '../fonts/GeneralSans-Light.otf',
      weight: '300',
      style: 'light',
    },
    {
      path: '../fonts/GeneralSans-Regular.otf',
      weight: '400',
      style: 'regular',
    },
    {
      path: '../fonts/GeneralSans-Medium.otf',
      weight: '500',
      style: 'medium',
    },
    {
      path: '../fonts/GeneralSans-Semibold.otf',
      weight: '600',
      style: 'semibold',
    },
    {
      path: '../fonts/GeneralSans-Bold.otf',
      weight: '700',
      style: 'bold',
    },
  ],
  variable: '--font-general-sans'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        generalSans.variable
      )}
    >
      <body className="flex h-full flex-col">{children}</body>
    </html>
  )
}
