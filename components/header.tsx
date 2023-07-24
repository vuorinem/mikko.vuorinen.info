'use client'

import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation";
import { Waiting_for_the_Sunrise } from "next/font/google";

import styles from './header.module.css'

const headerFont = Waiting_for_the_Sunrise({
    subsets: ['latin'],
    weight: '400',
  });

export default function Header() {
    const segmentClass = useSelectedLayoutSegment() ?? 'home';
    
    return (
        <>
            <h1 className={styles.title + ' ' + headerFont.className + ' ' + styles[segmentClass]}>
                <Link href="/">
                    Mikko<br />
                    Vuorinen
                </Link>
            </h1>
            <div className={styles.headerLinks}>
                <Link href="/portfolio">Portfolio</Link>
            </div>
        </>
    );
}
