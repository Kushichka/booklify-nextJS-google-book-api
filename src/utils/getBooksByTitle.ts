import { Dispatch, SetStateAction } from "react";

import { fetchBooksByTitle } from "@/api/fetchBooksByTitle";
import { BookData } from "@/types/bookData";

export const getBooksByTitle = async (title: string, callback: Dispatch<SetStateAction<BookData | null>>) => {
    const data = await fetchBooksByTitle(title);

    data ? callback(data) : callback(null);
};
