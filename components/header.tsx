'use client'

import Link from "next/link"
import { useSelectedLayoutSegment, usePathname } from "next/navigation";
import { Waiting_for_the_Sunrise } from "next/font/google";

import styles from './header.module.css'

const headerFont = Waiting_for_the_Sunrise({
    subsets: ['latin'],
    weight: '400',
    fallback: ['serif'],
  });

export default function Header() {
    const segmentClass = useSelectedLayoutSegment() ?? 'home';
    const currentPath = usePathname();

    const linkClass = (path: string) => path == currentPath ? styles.active : styles.inactive;
    
    return (
        <>
            <h1 className={styles.title + ' ' + headerFont.className + ' ' + styles[segmentClass]}>
                <Link href="/">
                    Mikko<br />
                    Vuorinen
                </Link>
            </h1>
            <div className={styles.headerLinks}>
                <Link href="/" className={linkClass('/')}>Home</Link>
                <Link href="/narrative-cv" className={linkClass('/narrative-cv')}>Narrative CV</Link>
                <Link href="/portfolio" className={linkClass('/portfolio')}>Portfolio</Link>
            </div>
        </>
    );
}
