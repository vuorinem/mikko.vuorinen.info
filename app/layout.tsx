'use client'

import type { Metadata } from 'next'
import Link from 'next/link'
import { Waiting_for_the_Sunrise } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

import SocialLinks from '@/components/social-links'

import './globals.css'
import styles from './layout.module.css'
import { useSelectedLayoutSegment } from 'next/navigation'

const headerFont = Waiting_for_the_Sunrise({
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Mikko Vuorinen',
  description: 'Portfolio and personal website of software developer Mikko Vuorinen',
  icons: '/favicon.png',
  viewport: 'width=device-width, initial-scale=1.0',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const segmentClass = useSelectedLayoutSegment() ?? 'home';

  return (
    <html lang="en">
      <body>
        <div className={styles.container + ' ' + styles[segmentClass]}>
          <header className={styles.header}>
            <h1 className={headerFont.className}>
              <Link href="/">
                Mikko<br />
                Vuorinen
              </Link>
            </h1>
            <div className={styles.headerLinks}>
              <Link href="/portfolio">Portfolio</Link>
            </div>
          </header>

          <main className={styles.main}>
            {children}
          </main>

          <footer className={styles.footer}>
            <SocialLinks />
          </footer>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
