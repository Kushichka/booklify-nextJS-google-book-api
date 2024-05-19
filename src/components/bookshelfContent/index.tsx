"use client";

import { useBookshelf } from "@/hooks/useBookshelf";
import { BookCard } from "../bookCard";
import { Pagination } from "../pagination";

import styles from "./bookshelfContent.module.scss";

export const BookshelfContent = ({ bookshelfId, page }: { bookshelfId: string; page: string }) => {
    const { bookshelf } = useBookshelf(bookshelfId, page);

    if (bookshelf?.totalItems === 0) {
        return <div className={styles.bookshelfContent_wrapper}>No books found</div>;
    }

    return (
        <div className={styles.bookshelfContent_wrapper}>
            <div className={styles.bookshelfContent}>
                {bookshelf?.items &&
                    bookshelf.items.map((book) => (
                        <BookCard
                            key={book.id}
                            book={book}
                        />
                    ))}
            </div>
            {bookshelf && bookshelf.totalItems > 9 && (
                <Pagination
                    totalItems={bookshelf.totalItems}
                    itemsOnPage={9}
                />
            )}
        </div>
    );
};
