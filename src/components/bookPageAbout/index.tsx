import DOMPurify from "dompurify";
import { JSDOM } from "jsdom";

import { Book } from "@/types/bookData";

import styles from "./bookPageAbout.module.scss";

export const BookPageAbout = ({ data }: { data: Book }) => {
    const { authors, description, language, publishedDate, publisher } = data.volumeInfo;

    const window = new JSDOM("").window;
    const purify = DOMPurify(window);

    const clearDescription = purify.sanitize(description || "");

    return (
        <div className={styles.about}>
            <p className={styles.about_info}>
                <span className={styles.about_title}>Author:</span>
                {authors && authors[0]}
            </p>
            <p className={styles.about_info}>
                <span className={styles.about_title}>Publisher:</span>
                {publisher}
            </p>
            <p className={styles.about_info}>
                <span className={styles.about_title}>Publish date:</span>
                {publishedDate}
            </p>
            <p className={styles.about_info}>
                <span className={styles.about_title}>Language:</span>
                {language}
            </p>
            <p
                className={styles.about_info}
                dangerouslySetInnerHTML={{ __html: clearDescription || "" }}
            />
        </div>
    );
};
