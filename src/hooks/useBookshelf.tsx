import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import { BookData } from "@/types/bookData";
import { fetchBookshelf } from "@/api/fetchBookshelf";

export const useBookshelf = (id: string, page: string) => {
    const [bookshelf, setBookshelf] = useState<BookData | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const session = useSession();

    useEffect(() => {
        if (session?.data?.access_token) {
            setToken(session?.data?.access_token);
        }
    }, [session]);

    useEffect(() => {
        const getBookshelf = async () => {
            if (typeof token === "string") {
                const response = await fetchBookshelf(token, id, page);
                setBookshelf(response);
            }
        };

        getBookshelf();
    }, [token, id, page]);

    return { bookshelf };
};
