"use server";

const baseUrl = process.env.NEXT_PUBLIC_BOOKS_BASE_URL;

export const addBookById = async ({
    token,
    shelfId,
    bookId,
}: {
    token: string;
    shelfId: string;
    bookId: string;
}) => {
    try {
        if (!shelfId || !bookId) return null;

        const url = `${baseUrl}/mylibrary/bookshelves/${shelfId}/addVolume?volumeId=${bookId}&access_token=${token}`;

        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) throw new Error("Failed to add book");

        return response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
};
