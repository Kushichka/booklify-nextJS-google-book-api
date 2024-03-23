import { Dispatch, SetStateAction } from "react";

import { fetchBookById } from "@/api/fetchBookById";
import { Book } from "@/types/bookData";

export const getBookById = async (id: string, callback: Dispatch<SetStateAction<Book | null>>) => {
    const data = await fetchBookById(id);

    data ? callback(data) : callback(null);
};
