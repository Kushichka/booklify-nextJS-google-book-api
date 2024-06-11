import { BookshelfContentSkeleton } from "@/components/bookshelfContent/bookshelfContentSkeleton";
import styles from "./myLibrarySkeleton.module.scss";

export const MyLibrarySkeleton = () => {
    return (
        <div className={styles.wrapper}>
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

            <BookshelfContentSkeleton />
        </div>
    );
};
