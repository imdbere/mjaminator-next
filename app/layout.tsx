"use client"

import './globals.css'

import { Inter } from '@next/font/google';
import { RealViewportProvider } from 'next-real-viewport';

const inter = Inter({
  variable: '--font-inter',
  display: 'optional',
  subsets: ['latin']
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <RealViewportProvider>
          <div className="bg-slate-50 w-full h-screen-fixed">
            <div className="max-w-3xl h-full mx-auto shadow-md bg-white">
              {children}
            </div>
          </div>
        </RealViewportProvider>
      </body>
    </html>
  )
}
