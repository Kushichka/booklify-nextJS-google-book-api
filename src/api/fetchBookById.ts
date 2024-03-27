"use server";

import { Book } from "@/types/bookData";

const baseUrl = process.env.NEXT_PUBLIC_BOOKS_BASE_URL;
const apiKey = process.env.NEXT_PUBLIC_BOOKS_API_KEY;

export const fetchBookById = async (id: string) => {
    try {
        if (!id) return null;

        const url = `${baseUrl}/${id}?key=${apiKey}`;
        const response = await fetch(url);

        if (!response.ok) throw new Error("Failed to fetch book data");

        const data: Book = await response.json();
        if (data && Object.entries(data).length === 0) throw new Error("No book's data found");

        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
};
