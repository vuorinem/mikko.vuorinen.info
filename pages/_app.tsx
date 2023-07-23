import type { AppProps } from 'next/app'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import SocialLinks from '../components/social-links'
import { Waiting_for_the_Sunrise } from '@next/font/google'
import { Analytics } from '@vercel/analytics/react';

import '../styles/globals.css'
import styles from './app.module.css'

const headerFont = Waiting_for_the_Sunrise({
  subsets: ['latin'],
  weight: '400',
});

let transitionTimeout: NodeJS.Timeout | null = null;
let transitionCanComplete: boolean = false;

function MyApp({ Component, pageProps, router }: AppProps) {
  const getContainerClasses = () => styles.container + (router.route === '/' ? ' ' + styles.home : '');

  const [transitionClass, setTransitionClass] = useState('');

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setTransitionClass(styles.pageChanging);

      if (transitionTimeout !== null) {
        clearTimeout(transitionTimeout);
        transitionTimeout = null;
      }

      const handleTransitionEndTimeout = () => {
        if (transitionCanComplete) {
          setTransitionClass('');
          transitionTimeout = null;
          transitionCanComplete = false;
        } else {
          transitionTimeout = setTimeout(handleTransitionEndTimeout, 100);
        }
      };

      transitionTimeout = setTimeout(handleTransitionEndTimeout, 100);

      return true;
    };

    const handleRouteChangeComplete = () => transitionCanComplete = true;
    const handleTransitionError = () => setTransitionClass('');

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    router.events.on('routeChangeError', handleTransitionError);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
      router.events.off('routeChangeError', handleTransitionError);
    };
  }, [router, router.events]);

  return (
    <div className={getContainerClasses()}>
      <Head>
        <title>Mikko Vuorinen</title>
        <meta name="description" content="Portfolio and personal website of software developer Mikko Vuorinen" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

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

      <main className={styles.main + ' ' + transitionClass}>
        <Component {...pageProps} />
      </main>

      <footer className={styles.footer}>
        <SocialLinks />
      </footer>
      <Analytics />
    </div>
  )
}

export default MyApp
