import Link from "next/link";
import { FunctionComponent } from "react";
import { FaLinkedin, FaMedium, FaMastodon, FaGithub } from 'react-icons/fa';

import styles from './social-links.module.css';

const SocialLinks: FunctionComponent = () => {
    return (
        <div className={styles.socialLinks}>
            <Link rel="me" target="_blank" href="https://www.linkedin.com/in/mikkovuorinen/">
                <FaLinkedin className={styles.icon} />
                <span>
                    CV:<br />
                    LinkedIn
                </span>
            </Link>
            <Link target="_blank" href="https://medium.com/@mikko.vuorinen">
                <FaMedium className={styles.icon} />
                <span>
                    Blog:<br />
                    Medium
                </span>
            </Link>
            <Link rel="me" target="_blank" href="https://mastodon.online/@mvuorinen">
                <FaMastodon className={styles.icon} />
                <span>
                    Social:<br />
                    Mastodon
                </span>
            </Link>
            <Link target="_blank" href="https://github.com/vuorinem">
                <FaGithub className={styles.icon} />
                <span>
                    Code:<br />
                    GitHub
                </span>
            </Link>
        </div>
    );
}

export default SocialLinks;
