"use server";

import { BookData } from "@/types/bookData";

const baseUrl = process.env.NEXT_PUBLIC_BOOKS_BASE_URL;
const fields = [
    "id",
    "volumeInfo(",
    "title",
    "authors",
    "publisher",
    "publishedDate",
    "description",
    "pageCount",
    "categories",
    "imageLinks/thumbnail",
    "language)",
].join(",");

export const fetchBookshelf = async (token: string, id: string, page = "1") => {
    try {
        if (!id || !token) return null;

        const startIndex = parseInt(page) === 1 ? 0 : (parseInt(page) - 1) * 9;
        const url = `${baseUrl}/mylibrary/bookshelves/${id}/volumes?startIndex=${startIndex}&maxResults=9&fields=totalItems,items(${fields})&access_token=${token}`;
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
