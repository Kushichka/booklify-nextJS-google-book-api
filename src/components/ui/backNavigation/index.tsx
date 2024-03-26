"use client";
import { useRouter } from "next/navigation";

import styles from "./backNavigation.module.scss";

type Href = "back" | string;

export const BackNavigation = ({ name, href }: { name: string; href: Href }) => {
    const router = useRouter();

    const handleClick = () => {
        if (!href) return;

        if (href === "back") {
            router.back();
        } else {
            router.push(href);
        }
    };

    return (
        <div className={styles.wrapper}>
            <p
                className={styles.title}
                onClick={handleClick}
            >
                {name}
            </p>
        </div>
    );
};
