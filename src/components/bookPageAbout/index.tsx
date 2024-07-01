"use client";

import DOMPurify from "isomorphic-dompurify";
import clsx from "clsx";
import { useShallow } from "zustand/react/shallow";

import { BookPageCategories } from "../bookPageCategories";
import { Divider } from "../ui/divider";
import { BookPageAuthors } from "../bookPageAuthors";
import { useBook } from "@/store/useBook";

import styles from "./bookPageAbout.module.scss";

export const BookPageAbout = () => {
    const book = useBook(useShallow((state) => state.book));
    const { authors, description, language, pageCount, categories, publishedDate, publisher } =
        book?.volumeInfo || {};
    const clearDescription = DOMPurify.sanitize(description || "");

    return (
        <div className={styles.about}>
            {authors && <BookPageAuthors authors={authors} />}
            <p className={styles.about_info}>
                <span className={styles.about_title}>Publisher:</span>
                {publisher}
            </p>
            <p className={styles.about_info}>
                <span className={styles.about_title}>Publish date:</span>
                {publishedDate}
            </p>
            <p className={styles.about_info}>
                <span className={styles.about_title}>Pages:</span>
                {pageCount}
            </p>
            <p className={styles.about_info}>
                <span className={styles.about_title}>Language:</span>
                {language}
            </p>
            <div
                className={clsx(styles.about_description, styles.about_info)}
                dangerouslySetInnerHTML={{ __html: clearDescription }}
            />

            {categories && (
                <>
                    <Divider />
                    <BookPageCategories categories={categories} />
                </>
            )}
        </div>
    );
};
