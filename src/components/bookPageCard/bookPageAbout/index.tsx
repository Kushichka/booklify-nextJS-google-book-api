import { Book } from "@/types/bookData";

import styles from "./bookPageAbout.module.scss";

export const BookPageAbout = ({ data }: { data: Book }) => {
    const {
        title,
        authors,
        // categories,
        description,
        imageLinks,
        language,
        // pageCount,
        publishedDate,
        publisher,
    } = data.volumeInfo;

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
            <p
                className={styles.about_info}
                dangerouslySetInnerHTML={{ __html: description || "" }}
            />
        </div>
    );
};
