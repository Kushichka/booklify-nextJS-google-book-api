"use client";

import { useShallow } from "zustand/react/shallow";

import { BookActionGroup } from "../bookActionGroup";
import { BookCover } from "../ui/bookCover";
import { useBook } from "@/store/useBook";

import styles from "./bookPageSide.module.scss";

export const BookPageSide = () => {
    const book = useBook(useShallow((state) => state.book));

    return (
        <>
            {book && (
                <div className={styles.bookPageSide}>
                    <div className={styles.bookPageSide_cover}>
                        <BookCover
                            src={book?.volumeInfo?.imageLinks?.thumbnail}
                            height={450}
                            width={300}
                        />
                    </div>
                    <BookActionGroup />
                </div>
            )}
        </>
    );
};
