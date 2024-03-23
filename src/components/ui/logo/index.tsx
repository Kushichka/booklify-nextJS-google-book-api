"use slint";
import Link from "next/link";

import styles from "./logo.module.scss";

export const Logo = () => {
    return (
        <div className={styles.logo}>
            <Link href="/">
                <h3>Booklify</h3>
            </Link>
        </div>
    );
};
