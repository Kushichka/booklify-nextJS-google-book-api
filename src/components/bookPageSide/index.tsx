import { BookActionGroup } from "../bookActionGroup";
import { BookCover } from "../ui/bookCover";
import { Book } from "@/types/bookData";

import styles from "./bookPageSide.module.scss";

export const BookPageSide = ({ data }: { data: Book }) => {
    return (
        <div className={styles.bookPageSide}>
            <div className={styles.bookPageSide_cover}>
                <BookCover
                    src={data?.volumeInfo?.imageLinks?.thumbnail}
                    height={450}
                    width={300}
                />
            </div>
            <BookActionGroup />
        </div>
    );
};
