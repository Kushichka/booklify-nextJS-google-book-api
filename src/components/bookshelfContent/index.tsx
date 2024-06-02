"use client";

import { useEffect, useState } from "react";

import { useBookshelf } from "@/hooks/useBookshelf";
import { BookCard } from "../bookCard";
import { Pagination } from "../pagination";
import { BookData } from "@/types/bookData";

import styles from "./bookshelfContent.module.scss";

export const BookshelfContent = ({ bookshelfId, page }: { bookshelfId: string; page: string }) => {
    const { getBookshelf, isLoading } = useBookshelf();
    const [books, setBooks] = useState<BookData | null>(null);

    useEffect(() => {
        getBookshelf({ shelfId: bookshelfId, page }).then((response) => {
            if (response) {
                setBooks(response);
            }
        });
    }, [bookshelfId, page, getBookshelf]);

    if (isLoading) {
        return <div className={styles.bookshelfContent_wrapper}>Loading...</div>;
    }

    if (books?.totalItems === 0) {
        return <div className={styles.bookshelfContent_wrapper}>No books found</div>;
    }

    return (
        <div className={styles.bookshelfContent_wrapper}>
            <div className={styles.bookshelfContent}>
                {books?.items &&
                    books.items.map((book) => (
                        <BookCard
                            key={book.id}
                            book={book}
                        />
                    ))}
            </div>
            {books && books.totalItems > 9 && (
                <Pagination
                    totalItems={books.totalItems}
                    itemsOnPage={9}
                />
            )}
        </div>
    );
};
