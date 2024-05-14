"use client";

import { useRouter } from "next/navigation";

import { Button } from "../ui/button";

import styles from "./noResultsFound.module.scss";

export const NoResultsFound = () => {
    const router = useRouter();
    const goHome = () => {
        router.replace("/");
    };

    return (
        <section className={styles.wrapper}>
            <h2 className={styles.title}>No results found</h2>
            <Button
                variant="secondary"
                clickHandler={goHome}
            >
                Go Home
            </Button>
        </section>
    );
};
