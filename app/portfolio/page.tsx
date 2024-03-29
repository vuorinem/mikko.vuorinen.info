import Image from "next/image"
import Link from "next/link"
import { FaHandPointRight } from 'react-icons/fa';

import { Project } from "@/data/portfolio/Project"
import projectCollection from "@/data/portfolio/projects.json"
import ExternalLink from "@/components/external-link"

import styles from './page.module.css'

export default function Portfolio() {
    const GetDuration = (start: string, end?: string) => {
        if (end === undefined || end === start) {
            return start;
        } else {
            return `${start} - ${end}`;
        }
    }

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
                        {project.start ? <p className={styles.projectDuration}>{GetDuration(project.start, project.end)}</p> : ""}
                        {project.casestudy ? <p className={styles.casestudy}><Link href={`/narrative-cv#casestudy-${project.casestudy}`}>Case study <FaHandPointRight size="0.8rem" /></Link></p> : ""}
                        {project.tech ? <p className={styles.projectTech}>{GetTechTags(project.tech)}</p> : ""}
                    </div>
                </div>
            );
        });

    return (
        <>
            <h1>Portfolio</h1>
            <p>
                This portfolio shows a list of various things I have built or been part of building over the years. If you are looking for my CV, please check out <ExternalLink href="https://www.linkedin.com/in/mikkovuorinen/">my LinkedIn page</ExternalLink> or skim through the <Link href="/narrative-cv">narrative CV</Link>. To get in touch, you can use LinkedIn messages or <ExternalLink href="https://mastodon.online/@mvuorinen">Mastodon</ExternalLink>.
            </p>

            <h2>Ongoing personal projects</h2>
            <p>
                Currently active (some more than others) projects outside of my day job.
            </p>
            <div className={styles.projects}>
                {GetProjectsList(projectCollection.ongoing)}
            </div>

            <h2>Publications and presentations</h2>
            <p>
                Various publications and presentations done as part of employment, studies or free time.
            </p>
            <div className={styles.projects}>
                {GetProjectsList(projectCollection.publication)}
            </div>

            <h2>Past projects in full-time employment</h2>
            <p>
                A selection of projects and solutions I have worked on as part of my employment.
            </p>
            <div className={styles.projects}>
                {GetProjectsList(projectCollection.employed)}
            </div>

            <h2>Past freelance projects</h2>
            <p>
                These are some of the projects I have worked on as a freelance web developer.
            </p>
            <div className={styles.projects}>
                {GetProjectsList(projectCollection.freelance)}
            </div>

            <p className={styles.attributions}>
                Attributions:
                {" "}
                <ExternalLink href="https://www.pexels.com/photo/qr-code-on-screengrab-278430/">Photo by Pixabay</ExternalLink>
                {" | "}
                <ExternalLink href="https://www.pexels.com/photo/cellphone-and-scanner-2451622/">Photo by Proxyclick Visitor Management System</ExternalLink>
                {" | "}
                <ExternalLink href="https://www.freepik.com/free-photo/hand-using-laptop-computer-with-virtual-screen-document-online-approve-paperless-quality-assurance-erp-management-concept_24755711.htm#query=data%20security&position=3&from_view=search&track=sph">Image by DilokaStudio on Freepik</ExternalLink>
                {" | "}
                <ExternalLink href="https://www.freepik.com/free-vector/hand-coding-concept-illustration_21864184.htm#page=3&query=software%20engineer&position=8&from_view=search&track=sph">Image by storyset on Freepik</ExternalLink>
            </p>
        </>
    );
}
