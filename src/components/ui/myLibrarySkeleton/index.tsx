import { BookshelfContentSkeleton } from "@/components/bookshelfContent/bookshelfContentSkeleton";
import styles from "./myLibrarySkeleton.module.scss";
import { BookshelvesMenuSkeleton } from "@/components/bookshelvesMenu/bookshelvesMenuSkeleton";

export const MyLibrarySkeleton = () => {
    return (
        <div className={styles.wrapper}>
            <BookshelvesMenuSkeleton />
            <BookshelfContentSkeleton />
        </div>
    );
};
