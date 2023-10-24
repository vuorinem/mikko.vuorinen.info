export type Project = {
    name: string
    title: string
    image: string
    imageDescription: string
    link?: string
    casestudy?: string;
    text?: string
    start?: string
    end?: string
    tech?: string[]
};

export type ProjectCollection = {
    ongoing: Project[]
    employed: Project[]
    freelance: Project[]
    publication: Project[]
};
