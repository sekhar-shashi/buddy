export interface view {
    id: number;
    title: string;
    description: string;
}

export interface post extends view {
    body: string;
    heroImage?: string;
}
