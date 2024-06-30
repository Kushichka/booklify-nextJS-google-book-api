import { BookCard } from "../bookCard";
import { Pagination } from "../pagination";
import { BookData } from "@/types/bookData";

import styles from "./bookshelfContent.module.scss";

export const BookshelfContent = ({ books }: { books: BookData | null }) => {
    if (typeof books === null || books?.totalItems === 0) {
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
