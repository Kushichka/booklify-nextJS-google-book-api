import { useCallback, useState } from "react";

import { useBookshelves } from "./useBookshelves";
import { useToken } from "./useToken";
import { fetchAllBooksFromShelves } from "@/api/fetchAllBooksFromShelves";

export const useAllBooks = () => {
    const { bookshelves } = useBookshelves();
    const { token } = useToken();
    const [isLoading, setIsLoading] = useState(false);

    const fetchBooks = useCallback(async () => {
        if (bookshelves && token) {
            setIsLoading(true);
            const books = await fetchAllBooksFromShelves(token, bookshelves);
            setIsLoading(false);
            return books;
        }
        return null;
    }, [bookshelves, token]);

    return { fetchBooks, isLoading };
};
