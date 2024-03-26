import { Button } from "../ui/button";

import styles from "./noResultsFound.module.scss";

export const NoResultsFound = () => {
    return (
        <section className={styles.wrapper}>
            <h2 className={styles.title}>No results found</h2>
            <Button
                type="secondary"
                route="home"
                replace={true}
            >
                Go Home
            </Button>
        </section>
    );
};
