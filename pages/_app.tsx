import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import styles from './app.module.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mikko Vuorinen</title>
        <meta name="description" content="Portfolio and personal website of software developer Mikko Vuorinen" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h2><Link href="/">Mikko Vuorinen</Link></h2>
        <Link href="/portfolio">Portfolio</Link>
      </header>

      <main className={styles.main}>
        <Component {...pageProps} />
      </main>

      <footer className={styles.footer}>
        TODO: Links to Twitter, LinkedIn etc
      </footer>
    </div>
  )
}

export default MyApp
