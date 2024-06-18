import { useCallback, useState } from "react";

import { useBookshelves } from "./useBookshelves";
import { fetchAllBooksFromShelves } from "@/api/fetchAllBooksFromShelves";
import { useSession } from "next-auth/react";

export const useAllBooks = () => {
    const { bookshelves } = useBookshelves();
    const { data } = useSession();
    const token = data?.access_token;
    const [isLoading, setIsLoading] = useState(false);

    const fetchAllBooks = useCallback(async () => {
        if (bookshelves && token) {
            setIsLoading(true);
            const books = await fetchAllBooksFromShelves(token, bookshelves);
            setIsLoading(false);
            return books;
        }
        return null;
    }, [bookshelves, token]);

    return { fetchAllBooks, isLoading };
};
