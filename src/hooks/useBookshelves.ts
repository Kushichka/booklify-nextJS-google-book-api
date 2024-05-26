import { useEffect, useState } from "react";

import { fetchBookshelves } from "@/api/fetchBookshelves";
import { Bookshelf } from "@/types/bookshelves";
import { useToken } from "./useToken";

export const useBookshelves = () => {
    const [bookshelves, setBookshelves] = useState<Bookshelf[] | null>(null);
    const { token } = useToken();

    useEffect(() => {
        const getBookshelves = async () => {
            if (typeof token === "string") {
                const response = await fetchBookshelves(token);
                setBookshelves(response);
            }
        };

        getBookshelves();
    }, [token]);

    return { bookshelves };
};
