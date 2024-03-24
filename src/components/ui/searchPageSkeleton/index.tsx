import styles from "./searchPageSkeleton.module.scss";

export default function SearchPageSkeleton() {
    return (
        <div className={styles.wrapper}>
            {Array(12)
                .fill(0)
                .map((_, index) => (
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
    );
}
