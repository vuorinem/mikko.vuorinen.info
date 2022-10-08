import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mikko Vuorinen</title>
        <meta name="description" content="Portfolio and personal website of software developer Mikko Vuorinen" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Mikko Vuorinen
        </h1>

        <p className={styles.description}>
          Welcome to my website!
        </p>
      </main>

      <footer className={styles.footer}>
        TODO: Links to Twitter, LinkedIn etc
      </footer>
    </div>
  )
}

export default Home
