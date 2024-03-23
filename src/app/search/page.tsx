import { SearchList } from "@/components/searchList";

import styles from "./searchPage.module.scss";

export default function SearchPage() {
    return (
        <section className={styles.wrapper}>
            <SearchList />
        </section>
    );
}
