export type Project = {
    name: string
    title: string
    image: string
    imageDescription: string
    link?: string
    text?: string
    tech?: string[]
};

export type ProjectCollection = {
    ongoing: Project[]
    employed: Project[]
    freelance: Project[]
    publication: Project[]
};
