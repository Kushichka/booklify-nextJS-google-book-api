import styles from "./bookshelfContentSkeleton.module.scss";

export const BookshelfContentSkeleton = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                {[...Array(9)].map((_, index) => (
                    <div
                        className={styles.card}
                        key={index}
                    >
                        <div className={styles.image}></div>
                        <div className={styles.book_info}>
                            <div className={styles.book_title}></div>
                            <div className={styles.book_info_bottom}>
                                <div className={styles.book_author}></div>
                                <div className={styles.book_lang}></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
