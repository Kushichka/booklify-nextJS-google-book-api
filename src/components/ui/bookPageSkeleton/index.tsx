import styles from "./bookPageSkeleton.module.scss";

export const BookPageSkeleton = () => {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <div className={styles.header_title}></div>
            </div>
            <div className={styles.body}>
                <div className={styles.cover}></div>
                <div className={styles.about}>
                    <div className={styles.info}></div>
                    <div className={styles.info}></div>
                    <div className={styles.info}></div>
                    <div className={styles.info}></div>
                    <div className={styles.description}></div>
                </div>
            </div>
        </div>
    );
};
