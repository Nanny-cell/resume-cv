export interface Title {
    span: string;
    about: string;
}

export interface Subtitle {
    hello: string;
    name: string;
    position: string;
}

export interface About {
    title: Title;
    subtitle: Subtitle;
    description: string;
    technologies: any[];
    link?: string;
    icons?: string[];
}

export interface Phone {
    title: string;
    value: string;
}

export interface Email {
    title: string;
    value: string;
}

export interface Contact {
    phone: Phone;
    email: Email;
}

export interface Resume {
    tipo: string;
    title: string;
    subtitle: string;
    description: string;
}

export interface CvButton {
    label: string;
    link: string;
}

export interface Shared {
    mainImage: string;
}

export interface Data {
    about: About;
    contact: Contact;
    resume: Resume[];
    shared: Shared;
}

export interface RootObject {
    data: Data;
}
