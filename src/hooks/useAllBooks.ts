import { useEffect, useState } from "react";

import { useBookshelves } from "./useBookshelves";
import { useToken } from "./useToken";
import { fetchAllBooksFromShelves } from "@/api/fetchAllBooksFromShelves";
import { ShelfItem } from "@/types/bookshelves";

export const useAllBooks = () => {
    const { bookshelves } = useBookshelves();
    const { token } = useToken();
    const [data, setData] = useState<ShelfItem[] | null>(null);

    useEffect(() => {
        if (bookshelves && token) {
            const fetchBooks = async () => {
                const books = await fetchAllBooksFromShelves(token, bookshelves);
                setData(books);
            };
            fetchBooks();
        }
    }, [bookshelves, token]);

    return { data };
};
