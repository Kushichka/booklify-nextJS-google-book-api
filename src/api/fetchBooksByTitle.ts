"use server";

import { BookData } from "@/types/bookData";

const baseUrl = process.env.NEXT_PUBLIC_BOOKS_BASE_URL;
const apiKey = process.env.NEXT_PUBLIC_BOOKS_API_KEY;
const queries = ["printType=books", "maxResults=12"].join("&");
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

export const fetchBooksByTitle = async (title: string, page = "1", searchBy = "intitle", lang = "en") => {
    if (!title) return null;

    const newTitle = title.replace(" ", "+");
    const startIndex = parseInt(page) === 1 ? 0 : (parseInt(page) - 1) * 12;

    try {
        const url = `${baseUrl}/volumes?q=${searchBy}:${newTitle}&${queries}&startIndex=${startIndex}&langRestrict=${lang}&fields=totalItems,items(id,volumeInfo(${fields}))&key=${apiKey}`;
        const response = await fetch(url);

        if (!response.ok) throw new Error("Failed to fetch books");

        const data: BookData = await response.json();
        if (data && Object.entries(data).length === 0) throw new Error("No books found");

        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
};
