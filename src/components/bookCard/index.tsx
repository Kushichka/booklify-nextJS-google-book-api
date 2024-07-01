import Link from "next/link";
import { v4 as uuid } from "uuid";

import { BookCover } from "../ui/bookCover";
import { Book } from "@/types/bookData";
import { PopOver } from "../ui/popOver";

import styles from "./bookCard.module.scss";

export const BookCard = ({ book }: { book: Book }) => {
    const { title, authors, imageLinks, language } = book.volumeInfo;

    return (
        <Link
            href={{
                pathname: "/book",
                query: { id: book.id },
            }}
            key={uuid()}
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
                <PopOver title={title}>
                    <h3 className={styles.book_title}>{title}</h3>
                </PopOver>

                <div className={styles.book_info_bottom}>
                    {authors && (
                        <PopOver title={authors.join(", ")}>
                            <p className={styles.book_author}>{authors.join(", ")}</p>
                        </PopOver>
                    )}

                    {language && <p className={styles.book_lang}>{language}</p>}
                </div>
            </div>
        </Link>
    );
};
