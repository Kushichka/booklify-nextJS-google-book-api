"use server";

import { BookData } from "@/types/bookData";

const baseUrl = process.env.NEXT_PUBLIC_BOOKS_BASE_URL;
const fields = [
    "title",
    "authors",
    "publisher",
    "publishedDate",
    "description",
    "pageCount",
    "categories",
    "imageLinks/thumbnail",
    "language",
].join(",");

type FetchBookshelfProps = {
    token: string;
    id: string;
    startIndex?: string;
    maxResults?: string;
};

export const fetchBookshelf = async ({
    token,
    id,
    startIndex = "0",
    maxResults = "9",
}: FetchBookshelfProps) => {
    try {
        if (!id || !token) return null;

        const url = `${baseUrl}/mylibrary/bookshelves/${id}/volumes?startIndex=${startIndex}&maxResults=${maxResults}&fields=totalItems,items(id,volumeInfo(${fields}))&access_token=${token}`;
        const response = await fetch(url);

        if (!response.ok) throw new Error("Failed to fetch bookshelf");

        const data: BookData = await response.json();

        if (data && Object.entries(data).length === 0) throw new Error("No bookshelf data found");

        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
};
