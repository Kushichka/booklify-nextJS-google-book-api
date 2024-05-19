import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import { fetchBookshelves } from "@/api/fetchBookshelves";
import { TBookshelf } from "@/types/bookshelves";

export const useBookshelves = () => {
    const [bookshelves, setBookshelves] = useState<TBookshelf[] | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const session = useSession();

    useEffect(() => {
        if (session?.data?.access_token) {
            setToken(session?.data?.access_token);
        }
    }, [session]);

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
