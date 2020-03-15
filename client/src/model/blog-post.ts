export interface view {
    id: string;
    name: string;
}

export interface post extends view {
    author: string;
    category: string;
}
