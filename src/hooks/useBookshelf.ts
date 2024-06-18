import { useCallback, useState } from "react";

import { fetchBookshelf } from "@/api/fetchBookshelf";
import { getStartIndex } from "@/utils/getStartIndex";
import { removeBookById } from "@/api/removeBookById";
import { addBookById } from "@/api/addBookById";
import { useSession } from "next-auth/react";

export const useBookshelf = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { data: session } = useSession();
    const token = session?.access_token;

    const getBookshelf = useCallback(
        async ({ shelfId, page }: { shelfId: string; page?: string }) => {
            if (shelfId && token && page) {
                setIsLoading(true);
                const startIndex = getStartIndex(page);
                const response = await fetchBookshelf({ token, id: shelfId, startIndex });
                if (!response) {
                    setIsLoading(false);
                    console.error("Failed fetching bookshelf");
                }
                setIsLoading(false);
                return response;
            }
            return null;
        },
        [token]
    );

    const removeBook = useCallback(
        async ({ bookId, shelfId }: { bookId: string; shelfId: string }) => {
            if (shelfId && token) {
                setIsLoading(true);
                const response = await removeBookById({ token, shelfId, bookId });
                if (!response) {
                    setIsLoading(false);
                    console.error("Failed removing book");
                }
                setIsLoading(false);
                return response;
            }
            return null;
        },
        [token]
    );

    const addBook = useCallback(
        async ({ bookId, shelfId }: { bookId: string; shelfId: string }) => {
            if (shelfId && token) {
                setIsLoading(true);
                const response = await addBookById({ token, shelfId, bookId });
                if (!response) {
                    setIsLoading(false);
                    console.error("Failed adding book");
                }
                setIsLoading(false);
                return response;
            }
            return null;
        },
        [token]
    );

    return { getBookshelf, isLoading, removeBook, addBook };
};
