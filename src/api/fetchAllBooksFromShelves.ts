"use server";

import { fetchAllBooksFromShelf } from "./fetchAllBooksFromShelf";
import { Bookshelf, ShelfItem } from "@/types/bookshelves";

export const fetchAllBooksFromShelves = async (token: string, shelves: Bookshelf[]): Promise<ShelfItem[]> => {
    let allBooks: ShelfItem[] = [];

    for (const shelf of shelves) {
        const booksFromShelf = await fetchAllBooksFromShelf(token, shelf);

        allBooks.push({
            id: shelf.id.toString(),
            title: shelf.title,
            books: booksFromShelf,
        });
    }

    return allBooks;
};
