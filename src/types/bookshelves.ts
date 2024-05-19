export type TBookshelf = {
    id: number;
    title: string;
    access: string;
    volumeCount: number;
};

export type TBookshelves = {
    items: TBookshelf[];
};
