import type { AppProps } from 'next/app'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import SocialLinks from '../components/social-links'

import '../styles/globals.css'
import styles from './app.module.css'

function MyApp({ Component, pageProps, router }: AppProps) {
  const getContainerClasses = () => styles.container + (router.route === '/' ? ' ' + styles.home : '');

  const [transitionClass, setTransitionClass] = useState('');

  useEffect(() => {
    router.events.on("routeChangeStart", () => setTransitionClass(styles.pageChanging));
    router.events.on("routeChangeComplete", () => setTransitionClass(''));
  }, [router.events]);

  return (
    <div className={getContainerClasses()}>
      <Head>
        <title>Mikko Vuorinen</title>
        <meta name="description" content="Portfolio and personal website of software developer Mikko Vuorinen" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h1>
          <Link href="/">
            Mikko<br />
            Vuorinen
          </Link>
        </h1>
        <div className={styles.headerLinks}>
          <Link href="/portfolio">Portfolio</Link>
        </div>
      </header>

      <main className={styles.main + ' ' + transitionClass}>
        <Component {...pageProps} />
      </main>

      <footer className={styles.footer}>
        <SocialLinks />
      </footer>
    </div>
  )
}

export default MyApp
