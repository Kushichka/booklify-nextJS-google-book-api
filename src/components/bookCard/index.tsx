import Link from "next/link";

import { BookCover } from "../ui/bookCover";
import { Book } from "@/types/bookData";

import styles from "./bookCard.module.scss";

export const BookCard = ({ book }: { book: Book }) => {
    const { title, authors, imageLinks, language } = book.volumeInfo;

    return (
        <Link
            href={{
                pathname: "/book",
                query: { id: book.id },
            }}
            // href={`/book?${new URLSearchParams({ id: book.id }).toString()}`}
            key={book.id}
            className={styles.bookCard}
        >
            <div className={styles.image}>
                <BookCover
                    src={imageLinks?.thumbnail}
                    width={200}
                    height={300}
                />
            </div>

            <div className={styles.book_info}>
                <h3 className={styles.book_title}>{title}</h3>
                <div className={styles.book_info_bottom}>
                    {authors && <p className={styles.book_author}>{authors[0]}</p>}
                    {language && <p className={styles.book_lang}>{language}</p>}
                </div>
            </div>
        </Link>
    );
};
