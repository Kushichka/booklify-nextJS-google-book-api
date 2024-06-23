"use client";

import { useRouter, useSearchParams } from "next/navigation";

import styles from "./bookPageAuthors.module.scss";

export const BookPageAuthors = ({ authors }: { authors: string[] }) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleAuthorSearch = (event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
        event.preventDefault();
        const params = new URLSearchParams(searchParams.toString());
        const target = event.target as HTMLParagraphElement;
        params.delete("id");
        params.set("by", "author");
        params.set("q", target.textContent?.replace(",", "").trim() as string);
        router.push(`/search?${params}`);
    };
    return (
        <div className={styles.authors}>
            <p className={styles.authors_title}>Author:</p>
            <div className={styles.authors_wrapper}>
                {authors &&
                    // if there are more than one author, add a comma after each author except the last one
                    authors.map((author) => {
                        if (authors.length > 1) {
                            return authors.indexOf(author) !== authors.length - 1 ? (
                                <p
                                    key={author}
                                    className={styles.authors_item}
                                    onClick={handleAuthorSearch}
                                >
                                    {author},
                                </p>
                            ) : (
                                <p
                                    key={author}
                                    className={styles.authors_item}
                                    onClick={handleAuthorSearch}
                                >
                                    {author}
                                </p>
                            );
                        } else {
                            return (
                                <p
                                    key={author}
                                    className={styles.authors_item}
                                    onClick={handleAuthorSearch}
                                >
                                    {author}
                                </p>
                            );
                        }
                    })}
            </div>
        </div>
    );
};
