"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { BookCover } from "../ui/bookCover";
import { BookPageAbout } from "./bookPageAbout";
import { Book } from "@/types/bookData";
import { getBookById } from "@/utils/getBookById";

import styles from "./bookPageCard.module.scss";

export const BookPageCard = () => {
    const [book, setBook] = useState<Book | null>(null);
    const searchParams = useSearchParams();
    const bookId = searchParams.get("id")?.toString() as string;

    const {
        title,
        authors,
        // categories,
        // description,
        imageLinks,
        language,
        // pageCount,
        // publishedDate,
        // publisher,
    } = book?.volumeInfo || {};

    useEffect(() => {
        if (bookId) {
            getBookById(bookId, setBook);
        }
    }, [bookId]);

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <h2>{title}</h2>
            </div>
            <div className={styles.body}>
                <div className={styles.cover}>
                    <BookCover
                        src={imageLinks?.thumbnail}
                        height={450}
                        width={300}
                    />
                </div>
                {book?.volumeInfo && <BookPageAbout data={book} />}
            </div>
        </div>
    );
};
