import { GetStaticProps, NextPage } from "next"
import Image from "next/image"
import Link from "next/link"
import styles from './index.module.css'
import { Project } from "../../data/portfolio/Project"
import projects from "../../data/portfolio/projects.json"

type PortfolioProps = {
    projects: Project[]
}

const Portfolio: NextPage<PortfolioProps> = ({ projects }) => {
    const projectsElement = projects.map(project => {
        return (
            <div key={project.name} className={styles.project}>
                <div className={styles.info}>
                    <h2>{project.title}</h2>
                    {project.text ? <p dangerouslySetInnerHTML={{ __html: project.text }}></p> : ""}
                    {project.link ? <p><Link href={project.link}>{project.link.replace(/https?:\\\\/, "")}</Link></p> : ""}
                </div>
                <div className={styles.screenshot}>
                    <Image
                        src={`/portfolio/images/${project.name}.png`}
                        alt={project.title}
                        height="100%"
                        width="100%"
                        layout="fill"
                        objectFit="contain" />
                </div>
            </div>
        )
    });

    return (
        <>
            <h1>Projects</h1>
            <div className={styles.projects}>
                {projectsElement}
            </div>
        </>
    )
}

export const getStaticProps: GetStaticProps<PortfolioProps> = () => {
    return {
        props: {
            projects
        }
    }
}

export default Portfolio