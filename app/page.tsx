import Link from 'next/link'
import ExternalLink from '@/components/external-link'

import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.home}>
      <p className={styles.description}>
        Hi, I&apos;m a software engineer from Finland with a passion for
        learning every day, and applying what I have learned to create
        the best possible software, teams, organisations and experiences.
      </p>

      <p className={styles.description}>
        I strive for ecologically sustainable and a socially just future
        where we respect and celebrate diversity.
      </p>

      <ul className={styles.links}>
        <li>▸ See <Link href="/portfolio">my portfolio</Link> to get an idea what kind of projects I have done</li>
        <li>▸ For my work experience and education, head to <ExternalLink href="https://www.linkedin.com/in/mikkovuorinen/">my LinkedIn page</ExternalLink></li>
        <li>▸ Read some of my tech blog posts at <ExternalLink href="https://medium.com/@mikko.vuorinen">Medium</ExternalLink></li>
      </ul>

      <p className={styles.description}>
        Outside software world, I practice
        {' '}<ExternalLink href="https://en.wikipedia.org/wiki/Kendo">kendo</ExternalLink>{' '}
        several times a week as one of the coaches at my club. I especially enjoy competing
        in kendo.
      </p>

      <p className={styles.description}>
        Music has always been close to my heart, and while I no longer actively play
        any instrument, listening to music is a key element to set the mood for anything
        I do. I hope to create and play more music in the future.
      </p>
    </div>
  )
}
