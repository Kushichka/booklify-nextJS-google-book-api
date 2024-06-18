import { useEffect, useState } from "react";

import { fetchBookshelves } from "@/api/fetchBookshelves";
import { Bookshelf } from "@/types/bookshelves";
import { useSession } from "next-auth/react";

export const useBookshelves = () => {
    const [bookshelves, setBookshelves] = useState<Bookshelf[] | null>(null);
    const { data: session } = useSession();
    const token = session?.access_token;

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
