"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { BookCard } from "./bookCard";
import { getBooksByTitle } from "@/utils/getBooksByTitle";
import { Book, BookData } from "@/types/bookData";

import styles from "./searchList.module.scss";

export const SearchList = () => {
    const [books, setBooks] = useState<BookData | null>(null);
    const router = useRouter();
    const searchParams = useSearchParams();
    const bookTitle = searchParams.get("q")?.toString() as string;

    useEffect(() => {
        if (bookTitle) {
            getBooksByTitle(bookTitle, setBooks);
        } else {
            router.replace("/");
        }
    }, [bookTitle, router]);

    return (
        <div className={styles.wrapper}>
            {!books ? (
                <h1>Books not found</h1>
            ) : (
                books.items.map((book: Book) => (
                    <BookCard
                        book={book}
                        key={book.id}
                    />
                ))
            )}
        </div>
    );
};
