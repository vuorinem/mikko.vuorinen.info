import { GetStaticProps, NextPage } from "next"
import Image from "next/image"
import styles from './index.module.css'
import { Project } from "../../data/portfolio/Project"
import projects from "../../data/portfolio/projects.json"
import ExternalLink from "../../components/external-link"

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
                    {project.link ? <p><ExternalLink href={project.link}>{project.link.replace(/https?:\\\\/, "")}</ExternalLink></p> : ""}
                </div>
                <div className={styles.screenshot}>
                    <Image
                        src={`/portfolio/images/${project.name}.png`}
                        alt={project.title}
                        fill />
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