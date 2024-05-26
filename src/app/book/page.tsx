import { fetchBookById } from "@/api/fetchBookById";
import { BookPageAbout } from "@/components/bookPageAbout";
import { NoResultsFound } from "@/components/noResultsFound";
import { BackNavigation } from "@/components/ui/backNavigation";
import { BookPageSide } from "@/components/bookPageSide";

import styles from "./bookPage.module.scss";

export default async function BookPage({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    const book = await fetchBookById(searchParams.id as string);

    if (!book || (book && Object.entries(book).length === 0)) {
        return <NoResultsFound />;
    }

    return (
        <section className={styles.wrapper}>
            <BackNavigation
                name="< Back"
                href="back"
            />

            {book?.volumeInfo && (
                <div className={styles.card}>
                    <div className={styles.header}>
                        <h2>{book?.volumeInfo?.title}</h2>
                    </div>
                    <div className={styles.body}>
                        <BookPageSide data={book} />
                        <BookPageAbout data={book} />
                    </div>
                </div>
            )}
        </section>
    );
}
