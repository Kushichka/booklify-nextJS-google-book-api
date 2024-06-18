import styles from "./bookshelvesMenuSkeleton.module.scss";

export const BookshelvesMenuSkeleton = () => {
    return (
        <div className={styles.menu}>
            <div className={styles.menu_list}>
                {[...Array(5)].map((_, index) => (
                    <div
                        key={index}
                        className={styles.menu_list_item}
                    ></div>
                ))}
            </div>
        </div>
    );
};
