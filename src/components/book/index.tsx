"use client";

import { useShallow } from "zustand/react/shallow";

import { useBook } from "@/store/useBook";
import { Book as BookType } from "@/types/bookData";
import { BookPageSide } from "../bookPageSide";
import { BookPageAbout } from "../bookPageAbout";

import styles from "./book.module.scss";

export const Book = ({ book }: { book: BookType }) => {
    const setBook = useBook(useShallow((state) => state.setBook));
    setBook(book);

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <h2>{book?.volumeInfo?.title}</h2>
            </div>
            <div className={styles.body}>
                <BookPageSide />
                <BookPageAbout />
            </div>
        </div>
    );
};
