import { Book } from "./bookData";

export type Bookshelf = {
    id: number;
    title: string;
    access: string;
    volumeCount: number;
};

export type Bookshelves = {
    items: Bookshelf[];
};

export type ShelfItem = {
    id: string;
    title: string;
    books: Book[];
};
