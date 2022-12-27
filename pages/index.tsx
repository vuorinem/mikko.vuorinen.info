import { NextPage } from "next"
import Link from "next/link"
import styles from './index.module.css'

const Home: NextPage = () => {
    return (
        <>
            <h1 className={styles.title}>
                Welcome to my website!
            </h1>

            <p className={styles.description}>
                <Link href="/portfolio">▸ Some of my website projects</Link>
            </p>
        </>
    )
}

export default Home