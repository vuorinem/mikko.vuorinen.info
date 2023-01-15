import { GetStaticProps, NextPage } from "next"
import Image from "next/image"
import { Project, ProjectCollection } from "../../data/portfolio/Project"
import projectCollection from "../../data/portfolio/projects.json"
import ExternalLink from "../../components/external-link"

import styles from './index.module.css'

type PortfolioProps = {
    projectCollection: ProjectCollection
}

const Portfolio: NextPage<PortfolioProps> = ({ projectCollection }) => {
    const GetTechTags = (tech: string[]) => tech
        .sort((a, b) => a.localeCompare(b, 'en'))
        .map(techName => {
            return (
                <span key={techName} className={styles.techTag}>{techName}</span>
            );
        });

    const GetProjectsList = (projects: Project[]) => projects
        .map(project => {
            return (
                <div key={project.name} className={styles.project}>
                    <div className={styles.screenshot}>
                        <Image
                            src={`/portfolio/images/${project.image}`}
                            alt={`${project.imageDescription}`}
                            fill />
                    </div>
                    <div className={styles.info}>
                        <h2>{project.title}</h2>
                        {project.text ? <p className={styles.projectText}>{project.text}</p> : ""}
                        {project.link ? <p className={styles.projectLink}><ExternalLink href={project.link}>{project.link.replace(/https?:\\\\/, "")}</ExternalLink></p> : ""}
                        {project.tech ? <p className={styles.projectTech}>{GetTechTags(project.tech)}</p> : ""}
                    </div>
                </div>
            );
        });

    return (
        <>
            <h1>Projects</h1>

            <h2>Ongoing personal projects</h2>
            <div className={styles.projects}>
                {GetProjectsList(projectCollection.ongoing)}
            </div>

            <h2>Past projects in full-time employment</h2>
            <div className={styles.projects}>
                {GetProjectsList(projectCollection.employed)}
            </div>

            <h2>Past freelance projects</h2>
            <p>
                These are some of the project I have worked on as a freelance web developer
            </p>
            <div className={styles.projects}>
                {GetProjectsList(projectCollection.freelance)}
            </div>

            <h2>Publications and presentations</h2>
            <p>
                Various publications and presentations done as part of employment, studies or free time.
            </p>
            <div className={styles.projects}>
                {GetProjectsList(projectCollection.publication)}
            </div>

            <p className={styles.attributions}>
                Attributions:
                Photo by Pixabay: https://www.pexels.com/photo/qr-code-on-screengrab-278430/ |
                Photo by Proxyclick Visitor Management System: https://www.pexels.com/photo/cellphone-and-scanner-2451622/ |
            </p>
        </>
    );
}

export const getStaticProps: GetStaticProps<PortfolioProps> = () => {
    return {
        props: {
            projectCollection
        }
    }
}

export default Portfolio