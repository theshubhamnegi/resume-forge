interface Contact {
    icon: string;
    label: string;
    link: string;
}

interface Skill {
    category: string;
    items: string;
}

interface Project {
    name: string;
    link: string;
    role: string;
    duration: string;
    techStack: string;
    bullets: string[];
}

interface Experience {
    company: string;
    parentCompany: string;
    link: string;
    roles: string;
    duration: string;
    projects: Project[];
}

interface Education {
    college: string;
    duration: string;
    course: string;
}

export interface ResumeJSON {
    name: string;
    contacts: Contact[];
    overview: string;
    skills: Skill[];
    experiences: Experience[];
    education: Education[];
}