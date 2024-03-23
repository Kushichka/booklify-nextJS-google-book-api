import { BookPageCard } from "@/components/bookPageCard";

import styles from "./bookPage.module.scss";

export default function BookPage() {
    return (
        <div className={styles.wrapper}>
            <BookPageCard />
        </div>
    );
}
