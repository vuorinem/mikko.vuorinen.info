import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'

import Header from '@/components/header'
import SocialLinks from '@/components/social-links'

import './globals.css'
import styles from './layout.module.css'

export const metadata: Metadata = {
  title: 'Mikko Vuorinen',
  description: 'Portfolio and personal website of software developer Mikko Vuorinen',
  icons: '/favicon.png',
  viewport: 'width=device-width, initial-scale=1.0',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className={styles.container}>
          <header className={styles.header}>
            <Header />
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
