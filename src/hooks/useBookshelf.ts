import { useEffect, useState } from "react";

import { BookData } from "@/types/bookData";
import { fetchBookshelf } from "@/api/fetchBookshelf";
import { useToken } from "./useToken";
import { getStartIndex } from "@/utils/getStartIndex";

export const useBookshelf = (id: string, page?: string) => {
    const [books, setBooks] = useState<BookData | null>(null);
    const { token } = useToken();

    useEffect(() => {
        const getBookshelf = async () => {
            if (token && page) {
                const startIndex = getStartIndex(page);
                const response = await fetchBookshelf({ token, id, startIndex });
                setBooks(response);
            }
        };

        getBookshelf();
    }, [token, id, page]);

    return { books };
};
