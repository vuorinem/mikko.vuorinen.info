import { GetStaticProps, NextPage } from "next"
import Image from "next/image"
import { Project } from "../../data/portfolio/Project"
import projects from "../../data/portfolio/projects.json"
import ExternalLink from "../../components/external-link"

import styles from './index.module.css'

type PortfolioProps = {
    projects: Project[]
}

const Portfolio: NextPage<PortfolioProps> = ({ projects }) => {
    const GetTechTags = (tech: string[]) => tech
        .sort((a, b) => a.localeCompare(b, 'en'))
        .map(techName => {
            return (
                <span key={techName} className={styles.techTag}>{techName}</span>
            );
        });

    const GetProjectsList = (type: string) => projects
        .filter(project => project.type === type)
        .map(project => {
            return (
                <div key={project.name} className={styles.project}>
                    <div className={styles.info}>
                        <h2>{project.title}</h2>
                        {project.text ? <p>{project.text}</p> : ""}
                        {project.link ? <p><ExternalLink href={project.link}>{project.link.replace(/https?:\\\\/, "")}</ExternalLink></p> : ""}
                        {project.tech ? <p>{GetTechTags(project.tech)}</p> : ""}
                    </div>
                    <div className={styles.screenshot}>
                        <Image
                            src={`/portfolio/images/${project.name}.png`}
                            alt={`Screenshot from ${project.title}`}
                            fill />
                    </div>
                </div>
            );
        });

    return (
        <>
            <h1>Projects</h1>

            <h2>Projects in full-time employment</h2>
            <div className={styles.projects}>
                {GetProjectsList('employed')}
            </div>

            <h2>Freelance projects</h2>
            <p>
                These are some of the project I have worked on as a freelance web developer
            </p>
            <div className={styles.projects}>
                {GetProjectsList('freelance')}
            </div>

            <h2>Personal projects and studies</h2>
            <div className={styles.projects}>
                {GetProjectsList('personal')}
            </div>
        </>
    );
}

export const getStaticProps: GetStaticProps<PortfolioProps> = () => {
    return {
        props: {
            projects
        }
    }
}

export default Portfolio