"use server";

import { TBookshelves } from "@/types/bookshelves";

const baseUrl = process.env.NEXT_PUBLIC_BOOKS_BASE_URL;
const fields = ["id", "title", "access", "volumeCount"].join(",");

export const fetchBookshelves = async (token: string) => {
    try {
        if (!token) return null;

        const url = `${baseUrl}/mylibrary/bookshelves?fields=items(${fields})&access_token=${token}`;
        const response = await fetch(url);

        if (!response.ok) throw new Error("Failed to fetch bookshelves");

        const data: TBookshelves = await response.json();
        if (data && Object.entries(data).length === 0) throw new Error("No bookshelves data found");

        return data.items
            .filter((item) => item.access === "PUBLIC")
            .sort((a, b) => a.title.localeCompare(b.title));
    } catch (error) {
        console.error(error);
        return null;
    }
};
