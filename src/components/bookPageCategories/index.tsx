import { BookPageCategoriesProps } from "@/types/bookData";
import { separateCategories } from "@/utils/separateCategories";

import styles from "./bookPageCategories.module.scss";

export const BookPageCategories = ({ categories }: { categories: BookPageCategoriesProps[] }) => {
    const newCategories = separateCategories(categories);

    return (
        <div className={styles.categories}>
            {newCategories &&
                newCategories.map((category, index) => (
                    <div
                        className={styles.item}
                        key={index}
                    >
                        {category}
                    </div>
                ))}
        </div>
    );
};
