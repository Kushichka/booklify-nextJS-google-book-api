"use server";

import { Book } from "@/types/bookData";
import { fetchBookshelf } from "./fetchBookshelf";
import { Bookshelf } from "@/types/bookshelves";

export const fetchAllBooksFromShelf = async (token: string, shelf: Bookshelf): Promise<Book[]> => {
    let allBooks: Book[] = [];
    let startIndex = 0;
    const maxResults = 40;

    while (true) {
        const data = await fetchBookshelf({
            token,
            id: shelf.id.toString(),
            startIndex: startIndex.toString(),
            maxResults: maxResults.toString(),
        });

        if (data && data.items) {
            allBooks.push(...data.items);
            startIndex += maxResults;

            if (data.items.length < maxResults) {
                break;
            }
        } else {
            break;
        }
    }

    return allBooks;
};
