import { GoHomeButton } from "../ui/goHomeButton";

import styles from "./noResultsFound.module.scss";

export const NoResultsFound = () => {
    return (
        <section className={styles.wrapper}>
            <h2 className={styles.title}>No results found</h2>
            <GoHomeButton />
        </section>
    );
};
