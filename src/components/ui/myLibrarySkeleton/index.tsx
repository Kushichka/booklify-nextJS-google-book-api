import { BookshelfContentSkeleton } from "@/components/bookshelfContent/bookshelfContentSkeleton";
import { BookshelvesMenuSkeleton } from "@/components/bookshelvesMenu/bookshelvesMenuSkeleton";

import styles from "./myLibrarySkeleton.module.scss";

export const MyLibrarySkeleton = () => {
    return (
        <div className={styles.wrapper}>
            <BookshelvesMenuSkeleton />
            <BookshelfContentSkeleton />
        </div>
    );
};
