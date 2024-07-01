import { create } from "zustand";

import { Book } from "@/types/bookData";

type BookState = {
    book: Book | null;
};

type BookActions = {
    setBook: (book: Book) => void;
    reset: () => void;
};

type BookStore = BookState & BookActions;

const initialState: BookState = {
    book: null,
};

export const useBook = create<BookStore>((set) => ({
    ...initialState,
    setBook: (book: Book) => set({ book }),
    reset: () => set(initialState),
}));
